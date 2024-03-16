import "./style.css";
import Mickey from "../Mickey";
import { useState } from "react";

export default function Cover() {
  const randomMessage = 'String'
  const [speechOption, setSpeechOption] = useState<number>(0)

  const handleSpeak = () => {
    console.log('clcickckl')
    setSpeechOption(1)
  }
  
  return (
    <section>
      <div id="banner">
        <h2>
          <p>Hell<span>o</span>, world!</p>
          <p>Welcome to my page on the <em onClick={handleSpeak}>WWW</em></p>
        </h2>
        <p id="banner-text">{ randomMessage }</p>
        <Mickey speechOption={speechOption}/>
        <div className="banner-footer">
          <p>this site has been optmized for:</p>
          <div className="ad">
            <span>You</span>
          </div>
        </div>
      </div>
    </section>
)}
    