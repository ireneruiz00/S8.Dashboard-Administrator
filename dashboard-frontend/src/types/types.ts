export interface Roadmap {
  _id: string
  title: string
  description: string
  tags: string[]
  category: string
  durationWeeks: number
  owner: String
  createdAt?: string
}
