import Graph from "./graph";
import {drawColoredRect} from "./libraries/graphics-routines";

export default class GraphUtility {
  constructor(canvasContext, initializer) {
    this._canvasContext = canvasContext;
    this._origin = initializer.origin;
    this._sizes = initializer.sizes;
    this._maxCoords = initializer.maxCoords;
    this._minCoords = initializer.minCoords;

    this._majorLines = initializer.majorLines;
    this._minorLines = initializer.minorLines;
    this._labels = initializer.labels;

    this.graph = new Graph(this._canvasContext,
                           this._minCoords.x, this._maxCoords.x,
                           this._minCoords.y, this._maxCoords.y,
      										 this._origin.x, this._origin.y,
                           this._sizes.x, this._sizes.y);

    this._xValues = new Array();
    this._yValues = new Array();
  }

  initValues() {
    let minXValue = -Math.PI * 4, maxXValue = Math.PI * 4;

  	for (let x = minXValue; x < maxXValue; x += X_ICREMENT) {
  		let y = this.computeFunction(x);
  		this.xValues.push(x);
  		this.yValues.push(y);
  	}
  }

  computeFunction(x) {
  	return Math.cos(x);
  }

  render(deltaTime) {
    this.graph.drawgrid(this._majorLines.x, this._minorLines.x,
                        this._majorLines.y, this._minorLines.y);
  	this.graph.drawaxes(this._labels.x, this._labels.y);
  	this.graph.plot(this._xValues, this._yValues, "#ff0000", false, true);
  }

  addCoord(coord) {
    this._xValues.push(coord.x);
    this._yValues.push(coord.y);
  }
}
