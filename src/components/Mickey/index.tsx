import Image from "next/image";
import SpeechBalloon from "../SpeechBalloon";
import HealthBar from "../HealthBar";
import "./style.css";
import { useEffect, useState } from "react";
import { ISpeech, speeches } from "./speeches";

interface IMickey {
  speaking: boolean
  setSpeaking: Function
  speechOption: string
  setSpeechOption: Function
  baseballMode: boolean
}

export default function Mickey(props: IMickey) {
  const [hits, setHit] = useState(0)
  const [damage, setDamage] = useState(0)
  const [isAlive, setAlive] = useState(true)
  const [speech, setSpeech] = useState<ISpeech | null>(null)

  const handleHit = () => {
    const currentHit = hits + 1
    setHit(currentHit)

    // Procura pela fala
    const speechIndex = speeches.findIndex(s => s.id == currentHit.toString())
    if (speechIndex != -1) {
      setSpeech(speeches[speechIndex])
    }

    if (props.baseballMode && damage < 1000) {
      setDamage(damage+200)
    }
  }

  // setando uma fala
  if (props.speechOption) {
    console.log('changed')
    const speechIndex = speeches.findIndex(s => s.id == props.speechOption)
    if (speechIndex != -1) {
      setSpeech(speeches[speechIndex])
    }
  }

  const handleDeath = () => {
    setAlive(false)
  }

  return (
    <div className="frame">
      <SpeechBalloon 
        hits={hits}
        speech={speech} 
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
          {hits} clicks taken
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