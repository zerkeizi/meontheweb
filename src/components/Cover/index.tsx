import "./style.css";
import Mickey from "../Mickey";
import { useContext, useState } from "react";
import AdvertisingButton from "../AdvertisingButton";
import { BaseballBat } from "../BaseballBat";
import { MouseContext } from '@/context/MouseContext'
import Ad from "../Ad";
import Image from "next/image";


export default function Cover() {
  const [mouseDown, setMouseDown] = useState<boolean>(false)
  const [mouseReleased, setMouseReleased] = useState<boolean>(false)
  const [windowBackground, setWindowBackground] = useState<string>('')


  // # Context import
  const context = useContext(MouseContext);
  if (!context) {
      throw new Error('Nada feito');
  }
  const { setBaseballMode, isBaseballMode, setSpeechId } = context
 
  // # Methods
  const handleWindowControl = (speechId: string, backgroundString?: string) => {
    handleSpeak(speechId)
    setWindowBackground(backgroundString || "")
  }
  
  const handleSpeak = (speechId: string) => {
    setSpeechId(speechId)
  }

  const handleEquip = () => {
    setBaseballMode(!isBaseballMode)
    setSpeechId("002")
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
      <h2>
        <p>Hell<span className="hidingo">o</span>, world{!isBaseballMode && <BaseballBat equipFn={handleEquip}/> }</p>
        <p>Welcome to my page on the <em onClick={() => handleSpeak("001")}>WWW</em></p>
      </h2>
      <div id="window">
        <div className="window-top">
          <div className="__title">
            <span>Maicom.exe</span>
          </div>
          <div className="__controls">
            <button className="minimize" onClick={() => handleWindowControl("003")}/>
            <button className="maximize" onClick={() => handleWindowControl("004", "space")}/>
            <button className="close" onClick={() => handleWindowControl("005", "emerald")}/>
          </div>
        </div>
        <div className={`window-content  ${windowBackground}`}>
          <Mickey/>
          <span>conversion, software v7.0</span>
        </div>
      </div>
      <div className="banner-footer">
        <AdvertisingButton danger={baseballModeClass ? true : false} />
      </div>
      <Ad/>
      {/* Mobile visualization */}
      { baseballModeClass && (
        <div className="equipped__mobile">
          <Image
            draggable="false"
            src="/bat128_1.png"
            alt="" 
            width={128}
            height={128}
            sizes="(max-width: 480px) 50vw, (max-width: 768px) 50vw"
          />
        </div>)
      }
    </section>
)}
    