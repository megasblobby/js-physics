"use strict";

import AssetManager from "./asset-manager";

const MILLISECONDS_TO_SECONDS = 1/1000;
const DEFAULT_CANVAS_WIDTH = 800;
const DEFAULT_CANVAS_HEIGHT = 600;

export default class Engine {
  constructor(width = DEFAULT_CANVAS_WIDTH, height = DEFAULT_CANVAS_HEIGHT) {
    this._time = new Date().getTime();
    this._oldTime = this._time;
    this._deltaTime = 0;

    this._canvas = null;
    this._canvasContext = null;
    this._initCanvas(width, height);

    this._assetManager = new AssetManager();
    this._assetManager.observable.register("all-assets-loaded", this);
  }

  _initCanvas(width, height) {
    let canvas = document.createElement("canvas");
    canvas.width = this._validateSize(width, "width", DEFAULT_CANVAS_WIDTH);
    canvas.height = this._validateSize(height, "height", DEFAULT_CANVAS_HEIGHT);
    canvas.id = "gameCanvas";
    document.body.appendChild(canvas);

    this._canvas = canvas;
    this._canvasContext = this.canvas.getContext("2d");
  }

  _setCallbacks(canvas, inputManager) {
  }

  preload() {}

  _loadAssets(target) {
    target();

    this._assetManager.loadAssets();
  }

  _startGame() {
    this.init();
    this.loop();
  }

  init() {}

  update(deltaTime) {}

  render(deltaTime) {}

  _computeDeltaTime () {
    this._time = new Date().getTime();
  	this._deltaTime = (this._time - this._oldTime) * MILLISECONDS_TO_SECONDS;
  	this._oldTime = this._time;
  }

  loop () {
    this._computeDeltaTime();

    this.update(this._deltaTime);
    this.render(this._deltaTime);

    requestAnimationFrame(this.loop.bind(this));
  }

  onNotify (subject, object) {
    if (subject === "all-assets-loaded") {
      console.log(this._assetManager.assets);
      this._startGame();
    }
  }

  _validateSize(size, name, defaultValue) {
    if (typeof size !== "number") {
      console.log(`canvas ${name} must be a number, assigning default value: ${defaultValue}`);
      size = defaultValue
    }
    else if (size <= 0) {
      console.log(`canvas ${name} must be greater than zero, assigning default value: ${defaultValue}`);
      size = defaultValue
    }

    return size;
  }

  // GETTERS SETTERS
  set canvasWidth(width) {
    this.canvas.width = this._validateSize(width, "width", DEFAULT_CANVAS_WIDTH);
  }

  get canvasWidth() {
    return this._canvas.width;
  }

  set canvasHeight(height) {
    this._canvas.heigth = this._validateSize(height, "height", DEFAULT_CANVAS_HEIGHT);
  }

  get canvasHeight() {
    return this._canvas.heigth;
  }

  get canvas() {
    return this._canvas;
  }

  get canvasContext() {
    return this._canvasContext;
  }

  get assetManager() {
    return this._assetManager;
  }
}
