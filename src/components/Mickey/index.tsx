import Image from "next/image";
import SpeechBalloon from "../SpeechBalloon";
import HealthBar from "../HealthBar";
import "./style.css";
import { useContext, useEffect, useState } from "react";
import { ISpeech, getSpeech } from "@/utils/speeches";
import { MouseContext } from "@/context/MouseContext";
import useSound from "use-sound"

const SOUNDTRACK = './when_you_wish.mp3'

export default function Mickey() {
  const [hits, setHit] = useState(0)
  const [damage, setDamage] = useState(0)
  const [selectedSpeech, setSelectedSpeech] = useState<ISpeech | null>(null)
  const [event, setEvent] = useState<React.MouseEvent | null>(null)
  
  // Sound
  const [playSound, soundOptions] = useSound(SOUNDTRACK, {})
  const [isPlaying, setIsPlaying] = useState(false);

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


  const handleSoundtrack = (bool: boolean) => {
    if (bool && !isPlaying && isAlive) {
      setIsPlaying(true)
      playSound()
    }

    if (!bool && isPlaying && isAlive) {
      setIsPlaying(false)
      soundOptions.stop()
    }
  }

  // # Controla o hit (click ou tacada)
  const handleHit = (e: React.MouseEvent) => {
    handleSoundtrack(true)
    if(!isBaseballMode) {

      if (selectedSpeech && selectedSpeech.persist) { // impede que cliques extras sobreponham uma mensagem que deve persistir em tela
        return
      }

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
    handleSoundtrack(false)
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