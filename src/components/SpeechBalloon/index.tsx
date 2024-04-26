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

  const balloonRef = useRef(null)

  const handleClose = () => {
    props.onClose()
  }

  // Ao clicar fora do balão, fechar
  const handleEvent = (event: MouseEvent) => {
    if (balloonRef.current && !event.composedPath().includes(balloonRef.current)) {
      handleClose()
    }
  }

  useEffect(() => {
    document.body.addEventListener('click', handleEvent)
    return () => {
      // removendo evento após o click
      document.body.removeEventListener('click', handleEvent)
    }
  }, [])

  return props.speech && (
    <div className="speech-balloon" ref={balloonRef}>
      <button className="close" onClick={handleClose}></button>
      <strong>{ props.speech.message.title }</strong>
      { props.speech.message.body.split('\\n').map((t, i) => (<p key={i}>{t}</p>)) }
    </div>
  )
}