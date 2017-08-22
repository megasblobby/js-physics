const MILLISECONDS_TO_SECONDS = 1/1000;
const GRAVITY = 9.81, CONTACT_FORCE = 0.8, FRICTION = 0.97;
const RADIUS = 10;

let WIDTH = 800, HEIGHT = 600;

let canvas, canvasContext;

let velocityX = 100, velocityY = 0;
let ballX, ballY;

let time, oldTime;

window.onload = function () {
	canvas = document.getElementById("gameCanvas");
	canvasContext = canvas.getContext("2d");

	WIDTH = canvas.width;
	HEIGHT = canvas.height;

	ballX = WIDTH / 2 - RADIUS;
	ballY = 0 + RADIUS;

	time = new Date().getTime();
	oldTime = time;

	gameLoop();
}

function gameLoop() {
	let deltaTime = getDeltaTime();

	update(deltaTime);
	draw(deltaTime);
	requestAnimationFrame(gameLoop);
}

function getDeltaTime() {
	time = new Date().getTime();
	let deltaTime = (time - oldTime) * MILLISECONDS_TO_SECONDS;
	oldTime = time;

	return deltaTime;
}

function update(deltaTime) {
	ballX += velocityX * deltaTime;

	if (ballX < RADIUS) {
		ballX = RADIUS;
		velocityX *= -CONTACT_FORCE;
	}

	if (ballX > WIDTH - RADIUS) {
		ballX = WIDTH - RADIUS;
		velocityX *= -CONTACT_FORCE;
	}

	velocityY += GRAVITY;
	ballY += velocityY * deltaTime;

	if (ballY > HEIGHT - RADIUS) {
		ballY = HEIGHT - RADIUS;
		velocityY *= -CONTACT_FORCE;

	}

	if (ballY == HEIGHT - RADIUS) {
		velocityX *= FRICTION;
	}
}

function draw(deltaTime) {
	drawColoredRect(0, 0, WIDTH, HEIGHT, "gray");
	drawColoredCircle(ballX, ballY, RADIUS, "blue");
}

function drawColoredRect(x, y, width, height, color) {
	canvasContext.fillStyle = color;
	canvasContext.fillRect(x, y, width, height);
}

function drawColoredCircle(x, y, radius, color) {
	canvasContext.fillStyle = color;
	canvasContext.beginPath();
	canvasContext.arc(x, y, radius, 0, Math.PI * 2);
	canvasContext.fill();
}
