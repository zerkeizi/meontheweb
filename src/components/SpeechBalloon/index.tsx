import { useEffect, useState } from "react";
import "./style.css";
import { speeches } from "./speeches";

type ISpeechBalloon = {
  speechOption: number
  open?: boolean
  onClose: Function
  fn?: Function
}


export default function SpeechBalloon(props: ISpeechBalloon) {
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
    props.onClose(false)
  }

  useEffect(() => {
    if (props.open) {
      setOpen(props.open)
    }

  }, [props.open])
  
  const speech = speeches.find(s => s.id == props.speechOption)
  if (speech && open) {
    return (
      <div className="speech-balloon">
        <button className="close" onClick={handleClose}></button>
        <strong>{ speech.title }</strong>
        { speech.body.split('\\n').map((t, i) => (<p key={i}>{t}</p>)) }
      </div>
    )
  }
}
/*
  const messages = [
    "You can spend all the time you want looking at Mickey. He will stay here forever.",
    "Penso, logo existo - Borboletas salpicadas de goiabada."
    "Já é tarde - E eu ainda estarei aqui depois de vinte e quatro horas."
    "Sem pressa - Aqui as coisas duram o tempo que for necessário.",
  ]
*/ 