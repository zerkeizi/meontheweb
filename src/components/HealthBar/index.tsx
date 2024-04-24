import { useEffect, useRef, useState } from "react";
import "./style.css";

type IHealthBar = {
  hits: number
  damage: number
  handleDeath: Function
}

const BASE_HEALTH_POINTS = 1000
const BASE_HIT = 200
export default function HealthBar({ hits, damage, handleDeath }: IHealthBar) {
  const [classes, setClasses] = useState('health-bar')
  const [healthPoints, setHealthPoints] = useState(BASE_HEALTH_POINTS)
  const [healthPercentage, setHealthPercentage] = useState(100)

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