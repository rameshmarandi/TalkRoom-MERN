import React, { useState } from 'react'
import { FaLock } from 'react-icons/fa'
import Button from '../../../components/shares/Button/Button'
import Card from '../../../components/shares/Card/Card'
import TextInput from '../../../components/shares/TextInput/TextInput'
import styles from './StepOtp.module.css'
const StepOtp = () => {
  const brandIcon = {
    color: 'red',
    fontSize: '28px'
  }
  const [phoneNumber, setPhoneNumber] = useState('')
  const onChange = e => {
    setPhoneNumber(e.target.value)
  }
  return (
    <>
      <div className={styles.cardWrapper}>
        <Card
          title={'Enter your phone number'}
          icon={<FaLock size={'1.8rem'} style={brandIcon} />}
        >
          <TextInput value={phoneNumber} onChange={onChange}></TextInput>
          <div>
            <div className={styles.actionButtonWrapper}>
              <Button
                title={'Next'}
                // onClick={startRegister}
              ></Button>
            </div>
            <p className={styles.paragphyWrapper}>
              By entering your number, you're agreeing o our Terms of Service
              and privacy policy. Thanks!
            </p>
          </div>
        </Card>
      </div>
    </>
  )
}

export default StepOtp
