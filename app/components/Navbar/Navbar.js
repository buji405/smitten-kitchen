import React from 'react'


const Navbar = () => {
  return (
    <section className="top-container">
      <div className="welcome-container">
        <p className="logo">Smitten Kitchen</p>
        <p className="welcome">Welcome, Ciara</p>
      </div>
      <div className="line-break"></div>
      <div className="nav-container">
        <button>Search</button>
        <button>Whats in my fridge?</button>
        <button>Saved Recipes</button>
        <button>About</button>
      </div>
    </section>
  )
}

export default Navbar
