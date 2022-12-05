import React ,{useState}from 'react'
import styles from './Register.module.css'
import {
  StepAvatar,
  StepEmailMobile,
  StepName,
  StepOtp,
  StepUserName
} from '../Steps'
const steps = {
  1: StepEmailMobile,
  2: StepOtp,
  3: StepName,
  4: StepAvatar,
  5: StepUserName
}
const Register = () => {

  const [step, setStep] = useState(1)

  const Step = steps[step] 
  const onNext = () => {
    setStep( step +1)
  }
  return (<>
    <div>
      <Step
      onNext={onNext}
      />
    </div>
  </>)
}

export default Register
