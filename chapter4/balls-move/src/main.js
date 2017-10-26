"use strict";

const MILLISECONDS_TO_SECONDS = 1/1000;

const BALLS = 10;
const MIN_RADIUS = 1, MAX_RADIUS = 50;
const MIN_VELOCITY = -50, MAX_VELOCITY = 50;
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
		let position = getRandomPosition(WIDTH, HEIGHT);
		let radius = getRandomRadius(MIN_RADIUS, MAX_RADIUS);
		let velocity = getRandomVelocity(MIN_VELOCITY, MAX_VELOCITY);
		let color = getRandomColor();
		balls.push(new Ball(position, radius, color));
		balls[i].velocity = velocity;
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
	for (let ball of balls) {
		ball.move(deltaTime);
	}
}

function draw(deltaTime) {
	drawColoredRect(0, 0, WIDTH, HEIGHT, "#EEEEEE");
	for (let ball of balls) {
		ball.draw(canvasContext);
	}
}

function getRandomPosition(width, height) {
	return new Vector2(Math.random() * width, Math.random() * height);
}

function getRandomRadius(minRadius, maxRadius) {
	return Math.random() * (maxRadius - minRadius) + minRadius;
}

function getRandomVelocity(min, max) {
	let xVelocity = (Math.random() * (max - min)) + min;
	let yVelocity = (Math.random() * (max - min)) + min;

	return new Vector2(xVelocity, yVelocity);
}

function getRandomColor() {
	let red = Math.random() * 255; let green = Math.random() * 255;
	let blue = Math.random() * 255;
	let color = "rgb(" + red + ", " + green + ", " + blue + ")";

	return color;
}


function drawColoredRect(x, y, width, height, color) {
	canvasContext.fillStyle = color;
	canvasContext.fillRect(x, y, width, height);
}
