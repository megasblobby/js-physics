const X_MIN = -4, X_MAX = 4;
const Y_MIN = -10, Y_MAX = 10;
const BORDER_OFFSET = 80;
const ORIGIN_OFFSET = 20;
const X_MAJOR_LINE = 1, X_MINOR_LINE = 0.2;
const Y_MAJOR_LINE = 2, Y_MINOR_LINE = 0.5;
const X_AXIS_LABEL = "X", Y_AXIS_LABEL = "Y";
const NUMBER_OF_POINTS = 1000;
const NUMBER_OF_GRADIENTS = 50;
const INITIAL_CONDITION_X = -3, INITIAL_CONDITION_Y = 9;
let X_INCREMENT = 0;


function FunctionUtility(canvasContext) {
  this.canvasContext = canvasContext;
  this.ORIGIN_X = WIDTH / 2;
  this.ORIGIN_Y = HEIGHT/ 2;

  this.GRAPH_HEIGHT = HEIGHT - BORDER_OFFSET;
  this.GRAPH_WIDTH = WIDTH - BORDER_OFFSET;

  this.graph = new Graph(this.canvasContext,
                        X_MIN, X_MAX,
                        Y_MIN, Y_MAX,
    										this.ORIGIN_X, this.ORIGIN_Y,
                        this.GRAPH_WIDTH, this.GRAPH_HEIGHT);

  this.xValues = [];
  this.yValues = [];
  this.xForwardGradValues = [];
  this.yForwardGradValues = [];
  this.xForwardIntegralValues = [];
  this.yForwardIntegralValues = [];

  this.initValues = function() {
    let minXValue = -3, maxXValue = 3;
    X_INCREMENT = (maxXValue - minXValue) / NUMBER_OF_POINTS;

  	for (let x = minXValue; x < maxXValue; x += X_INCREMENT) {
  		let y = this.computeFunction(x);
  		this.xValues.push(x);
  		this.yValues.push(y);
  	}

    for (let i = 0; i < NUMBER_OF_POINTS - NUMBER_OF_GRADIENTS; i++ ) {
  		let y = this.computeGradient(this.xValues[i],
                                   this.xValues[i + NUMBER_OF_GRADIENTS]);
  		this.xForwardGradValues.push(this.xValues[i]);
  		this.yForwardGradValues.push(y);
  	}

    // Coords of the first point
    this.xForwardIntegralValues[0] = INITIAL_CONDITION_X;
    this.yForwardIntegralValues[0] = INITIAL_CONDITION_Y;

    for (let i = 1; i < NUMBER_OF_POINTS; i++){
    	this.xForwardIntegralValues[i] = this.xValues[i];
    	this.yForwardIntegralValues[i] = this.yForwardIntegralValues[i - 1] +    this.computeFunction(this.xForwardIntegralValues[i - 1]) * (this.xForwardIntegralValues[i]- this.xForwardIntegralValues[i - 1]);
    }
  };

  this.computeFunction = function(x) {
  	return 2 * x;
  };

  this.computeGradient = function(x1, x2) {
    return (this.computeFunction(x1) - this.computeFunction(x2)) / (x1 - x2);
  };

  this.draw = function(deltaTime) {
    drawColoredRect(0, 0, WIDTH, HEIGHT, "white");

  	this.graph.drawgrid(X_MAJOR_LINE, X_MINOR_LINE, Y_MAJOR_LINE, Y_MINOR_LINE);
  	this.graph.drawaxes(X_AXIS_LABEL, Y_AXIS_LABEL);

  	this.graph.plot(this.xValues, this.yValues, "red", false, true);
    this.graph.plot(this.xForwardGradValues, this.yForwardGradValues, "blue", false, true);
    this.graph.plot(this.xForwardIntegralValues, this.yForwardIntegralValues, "green", false, true);
  }
}
