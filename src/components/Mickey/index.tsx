import Image from "next/image";
import SpeechBalloon from "../SpeechBalloon";
import HealthBar from "../HealthBar";
import "./style.css";
import { MouseEventHandler, useContext, useEffect, useState } from "react";
import { ISpeech, getSpeech } from "@/utils/speeches";
import { MouseContext } from "@/context/MouseContext";


export default function Mickey() {
  const [hits, setHit] = useState(0)
  const [damage, setDamage] = useState(0)
  const [selectedSpeech, setSelectedSpeech] = useState<ISpeech | null>(null)
  const [event, setEvent] = useState<React.MouseEvent | null>(null)

  // # Context import
  const context = useContext(MouseContext);
  if (!context) {
      throw new Error('Nada feito');
  }
  const { speechId, setSpeechId, isBaseballMode, setBaseballMode, isAlive, setAlive } = context

  useEffect(() => {
      const speech = getSpeech(speechId)
      if (speech) {
        setSelectedSpeech(speech)
      }
    setSpeechId(null)
  }, [speechId, setSpeechId])


  // # Controla o hit (click ou tacada)
  const handleHit = (e: React.MouseEvent) => {
    if(!isBaseballMode) {

      const currentHit = hits + 1
      setHit(currentHit)
      
      // Procura pela fala
      const speech = getSpeech(currentHit.toString())
      if (speech) {
        setSelectedSpeech(speech)
      }
    }

    if (isBaseballMode) {
      setDamage(damage+1)
      setEvent(e)
    }
  }

  const handleDeath = () => {
    setAlive(false)
    setBaseballMode(false)
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
            damage={damage}
            event={event}
            handleDeath={handleDeath}
          />
          <Image 
            onClick={(eventTarget) => handleHit(eventTarget)}
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