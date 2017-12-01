"use strict";

export default class Vector2 {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  clone() {
    return new Vector2(this.x, this.y);
  }

  negate() {
    this.x *= -1;
    this.y *= -1;

    return this;
  }

  lengthSquared() {
    return Math.pow(this.x, 2) + Math.pow(this.y, 2);
  }

  length() {
    return Math.sqrt(this.lengthSquared());
  }

  normalize() {
    let length = this.length();
    this.x /= length, this.y /= length;

    return this;
  }

  normalized() {
    let length = this.length();
    return new Vector2(this.x / length, this.y / length);
  }

  add(vector2) {
    this.x += vector2.x;
    this.y += vector2.y;

    return this;
  }

  subtract(vector2) {
    this.x -= vector2.x;
    this.y -= vector2.y;

    return this;
  }

  scale(scalar) {
    this.x *= scalar;
    this.y *= scalar;

    return this;
  }

  scaled(scalar) {
    return new Vector2( this.x * scalar, this.y * scalar);
  }

  addScaled(vector2, scalar) {
    this.add(vector2.scaled(scalar));

    return this;
  }

  dot(vector2) {
    return this.x * vector2.x + this.y * vector2.y;
  }

  toString() {
    console.log("[x: " + this.x + ", y: " + this.y + "]");
    console.log("length: " + this.length());
  }

  static distance(vectorA, vectorB) {
    return vectorA.subtract(vectorB).length();
  }
}
