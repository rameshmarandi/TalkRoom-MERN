import React from 'react'
import { BsFillMicFill } from 'react-icons/bs';
import { Link} from "react-router-dom"
import styles from "../Navigation/Navigation.module.css"
import {color} from "../../../color"

const Navigation = () => {
  const brandStyle = {
    textDecoration:"none",
    color : color.white,
    display : "flex",
    alignItems : "center",
    fontSize :"22px",

  }
  const brandIcon = {
    color : color.warning
  }
  const branchText = {
    marginLeft : "5px",
    fontWeight : "bold",
  }
  return (
    <nav className={`${styles.navbar} container`}>
      <Link to={'/'} style={brandStyle}>
      <BsFillMicFill size={"2rem"} style={brandIcon}/>
      <span style={branchText}>Coderhouse</span>
      </Link>
    </nav>
  )
}

export default Navigation
