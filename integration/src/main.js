const MILLISECONDS_TO_SECONDS = 1/1000;

let WIDTH, HEIGHT;

let canvas, canvasContext;
let time, oldTime;

let functionUtility = new FunctionUtility();

let counter = 0;

window.onload = function () {
	canvas = document.getElementById("gameCanvas");
	canvasContext = canvas.getContext("2d");

	WIDTH = canvas.width, HEIGHT = canvas.height;

	time = new Date().getTime();
	oldTime = time;

	functionUtility = new FunctionUtility(canvasContext);
	functionUtility.initValues();

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
}

function draw(deltaTime) {
	functionUtility.draw(deltaTime);
}
