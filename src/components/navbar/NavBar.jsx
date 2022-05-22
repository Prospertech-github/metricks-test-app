import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Buttons from '../buttons/Buttons'
import styles from './NavBar.module.css'

const NavBar = () => {
  const { pathname } = useLocation();
  const activePath = pathname.split('/')[1];

  return (
    <nav>
      <h1 className={styles.logo}> Metricks </h1>

      <div className={styles.navigationContainer}>
        <ul className={styles.navigations}>
          <li>
            <Link to='/about' className={`${styles.navLinks} ${ activePath === 'about' ? styles.active : ''}`}>
              About Us
            </Link>
          </li>
          <li>
            <Link to='/blog' className={`${styles.navLinks} ${ activePath === 'blog' ? styles.active : ''}`}>
              Blog
            </Link>
          </li>
          <Buttons label='Contact Us' />
        </ul>
      </div>
    </nav>
  )
}

export default NavBar