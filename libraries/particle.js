"use strict";

class Particle {
  constructor(mass = 1, charge = 0) {

    this.mass = mass;
    this.charge = charge;
    this.position = new Vector2();
    this.velocity = new Vector2();
  }
}
