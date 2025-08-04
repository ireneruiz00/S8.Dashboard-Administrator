import type { Roadmap } from "./types"

export type RoadmapFormProps = {
  initialData?: Partial<Roadmap>
  onSubmit: (form: Partial<Roadmap>) => void
  editing: boolean
}