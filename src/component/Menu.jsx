import React from 'react'

function Menu({ isOpen }) {
  return (
    <div className={ isOpen ? "menu-open" : "menu-close"}>Menu</div>
  )
}

export default Menu