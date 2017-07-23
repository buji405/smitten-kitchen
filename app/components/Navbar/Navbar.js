import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <section className="top-container">
      <div className="welcome-container">
        <p className="logo">Smitten Kitchen</p>
        <p className="welcome">Welcome, Ciara</p>
      </div>
      <div className="line-break"></div>
      <div className="nav-container">
        <NavLink to='/'
                  activeClassName='selected'
                  className='nav-links'>Search</NavLink>
        <button>Whats in my fridge?</button>
        <button>Saved Recipes</button>
        <NavLink to='/about'
                 activeClassName='selected'
                 className='nav-links'>About</NavLink>

      </div>
    </section>
  )
}

export default Navbar
