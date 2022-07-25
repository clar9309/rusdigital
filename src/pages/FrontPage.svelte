<div class="loading_container">
  <p class="loading_1">ER DU KLAR?</p>
  <p class="loading_2">TIL RUS DIGITAL 2022</p>
  <a class="button_loading" href="#">SE RUS PROGRAMMET</a>
</div>

<style>
  .loading_container {
    z-index: 100;
    width: 100%;
    height: 100%;
    margin: 0;
    margin-bottom: 0;
    -webkit-animation: color-change-5x 1s linear infinite alternate both;
    animation: color-change-5x 1s linear infinite alternate both;
  }

  @-webkit-keyframes color-change-5x {
    0% {
      background: #19dcea;
    }
    25% {
      background: #b22cff;
    }
    50% {
      background: #ea2222;
    }
    75% {
      background: #f5be10;
    }
    100% {
      background: #3bd80d;
    }
  }
  @keyframes color-change-5x {
    0% {
      background: #19dcea;
    }
    25% {
      background: #b22cff;
    }
    50% {
      background: #ea2222;
    }
    75% {
      background: #f5be10;
    }
    100% {
      background: #3bd80d;
    }
  }

  .loading_1 {
    font-size: clamp(7rem, 6.9vw + 5.7rem, 10rem);
    color: white;
    text-align: center;
    margin: 0;
  }

  .loading_2 {
    font-size: clamp(5rem, 2.3vw + 4.6rem, 6rem);
    color: white;
    text-align: center;
    -webkit-animation: text-flicker-in-glow 4s linear both;
    animation: text-flicker-in-glow 4s linear both;
  }

  @-webkit-keyframes text-flicker-in-glow {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0;
      text-shadow: none;
    }
    10.1% {
      opacity: 1;
      text-shadow: none;
    }
    10.2% {
      opacity: 0;
      text-shadow: none;
    }
    20% {
      opacity: 0;
      text-shadow: none;
    }
    20.1% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.25);
    }
    20.6% {
      opacity: 0;
      text-shadow: none;
    }
    30% {
      opacity: 0;
      text-shadow: none;
    }
    30.1% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
        0 0 60px rgba(255, 255, 255, 0.25);
    }
    30.5% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
        0 0 60px rgba(255, 255, 255, 0.25);
    }
    30.6% {
      opacity: 0;
      text-shadow: none;
    }
    45% {
      opacity: 0;
      text-shadow: none;
    }
    45.1% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
        0 0 60px rgba(255, 255, 255, 0.25);
    }
    50% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
        0 0 60px rgba(255, 255, 255, 0.25);
    }
    55% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
        0 0 60px rgba(255, 255, 255, 0.25);
    }
    55.1% {
      opacity: 0;
      text-shadow: none;
    }
    57% {
      opacity: 0;
      text-shadow: none;
    }
    57.1% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
        0 0 60px rgba(255, 255, 255, 0.35);
    }
    60% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
        0 0 60px rgba(255, 255, 255, 0.35);
    }
    60.1% {
      opacity: 0;
      text-shadow: none;
    }
    65% {
      opacity: 0;
      text-shadow: none;
    }
    65.1% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
        0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
    }
    75% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
        0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
    }
    75.1% {
      opacity: 0;
      text-shadow: none;
    }
    77% {
      opacity: 0;
      text-shadow: none;
    }
    77.1% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
        0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2),
        0 0 100px rgba(255, 255, 255, 0.1);
    }
    85% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
        0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2),
        0 0 100px rgba(255, 255, 255, 0.1);
    }
    85.1% {
      opacity: 0;
      text-shadow: none;
    }
    86% {
      opacity: 0;
      text-shadow: none;
    }
    86.1% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.6),
        0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25),
        0 0 100px rgba(255, 255, 255, 0.1);
    }
    100% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.6),
        0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25),
        0 0 100px rgba(255, 255, 255, 0.1);
    }
  }
  @keyframes text-flicker-in-glow {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0;
      text-shadow: none;
    }
    10.1% {
      opacity: 1;
      text-shadow: none;
    }
    10.2% {
      opacity: 0;
      text-shadow: none;
    }
    20% {
      opacity: 0;
      text-shadow: none;
    }
    20.1% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.25);
    }
    20.6% {
      opacity: 0;
      text-shadow: none;
    }
    30% {
      opacity: 0;
      text-shadow: none;
    }
    30.1% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
        0 0 60px rgba(255, 255, 255, 0.25);
    }
    30.5% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
        0 0 60px rgba(255, 255, 255, 0.25);
    }
    30.6% {
      opacity: 0;
      text-shadow: none;
    }
    45% {
      opacity: 0;
      text-shadow: none;
    }
    45.1% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
        0 0 60px rgba(255, 255, 255, 0.25);
    }
    50% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
        0 0 60px rgba(255, 255, 255, 0.25);
    }
    55% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.45),
        0 0 60px rgba(255, 255, 255, 0.25);
    }
    55.1% {
      opacity: 0;
      text-shadow: none;
    }
    57% {
      opacity: 0;
      text-shadow: none;
    }
    57.1% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
        0 0 60px rgba(255, 255, 255, 0.35);
    }
    60% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
        0 0 60px rgba(255, 255, 255, 0.35);
    }
    60.1% {
      opacity: 0;
      text-shadow: none;
    }
    65% {
      opacity: 0;
      text-shadow: none;
    }
    65.1% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
        0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
    }
    75% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
        0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
    }
    75.1% {
      opacity: 0;
      text-shadow: none;
    }
    77% {
      opacity: 0;
      text-shadow: none;
    }
    77.1% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
        0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2),
        0 0 100px rgba(255, 255, 255, 0.1);
    }
    85% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.55),
        0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2),
        0 0 100px rgba(255, 255, 255, 0.1);
    }
    85.1% {
      opacity: 0;
      text-shadow: none;
    }
    86% {
      opacity: 0;
      text-shadow: none;
    }
    86.1% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.6),
        0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25),
        0 0 100px rgba(255, 255, 255, 0.1);
    }
    100% {
      opacity: 1;
      text-shadow: 0 0 30px rgba(255, 255, 255, 0.6),
        0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25),
        0 0 100px rgba(255, 255, 255, 0.1);
    }
  }

  .button_loading {
    background-color: white;
    padding: 2rem;
  }

  a {
    color: purple;
    text-decoration: none;
  }
</style>
