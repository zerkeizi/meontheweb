import Image from "next/image";
import './style.css';
import { useContext, useState, useEffect } from "react";
import { MouseContext } from "@/context/MouseContext";


export default function Ad() {
  const [isRendered, setRendered] = useState(false)
  const [isVisible, setVisible] = useState(false)
  const handleVisible = (bool: boolean) => {
    setVisible(bool)
  }

  // # Context import
  const context = useContext(MouseContext);
  if (!context) {
      throw new Error('Nada feito');
  }
  const { isAlive } = context

  useEffect(()=> {
    if (!isAlive) {
      setRendered(true)
      setTimeout(() => {
        setVisible(true)
      }, 1000)
    }
  }, [isAlive])

  return (
    isRendered &&
    <div className={`husband-ad ${isVisible ? "active" : ""}`}>
     <div className="frame__image">
      <Image 
        draggable="false"
        src="/esposa.jpg" 
        alt="" 
        width={265}
        height={325}
      /> 
     </div>
     <div className="frame__message">
      <div className="message__wrapper">
        <h6>
          <p>O meu marido</p>
          <p>está morto</p>
        </h6>
        <p>Aparentemente tinhas o que era preciso para amassar a minha camundonga!</p>
      </div>
      <a href="#" onClick={() => handleVisible(false)}>Sai daqui</a>
     </div>
    </div>
  )
}