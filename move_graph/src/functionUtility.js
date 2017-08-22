const X_MIN = -10, X_MAX = 10;
const Y_MIN = -50, Y_MAX = 50;
const BORDER_OFFSET = 80;
const ORIGIN_OFFSET = 20;
const X_MAJOR_LINE = 1, X_MINOR_LINE = 0.5;
const Y_MAJOR_LINE = 10, Y_MINOR_LINE = 5;
const X_AXIS_LABEL = "X", Y_AXIS_LABEL = "Y";
const X_ICREMENT = 0.1

function FunctionUtility(canvasContext) {
  this.canvasContext = canvasContext;
  this.ORIGIN_X = WIDTH / 2;
  this.ORIGIN_Y = HEIGHT/ 2;

  this.GRAPH_HEIGHT = HEIGHT - BORDER_OFFSET;
  this.GRAPH_WIDTH = WIDTH - BORDER_OFFSET;

  this.X_SCALE = (X_MAX - X_MIN) / this.GRAPH_WIDTH;
  this.Y_SCALE = (Y_MAX - Y_MIN) / this.GRAPH_HEIGHT;

  this.graph = new Graph(this.canvasContext,
                        X_MIN, X_MAX,
                        Y_MIN, Y_MAX,
    										this.ORIGIN_X, this.ORIGIN_Y,
                        this.GRAPH_WIDTH, this.GRAPH_HEIGHT);

  this.xValues = [];
  this.yValues = [];

  this.initValues = function() {
    let minXValue = -10, maxXValue = 10;

  	for (let x = minXValue; x < maxXValue; x += X_ICREMENT) {
  		let y = this.computeFunction(x);
  		this.xValues.push(x);
  		this.yValues.push(y);
  	}
  };

  this.computeFunction = function(x) {
  	return (x+3.6)*(x+2.5)*(x+1)*(x-0.5)*(x-2)*(x-3.5)*Math.exp(-x*x/4);
  };

  this.draw = function(deltaTime) {
    drawColoredRect(0, 0, WIDTH, HEIGHT, "white");

  	this.graph.drawgrid(X_MAJOR_LINE, X_MINOR_LINE, Y_MAJOR_LINE, Y_MINOR_LINE);
  	this.graph.drawaxes(X_AXIS_LABEL, Y_AXIS_LABEL);
  	this.graph.plot(this.xValues, this.yValues, "blue", false, true);
  }
}
