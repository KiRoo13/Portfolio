import { useEffect } from "react";
import { useRef } from "react";

function Animation() {
  const canvasRef = useRef(null);
  

  useEffect(() => {
    let canvas = canvasRef.current;

    let innerWidth = document.querySelector('.about-mi-amin').offsetWidth
    let innerHeight = document.querySelector('.about-mi-amin').offsetHeight

    let ctx = canvas.getContext("2d"),
      w = (canvas.width = innerWidth),
      h = (canvas.height = innerHeight),
      particles = [],
      properties = {
        bgColore: "rgb(17 17 19 / 1)",
        particleColor: "red",
        particleRadius: 1.5,
        particleCount: 35,
        particleMaxVelocicy: 0.3,
        lineLenght: 100,
        particleLife: 1,
      };

    window.onresize = function () {
      (w = canvas.width = innerWidth), (h = canvas.height = innerHeight);
    };

    class Particle {
      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.velocityX =
          Math.random() * (properties.particleMaxVelocicy * 2) -
          properties.particleMaxVelocicy;
        this.velocityY =
          Math.random() * (properties.particleMaxVelocicy * 2) -
          properties.particleMaxVelocicy;
        this.Life = Math.random * properties.particleLife * 60;
      }
      position() {
        (this.x + this.velocityX > w && this.velocityX > 0) ||
        (this.x + this.velocityX < 0 && this.velocityX < 0)
          ? (this.velocityX *= -1)
          : this.velocityX;
        (this.y + this.velocityY > h && this.velocityY > 0) ||
        (this.y + this.velocityY < 0 && this.velocityY < 0)
          ? (this.velocityY *= -1)
          : this.velocityY;
        this.x += this.velocityX;
        this.y += this.velocityY;
      }
      reDraw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, properties.particleRadius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = properties.particleColor;
        ctx.fill();
      }
      reCalculateLife() {
        if (this.Life < 1) {
          this.x = Math.random() * w;
          this.y = Math.random() * h;
          this.velocityX =
            Math.random() * (properties.particleMaxVelocicy * 2) -
            properties.particleMaxVelocicy;
          this.velocityY =
            Math.random() * (properties.particleMaxVelocicy * 2) -
            properties.particleMaxVelocicy;
          this.Life = Math.random * properties.particleLife * 60;
        }
        this.Life--;
      }
    }

    function reDrawBackground() {
      ctx.fillStyle = properties.bgColore;
      ctx.fillRect(0, 0, w, h);
    }

    function drawLines() {
      let x1, y1, x2, y2, lenght, opacity;
      for (const i in particles) {
        for (const j in particles) {
          x1 = particles[i].x;
          y1 = particles[i].y;
          x2 = particles[j].x;
          y2 = particles[j].y;
          lenght = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
          if (lenght < properties.lineLenght) {
            opacity = 1 - lenght / properties.lineLenght;
            ctx.lineWidth = "0,5";
            ctx.strokeStyle = "rgba(255,0,0, " + opacity + ")";
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.closePath();
            ctx.stroke();
          }
        }
      }
    }

    function reDrawParticles() {
      for (var i in particles) {
        particles[i].reCalculateLife();
        particles[i].position();
        particles[i].reDraw();
      }
    }

    function loop() {
      reDrawBackground();
      reDrawParticles();
      drawLines();
      requestAnimationFrame(loop);
    }

    function init() {
      for (var i = 0; i < properties.particleCount; i++) {
        particles.push(new Particle());
      }
      loop();
    }

    init();
  }, []);

  return <canvas className="canvas" ref={canvasRef}></canvas>;
}

export default Animation;
