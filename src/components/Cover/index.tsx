import "./style.css";
import Mickey from "../Mickey";
import { useState } from "react";
import AdvertisingButton from "../AdvertisingButton";

export default function Cover() {
  const randomMessage = 'String'
  const [isSpeaking, setSpeaking] = useState<boolean>(false)
  const [speechOption, setSpeechOption] = useState<number>(0)

  const handleSpeak = () => {
    setSpeaking(!isSpeaking)
    setSpeechOption(1)
  }
  
  return (
    <section>
      <div id="banner">
        <h2>
          <p>Hell<span>o</span>, world!</p>
          <p>Welcome to my page on the <em onClick={() => handleSpeak()}>WWW</em></p>
        </h2>
        <p id="banner-text">{ randomMessage }</p>
        <Mickey speaking={isSpeaking} setSpeaking={setSpeaking} speechOption={speechOption}/>
        <div className="banner-footer">
          <AdvertisingButton/>
        </div>
      </div>
    </section>
)}
    