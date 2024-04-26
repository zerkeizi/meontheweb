import Image from "next/image";
import './style.css';


type IAdvertising = {
  danger: boolean
}

export default function AdvertisingButton(props: IAdvertising) {

  return (
    <div className="ad">
      <p>this site has been optimized for:</p>
      <div className="ad__button">
        <div className={`ad__logo ${props.danger ? 'danger' : ''}`}>
          <Image 
            className="ad__first"
            src="/heart.png" 
            alt="" 
            width={26}
            height={26}
          />
          <Image 
            className="ad__second"
            src="/skull.png" 
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