import { NavLink } from 'react-router-dom'
import './navbar.css'

const Nav= () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
            <h4>Baap Ki Dukaan</h4>
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/jwel">jewelery</NavLink>
            </li>
            <li>
              <NavLink to="/electronic">Electronics</NavLink>
            </li>
            <li>
              <NavLink to="/men">Mens Cloth</NavLink>
            </li>
            <li>
              <NavLink to="/women">Woemens Cloth</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav