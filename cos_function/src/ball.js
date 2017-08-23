function Ball(x = 0, y = 0) {
  this.x = x;
  this.y = y;
  this.radius = 1;

  this.draw = function(delta) {
    drawColoredCircle(this.x, this.y, this.radius, "red");
  }
}
