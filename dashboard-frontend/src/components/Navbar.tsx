import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/Map'}>Map</NavLink>
        <NavLink to={'/Calendar'}>Calendar</NavLink>
        <NavLink to={'/Charts'}>Charts</NavLink>
    </>
  )
}

export default Navbar