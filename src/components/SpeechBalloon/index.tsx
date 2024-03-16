import { useState } from "react";
import "./style.css";

type ISpeechBalloon = {
  title: string
  body: string
  speechOption: number
}

export default function SpeechBalloon(props: ISpeechBalloon) {
  const [isOpen, setOpen] = useState(true)
  const handleClose = () => {
    // setOpen(!isOpen)
  }

  const txt = props.body.split('\\n').map((t, i) => <p key={i}>{t}</p>); 
  return (
    <div className="speech-balloon">
      <button className="close" onClick={handleClose}></button>
      <strong>{ props.title }</strong>
      { txt }
    </div>
  )
}
// export const message = () => {
//   const messages = [
//     "You can spend all the time you want looking at Mickey. He will stay here forever.",
//     "Here you can find things and everything lasts as long as necessary.",
//     "Penso, logo existo - Borboletas salpicadas de goiabada"
//   ]
  
//   return messages[Math.floor(Math.random() * messages.length)];
// }