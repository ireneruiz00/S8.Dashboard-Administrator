import { useEffect, useState } from "react"
import { fetchStats } from "../../services/statsService"
import { Stat } from "../../types/types"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
} from "chart.js"
import { Bar, Doughnut, Line } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
)

function Charts() {
  const [stats, setStats] = useState<Stat[]>([]);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const data = await fetchStats();
      setStats(data);
    } catch (err) {
      console.error(err);
      alert("Error cargando estadísticas");
    }
  };

  // Datos para gráfico de barras (activos vs completados)
  const barData = {
    labels: ["Activos", "Completados"],
    datasets: [
      {
        label: "Roadmaps",
        data: [
          stats.find((s) => s.type === "roadmaps" && s.label === "activos")?.value || 0,
          stats.find((s) => s.type === "roadmaps" && s.label === "completados")?.value || 0
        ],
        backgroundColor: ["#3b82f6", "#10b981"],
      },
    ],
  };

  // Datos para gráfico circular (categorías)
  const categoryStats = stats.filter((s) => s.type === "category");
  const doughnutData = {
    labels: categoryStats.map((c) => c.label),
    datasets: [
      {
        label: "Categorías",
        data: categoryStats.map((c) => c.value),
        backgroundColor: ["#f87171", "#fbbf24", "#34d399", "#60a5fa", "#a78bfa"],
      },
    ],
  };

  // Datos para gráfico de línea (ejemplo: roadmaps por fecha)
  const roadmapHistory = stats.filter((s) => s.type === "roadmapHistory");
  const lineData = {
    labels: roadmapHistory.map((s) =>
      new Date(s.date).toLocaleDateString()
    ),
    datasets: [
      {
        label: "Roadmaps creados",
        data: roadmapHistory.map((s) => s.value),
        borderColor: "#6366f1",
        backgroundColor: "rgba(99, 102, 241, 0.3)",
      },
    ],
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-bold mb-4">Roadmaps Activos vs Completados</h2>
        <Bar data={barData} />
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-bold mb-4">Categorías</h2>
        <Doughnut data={doughnutData} />
      </div>

      <div className="bg-white p-4 rounded-lg shadow md:col-span-2">
        <h2 className="text-lg font-bold mb-4">Evolución de Roadmaps</h2>
        <Line data={lineData} />
      </div>
    </div>
  )
}

export default Charts