import React from 'react'
import Buttons from '../../components/buttons/Buttons'
import Card from '../../components/cards/Card'
import NavBar from '../../components/navbar/NavBar'
import Search from '../../components/search/Search'
import styles from './LandingPage.module.css'

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <Buttons label='Contact Us' />
      <div className={styles.flex}>
      <Card />
      <Card  large/>
      </div>

      <Search placeholder='Enter your email address' landingPage />

      <Search placeholder='Search here'/>
      
    </div>
  )
}

export default LandingPage