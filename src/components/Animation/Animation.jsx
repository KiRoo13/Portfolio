import { useEffect } from "react";
import { useRef } from "react";
import { useThemeContext } from "../../context/ThemeContext";
import "./Animation.css";

function Animation() {
  const canvasRef = useRef(null);
  const [ theme ] = useThemeContext();
  console.log('anim')


  useEffect(() => {
    let canvas = canvasRef.current;


    const particles = [];
    const properties = {
      bgColore: theme === "dark" ? "rgb(17 17 19 / 1)" : "rgb(255 255 255 / 1)",
      particleColor: theme === "dark" ? "red" : "goldenrod",
      particleRadius: 1.5,
      particleCount: 75,
      particleMaxVelocicy: 0.3,
      lineLenght: 100,
      particleLife: 1,
    };

    let innerWidth = canvas.offsetWidth;
    let innerHeight = canvas.offsetHeight;


    let ctx = canvas.getContext("2d"),
      w = (canvas.width = innerWidth),
      h = (canvas.height = innerHeight);

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
            ctx.strokeStyle =
              theme === "dark"
                ? "rgba(255,0,0, " + opacity + ")"
                : "rgba(218,165,32, " + opacity + ")";
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

    let requestID = ''

    function loop() {
      reDrawBackground();
      reDrawParticles();
      drawLines();
      requestID = requestAnimationFrame(loop)
    }

    function init() {
      for (var i = 0; i < properties.particleCount; i++) {
        particles.push(new Particle());
      }

      loop();
    }

    init();

    return () => {
      window.cancelAnimationFrame(requestID)
    }
  }, [theme]);

  return (
    <canvas ref={canvasRef} className="canvas"></canvas>
  );
}

export default Animation;
