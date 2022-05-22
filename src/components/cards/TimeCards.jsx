import React from 'react'
import styles from './Cards.module.css'

const TimeCards = ({digits, value}) => {
  return (
    <div className={styles.timeCard}>
      <p className={styles.digits}>{digits}</p>
      <p className={styles.value}>{value}</p>
    </div>
  )
}

export default TimeCards