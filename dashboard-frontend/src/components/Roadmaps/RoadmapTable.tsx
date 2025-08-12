import { useEffect, useState } from "react"
import type { Roadmap } from "../../types/types"
import { fetchRoadmaps, createRoadmap, updateRoadmap, deleteRoadmap, } from "../../services/roadmapService"
import RoadmapForm from "./RoadmapForm"
import InlineEditRow from "./InlineRowEdit"

function RoadmapTable () {
  const [roadmaps, setRoadmaps] = useState<Roadmap[]>([])
  const [loading, setLoading] = useState(true)
  const [editingId, setEditingId] = useState<string | null>(null)

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
      if (editingId) {
        await updateRoadmap(editingId, form)
        setEditingId(null)
      } else {
        await createRoadmap(form)
      }
      loadData()
    } catch (err) {
      console.error("Error saving roadmap:", err)
    }
  }

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this roadmap?")) {
      await deleteRoadmap(id)
      loadData()
    }
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Roadmaps</h2>

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
              <th className="border p-2">Owner</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {roadmaps.map((r) => (
              <tr key={r._id}>
                {editingId === r._id ? (
                  <InlineEditRow
                    roadmap={r}
                    onCancel={() => setEditingId(null)}
                    onSave={handleSave}
                  />
                ) : (
                  <>
                    <td className="border p-2">{r.title}</td>
                    <td className="border p-2">{Array.isArray(r.tags) ? r.tags.join(", ") : r.tags}</td>
                    <td className="border p-2">{r.durationWeeks}</td>
                    <td className="border p-2">{r.description}</td>
                    <td className="border p-2">{r.owner}</td>
                    <td className="border p-2">{r.status}</td>
                    <td className="border p-2 space-x-2 flex justify-center">
                      <button
                        onClick={() => setEditingId(r._id)}
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
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <RoadmapForm onSubmit={handleSave} />
    </div>
  )
}

export default RoadmapTable