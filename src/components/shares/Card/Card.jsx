import React from 'react'
import styles from './Card.module.css'
import { color } from '../../../color'
import { BsFillMicFill } from 'react-icons/bs'
const Card = props => {
  const { title, icon, children } = props

  return (
    <>
      <div className={styles.card}>
        <div className={styles.headingWrapper}>
          {icon}
          <h1 className={styles.heading}>{title}</h1>
        </div>
        {children}
      </div>
    </>
  )
}

export default Card
