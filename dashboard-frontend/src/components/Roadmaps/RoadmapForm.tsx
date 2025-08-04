import { useState, useEffect } from "react"
import type { Roadmap } from "../../types/types"
import { RoadmapFormProps } from "../../types/props"


const emptyForm: Partial<Roadmap> = {
  title: "",
  description: "",
  tags: [],
  category: "",
  durationWeeks: 0,
  owner: "",
}

const RoadmapForm = ({ initialData, onSubmit, editing }: RoadmapFormProps) => {
  const [form, setForm] = useState<Partial<Roadmap>>(emptyForm)

  useEffect(() => {
    if (initialData) setForm(initialData)
  }, [initialData])

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
        value={form.title}
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
        value={form.durationWeeks}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        {editing ? "Update" : "Add"} Roadmap
      </button>
    </form>
  )
}

export default RoadmapForm