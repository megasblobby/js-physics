const MILLISECONDS_TO_SECONDS = 1/1000;

let WIDTH, HEIGHT;

let canvas, canvasContext;
let time, oldTime;

let functionUtility = new FunctionUtility();


let ball;
let counter = 0;

window.onload = function () {
	canvas = document.getElementById("gameCanvas");
	canvasContext = canvas.getContext("2d");

	WIDTH = canvas.width, HEIGHT = canvas.height;

	time = new Date().getTime();
	oldTime = time;

	functionUtility = new FunctionUtility(canvasContext);
	functionUtility.initValues();

	ball = new Ball();
	ball.radius = 10;

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
	if (counter < functionUtility.xValues.length) {
		ball.x = functionUtility.xValues[counter] /
		 												functionUtility.X_SCALE + functionUtility.ORIGIN_X;
		ball.y = -functionUtility.yValues[counter] /
														functionUtility.Y_SCALE + functionUtility.ORIGIN_Y ;

		counter++;
	}
}

function draw(deltaTime) {
	functionUtility.draw(deltaTime);
	
	ball.draw(deltaTime);
}
