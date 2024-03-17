import Image from "next/image";
import './style.css';

export default function AdvertisingButton () {
  
  return (
    <div className="ad">
      <p>this site has been optimized for:</p>
      <div className="ad__button">
        <div className="ad__logo">
          <Image 
            src="/heart.png" 
            alt="" 
            width={26}
            height={26}
          />
        </div>
        <span>You</span>
      </div>
    </div>
  )
}