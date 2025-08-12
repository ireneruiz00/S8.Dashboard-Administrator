
export interface Roadmap {
  _id: string
  title: string
  description: string
  tags: string[]
  category: string
  durationWeeks: number
  owner: string
  status: string
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
  color?: string
}

export interface Location {
  _id?: string
  name: string
  latitude: number
  longitude: number
  type?: string // empresa, curso, evento...
  roadmapId?: string
}

export interface StatItem {
  label: string;
  value: number;
}

export interface RealStatsResponse {
  status: StatItem[];
  categories: StatItem[];
}