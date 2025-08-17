import type { RealStatsResponse } from "../types/types"

export async function fetchStats(): Promise<RealStatsResponse> {
  const res = await fetch("http://localhost:5000/api/stats")
  if (!res.ok) throw new Error("Error fetching stats")
  return res.json()
}