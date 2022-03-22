import React from 'react'
import Navigation from '../Navigation/Navigation'
import classes from "./Header.module.css"

function Header() {
  return (
    <header >
      <div className={classes.header}></div>
      <Navigation />
    </header>
  )
}

export default Header