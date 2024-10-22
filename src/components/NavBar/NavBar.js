import React from 'react'
import styles from "./Nav.module.css";

const NarBar = () => {
  return (
   <nav className={`${styles.nav} container`}>
    <div className='logo'>
        <img src='/images/Frame 2 1.png' alt='logo'></img>
    </div>
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
   </nav>
  )
}

export default NarBar
