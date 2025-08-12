import { Location } from "../types/types";

const API = "http://localhost:5000/api/locations";

export const fetchLocations = async (): Promise<Location[]> => {
  const res = await fetch(API);
  if (!res.ok) throw new Error("Error loading locations");
  return res.json();
};

export const createLocation = async (location: Location): Promise<Location> => {
  const res = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(location),
  })
  if (!res.ok) throw new Error("Error creating location")
  return res.json()
};