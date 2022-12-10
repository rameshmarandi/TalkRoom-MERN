import React, { useState } from 'react'
import Button from '../../../../components/shares/Button/Button'
import Card from '../../../../components/shares/Card/Card'
import { MdOutlineMailOutline } from 'react-icons/md'
import TextInput from '../../../../components/shares/TextInput/TextInput'

import styles from '../StepEmailMobile.module.css'
const Email = () => {
  const brandIcon = {
    color: 'white',
  }
  const [phoneNumber, setPhoneNumber] = useState('')
  const onChange = e => {
    setPhoneNumber(e.target.value)
  }
  return (
    <>
      <Card
        title={'Enter your Email'}
        icon={<MdOutlineMailOutline size={'1.8rem'} style={brandIcon} />}
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
            By entering your number, you're agreeing o our Terms of Service and
            privacy policy. Thanks!
          </p>
        </div>
      </Card>
    </>
  )
}

export default Email
