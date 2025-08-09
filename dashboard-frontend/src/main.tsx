import ReactDOM from "react-dom/client"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import '@fullcalendar/common/main.css'
import '@fullcalendar/daygrid/main.css'


ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
        <App />
  </BrowserRouter>
)