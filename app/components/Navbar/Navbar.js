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
        <NavLink to='/fridge'
                 activeClassName='selected'
                 className="nav-links"
                 >Whats in my fridge?</NavLink>
        <NavLink to="/saved"
                 activeClassName="selected"
                 className="nav-links">Saved Recipes</NavLink>
        <NavLink to='/about'
                 activeClassName='selected'
                 className='nav-links'>About</NavLink>

      </div>
    </section>
  )
}

export default Navbar
