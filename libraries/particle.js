"use strict";

class Particle {
  constructor(mass = 1, charge = 0) {

    this.mass = mass;
    this.charge = charge;
    this.position = new Vector2();
    this.velocity = new Vector2();
  }

  getMass() {
    return this.mass;
  }

  setMass(mass) {
    this.mass = mass;
  }

  getCharge() {
    return this.charge;
  }

  setCharge(charge) {
    this.charge = charge;
  }

  getPosition() {
    return this.position;
  }

  setPosition(position) {
    this.position = position.clone();
  }
}
