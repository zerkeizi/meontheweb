import { useState } from 'react';
import './style.css';
import useSound from "use-sound"

type IBaseballBat = {
  equipFn: Function
} 

const baseballSfx = './baseball_bat_swing_hit.mp3'

export const BaseballBat = (props: IBaseballBat) => {
  const [playSound] = useSound(baseballSfx, {})

  const handleSound = () => {
    playSound()
  }

  const handleBatEquip = () => {
    handleSound()
    props.equipFn()
  }

  return <span className="bat-wrapper" onClick={() => handleBatEquip()}>!</span>
}