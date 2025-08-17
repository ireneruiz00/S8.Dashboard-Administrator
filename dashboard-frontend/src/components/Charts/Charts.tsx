import { useEffect, useState } from "react"
import { fetchStats } from "../../services/statsService"
import { RealStatsResponse } from "../../types/types"
import { Bar, Doughnut } from "react-chartjs-2"
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale
} from "chart.js"

ChartJS.register(Title, Tooltip, Legend, BarElement, ArcElement, CategoryScale, LinearScale)

function Charts() {
  const [data, setData] = useState<RealStatsResponse | null>(null)

  useEffect(() => {
    fetchStats().then(setData).catch(console.error)
  }, [])

  if (!data) return <p>Loading...</p>

  const barData = {
    labels: data.status.map((s) => s.label),
    datasets: [
      {
        label: "Roadmaps",
        data: data.status.map((s) => s.value),
        backgroundColor: ["#36A2EB", "#FF6384"]
      }
    ]
  }

  const donutData = {
    labels: data.categories.map((c) => c.label),
    datasets: [
      {
        data: data.categories.map((c) => c.value),
        backgroundColor: ["#FFCE56", "#36A2EB", "#FF6384", "#4BC0C0"]
      }
    ]
  }

  return (
    <>
      <h1 className="flex justify-center text-3xl py-5">Roadmaps</h1>
      <div className="flex gap-10">
        <div className="w-1/2">
          <h3 className="text-lg font-bold mb-4">Active vs Completed</h3>
          <Bar data={barData} />
        </div>
        <div className="w-1/2">
          <h3 className="text-lg font-bold mb-4">Categories</h3>
          <Doughnut data={donutData} />
        </div>
      </div>
    </>
    
  )
}

export default Charts