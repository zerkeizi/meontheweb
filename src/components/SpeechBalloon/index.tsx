import { useEffect, useRef } from "react";
import "./style.css";
import { ISpeech } from "@/utils/speeches";

type ISpeechBalloon = {
  hits: number
  speech: ISpeech | null
  open?: boolean
  onClose: Function
  fn?: Function
}

export default function SpeechBalloon(props: ISpeechBalloon) {
  const handleClose = () => {
    props.onClose()
  }

  return props.speech && (
    <div className="speech-balloon" onClick={handleClose}>
      {/* <button className="close"></button> */}
      <strong>{ props.speech.message.title }</strong>
      { 
        (props.speech.message.body.includes('\\n') && props.speech.message.body.split('\\n').map((t, i) => (<p key={i}>{t}</p>)))
        ||
        (props.speech.html && <p dangerouslySetInnerHTML={{ __html: props.speech.message.body }}></p>)
        ||
        (<p>{props.speech.message.body}</p>)
      }
    </div>
  )
}