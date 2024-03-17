import Image from "next/image"
import SpeechBalloon from "../SpeechBalloon"
import { useState } from "react"

interface IMickey {
  speaking: boolean
  setSpeaking: Function
  speechOption: number
}

export default function Mickey(props: IMickey) {

  return (
    <div className="frame">
      <SpeechBalloon 
        speechOption={props.speechOption} 
        open={!!props.speaking}
        onClose={props.setSpeaking}
      />
      <Image 
        src="/rata.gif" 
        alt="" 
        width={300}
        height={300}
      />
    </div>
  )
}