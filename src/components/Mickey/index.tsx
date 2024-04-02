import Image from "next/image";
import SpeechBalloon from "../SpeechBalloon";
import HealthBar from "../HealthBar";
import "./style.css";
import { useState } from "react";

interface IMickey {
  speaking: boolean
  setSpeaking: Function
  speechOption: number
}

export default function Mickey(props: IMickey) {
  const [hits, setHit] = useState(0)

  return (
    <div className="frame">
      <SpeechBalloon 
        speechOption={props.speechOption} 
        open={!!props.speaking}
        onClose={props.setSpeaking}
      />
      <HealthBar hits={hits}/>
      <Image 
        onClick={() => setHit(hits+1)}
        src="/rata.gif" 
        alt="" 
        width={300}
        height={300}
      />
    </div>
  )
}