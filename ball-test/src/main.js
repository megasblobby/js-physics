"use strict";

const MILLISECONDS_TO_SECONDS = 1/1000;

const BALLS = 10;
const RADIUS = 50;
let WIDTH = 800, HEIGHT = 600;

let canvas, canvasContext;

let time, oldTime;

let balls = [];

window.onload = function () {
	canvas = document.getElementById("gameCanvas");
	canvasContext = canvas.getContext("2d");

	WIDTH = canvas.width;
	HEIGHT = canvas.height;

	time = new Date().getTime();
	oldTime = time;

	createBalls();

	gameLoop();
}

function createBalls() {
	for (var i = 0; i < BALLS; i++) {
		let position = new Vector2(Math.random() * WIDTH, Math.random() * HEIGHT);
		let radius = Math.random() * RADIUS;
		let red = Math.random() * 255; let green = Math.random() * 255;
		let blue = Math.random() * 255;
		let color = "rgb(" + red + ", " + green + ", " + blue + ")";
		balls.push(new Ball(position, radius, color));
	}
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

}

function draw(deltaTime) {
	drawColoredRect(0, 0, WIDTH, HEIGHT, "gray");
	for (let ball of balls) {
		ball.draw(canvasContext);
	}
}

function drawColoredRect(x, y, width, height, color) {
	canvasContext.fillStyle = color;
	canvasContext.fillRect(x, y, width, height);
}
