import Image from "next/image"
import SpeechBalloon from "../SpeechBalloon"
import { useState } from "react"

interface IMickey {
  speechOption: number
}

export default function Mickey({ speechOption }: IMickey) {
  // const [selectedSpeech, setSelectedSpeech] = useState(0)

  // if (speechOption) setSelectedSpeech(speechOption)

  const speeches = [
    {
      id: 1,
      title:"Hey!",
      body: "did you know it's faster to spell it in full than it is to say 'dublio, dublio, dublio'?\\nbut I'm typing here, not speaking."
    },
    {
      id: 2,
      title:"Psst!",
      body: "You are making too much noise."
    }
  ]

  const speech = speeches.find(s => s.id == speechOption)

  return (
    <div className="frame">
      { speech &&
        (<SpeechBalloon title={speech.title} body={speech.body} speechOption={speechOption}/>)
      }
      <Image 
        src="/rata.gif" 
        alt="" 
        width={300}
        height={300}
      />
    </div>
  )
}