import type { Roadmap, CalendarEvent } from "./types"

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
  onSave: (event: Partial<CalendarEvent>) => void;
  onDelete?: () => void
  initialData?: CalendarEvent
}