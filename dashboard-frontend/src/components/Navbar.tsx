import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/roadmap-table'}>Roadmaps</NavLink>
        <NavLink to={'/map'}>Map</NavLink>
        <NavLink to={'/calendar'}>Calendar</NavLink>
        <NavLink to={'/charts'}>Charts</NavLink>
    </>
  )
}

export default Navbar