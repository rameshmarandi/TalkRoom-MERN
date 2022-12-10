import React,{useState} from 'react'
import styles from "./Authenticate.module.css"
import {StepEmailMobile , StepOtp} from "../Steps"
const steps = {
    1: StepEmailMobile,
    2: StepOtp,
   
  }


const Authenticate = () => {
    const [step, setStep] = useState(2)

  const Step = steps[step] 
  const onNext = () => {
    setStep( step +1)
  }
  return (
    <>
    <Step
      onNext={onNext}
      />
    </>
  )
}

export default Authenticate