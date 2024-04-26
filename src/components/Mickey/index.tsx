import Image from "next/image";
import SpeechBalloon from "../SpeechBalloon";
import HealthBar from "../HealthBar";
import "./style.css";
import { useContext, useEffect, useState } from "react";
import { ISpeech, getSpeech } from "@/utils/speeches";
import { MouseContext } from "@/app/page";

interface IMickey {
  speaking: boolean
  setSpeaking: Function
  speechOption: string
  setSpeechOption: Function
  baseballMode: boolean
}

export default function Mickey() {
  const [hits, setHit] = useState(0)
  const [damage, setDamage] = useState(0)
  const [isAlive, setAlive] = useState(true)
  const [selectedSpeech, setSelectedSpeech] = useState<ISpeech | null>(null)

  // # Context import
  const context = useContext(MouseContext);
  if (!context) {
      throw new Error('Nada feito');
  }
  const { speechId, setSpeechId, isBaseballMode } = context

  useEffect(() => {
      const speech = getSpeech(speechId)
      if (speech) {
        setSelectedSpeech(speech)
      }
    // }
    setSpeechId(null)
  }, [speechId, setSpeechId])


  // # Controla o hit (click ou tacada)
  const handleHit = () => {
    const currentHit = hits + 1
    setHit(currentHit)

    // Procura pela fala
    const speech = getSpeech(currentHit.toString())
    if (speech) {
      setSelectedSpeech(speech)
    }

    if (isBaseballMode && damage < 1000) {
      setDamage(damage+200)
    }
  }

  const handleDeath = () => {
    setAlive(false)
  }

  const handleClose = () => {
    setSelectedSpeech(null)
  }

  return (
    <div className="frame">
      <SpeechBalloon 
        hits={hits}
        speech={selectedSpeech} 
        open={false}
        onClose={handleClose}
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
          {/* {hits} clicks taken */}
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