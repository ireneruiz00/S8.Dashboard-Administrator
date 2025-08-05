import { useState, useEffect } from "react"
import type { Roadmap } from "../../types/types"
import { RoadmapFormProps } from "../../types/props"
import { DEFAULT_OWNER } from "../../config"


const emptyForm: Partial<Roadmap> = {
  title: "",
  description: "",
  tags: [],
  category: "",
  durationWeeks: 0,
  owner: DEFAULT_OWNER,
}

const RoadmapForm = ({ onSubmit }: RoadmapFormProps) => {
  const [form, setForm] = useState<Partial<Roadmap>>(emptyForm)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({
    ...prev,
    [name]: name === "durationWeeks"
        ? Number(value)
        : name === "tags"
        ? value.split(",").map((tag) => tag.trim())
        : value,
  }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(form)
    setForm(emptyForm)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={form.title || ''}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />
      <input
        type="text"
        name="tags"
        placeholder="Tags (ej: react, javascript)"
        value={Array.isArray(form.tags) ? form.tags.join(", ") : ""}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />
      <input
        type="number"
        name="durationWeeks"
        placeholder="Estimated duration in weeks"
        value={form.durationWeeks || 0}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={form.description || ''}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />
      <p className="text-sm text-gray-500">
        Owner: <strong>{DEFAULT_OWNER}</strong>
      </p>

      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Add Roadmap
      </button>
    </form>
  )
}

export default RoadmapForm