const MILLISECONDS_TO_SECONDS = 1/1000;
const X_MIN = -10, X_MAX = 10;
const Y_MIN = 0, Y_MAX = 10;
const BORDER_OFFSET = 80;
const ORIGIN_OFFSET = 20;
const X_MAJOR_LINE = 1, X_MINOR_LINE = 0.5;
const Y_MAJOR_LINE = 1, Y_MINOR_LINE = 0.5;
const X_AXIS_LABEL = "X", Y_AXIS_LABEL = "Y";
const X_ICREMENT = 0.1

let WIDTH, HEIGHT;
let ORIGIN_X, ORIGIN_Y;
let GRAPH_WIDTH, GRAPH_HEIGHT;

let canvas, canvasContext;
let time, oldTime;
let graph;

let xValues = [];
let yValues = [];

window.onload = function () {
	canvas = document.getElementById("gameCanvas");
	canvasContext = canvas.getContext("2d");

	WIDTH = canvas.width, HEIGHT = canvas.height;

	ORIGIN_X = WIDTH / 2;
	ORIGIN_Y = HEIGHT - ORIGIN_OFFSET;

	GRAPH_HEIGHT = HEIGHT - BORDER_OFFSET;
	GRAPH_WIDTH = WIDTH - BORDER_OFFSET;

	time = new Date().getTime();
	oldTime = time;

	graph = new Graph(canvasContext, X_MIN, X_MAX, Y_MIN, Y_MAX,
										ORIGIN_X, ORIGIN_Y, GRAPH_WIDTH, GRAPH_HEIGHT);

	let minXValue = -3.1, maxXValue = 3.2;
	for (let x = minXValue; x < maxXValue; x += X_ICREMENT) {
		let y = Math.pow(x, 2);
		xValues.push(x);
		yValues.push(y);
	}

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
	drawColoredRect(0, 0, WIDTH, HEIGHT, "white");

	graph.drawgrid(X_MAJOR_LINE, X_MINOR_LINE, Y_MAJOR_LINE, Y_MINOR_LINE);
	graph.drawaxes(X_AXIS_LABEL, Y_AXIS_LABEL);
	graph.plot(xValues, yValues, "blue", false, true);
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
