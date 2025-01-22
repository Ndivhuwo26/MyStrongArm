/* src/Component/NewArrivals.css */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: #D2D2D2;
    background-image:
      repeating-linear-gradient(to right, transparent 0 100px, #25283b22 100px 101px),
      repeating-linear-gradient(to bottom, transparent 0 100px, #25283b22 100px 101px);
  }
  
  .img-circle {
    clip-path: circle(50% at 50% 50%);
  }
  
  body::before {
    position: absolute;
    width: min(1400px, 90vw);
    top: 10%;
    left: 50%;
    height: 90%;
    transform: translateX(-50%);
    content: '';
    background-image: url("img/caps/prada (2).jpg");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: top center;
    pointer-events: none;
  }
  
  .banner {
    width: 100%;
    height: 100vh;
    text-align: center;
    overflow: hidden;
    position: relative;
  }
  
  .banner .slider {
    position: absolute;
    width: 200px;
    height: 250px;
    top: 10%;
    left: calc(50% - 100px);
    transform-style: preserve-3d;
    transform: perspective(1000px);
    animation: autoRun 20s linear infinite;
    z-index: 2;
  }
  
  @keyframes autoRun {
    from {
      transform: perspective(1000px) rotateX(-16deg) rotateY(0deg);
    }
    to {
      transform: perspective(1000px) rotateX(-16deg) rotateY(360deg);
    }
  }
  
  .banner .slider .item {
    position: absolute;
    inset: 0 0 0 0;
    transform: rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(550px);
  }
  
  .banner .slider .item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .banner .content {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: min(1400px, 100vw);
    height: max-content;
    padding-bottom: 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
  }
  
  .banner .content h1 {
    font-family: 'ICA Rubrik';
    font-size: 16em;
    line-height: 1em;
    color: #25283B;
    position: relative;
  }
  
  .banner .content h1::after {
    position: absolute;
    inset: 0 0 0 0;
    content: attr(data-content);
    z-index: 2;
    -webkit-text-stroke: 2px #d2d2d2;
    color: transparent;
  }
  
  .banner .content .author {
    font-family: Poppins;
    text-align: right;
    max-width: 200px;
  }
  
  .banner .content h2 {
    font-size: 3em;
  }
  
  .banner .content .model {
    background-image: url(images/model.png);
    width: 100%;
    height: 75vh;
    position: absolute;
    bottom: 0;
    left: 0;
    background-size: auto 130%;
    background-repeat: no-repeat;
    background-position: top center;
    z-index: 1;
  }
  
  @media screen and (max-width: 1023px) {
    .banner .slider {
      width: 160px;
      height: 200px;
      left: calc(50% - 80px);
    }
    .banner .slider .item {
      transform: rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(300px);
    }
    .banner .content h1 {
      text-align: center;
      width: 100%;
      text-shadow: 0 10px 20px #000;
      font-size: 7em;
    }
    .banner .content .author {
      color: #fff;
      padding: 20px;
      text-shadow: 0 10px 20px #000;
      z-index: 2;
      max-width: unset;
      width: 100%;
      text-align: center;
      padding: 0 30px;
    }
  }
  
  @media screen and (max-width: 767px) {
    .banner .slider {
      width: 100px;
      height: 150px;
      left: calc(50% - 50px);
    }
    .banner .slider .item {
      transform: rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(180px);
    }
    .banner .content h1 {
      font-size: 5em;
    }
  }
  