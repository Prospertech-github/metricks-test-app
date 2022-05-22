import React from 'react'
import styles from './Bubbles.module.css'

const Bubble = ({orange, blue}) => {
  let design;
  
  if (orange) {
    design = 'orange'
  } else if (blue) {
    design = 'blue'  
  } else {
    design = 'primary'
  }

  return (
    <div className={`${styles.circle} ${styles[design]}`} />
  )
}

export default Bubble