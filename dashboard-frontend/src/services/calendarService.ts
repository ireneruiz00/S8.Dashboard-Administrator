import { CalendarEvent } from "../types/types"

const API = "http://localhost:5000/api/events"

export const fetchEvents = async (): Promise<CalendarEvent[]> => {
  const res = await fetch(API)
  if (!res.ok) throw new Error("Error loading events")
  return res.json()
}

export const createEvent = async (event: CalendarEvent): Promise<CalendarEvent> => {
  const res = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(event),
  })
  if (!res.ok) throw new Error("Error creating event")
  return res.json()
}

export const updateEvent = async (id: string, event: Partial<CalendarEvent>): Promise<CalendarEvent> => {
  const res = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(event),
  })
  if (!res.ok) throw new Error("Error updating event")
  return res.json()
}

export const deleteEvent = async (id: string): Promise<void> => {
  const res = await fetch(`${API}/${id}`, {
    method: "DELETE",
  })
  if (!res.ok) throw new Error("Error deleting event")
}