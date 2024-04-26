import "./style.css";
import Mickey from "../Mickey";
import { useContext, useState } from "react";
import AdvertisingButton from "../AdvertisingButton";
import { BaseballBat } from "../BaseballBat";
import { MouseContext } from "@/app/page";

export default function Cover() {
  const [speechOption, setSpeechOption] = useState<string>("")
  const [mouseDown, setMouseDown] = useState<boolean>(false)
  const [mouseReleased, setMouseReleased] = useState<boolean>(false)


  // # Context import
  const context = useContext(MouseContext);
  if (!context) {
      throw new Error('Nada feito');
  }
  const { setBaseballMode, isBaseballMode, isSpeaking, setSpeaking, setSpeechId } = context
 
  // # Methods
  const handleSpeak = () => {
    setSpeechId("001")
    // setSpeaking(!isSpeaking)
    // setSpeechOption("001")
  }

  const handleEquip = () => {
    setBaseballMode(!isBaseballMode)
  }

  const handleMouseReleased = () => {
    if (baseballModeClass) {
      setMouseReleased(true)
      setTimeout(() => {
        setMouseReleased(false)
        setMouseDown(false)
      }, 100)
    }
  }

  const handleMouseDown = () => {
    if (baseballModeClass) {
      setMouseDown(true)
    }
  }

  const baseballModeClass = isBaseballMode ? 'equipped' : ''
  const mouseStateClass = mouseReleased ? 'swing' : mouseDown ? 'holding' : ''

  return (
    <section className={`${baseballModeClass} ${mouseStateClass}`} onMouseDown={handleMouseDown} onMouseUp={handleMouseReleased}>
      <div id="banner">
        <h2>
          <p>Hell<span className="hidingo">o</span>, world{!isBaseballMode && <BaseballBat equipFn={handleEquip}/> }</p>
          <p>Welcome to my page on the <em onClick={() => handleSpeak()}>WWW</em></p>
        </h2>
        <Mickey 
          // speaking={isSpeaking} 
          // setSpeaking={setSpeaking} 
          // speechOption={speechOption}
          // setSpeechOption={setSpeechOption}
          // baseballMode={isBaseballMode}
          />
        <div className="banner-footer">
          <AdvertisingButton/>
        </div>
      </div>
    </section>
)}
    