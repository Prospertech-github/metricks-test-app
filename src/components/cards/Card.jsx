import React from 'react'
import { Link } from 'react-router-dom'
import CardImage from '../../assets/images/cardImage.jpg'
import styles from './Cards.module.css'

const ArticleCard = ({large}) => {
  return (
    <div className={styles.card}>
      {
        large &&
      <div className={styles.imageContainer}>
        <img src={CardImage} alt='A new blog article' />
      </div>
      }
      <div className={styles.textContainer}>
        <div>
          <span className={styles.articleDetails}>
            <p> September 6, 2021 .</p>
            <p> Featured Article .</p>
            <p> Affliate </p>
          </span>

          <p className={styles.articleTitle}>
            12 popup use cases <br/>to increase conversions
          </p> 
        </div>
        <div className={styles.contentContainer}>
          <p className={styles.articleContent}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua. At vero eos et accusam et justo duo
          </p>
        </div>

        <div className={styles.bottomContent}>
          <div className={styles.line} />
          <Link to='/articledetails' className={styles.actionText}>
            Read More 
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard