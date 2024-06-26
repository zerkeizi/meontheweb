import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import fn from '@/utils/functions'
import useSound from "use-sound"

type IHealthBar = {
  damage: number
  event: React.MouseEvent | null
  handleDeath: Function
}
const BASE_HEALTH_POINTS = 1000
const BASE_HIT = 150
const bonkSfx = './baseball_bonk.mp3'

export default function HealthBar({ event, damage, handleDeath }: IHealthBar) {
  const [classes, setClasses] = useState('health-bar')
  const [healthPoints, setHealthPoints] = useState(BASE_HEALTH_POINTS)
  const [healthPercentage, setHealthPercentage] = useState(100)
  const [playSound] = useSound(bonkSfx)

  let timerRef = useRef(0)
  let isCountingRef = useRef(false)
  let firstRender = useRef(true)

  useEffect(() => {
    if (!firstRender.current) {
      timerRef.current = 0
      setClasses('health-bar visible')
      if (!isCountingRef.current) {
        startCounter()
      }
      handleHit()
    }
    firstRender.current = false
  }, [damage])
  
  const handleHit = () => {
    setHealthPoints(healthPoints-BASE_HIT)
    setHealthPercentage(healthPoints*100/BASE_HEALTH_POINTS)
    playSound()

    if (event) {

      const pos = {
        x: event.clientX,
        y: event.clientY
      }
      
      const s = fn.getRandomOnomatopeia()
      // TODO:
      // ONOMATOPEIA QUE APARECE E VAI SUMINDO
      // O SUNMIÇO NÃO É INTERROMPIDO POR OUTRAS ONOMATOPEIAS
    }

    if (healthPoints <= 0) {
      handleDeath()
    }
  }

  const startCounter = () => {
    isCountingRef.current = true
    counter()
  }

  const stopCounter = () => {
    isCountingRef.current = false
  }

  const counter = () => {
    const intervalId = setInterval(() => {
      if (timerRef.current <= 3) {
        timerRef.current++
      }

      if (timerRef.current > 3) {
        stopCounter()
        setClasses('health-bar')
        clearInterval(intervalId)
      }
    }, 1000)
  }
  
  return (
    <div className={classes}>
      <span className="health-points" style={{width: `${healthPercentage}%`}}></span>
    </div>
  )
}