import "leaflet/dist/leaflet.css"
import { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet"
import { Location } from "../../types/types"
import { fetchLocations, createLocation } from "../../services/locationService"
import LocationModal from "./LocationModal"
import L from "leaflet"

const defaultIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})
L.Marker.prototype.options.icon = defaultIcon

function ClickHandler({ onClick }: { onClick: (latlng: [number, number]) => void }) {
  useMapEvents({
    click(e) {
      onClick([e.latlng.lat, e.latlng.lng]);
    },
  })
  return null
}

function Map() {
  const [locations, setLocations] = useState<Location[]>([])
  const [modalOpen, setModalOpen] = useState(false)
  const [clickedLatLng, setClickedLatLng] = useState<[number, number] | null>(null)

  useEffect(() => {
    loadLocations()
  }, [])

  const loadLocations = async () => {
    try {
      const data = await fetchLocations()
      setLocations(data)
    } catch (err) {
      console.error(err)
      alert("Error loading locations")
    }
  }

  const handleMapClick = (latlng: [number, number]) => {
    setClickedLatLng(latlng)
    setModalOpen(true)
  }

  const handleSaveLocation = async (location: Omit<Location, "_id">) => {
    try {
      await createLocation(location)
      loadLocations()
    } catch (err) {
      console.error(err)
      alert("Error guardando ubicación")
    }
  }

  return (
    <div style={{ height: "700px" }}>
      <MapContainer center={[41.3874, 2.1686]} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ClickHandler onClick={handleMapClick} />
        {locations.map((loc) => (
          <Marker key={loc._id} position={[loc.latitude, loc.longitude]}>
            <Popup>
              <b>{loc.name}</b><br />
              {loc.type && <span>{loc.type}</span>}
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <LocationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSaveLocation}
        initialLatLng={clickedLatLng}
      />
    </div>
  )
}

export default Map