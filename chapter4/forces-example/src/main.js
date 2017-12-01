import Engine from "../src/libraries/engine";
import Vector2 from "../src/libraries/vector2";
import Ball from "../src/ball";
import GraphUtility from "../src/graph-utility";

const K = 0.5;
const INITIAL_POSITION = new Vector2(40, 50);
const SCALE = 1;
const GRAVITY = new Vector2(0, 9.8 * SCALE);
const ACCELERATION = GRAVITY;
const MAX_TIME = 30;
const MAX_Y = 580;

let canvasContext;
let ball;
let accelerationGraph;
let velocityGraph;
let time = 0;

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

  let color = "#222222";

  ball = new Ball(INITIAL_POSITION, radius, color);
  ball.velocity = new Vector2(0, 0);

  canvasContext = this._canvasContext;

  accelerationGraph = new GraphUtility(canvasContext, {
    'origin' : new Vector2(100, 230),
    'sizes' : new Vector2(600, 200),
    'maxCoords' : new Vector2(30, 10),
    'minCoords' : new Vector2(0, 0),
    'majorLines' : new Vector2(5, 5),
    'minorLines' : new Vector2(1, 1),
    'labels' : {'x' : 'time (s)', 'y' : 'acceleration (px/s/s)'}
  });
	velocityGraph = new GraphUtility(canvasContext, {
    'origin' : new Vector2(100, 530),
    'sizes' : new Vector2(600, 200),
    'maxCoords' : new Vector2(30, 25),
    'minCoords' : new Vector2(0, 0),
    'majorLines' : new Vector2(5, 5),
    'minorLines' : new Vector2(1, 1),
    'labels' : {'x' : 'time (s)', 'y' : 'velocity (px/s)'}
  });
}

function update(deltaTime) {
  time += deltaTime;

  if (time > MAX_TIME) {
    time = MAX_TIME;
  }

  ball.position.addScaled(ball.velocity, deltaTime);

  if (ball.position.y > MAX_Y) {
    ball.position.y = MAX_Y;
  }

  let force = getForce(ball.mass, GRAVITY, ball.velocity, K);
  let acceleration = getAcceleration(ball.mass, force);
  ball.velocity.addScaled(acceleration, deltaTime);

  accelerationGraph.addCoord(new Vector2(time, acceleration.y));
  velocityGraph.addCoord(new Vector2(time, ball.velocity.y));
}

function getForce(mass, gravity, velocity, k) {
  let force = new Vector2(mass * gravity.x - k * velocity.x,
                          mass * gravity.y - k * velocity.y);
  return force;
}

function getAcceleration(mass, force) {
  let acceleration = force.scaled(1 / mass);
  return acceleration;
}

function render(deltaTime) {
  canvasContext.fillStyle = "#FFFFFF";
	canvasContext.fillRect(0, 0, this._canvas.width, this._canvas.height);

  ball.render(canvasContext);
  accelerationGraph.render(deltaTime);
  velocityGraph.render(deltaTime);
}
