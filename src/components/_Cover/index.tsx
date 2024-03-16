<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <main>
      <section>
        <div id="banner">
          <h2>
            <p>Hell<span>o</span>, world!</p>
            <p>Welcome to my page on the <em onclick="toggleSpeech(this, true)">WWW</em></p>
          </h2>
          <dialog open class="balloon-speech">
            <button class="close" onclick="toggleSpeech(this, false)"></button>
            <span>
              <strong>Hey!</strong>did you know it's faster to spell it in full than it is to say "dublio, dublio, dublio"? <br>but I'm typing, not speaking
            </span>
          </dialog>
          <p id="banner-text"></p>
          <div class="frame">
            <img src="./public/rata.gif" alt="" sizes="" srcset="">
          </div>
          <div class="banner-footer">
            <p>this site has been optmized for:</p>
            <div class="ad">
              <span>You</span>
            </div>
          </div>
        </div>
      </section>
    </main>
    <script type="module" src="/index.js"></script>
    <script type="module" src="/src/js/popup.js"></script>
  </body>
</html>
