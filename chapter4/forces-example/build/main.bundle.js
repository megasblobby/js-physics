/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vector2 = function () {
  function Vector2() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Vector2);

    this.x = x;
    this.y = y;
  }

  _createClass(Vector2, [{
    key: "clone",
    value: function clone() {
      return new Vector2(this.x, this.y);
    }
  }, {
    key: "negate",
    value: function negate() {
      this.x *= -1;
      this.y *= -1;

      return this;
    }
  }, {
    key: "lengthSquared",
    value: function lengthSquared() {
      return Math.pow(this.x, 2) + Math.pow(this.y, 2);
    }
  }, {
    key: "length",
    value: function length() {
      return Math.sqrt(this.lengthSquared());
    }
  }, {
    key: "normalize",
    value: function normalize() {
      var length = this.length();
      this.x /= length, this.y /= length;

      return this;
    }
  }, {
    key: "normalized",
    value: function normalized() {
      var length = this.length();
      return new Vector2(this.x / length, this.y / length);
    }
  }, {
    key: "add",
    value: function add(vector2) {
      this.x += vector2.x;
      this.y += vector2.y;

      return this;
    }
  }, {
    key: "subtract",
    value: function subtract(vector2) {
      this.x -= vector2.x;
      this.y -= vector2.y;

      return this;
    }
  }, {
    key: "scale",
    value: function scale(scalar) {
      this.x *= scalar;
      this.y *= scalar;

      return this;
    }
  }, {
    key: "scaled",
    value: function scaled(scalar) {
      return new Vector2(this.x * scalar, this.y * scalar);
    }
  }, {
    key: "addScaled",
    value: function addScaled(vector2, scalar) {
      this.add(vector2.scaled(scalar));

      return this;
    }
  }, {
    key: "dot",
    value: function dot(vector2) {
      return this.x * vector2.x + this.y * vector2.y;
    }
  }, {
    key: "toString",
    value: function toString() {
      console.log("[x: " + this.x + ", y: " + this.y + "]");
      console.log("length: " + this.length());
    }
  }], [{
    key: "distance",
    value: function distance(vectorA, vectorB) {
      return vectorA.subtract(vectorB).length();
    }
  }]);

  return Vector2;
}();

exports.default = Vector2;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _engine = __webpack_require__(3);

var _engine2 = _interopRequireDefault(_engine);

var _vector = __webpack_require__(0);

var _vector2 = _interopRequireDefault(_vector);

var _ball = __webpack_require__(8);

var _ball2 = _interopRequireDefault(_ball);

var _graphUtility = __webpack_require__(10);

var _graphUtility2 = _interopRequireDefault(_graphUtility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var K = 0.5;
var INITIAL_POSITION = new _vector2.default(40, 50);
var SCALE = 1;
var GRAVITY = new _vector2.default(0, 9.8 * SCALE);
var ACCELERATION = GRAVITY;
var MAX_TIME = 30;
var MAX_Y = 580;

var canvasContext = void 0;
var ball = void 0;
var accelerationGraph = void 0;
var velocityGraph = void 0;
var time = 0;

window.onload = function () {
  var engine = new _engine2.default();
  engine.init = init.bind(engine);
  engine.update = update.bind(engine);
  engine.render = render.bind(engine);

  engine.init();
  engine.loop();
};

function init() {
  var radius = 15;

  var color = "#222222";

  ball = new _ball2.default(INITIAL_POSITION, radius, color);
  ball.velocity = new _vector2.default(0, 0);

  canvasContext = this._canvasContext;

  accelerationGraph = new _graphUtility2.default(canvasContext, {
    'origin': new _vector2.default(100, 230),
    'sizes': new _vector2.default(600, 200),
    'maxCoords': new _vector2.default(30, 10),
    'minCoords': new _vector2.default(0, 0),
    'majorLines': new _vector2.default(5, 5),
    'minorLines': new _vector2.default(1, 1),
    'labels': { 'x': 'time (s)', 'y': 'acceleration (px/s/s)' }
  });
  velocityGraph = new _graphUtility2.default(canvasContext, {
    'origin': new _vector2.default(100, 530),
    'sizes': new _vector2.default(600, 200),
    'maxCoords': new _vector2.default(30, 25),
    'minCoords': new _vector2.default(0, 0),
    'majorLines': new _vector2.default(5, 5),
    'minorLines': new _vector2.default(1, 1),
    'labels': { 'x': 'time (s)', 'y': 'velocity (px/s)' }
  });
}

function update(deltaTime) {
  time += deltaTime;

  if (time > MAX_TIME) {
    time = MAX_TIME;
  }

  ball.position.addScaled(ball.velocity, deltaTime);

  if (ball.position.y > MAX_Y) {
    ball.position.y = MAX_Y;
  }

  var force = getForce(ball.mass, GRAVITY, ball.velocity, K);
  var acceleration = getAcceleration(ball.mass, force);
  ball.velocity.addScaled(acceleration, deltaTime);

  accelerationGraph.addCoord(new _vector2.default(time, acceleration.y));
  velocityGraph.addCoord(new _vector2.default(time, ball.velocity.y));
}

function getForce(mass, gravity, velocity, k) {
  var force = new _vector2.default(mass * gravity.x - k * velocity.x, mass * gravity.y - k * velocity.y);
  return force;
}

function getAcceleration(mass, force) {
  var acceleration = force.scaled(1 / mass);
  return acceleration;
}

function render(deltaTime) {
  canvasContext.fillStyle = "#FFFFFF";
  canvasContext.fillRect(0, 0, this._canvas.width, this._canvas.height);

  ball.render(canvasContext);
  accelerationGraph.render(deltaTime);
  velocityGraph.render(deltaTime);
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _assetManager = __webpack_require__(4);

var _assetManager2 = _interopRequireDefault(_assetManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MILLISECONDS_TO_SECONDS = 1 / 1000;
var DEFAULT_CANVAS_WIDTH = 800;
var DEFAULT_CANVAS_HEIGHT = 600;

var Engine = function () {
  function Engine() {
    var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_CANVAS_WIDTH;
    var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_CANVAS_HEIGHT;

    _classCallCheck(this, Engine);

    this._time = new Date().getTime();
    this._oldTime = this._time;
    this._deltaTime = 0;

    this._canvas = null;
    this._canvasContext = null;
    this._initCanvas(width, height);

    this._assetManager = new _assetManager2.default();
    this._assetManager.observable.register("all-assets-loaded", this);
  }

  _createClass(Engine, [{
    key: "_initCanvas",
    value: function _initCanvas(width, height) {
      var canvas = document.createElement("canvas");
      canvas.width = this._validateSize(width, "width", DEFAULT_CANVAS_WIDTH);
      canvas.height = this._validateSize(height, "height", DEFAULT_CANVAS_HEIGHT);
      canvas.id = "gameCanvas";
      document.body.appendChild(canvas);

      this._canvas = canvas;
      this._canvasContext = this.canvas.getContext("2d");
    }
  }, {
    key: "_setCallbacks",
    value: function _setCallbacks(canvas, inputManager) {}
  }, {
    key: "preload",
    value: function preload() {}
  }, {
    key: "_loadAssets",
    value: function _loadAssets(target) {
      target();

      this._assetManager.loadAssets();
    }
  }, {
    key: "_startGame",
    value: function _startGame() {
      this.init();
      this.loop();
    }
  }, {
    key: "init",
    value: function init() {}
  }, {
    key: "update",
    value: function update(deltaTime) {}
  }, {
    key: "render",
    value: function render(deltaTime) {}
  }, {
    key: "_computeDeltaTime",
    value: function _computeDeltaTime() {
      this._time = new Date().getTime();
      this._deltaTime = (this._time - this._oldTime) * MILLISECONDS_TO_SECONDS;
      this._oldTime = this._time;
    }
  }, {
    key: "loop",
    value: function loop() {
      this._computeDeltaTime();

      this.update(this._deltaTime);
      this.render(this._deltaTime);

      requestAnimationFrame(this.loop.bind(this));
    }
  }, {
    key: "onNotify",
    value: function onNotify(subject, object) {
      if (subject === "all-assets-loaded") {
        console.log(this._assetManager.assets);
        this._startGame();
      }
    }
  }, {
    key: "_validateSize",
    value: function _validateSize(size, name, defaultValue) {
      if (typeof size !== "number") {
        console.log("canvas " + name + " must be a number, assigning default value: " + defaultValue);
        size = defaultValue;
      } else if (size <= 0) {
        console.log("canvas " + name + " must be greater than zero, assigning default value: " + defaultValue);
        size = defaultValue;
      }

      return size;
    }

    // GETTERS SETTERS

  }, {
    key: "canvasWidth",
    set: function set(width) {
      this.canvas.width = this._validateSize(width, "width", DEFAULT_CANVAS_WIDTH);
    },
    get: function get() {
      return this._canvas.width;
    }
  }, {
    key: "canvasHeight",
    set: function set(height) {
      this._canvas.heigth = this._validateSize(height, "height", DEFAULT_CANVAS_HEIGHT);
    },
    get: function get() {
      return this._canvas.heigth;
    }
  }, {
    key: "canvas",
    get: function get() {
      return this._canvas;
    }
  }, {
    key: "canvasContext",
    get: function get() {
      return this._canvasContext;
    }
  }, {
    key: "assetManager",
    get: function get() {
      return this._assetManager;
    }
  }]);

  return Engine;
}();

exports.default = Engine;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _observable = __webpack_require__(5);

var _observable2 = _interopRequireDefault(_observable);

var _imageLoader = __webpack_require__(6);

var _imageLoader2 = _interopRequireDefault(_imageLoader);

var _jsonLoader = __webpack_require__(7);

var _jsonLoader2 = _interopRequireDefault(_jsonLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IMAGE = "Image";
var JSON = "JSON";

var AssetManager = function () {
  function AssetManager() {
    _classCallCheck(this, AssetManager);

    this._assetsToLoad = new Map();
    this._assets = new Map();
    this._promises = new Map();
    this._imageLoader = new _imageLoader2.default();
    this._JSONLoader = new _jsonLoader2.default();
    this._observable = new _observable2.default();
  }

  _createClass(AssetManager, [{
    key: "addImage",
    value: function addImage(id, path) {
      this._addAsset(id, path, IMAGE);
    }
  }, {
    key: "addJSON",
    value: function addJSON(id, path) {
      this._addAsset(id, path, JSON);
    }
  }, {
    key: "_addAsset",
    value: function _addAsset(id, path, type) {
      if (typeof id !== "string" || id === "") {
        console.error(type + "'s ID specified is not valid: " + id);
        return null;
      }
      if (this._assets.has(id)) {
        console.error(type + "'s ID specified is already taken: " + id);
        return null;
      }

      if (typeof path !== "string" || path === "") {
        console.error(type + "'s path specified is not valid: " + path);
        return null;
      }

      this._assetsToLoad.set(id, { "path": path, "type": type });
    }
  }, {
    key: "loadAssets",
    value: function loadAssets() {
      var _this = this;

      this._assetsToLoad.forEach(this._loadAsset, this);

      Promise.all(this._promises.values()).then(function (values) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _this._promises.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var promise = _step.value;

            promise.then(function (asset) {
              _this._assets.set(asset.key, asset.value);
            });
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        _this._observable.notify("all-assets-loaded");
      });
    }
  }, {
    key: "_loadAsset",
    value: function _loadAsset(value, key, map) {
      var asset = { key: key, "path": value.path, "type": value.type };

      switch (asset.type) {
        case IMAGE:
          {
            this._promises.set(asset.key, this._imageLoader.load(asset.key, asset.path));
            break;
          }
        case JSON:
          {
            this._promises.set(asset.key, this._JSONLoader.load(asset.key, asset.path));
            break;
          }
        default:
          {
            console.error("Type " + asset.type + " is not recognized");
            return null;
          }
      }
    }
  }, {
    key: "observable",
    get: function get() {
      return this._observable;
    }
  }, {
    key: "assets",
    get: function get() {
      return this._assets;
    }
  }]);

  return AssetManager;
}();

exports.default = AssetManager;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function register(subject, observer) {
  this._validate(subject, "subject");
  this._validate(observer, "observer");

  if (this.subjects.has(subject) === false) {
    this.subjects.set(subject, new Array());
  }
  this.subjects.get(subject).push(observer);
}

function notify(subject) {
  var object = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  this._validate(subject, "subject");

  if (this._subjects.has(subject)) {
    var observers = this.subjects.get(subject);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = observers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var observer = _step.value;

        observer.onNotify(subject, object);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  } else {
    console.warn("Subject " + subject + " is not a registered subject!");
  }
}

/*function validate(target, key, descriptor) {
  let _arguments = [...descriptor.value];
  for (let arguments of _arguments) {
    if (target === null || typeof target === "undefined") {
      let errorMessage = `${name} can not be ${target}!`;
      throw errorMessage;
    }
  }
}*/

var Observable = function () {
  function Observable() {
    _classCallCheck(this, Observable);

    this._subjects = new Map();

    this.register = register.bind(this);
    this.notify = notify.bind(this);
  }

  _createClass(Observable, [{
    key: "_validate",
    value: function _validate(target, name) {
      if (target === null || typeof target === "undefined") {
        var errorMessage = name + " can not be " + target + "!";
        throw errorMessage;
      }

      return target;
    }
  }, {
    key: "subjects",
    set: function set(subjects) {
      this._subjects = this._validate(subjects, "subjects");
    },
    get: function get() {
      return this._subjects;
    }
  }]);

  return Observable;
}();

exports.default = Observable;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* TODO: non ci deve essere un image-loader o un music-loader (almeno non
	 accessibili) esternamente. La soluzione è usare un AssetManager che tramite
	 la funzione load carica i vari assets: load(assetName, path). Gli assets
	 vengono aggiunti ad un dizionario 'assets' le cui chiavi sono rappresentate
	 da assetName mentre il valore è l'asset vero e prorio. Quindi gli assets da
	 caricare verranno specificati utilizando le varie funzioni dell'AssetManager:
	 loadImage, loadSound, loadJSON ecc. queste funzioni hanno lo scopo di
	 popolare un Array 'assetsToLoad' contente un oggetto simile a questo
	 {path: "path", type: "image"}, il 'type' sarà indicato dalle funzioni
	 citate prima. L'AssetManager deve essere utilizzato in una funzione
	 (asincrona?) 'preload' che verrà eseguita prima dell'inizio del gioco. Una
	 volta ricevuto l'ok che tutti gli asset sono stati caricati, tramite il
	 pattern observer, verrà invocata la funzione '_startGame': questa invocherà
	 la funzione 'initGame' (sovrascrivibile dall'utente) e successivamente verrà
	 quindi avviato il gameLoop */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var REQUEST_DONE = 4;
var RESPONSE_READY = 200;

var ImageLoader = function () {
  function ImageLoader() {
    _classCallCheck(this, ImageLoader);
  }

  _createClass(ImageLoader, [{
    key: "load",
    value: function load(key, filePath) {
      this._validate(key);
      this._validate(filePath);
      return new Promise(function (resolve, reject) {
        var image = document.createElement("img");
        image.src = filePath;
        image.onloadstart = function () {};
        image.onload = function () {
          resolve({ key: key, "value": image });
        };
        image.onerror = function () {
          reject(filePath);
        };
      });
    }
  }, {
    key: "_validate",
    value: function _validate(target, name) {
      if (target === null || typeof target === "undefined") {
        var errorMessage = name + " can not be " + target + "!";
        throw errorMessage;
      } else if (target == "") {
        var _errorMessage = name + " can not be an empty string!";
        throw _errorMessage;
      }

      return target;
    }
  }]);

  return ImageLoader;
}();

exports.default = ImageLoader;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var REQUEST_DONE = 4;
var RESPONSE_READY = 200;
var REQUEST_METHOD = "GET";
var IS_ASYNCRONOUS_REQUEST = true;

var JSONLoader = function () {
  function JSONLoader() {
    _classCallCheck(this, JSONLoader);
  }

  _createClass(JSONLoader, [{
    key: "load",
    value: function load(key, filePath) {
      this._validate(key);
      this._validate(filePath);
      return new Promise(function (resolve, reject) {
        var request = new XMLHttpRequest();
        request.open(REQUEST_METHOD, filePath, IS_ASYNCRONOUS_REQUEST);
        request.onload = function () {
          if (request.readyState === REQUEST_DONE && request.status === RESPONSE_READY) {
            resolve(request.response);
          } else {
            reject(request.statusText);
          }
        };
        request.onerror = function () {
          return reject(request.statusText);
        };
        request.send();
      });
    }
  }, {
    key: "_validate",
    value: function _validate(target, name) {
      if (target === null || typeof target === "undefined") {
        var errorMessage = name + " can not be " + target + "!";
        throw errorMessage;
      } else if (target == "") {
        var _errorMessage = name + " can not be an empty string!";
        throw _errorMessage;
      }

      return target;
    }
  }]);

  return JSONLoader;
}();

exports.default = JSONLoader;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _particle = __webpack_require__(9);

var _particle2 = _interopRequireDefault(_particle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ball = function (_Particle) {
  _inherits(Ball, _Particle);

  function Ball(position, radius, color) {
    _classCallCheck(this, Ball);

    var _this = _possibleConstructorReturn(this, (Ball.__proto__ || Object.getPrototypeOf(Ball)).call(this));

    _this._position = position;
    _this.radius = radius;
    _this.color = color;
    _this.gradient = null;
    _this.internalRadius = 0;
    return _this;
  }

  _createClass(Ball, [{
    key: "render",
    value: function render(canvasContext) {
      this.gradient = canvasContext.createRadialGradient(this._position.x, this._position.y, this.internalRadius, this._position.x, this._position.y, this.radius);

      this.gradient.addColorStop(0, "#ffffff");
      this.gradient.addColorStop(1, this.color);
      canvasContext.fillStyle = this.gradient;
      canvasContext.beginPath();
      canvasContext.arc(this._position.x, this._position.y, this.radius, 0, Math.PI * 2);
      canvasContext.closePath();
      canvasContext.fill();
    }
  }]);

  return Ball;
}(_particle2.default);

exports.default = Ball;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vector = __webpack_require__(0);

var _vector2 = _interopRequireDefault(_vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Particle = function () {
  function Particle() {
    var mass = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var charge = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Particle);

    this._mass = mass;
    this._charge = charge;
    this._position = new _vector2.default();
    this._velocity = new _vector2.default();
  }

  _createClass(Particle, [{
    key: "mass",
    set: function set(mass) {
      this._mass = mass;
    },
    get: function get() {
      return this._mass;
    }
  }, {
    key: "charge",
    set: function set(charge) {
      this._charge = charge;
    },
    get: function get() {
      return this._charge;
    }
  }, {
    key: "position",
    set: function set(position) {
      this._position = position.clone();
    },
    get: function get() {
      return this._position;
    }
  }]);

  return Particle;
}();

exports.default = Particle;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _graph = __webpack_require__(11);

var _graph2 = _interopRequireDefault(_graph);

var _graphicsRoutines = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GraphUtility = function () {
  function GraphUtility(canvasContext, initializer) {
    _classCallCheck(this, GraphUtility);

    this._canvasContext = canvasContext;
    this._origin = initializer.origin;
    this._sizes = initializer.sizes;
    this._maxCoords = initializer.maxCoords;
    this._minCoords = initializer.minCoords;

    this._majorLines = initializer.majorLines;
    this._minorLines = initializer.minorLines;
    this._labels = initializer.labels;

    this.graph = new _graph2.default(this._canvasContext, this._minCoords.x, this._maxCoords.x, this._minCoords.y, this._maxCoords.y, this._origin.x, this._origin.y, this._sizes.x, this._sizes.y);

    this._xValues = new Array();
    this._yValues = new Array();
  }

  _createClass(GraphUtility, [{
    key: "initValues",
    value: function initValues() {
      var minXValue = -Math.PI * 4,
          maxXValue = Math.PI * 4;

      for (var x = minXValue; x < maxXValue; x += X_ICREMENT) {
        var y = this.computeFunction(x);
        this.xValues.push(x);
        this.yValues.push(y);
      }
    }
  }, {
    key: "computeFunction",
    value: function computeFunction(x) {
      return Math.cos(x);
    }
  }, {
    key: "render",
    value: function render(deltaTime) {
      this.graph.drawgrid(this._majorLines.x, this._minorLines.x, this._majorLines.y, this._minorLines.y);
      this.graph.drawaxes(this._labels.x, this._labels.y);
      this.graph.plot(this._xValues, this._yValues, "#ff0000", false, true);
    }
  }, {
    key: "addCoord",
    value: function addCoord(coord) {
      this._xValues.push(coord.x);
      this._yValues.push(coord.y);
    }
  }]);

  return GraphUtility;
}();

exports.default = GraphUtility;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Graph;
function Graph(context, xmin, xmax, ymin, ymax, x0, y0, xwidth, ywidth) {
  // VARIABLE DECLARATIONS
  // canvas context on which to draw graph instance
  var ctx = context;
  // location of origin (in pixels) in parent document
  var x_orig = void 0;
  var y_orig = void 0;
  // overall width and height of graph in pixels
  var x_width = void 0;
  var y_width = void 0;
  // min and max of x and y relative to origin (in pixels)
  var x_min_rel = void 0;
  var x_max_rel = void 0;
  var y_min_rel = void 0;
  var y_max_rel = void 0;
  // obvious
  var x_tick_major = void 0;
  var x_tick_minor = void 0;
  var y_tick_major = void 0;
  var y_tick_minor = void 0;
  // scaling used in displaying values on the axes
  var x_displ_scal = void 0;
  var y_displ_scal = void 0;
  // width and height of textbox used for displaying values on the axes
  // this should not have to be tampered with (I hope)
  var tw = 15;
  var th = 20;
  // declarations for quantities to be used later
  var x_min = void 0;
  var x_max = void 0;
  var y_min = void 0;
  var y_max = void 0;
  var xx = void 0;
  var yy = void 0;
  var x_displ = void 0;
  var y_displ = void 0;
  var txpos = void 0;
  var typos = void 0;

  // PARAMETER ASSIGNMENTS
  // assign parameter values based on specified arguments
  x_orig = x0;
  y_orig = y0;
  x_width = xwidth;
  y_width = ywidth;
  //
  x_displ_scal = (xmax - xmin) / xwidth;
  y_displ_scal = (ymax - ymin) / ywidth;
  //
  x_min_rel = xmin / x_displ_scal;
  x_max_rel = xmax / x_displ_scal;
  y_min_rel = ymin / y_displ_scal;
  y_max_rel = ymax / y_displ_scal;
  // convert to absolute coordinates
  x_min = x_min_rel + x_orig;
  x_max = x_max_rel + x_orig;
  y_min = y_orig - y_min_rel;
  y_max = y_orig - y_max_rel;
  txpos = x_orig - tw;
  typos = y_orig;

  // METHODS
  // DRAW GRID: draw major, minor lines and display values
  this.drawgrid = function (xmajor, xminor, ymajor, yminor) {
    x_tick_major = xmajor / x_displ_scal;
    x_tick_minor = xminor / x_displ_scal;
    y_tick_major = ymajor / y_displ_scal;
    y_tick_minor = yminor / y_displ_scal;
    // draw major grid lines
    ctx.strokeStyle = '#999999';
    ctx.lineWidth = 1;
    ctx.beginPath();
    yy = y_max;
    do {
      ctx.moveTo(x_min, yy);
      ctx.lineTo(x_max, yy);
      yy += y_tick_major;
    } while (yy <= y_min);
    xx = x_min;
    do {
      ctx.moveTo(xx, y_min);
      ctx.lineTo(xx, y_max);
      xx += x_tick_major;
    } while (xx <= x_max);
    ctx.stroke();
    // draw minor grid lines
    ctx.strokeStyle = '#cccccc';
    ctx.lineWidth = 1;
    ctx.beginPath();
    yy = y_max;
    do {
      ctx.moveTo(x_min, yy);
      ctx.lineTo(x_max, yy);
      yy += y_tick_minor;
    } while (yy <= y_min);
    xx = x_min;
    do {
      ctx.moveTo(xx, y_min);
      ctx.lineTo(xx, y_max);
      xx += x_tick_minor;
    } while (xx <= x_max);
    ctx.stroke();
    //display values
    ctx.font = "10pt Arial";
    ctx.fillStyle = '#000000';
    ctx.textAlign = "right";
    ctx.textBaseline = "top";
    yy = y_max;
    do {
      y_displ = (y_orig - yy) * y_displ_scal;
      ctx.fillText(y_displ, txpos + 5, yy - th / 2);
      yy += y_tick_major;
    } while (yy <= y_min);
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    xx = x_min;
    do {
      x_displ = (xx - x_orig) * x_displ_scal;
      ctx.fillText(x_displ, xx - tw + 10, typos + 5);
      xx += x_tick_major;
    } while (xx <= x_max);
  };

  // DRAW AXES: draw axes and labels
  this.drawaxes = function (xlabel, ylabel) {
    if (typeof xlabel === 'undefined') xlabel = 'x';
    if (typeof ylabel === 'undefined') ylabel = 'y';
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x_min, y_orig);
    ctx.lineTo(x_max, y_orig);
    ctx.moveTo(x_orig, y_min);
    ctx.lineTo(x_orig, y_max);
    ctx.stroke();
    //axis labels
    ctx.font = "12pt Arial";
    ctx.fillStyle = '#000000';
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText(xlabel, x_max + 0.75 * tw, typos - th / 2);
    ctx.fillText(ylabel, txpos + tw / 2 + 5, y_max - 1.5 * th);
  };

  // PLOT DATA: plot data
  this.plot = function (xArr, yArr, pColor, pDots, pLine) {
    // the last three arguments have default values
    if (typeof pColor === 'undefined') pColor = '#0000ff';
    if (typeof pDots === 'undefined') pDots = true;
    if (typeof pLine === 'undefined') pLine = true;
    var xpos = x_orig + xArr[0] / x_displ_scal;
    var ypos = y_orig - yArr[0] / y_displ_scal;
    ctx.strokeStyle = pColor;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(xpos, ypos);
    ctx.arc(xpos, ypos, 1, 0, 2 * Math.PI, true);
    for (var i = 1; i < xArr.length; i++) {
      xpos = x_orig + xArr[i] / x_displ_scal;
      ypos = y_orig - yArr[i] / y_displ_scal;
      if (pLine) {
        ctx.lineTo(xpos, ypos);
      } else {
        ctx.moveTo(xpos, ypos);
      }
      if (pDots) {
        ctx.arc(xpos, ypos, 1, 0, 2 * Math.PI, true);
      }
    }
    ctx.stroke();
  };
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
function drawColoredRect(canvasContext, position, sizes, color) {
	canvasContext.fillStyle = color;
	canvasContext.fillRect(position.x, position.y, sizes.x, sizes.y);
}

function drawColoredCircle(canvasContext, position, radius, color) {
	canvasContext.fillStyle = color;
	canvasContext.beginPath();
	canvasContext.arc(position.x, position.y, radius, 0, Math.PI * 2);
	canvasContext.fill();
}

function drawImage(canvasContext, image, position) {
	canvasContext.drawImage(image, position.x, position.y);
}

function drawCenteredRotatedImage(canvasContext, image, position, angle) {
	canvasContext.save();
	canvasContext.translate(position.x, position.y);
	canvasContext.rotate(angle);
	canvasContext.drawImage(image, -image.width / 2, -image.height / 2);
	canvasContext.restore();
}

function drawColoredText(canvasContext, stringToRender, position, color) {
	canvasContext.fillStyle = color;
	canvasContext.fillText(stringToRender, position.x, position.y);
}

exports.drawColoredRect = drawColoredRect;
exports.drawColoredCircle = drawColoredCircle;
exports.drawImage = drawImage;
exports.drawCenteredRotatedImage = drawCenteredRotatedImage;
exports.drawColoredText = drawColoredText;

/***/ })
/******/ ]);