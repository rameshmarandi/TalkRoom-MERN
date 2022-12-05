import React,{useState} from 'react'
import styles from "./Login.module.css"
import {StepEmailMobile , StepOtp} from "../Steps"
const steps = {
    1: StepEmailMobile,
    2: StepOtp,
   
  }


const Login = () => {
    const [step, setStep] = useState(1)

  const Step = steps[step] 
  const onNext = () => {
    setStep( step +1)
  }
  return (
    <>
    
    <div>Login</div>
    <Step
      onNext={onNext}
      />
    </>
  )
}

export default Login