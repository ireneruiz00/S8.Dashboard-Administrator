import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
     <div className="flex justify-center space-x-2 bg-gray-100">
      <NavLink
        to="/roadmap-table"
        className={({ isActive }) =>
          `px-4 py-2 border border-b-0 rounded-t-lg transition-colors ${
            isActive
              ? 'bg-blue-500 text-white border-blue-500'
              : 'bg-white text-gray-700 hover:bg-gray-200'
          }`
        }
      >
        Roadmaps
      </NavLink>

      <NavLink
        to="/map"
        className={({ isActive }) =>
          `px-4 py-2 border border-b-0 rounded-t-lg transition-colors ${
            isActive
              ? 'bg-blue-500 text-white border-blue-500'
              : 'bg-white text-gray-700 hover:bg-gray-200'
          }`
        }
      >
        Map
      </NavLink>

      <NavLink
        to="/calendar"
        className={({ isActive }) =>
          `px-4 py-2 border border-b-0 rounded-t-lg transition-colors ${
            isActive
              ? 'bg-blue-500 text-white border-blue-500'
              : 'bg-white text-gray-700 hover:bg-gray-200'
          }`
        }
      >
        Calendar
      </NavLink>

      <NavLink
        to="/charts"
        className={({ isActive }) =>
          `px-4 py-2 border border-b-0 rounded-t-lg transition-colors ${
            isActive
              ? 'bg-blue-500 text-white border-blue-500'
              : 'bg-white text-gray-700 hover:bg-gray-200'
          }`
        }
      >
        Charts
      </NavLink>
    </div>
  )
}

export default Navbar