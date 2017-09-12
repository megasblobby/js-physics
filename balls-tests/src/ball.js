"use strict";

class Ball extends Particle {
  constructor(position, radius, color) {
    super();
    this.position = position;
    this.radius = radius;
    this.color = color;
  }

  draw(canvasContext) {
    canvasContext.fillStyle = this.color;
  	canvasContext.beginPath();
  	canvasContext.arc(this.position.x, this.position.y,
                      this.radius, 0, Math.PI * 2);
  	canvasContext.fill();
  }
}
