import "./style.css";
import Mickey from "../Mickey";
import { useState } from "react";
import AdvertisingButton from "../AdvertisingButton";
import { BaseballBat } from "../BaseballBat";
import Image from "next/image";

export default function Cover() {
  const randomMessage = 'String'
  const [isSpeaking, setSpeaking] = useState<boolean>(false)
  const [speechOption, setSpeechOption] = useState<number>(0)
  const [isBaseballMode, setBaseballMode] = useState<boolean>(false)
  const [mouseDown, setMouseDown] = useState<boolean>(false)
  const [mouseReleased, setMouseReleased] = useState<boolean>(false)
  const [pos, setPos] = useState<{ x: number, y: number}>({ x: 0, y:0})

  const handleSpeak = () => {
    setSpeaking(!isSpeaking)
    setSpeechOption(1)
  }

  const handleEquip = () => {
    setBaseballMode(!isBaseballMode)
  }

  const handleMouseReleased = () => {
    if (baseballModeClass) {
      console.log('Released!')

      setMouseReleased(true)
      console.log('1')
      setTimeout(() => {
        setMouseReleased(false)
        setMouseDown(false)
      }, 100)
    }
  }

  const handleMouseDown = () => {
    if (baseballModeClass) {
      console.log('Holding...')
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
        <p id="banner-text">{ randomMessage }</p>
        <Mickey 
          speaking={isSpeaking} 
          setSpeaking={setSpeaking} 
          speechOption={speechOption}
          baseballMode={isBaseballMode}
          />
        <div className="banner-footer">
          <AdvertisingButton/>
        </div>
      </div>
    </section>
)}
    