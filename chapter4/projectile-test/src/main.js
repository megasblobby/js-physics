import Engine from "../src/libraries/engine";
import Vector2 from "../src/libraries/vector2";
import Ball from "../src/ball";

const SCALE = 10;
const INITIAL_POSITION = new Vector2(40, 500);
const INITIAL_VELOCITY = new Vector2(5 * SCALE, -20 * SCALE);
const GRAVITY = new Vector2(0, 9.8 * SCALE);
const ACCELERATION = GRAVITY;

let ball;
let ball2;

let initialPosition = INITIAL_POSITION.clone();
let initialVelocity = INITIAL_VELOCITY.clone();

let canvasContext;

window.onload = function() {
  const engine = new Engine();
  engine.init = init.bind(engine);
  engine.update = update.bind(engine);
  engine.render = render.bind(engine);

  engine.init();
  engine.loop();
}

function init() {
  let radius = 15;

  let color = "#bbbbbb";
  let color2 = "#222222";

  ball = new Ball(INITIAL_POSITION, radius, color);
  ball.velocity = INITIAL_VELOCITY;
  ball2 = new Ball(INITIAL_POSITION, radius, color2);
  ball2.velocity = INITIAL_VELOCITY;

  canvasContext = this._canvasContext;
}

function update(deltaTime) {
  ball.position.addScaled(ball.velocity, deltaTime);
  ball.velocity.addScaled(ACCELERATION, deltaTime);

  // Physics for JavaScript Games, Animation and Simulations pag. 89
  let position = INITIAL_POSITION.clone().addScaled(INITIAL_VELOCITY, deltaTime).addScaled(ACCELERATION,0.5 * deltaTime * deltaTime);
  ball2.position = position;
  // Physics for JavaScript Games, Animation and Simulations pag. 89
  let velocity = INITIAL_VELOCITY.clone().addScaled(ACCELERATION, deltaTime);
  ball2.velocity = velocity;
}

function render(deltaTime) {
  canvasContext.fillStyle = "#000000";
	canvasContext.fillRect(0, 0, this._canvas.width, this._canvas.height);

  ball.render(canvasContext);
  ball2.render(canvasContext);
  console.log("render");
}
