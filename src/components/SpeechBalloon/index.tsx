import { useContext, useEffect, useState } from "react";
import "./style.css";
import { ISpeech } from "./speeches";
import { MouseContext } from "@/app/page";

type ISpeechBalloon = {
  hits: number
  speech: ISpeech | null
  open?: boolean
  onClose: Function
  fn?: Function
}

export default function SpeechBalloon(props: ISpeechBalloon) {

  // # Context import
  // const context = useContext(MouseContext);
  // if (!context) {
  //     throw new Error('Nada feito');
  // }
  // const { setSpeech } = context

  const handleClose = () => {
    console.log('close')
    props.onClose()
  }

  return props.speech && (
    <div className="speech-balloon">
      <button className="close" onClick={handleClose}></button>
      <strong>{ props.speech.title }</strong>
      { props.speech.body.split('\\n').map((t, i) => (<p key={i}>{t}</p>)) }
    </div>
  )
}