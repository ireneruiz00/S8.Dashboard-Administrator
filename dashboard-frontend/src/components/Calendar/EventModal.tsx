import type { EventModalProps } from "../../types/props"
import { useState, useEffect } from "react";

function EventModal({ isOpen, onClose, onSave, onDelete, initialData }: EventModalProps) {
const [title, setTitle] = useState("")
  const [color, setColor] = useState("#3788d8")
  const [start, setStart] = useState("")
  const [end, setEnd] = useState("")

  useEffect(() => {
    if (!isOpen) return
    if (initialData) {
      setTitle(initialData.title || "")
      setColor(initialData.color || "#3788d8")
      setStart(initialData.start ? new Date(initialData.start).toISOString().slice(0, 16) : "")
      setEnd(initialData.end ? new Date(initialData.end).toISOString().slice(0, 16) : "")
    } else {
      setTitle("")
      setColor("#3788d8")
      setStart("")
      setEnd("")
    }
  }, [initialData])

  if (!isOpen) return null

  const handleSubmit = () => {
    onSave({
      title,
      color,
      start: start ? new Date(start) : undefined,
      end: end ? new Date(end) : undefined,
    })
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-lg font-bold mb-4">
          {initialData ? "Edit Event" : "New Event"}
        </h2>
        <div className="mb-3">
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            className="border rounded w-full p-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="block text-sm font-medium">Color</label>
          <input
            type="color"
            className="border rounded w-full h-10"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="block text-sm font-medium">Start</label>
          <input
            type="datetime-local"
            className="border rounded w-full p-2"
            value={start}
            onChange={(e) => setStart(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="block text-sm font-medium">End</label>
          <input
            type="datetime-local"
            className="border rounded w-full p-2"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
          />
        </div>
        <div className="flex justify-between">
          {onDelete && (
            <button
              onClick={onDelete}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          )}
          <div className="ml-auto space-x-2">
            <button
              onClick={onClose}
              className="bg-gray-300 px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventModal