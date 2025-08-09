import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"
import { useEffect, useState } from "react"
import { CalendarEvent } from "../../types/types"
import { fetchEvents, createEvent } from "../../services/calendarService"


function Calendar() {
  const [events, setEvents] = useState<CalendarEvent[]>([])

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

  const handleDateSelect = async (selectInfo: any) => {
    const title = prompt("Título del evento:")
    if (title) {
      const newEvent = {
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      }
      await createEvent(newEvent)
      loadEvents()
    }
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Calendario</h2>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        selectable={true}
        select={handleDateSelect}
        events={events}
        height="auto"
      />
    </div>
  )
}

export default Calendar