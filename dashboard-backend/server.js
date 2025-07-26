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


// Servidor escuchando
app.listen(PORT, () => {
  console.log(`Server listening in http://localhost:${PORT}`)
})


