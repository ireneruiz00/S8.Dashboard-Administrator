import React from "react"
import { useState } from "react"
import { Roadmap } from "../../types/types"
import type { RowEditProps } from "../../types/props"



const InlineEditRow = ({ roadmap, onSave, onCancel }: RowEditProps) => {
    const [form, setForm] = useState<Partial<Roadmap>>(roadmap)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]:
        name === "durationWeeks"
          ? Number(value)
          : name === "tags"
          ? value.split(",").map((tag) => tag.trim())
          : value,
    }))
  }

  const handleSubmit = () => {
    onSave(form)
  }

  return (
    <>
      <td className="border p-2">
        <input
          name="title"
          value={form.title || ""}
          onChange={handleChange}
          className="w-full border px-1 py-0.5"
        />
      </td>
      <td className="border p-2">
        <input
          name="tags"
          value={Array.isArray(form.tags) ? form.tags.join(", ") : ""}
          onChange={handleChange}
          className="w-full border px-1 py-0.5"
        />
      </td>
      <td className="border p-2">
        <input
          type="number"
          name="durationWeeks"
          value={form.durationWeeks || 0}
          onChange={handleChange}
          className="w-full border px-1 py-0.5"
        />
      </td>
      <td className="border p-2">
        <textarea
          name="description"
          value={form.description || ""}
          onChange={handleChange}
          className="w-full border px-1 py-0.5"
        />
      </td>
      <td className="border p-2 space-x-1">
        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white px-2 py-1 rounded"
        >
          Save
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-400 text-white px-2 py-1 rounded"
        >
          Cancel
        </button>
      </td>
    </>
  )
}

export default InlineEditRow