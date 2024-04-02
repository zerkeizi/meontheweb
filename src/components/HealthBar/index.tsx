import { useEffect, useState } from "react";
import "./style.css";

type IHealthBar = {
  hits: number
}

const HEALTH_POINTS = 1000
export default function HealthBar({ hits }: IHealthBar) {
  const [classes, setClasses] = useState('health-bar')
  const [barTimer, setBarTimer] = useState(0)

  useEffect(() => {
    setBarTimer(0)
    setClasses('health-bar visible')
  }, [hits])


  // const myInterval = setInterval(() => {
  //   console.log(barTimer)
  //   if (barTimer < 3) {
  //     setBarTimer(barTimer + 1)
  //   }

  //   if (barTimer == 3) {
  //     setClasses('health-bar')
  //   }
  // }, 1000)
  
  // if (barTimer == 3)
  //   clearInterval(myInterval)

  return (
    <div className={classes}></div>
  )
}