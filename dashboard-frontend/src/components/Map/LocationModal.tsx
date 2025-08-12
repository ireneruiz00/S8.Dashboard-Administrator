import { useState } from "react"
import type { LocationModalProps } from "../../types/props"

function LocationModal({isOpen, onClose, onSave, initialLatLng }: LocationModalProps) {
  const [type, setType] = useState("")
  const [name, setName] = useState("")
  const [error, setError] = useState(false)

  if (!isOpen || !initialLatLng) return null

  const handleSave = () => {
    if (!name.trim()) {
      setError(true)
      return
    }
    setError(false)
    onSave({
      name,
      type,
      latitude: initialLatLng[0],
      longitude: initialLatLng[1],
    })
    onClose()
    setName("")
    setType("")
  }
  return (
     <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[1000]">
      <div className="bg-white p-5 rounded-lg w-72">
        <h3 className="mb-4">New location</h3>

        <label className="block mb-2">
          Name <span className="text-red-500">*</span>
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`w-full border p-2 rounded ${
              error ? "border-red-500" : "border-gray-300"
            }`}
          />
          {error && (
            <p className="text-red-500 text-sm mt-1">This field is required</p>
          )}
        </label>

        <label className="block mb-4">
          Type (optional)
          <input
            type="text"
            placeholder="Tipo"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          />
        </label>

        <div className="flex justify-end gap-2">
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default LocationModal