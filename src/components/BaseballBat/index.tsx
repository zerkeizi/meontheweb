import { useState } from "react"
import './style.css';


type IBaseballBat = {
  equipFn: Function
} 
export const BaseballBat = (props: IBaseballBat) => {
  const [batVisible, setBatVisible] = useState(false)

  const toggleActive = () => {
    setBatVisible(!batVisible)
  }

  const handleBatEquip = () => {
    props.equipFn()
  }

  return <span className="bat-wrapper" onClick={() => toggleActive()}> 
    { batVisible && 
      <img width="20px" src="/bat.png" onClick={() => handleBatEquip()}/>
      || 
      '!' 
    }
  </span>
}