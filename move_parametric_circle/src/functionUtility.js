const X_MIN = -2, X_MAX = 2;
const Y_MIN = -2, Y_MAX = 2;
const BORDER_OFFSET = 80;
const ORIGIN_OFFSET = 20;
const X_MAJOR_LINE = 1, X_MINOR_LINE = 0.1;
const Y_MAJOR_LINE = 1, Y_MINOR_LINE = 0.1;
const X_AXIS_LABEL = "X", Y_AXIS_LABEL = "Y";
const X_ICREMENT = 0.01;

function FunctionUtility(canvasContext) {
  this.canvasContext = canvasContext;
  this.ORIGIN_X = WIDTH / 2;
  this.ORIGIN_Y = HEIGHT/ 2;

  this.GRAPH_HEIGHT = HEIGHT - BORDER_OFFSET;
  this.GRAPH_WIDTH =   this.GRAPH_HEIGHT;

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
    let minXValue = -1, maxXValue = 1;
  	for (let i = 0; i < 1000; i++) {
      let t = i * 0.01;

      this.xValues.push(Math.sin(t));
  		this.yValues.push(Math.cos(t));
  	}
  };

  this.computeFunction = function(x) {
  	return Math.sqrt(1 - Math.pow(x, 2));
  };

  this.draw = function(deltaTime) {
    drawColoredRect(0, 0, WIDTH, HEIGHT, "white");

  	this.graph.drawgrid(X_MAJOR_LINE, X_MINOR_LINE, Y_MAJOR_LINE, Y_MINOR_LINE);
  	this.graph.drawaxes(X_AXIS_LABEL, Y_AXIS_LABEL);
  	this.graph.plot(this.xValues, this.yValues, "blue", false, true);
  }
}
