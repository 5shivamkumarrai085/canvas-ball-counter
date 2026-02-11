const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Make canvas full screen
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let radius = 30;
let x = 200;
let y = 200;

let dx = 1;
let dy = 1;

let collisionCount = 0;

function randomSpeed(direction) {
  let speed = Math.random() * 1.5 + 0.5;
  return direction ? speed : -speed;
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = "skyblue";
  ctx.fill();

  ctx.fillStyle = "black";
  ctx.font = "18px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(collisionCount, x, y);
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawBall();

  x += dx;
  y += dy;

  if (x + radius >= canvas.width) {
    dx = randomSpeed(false);
    dy = randomSpeed(Math.random() > 0.5);
    collisionCount++;
  }

  if (x - radius <= 0) {
    dx = randomSpeed(true);
    dy = randomSpeed(Math.random() > 0.5);
    collisionCount++;
  }

  if (y + radius >= canvas.height) {
    dy = randomSpeed(false);
    dx = randomSpeed(Math.random() > 0.5);
    collisionCount++;
  }

  if (y - radius <= 0) {
    dy = randomSpeed(true);
    dx = randomSpeed(Math.random() > 0.5);
    collisionCount++;
  }

  requestAnimationFrame(update);
}

update();