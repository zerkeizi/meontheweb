import Image from "next/image";
import SpeechBalloon from "../SpeechBalloon";
import HealthBar from "../HealthBar";
import "./style.css";
import { useState } from "react";

interface IMickey {
  speaking: boolean
  setSpeaking: Function
  speechOption: number
  baseballMode: boolean
}


export default function Mickey(props: IMickey) {
  const [hits, setHit] = useState(0)
  const [damage, setDamage] = useState(0)
  const [isAlive, setAlive] = useState(true)

  const handleHit = () => {
    setHit(hits+1)
    if (props.baseballMode && damage < 1000) {
      setDamage(damage+200)
    }
  }

  const handleDeath = () => {
    setAlive(false)
  }

  return (
    <div className="frame">
      <SpeechBalloon 
        speechOption={props.speechOption} 
        open={!!props.speaking}
        onClose={props.setSpeaking}
      />
      { isAlive && (<>
          <HealthBar 
            hits={hits} 
            damage={damage}
            handleDeath={handleDeath}
          />
          <Image 
            onClick={() => handleHit()}
            draggable="false"
            src="/rata.gif" 
            alt="" 
            width={300}
            height={300}
          /> 
        </>)
        || (
        <Image
          loading="eager"
          draggable="false"
          src="/grave.png" 
          alt="" 
          width={150}
          height={150}
        />
        )
      }
    </div>
  )
}