import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import { BsFillMicFill } from 'react-icons/bs'
import styles from './Home.module.css'
import { color } from "../../color"
import Card from '../../components/shares/Card/Card'
import Button from '../../components/shares/Button/Button'
const Home = () => {
  const brandIcon = {
    color: color.warning
  }

  const singInLinkStyle = {
    color: color.blue,
    textDecoration: "none",
    fontWeight: 'bold',
    marginLeft: "10px"
  }
  const history = useHistory()
  function startRegister() {
    history.push("/authenticate")
  }
  return (
    <div className={styles.cardWrapper}>
      <Card
        title={"Welcome to Coderhouse!"}
        icon={<BsFillMicFill size={"1.5rem"} style={brandIcon} />}
      >


        <p className={styles.text}>
          We're working hard to get Codershouse ready for everyone! While we wrap
          up th finishing youches, we're adding people gradully to make sure
          nothing breaks.
        </p>
        <div>
          <Button

            title={"Let's go"}
            onClick={startRegister}
          >

          </Button>
        </div>
        <div className={styles.signInWrapper}>
          <span className={styles.hasInvite}>Have an invite text?</span>
        </div>

      </Card>

    </div>
  )
}

export default Home
