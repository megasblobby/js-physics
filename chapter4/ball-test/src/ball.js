"use strict";

class Ball extends Particle {
  constructor(position, radius, color) {
    super();
    this.position = position;
    this.radius = radius;
    this.color = color;
    this.gradient = null;
    this.internalRadius = 0;
  }

  draw(canvasContext) {
    this.gradient = canvasContext.createRadialGradient(this.position.x,
                                                       this.position.y,
                                                       this.internalRadius,
                                                       this.position.x,
                                                       this.position.y,
                                                       this.radius);

    this.gradient.addColorStop(0, "#ffffff");
    this.gradient.addColorStop(1, this.color);
    canvasContext.fillStyle = this.gradient;
    canvasContext.beginPath();
    canvasContext.arc(this.position.x, this.position.y,
                      this.radius, 0, Math.PI * 2);
    canvasContext.closePath();
    canvasContext.fill();
  }
}
