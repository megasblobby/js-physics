import Engine from "../src/libraries/engine";
import Vector2 from "../src/libraries/vector2";
import Ball from "../src/ball";

let ball;
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
  let position = new Vector2(40, 100);
  let radius = 5;
  let color = "#bbbbbb";
  ball = new Ball(position, radius, color);

  canvasContext = this._canvasContext;
}

function update(deltaTime) {
  console.log("update");
}

function render(deltaTime) {
  ball.render(canvasContext);
  console.log("render");
}
