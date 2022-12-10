import React, { useState } from 'react'
import Phone from './Phone/Phone'
import Email from './Email/Email'
import styles from './StepEmailMobile.module.css'
import { BsPhone } from 'react-icons/bs'
import { MdOutlineMailOutline } from 'react-icons/md'
const phoneEmailMap = {
  phone: Phone,
  email: Email
}
const StepEmailMobile = ({ onNext }) => {
  const [type, setType] = useState('phone')

  const Component = phoneEmailMap[type]

  const brandIcon = {
    color: 'white'
  }
  return (
    <>
      <div className={styles.cardWrapper}>
        <div>
          <div className={styles.buttonWrapper}>
            <button
              className={`${styles.tabBottom} ${
                type === 'phone' ? styles.activeTab : ''
              }`}
              onClick={() => {
                setType('phone')
              }}
            >
              <BsPhone size={'1.5rem'} style={brandIcon} />
            </button>
            <button
              className={`${styles.tabBottom} ${
                type === 'email' ? styles.activeTab : ''
              }`}
              onClick={() => {
                setType('email')
              }}
            >
              <MdOutlineMailOutline size={'1.5rem'} style={brandIcon} />
            </button>
          </div>
          <Component onNext={onNext} />
        </div>
      </div>
    </>
  )
}

export default StepEmailMobile
