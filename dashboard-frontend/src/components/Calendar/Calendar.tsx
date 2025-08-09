import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"
import timeGridPlugin from "@fullcalendar/timegrid"
import { useEffect, useState } from "react"
import { CalendarEvent } from "../../types/types"
import { fetchEvents, createEvent, updateEvent, deleteEvent } from "../../services/calendarService"
import EventModal from "./EventModal"


function Calendar() {
  const [events, setEvents] = useState<CalendarEvent[]>([])
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<{ start: Date; end?: Date } | null>(null)

  const loadEvents = async () => {
    try {
      const data = await fetchEvents()
      setEvents(data)
    } catch (err) {
      console.error("Error loading events", err)
    }
  }

  useEffect(() => {
    loadEvents()
  }, [])

  const handleDateSelect = (info: any) => {
    setSelectedEvent(null);
    setSelectedDate({ start: info.start, end: info.end });
    setModalOpen(true);
  }

  const handleEventClick = (info: any) => {
    const event = events.find((e) => e._id === info.event.id);
    if (event) {
      setSelectedEvent(event);
      setModalOpen(true);
    }
  }

  const handleSave = async (data: Partial<CalendarEvent>) => {
    if (selectedEvent) {
      await updateEvent(selectedEvent._id!, data);
    } else {
      await createEvent({
        ...data,
        start: data.start || selectedDate?.start!,
        end: data.end || selectedDate?.end,
      } as CalendarEvent);
    }
    setModalOpen(false);
    loadEvents();
  };

  const handleDelete = async () => {
    if (selectedEvent?._id) {
      await deleteEvent(selectedEvent._id);
      setModalOpen(false);
      loadEvents();
    }
  }

  return (
    <div className="p-4">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        selectable={true}
        editable={false}
        events={events.map((e) => ({
          id: e._id,
          title: e.title,
          start: e.start,
          end: e.end,
          color: e.color,
        }))}
        select={handleDateSelect}
        eventClick={handleEventClick}
      />

      <EventModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        onDelete={selectedEvent ? handleDelete : undefined}
        initialData={selectedEvent || undefined}
      />
    </div>
  )
}

export default Calendar