import { useState } from "react"
import './style.css';
import Image from "next/image";


type IBaseballBat = {
  equipFn: Function
} 
export const BaseballBat = (props: IBaseballBat) => {

  const handleBatEquip = () => {
    props.equipFn()
  }

  return <span className="bat-wrapper" onClick={() => handleBatEquip()}>!</span>
}