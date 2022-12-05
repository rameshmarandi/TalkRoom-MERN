import React from 'react'
import styles from "./Button.module.css"

import { AiOutlineArrowRight } from 'react-icons/ai'
const Button = (props) => {
    const{ title,onClick} = props

    const arrowStyle = {
        marginLeft:"7px",
    }
  return (
    <button onClick = {onClick} className={styles.buttonStyle}>
    <span>{title}</span>
    <AiOutlineArrowRight style={arrowStyle}/>
  </button>
  )
}

export default Button