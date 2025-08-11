import type { Roadmap, CalendarEvent, Location } from "./types"

export type RoadmapFormProps = {
  onSubmit: (form: Partial<Roadmap>) => void
}

export interface RowEditProps {
  roadmap: Roadmap
  onSave: (form: Partial<Roadmap>) => void
  onCancel: () => void
}

export interface EventModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (event: Partial<CalendarEvent>) => void
  onDelete?: () => void
  initialData?: CalendarEvent
}

export interface LocationModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (location: Omit<Location, "_id">) => void | Promise<void>
  initialLatLng: [number, number] | null
}