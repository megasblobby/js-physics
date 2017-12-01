"use strict";
import Vector2 from "./libraries/vector2"

export default class Particle {
  constructor(mass = 1, charge = 0) {

    this._mass = mass;
    this._charge = charge;
    this._position = new Vector2();
    this._velocity = new Vector2();
  }

  set mass(mass) {
    this._mass = mass;
  }

  get mass() {
    return this._mass;
  }

  set charge(charge) {
    this._charge = charge;
  }

  get charge() {
    return this._charge;
  }

  set position(position) {
    this._position = position.clone();
  }

  get position() {
    return this._position;
  }
}
