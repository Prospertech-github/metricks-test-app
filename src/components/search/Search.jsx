import React from 'react'
import Buttons from '../buttons/Buttons'
import styles from './Search.module.css'
import {AiOutlineSearch} from 'react-icons/ai'


const Search = ({ placeholder, landingPage }) => {
  let design;

  if (landingPage) {
    design = 'large'
  } else {
    design = 'primary'
  }

  return (
    <div>
      {
        landingPage ? (
          <div className={` ${styles.searchComponent} ${styles[design]} `} >
            <input type='email' placeholder={placeholder} className={`${styles.searchBar} ${styles[design]}`} />
            <div className={styles.buttonContainer}>
              <Buttons label='Join Our Waiting list'/>
            </div>
          </div>
        ) : (
      
          <div className={styles.searchComponent}>
              <input type='text' placeholder={placeholder} className={styles.searchBar} />
              <AiOutlineSearch className={styles.icon} size={25}/>
          </div>
        )
      }
    </div>

  )
}

export default Search