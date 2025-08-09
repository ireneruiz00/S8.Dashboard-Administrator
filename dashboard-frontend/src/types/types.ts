export interface Roadmap {
  _id: string
  title: string
  description: string
  tags: string[]
  category: string
  durationWeeks: number
  owner: string
  createdAt?: string
}

export interface CalendarEvent {
  _id?: string
  title: string
  start: string | Date
  end?: string | Date
  allDay?: boolean
  roadmapId?: string
  type?: string // tarea, deadline, etc.
}
