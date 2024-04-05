import "./style.css";
import Mickey from "../Mickey";
import { useState } from "react";
import AdvertisingButton from "../AdvertisingButton";
import { BaseballBat } from "../BaseballBat";

export default function Cover() {
  const randomMessage = 'String'
  const [isSpeaking, setSpeaking] = useState<boolean>(false)
  const [speechOption, setSpeechOption] = useState<number>(0)
  const [isBatEquip, setBatEquip] = useState<boolean>(false)

  const handleSpeak = () => {
    setSpeaking(!isSpeaking)
    setSpeechOption(1)
  }

  const handleEquip = () => {
    setBatEquip(!isBatEquip)
  }
  
  return (
    <section className={isBatEquip ? "equipped" : ""}>
      <div id="banner">
        <h2>
          <p>Hell<span className="hidingo">o</span>, world<BaseballBat equipFn={handleEquip} /></p>
          <p>Welcome to my page on the <em onClick={() => handleSpeak()}>WWW</em></p>
        </h2>
        <p id="banner-text">{ randomMessage }</p>
        <Mickey speaking={isSpeaking} setSpeaking={setSpeaking} speechOption={speechOption}/>
        { isBatEquip && <span style={{ color: '#fff' }}>Taco Equipado</span>}
        <div className="banner-footer">
          <AdvertisingButton/>
        </div>
      </div>
    </section>
)}
    