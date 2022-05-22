import React from 'react'
import Bubble from '../../components/bubbles/Bubble'
import TimeCards from '../../components/cards/TimeCards'
import Container from '../../components/container/Container'
import NavBar from '../../components/navbar/NavBar'
import Search from '../../components/search/Search'
import styles from './LandingPage.module.css'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { AiOutlineYoutube } from 'react-icons/ai'
import { AiOutlineFacebook } from 'react-icons/ai'


const LandingPage = () => {
  return (
    <div className={styles.main}>
      <NavBar />
      <Container>
        <div className={styles.heroBanner}>
          <h2 className={styles.boldText}>
            Something awesome is coming soon
          </h2>
          <p className={styles.normalText}>
            Your all-in-one affiliate marketing tracking software
            <strong> track</strong>, <strong>automate</strong> and
            <strong> optimize</strong> your campaigns.
          </p>

          <div className={styles.countdown}>
            <TimeCards digits={7} value='days' />
            <TimeCards digits={24} value='hours' />
            <TimeCards digits={54} value='minutes' />
            <TimeCards digits={11} value='seconds' />
          </div>

          <div>
            <form>
              <input type='text' placeholder='First Name' className={styles.input} />
              <input type='text' placeholder='Last Name' className={styles.input} />
            </form>
          </div>

          <div className={styles.searchContainer}>
            <Search  landingPage/>
          </div>

          <div className={styles.socialFooter}>
            <ul>
              <li>
                <AiOutlineYoutube size={30} className={styles.icons}/>
              </li>
              <li>
                <AiOutlineFacebook size={30} className={styles.icons}/>
              </li>
              <li>
                <AiOutlineLinkedin size={30} className={styles.icons} />
              </li>
              <li>
                <AiOutlineInstagram size={30} className={styles.icons} />
              </li>
              <li>
                <AiOutlineTwitter size={30} className={styles.icons} />
              </li>
            </ul>
            
            <div className={styles.footerText}>
              <div className={styles.upperText}>
                <p> Terms of service </p>
                <p> Privacy policy </p>
              </div>

              <div>
                <p> Copyright 2021 @ Peddle Technologies. All Rights Reserved. </p>
              </div>

            </div>
          </div>
        </div>

        <Bubble />
        <Bubble blue />
        <Bubble orange />

        <div className={styles.largeCircle} />
      </Container>
    </div>
  )
}

export default LandingPage