// script.js

const canvas = document.getElementById('bubble-canvas');
const ctx = canvas.getContext('2d');

let bubbles = [];
const numBubbles = 50;

// Resize canvas to fill window
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Bubble class
class Bubble {
  constructor(x, y, radius, speed, dx, dy) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speed = speed;
    this.dx = dx;
    this.dy = dy;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = 'rgba(0, 150, 255, 0.5)';
    ctx.fill();
    ctx.closePath();
  }

  update() {
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx * this.speed;
    this.y += this.dy * this.speed;
    this.draw();
  }
}

// Create bubbles
function createBubbles() {
  for (let i = 0; i < numBubbles; i++) {
    const radius = Math.random() * 20 + 10;
    const x = Math.random() * (canvas.width - radius * 2) + radius;
    const y = Math.random() * (canvas.height - radius * 2) + radius;
    const dx = Math.random() * 2 - 1;
    const dy = Math.random() * 2 - 1;
    const speed = Math.random() * 2 + 1;

    bubbles.push(new Bubble(x, y, radius, speed, dx, dy));
  }
}

createBubbles();

// Animation loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

  bubbles.forEach(bubble => bubble.update()); // Update and draw each bubble

  requestAnimationFrame(animate); // Request next frame
}

animate();
