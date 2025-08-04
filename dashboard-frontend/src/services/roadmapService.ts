import { Roadmap } from "../types/types"

const API = "http://localhost:5000/api/roadmaps"

export const fetchRoadmaps = async (): Promise<Roadmap[]> => {
  const res = await fetch(API)
  if (!res.ok) throw new Error("Error loading roadmaps")
  return res.json()
}

export const createRoadmap = async (newRoadmap: Partial<Roadmap>) => {
  const res = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newRoadmap),
  })
  if (!res.ok) throw new Error("Error creating roadmap")
  return res.json()
}

export const updateRoadmap = async (id: string, updates: Partial<Roadmap>) => {
  const res = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
  })
  if (!res.ok) throw new Error("Error updating roadmap")
  return res.json()
}

export const deleteRoadmap = async (id: string) => {
  const res = await fetch(`${API}/${id}`, { method: "DELETE" })
  if (!res.ok) throw new Error("Error deleting roadmap")
}