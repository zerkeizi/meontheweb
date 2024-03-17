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
// export const message = () => {
//   const messages = [
//     "You can spend all the time you want looking at Mickey. He will stay here forever.",
//     "Here you can find things and everything lasts as long as necessary.",
//     "Penso, logo existo - Borboletas salpicadas de goiabada"
//   ]
  
//   return messages[Math.floor(Math.random() * messages.length)];
// }