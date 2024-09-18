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


  // # Context import
  const context = useContext(MouseContext);
  if (!context) {
      throw new Error('Nada feito');
  }
  const { setBaseballMode, isBaseballMode, setSpeechId } = context
 
  // # Methods
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
      <div id="window">
        <div className="window-top">
          <div className="__title">
            <span>Maicom.exe</span>
          </div>
          <div className="__controls">
            <button className="minimize"/>
            <button className="maximize"/>
            <button className="close" onClick={() => handleSpeak("003")}/>
          </div>
        </div>
        <div className="window-content">
          <h2>
            <p>Hell<span className="hidingo">o</span>, world{!isBaseballMode && <BaseballBat equipFn={handleEquip}/> }</p>
            <p>Welcome to my page on the <em onClick={() => handleSpeak("001")}>WWW</em></p>
          </h2>
          <Mickey/>
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
    