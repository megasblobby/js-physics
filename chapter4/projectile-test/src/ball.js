"use strict";

import Particle from "./particle"

export default class Ball extends Particle {
  constructor(position, radius, color) {
    super();
    this._position = position;
    this.radius = radius;
    this.color = color;
    this.gradient = null;
    this.internalRadius = 0;
  }

  render(canvasContext) {
    this.gradient = canvasContext.createRadialGradient(this._position.x,
                                                       this._position.y,
                                                       this.internalRadius,
                                                       this._position.x,
                                                       this._position.y,
                                                       this.radius);

    this.gradient.addColorStop(0, "#ffffff");
    this.gradient.addColorStop(1, this.color);
    canvasContext.fillStyle = this.gradient;
    canvasContext.beginPath();
    canvasContext.arc(this._position.x, this._position.y,
                      this.radius, 0, Math.PI * 2);
    canvasContext.closePath();
    canvasContext.fill();
  }
}
