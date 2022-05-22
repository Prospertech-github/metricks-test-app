import React from 'react'
import styles from './Buttons.module.css'

const Buttons = ({label}) => {
  return (
    <div>
      <button className={styles.button}>
        {label}
      </button>
    </div>
  )
}

export default Buttons