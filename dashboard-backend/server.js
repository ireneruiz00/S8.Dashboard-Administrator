const express = require("express")
const cors = require("cors")
require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 5000

// Middlewares
app.use(cors())
app.use(express.json()) // para poder leer JSON en las peticiones

// Conectar a la BBDD
const connectDB = require("./config/db")
connectDB()

// Rutas
app.use("/api/roadmaps", require("./routes/roadmap.routes"))
app.use("/api/locations", require("./routes/location.routes")) 
app.use("/api/events", require("./routes/event.routes"))
app.use("/api/stats", require("./routes/stats.routes"))
app.use("/api/users", require("./routes/user.routes"))

// Servidor escuchando
app.listen(PORT, () => {
  console.log(`Server listening in http://localhost:${PORT}`)
})


