import { useEffect, useState } from "react"
import type { Roadmap } from "../../types/types"
import { fetchRoadmaps, createRoadmap, updateRoadmap, deleteRoadmap, } from "../../services/roadmapService"
import RoadmapForm from "./RoadmapForm"

const RoadmapTable = () => {
  const [roadmaps, setRoadmaps] = useState<Roadmap[]>([])
  const [editing, setEditing] = useState<Partial<Roadmap> | null>(null)
  const [loading, setLoading] = useState(true)

  const loadData = async () => {
    try {
      setLoading(true)
      const data = await fetchRoadmaps()
      setRoadmaps(data)
    } catch (err) {
      console.error("Error loading data:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  const handleSave = async (form: Partial<Roadmap>) => {
    try {
      if (editing?._id) {
        await updateRoadmap(editing._id, form)
      } else {
        await createRoadmap(form)
      }
      setEditing(null)
      loadData()
    } catch (err) {
      console.error("Error saving roadmap:", err)
    }
  }

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure the you wnat to delete this roadmap?")) {
      await deleteRoadmap(id)
      loadData()
    }
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Roadmaps</h2>

      {/* Taula */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="w-full border border-gray-300 mb-6">
          <thead>
            <tr className="bg-gray-200 w-full">
              <th className="border p-2">Title</th>
              <th className="border p-2">Tags</th>
              <th className="border p-2">Duration</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {roadmaps.map((r) => (
              <tr key={r._id}>
                <td className="border p-2">{r.title}</td>
                <td className="border p-2">{r.tags}</td>
                <td className="border p-2">{r.durationWeeks}</td>
                <td className="border p-2">{r.description}</td>
                <td className="border p-2 space-x-2">
                  <button
                    onClick={() => setEditing(r)}
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(r._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Formulari */}
      <RoadmapForm
        editing={!!editing}
        initialData={editing || undefined}
        onSubmit={handleSave}
      />
    </div>
  )
}

export default RoadmapTable