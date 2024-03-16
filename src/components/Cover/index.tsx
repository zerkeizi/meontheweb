import Image from "next/image"
export default function Cover() {
  return (
    <section>
      <div id="banner">
        <h2>
          <p>Hell<span>o</span>, world!</p>
          <p>Welcome to my page on the <em>WWW</em></p>
        </h2>
        <dialog open className="balloon-speech">
          <button className="close"></button>
          <span>
            <strong>Hey!</strong>did you know it's faster to spell it in full than it is to say "dublio, dublio, dublio"? <br/>but I&apos'm typing, not speaking
          </span>
        </dialog>
        <p id="banner-text"></p>
        <div className="frame">
          <Image src="./public/rata.gif" alt=""/>
        </div>
        <div className="banner-footer">
          <p>this site has been optmized for:</p>
          <div className="ad">
            <span>You</span>
          </div>
        </div>
      </div>
    </section>
)}
    