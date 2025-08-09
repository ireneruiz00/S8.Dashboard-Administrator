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