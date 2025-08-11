import type { Stat } from "../types/types";

export async function fetchStats(): Promise<Stat[]> {
  const res = await fetch("http://localhost:5000/api/stats");
  if (!res.ok) throw new Error("Error fetching stats");
  return res.json();
}