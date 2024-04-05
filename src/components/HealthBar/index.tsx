import { useEffect, useRef, useState } from "react";
import "./style.css";

type IHealthBar = {
  hits: number
}

const HEALTH_POINTS = 1000
export default function HealthBar({ hits }: IHealthBar) {
  const [classes, setClasses] = useState('health-bar')

  let timerRef = useRef(0)
  let isCountingRef = useRef(false)
  useEffect(() => {
    timerRef.current = 0
    setClasses('health-bar visible')
    if (!isCountingRef.current) {
      startCounter()
    }
  }, [hits])

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
    <div className={classes}></div>
  )
}