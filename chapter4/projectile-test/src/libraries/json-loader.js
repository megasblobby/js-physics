"use strict";

const REQUEST_DONE = 4;
const RESPONSE_READY = 200;
const REQUEST_METHOD = "GET";
const IS_ASYNCRONOUS_REQUEST = true;

export default class JSONLoader {
  constructor() {}

  load(key, filePath) {
    this._validate(key);
    this._validate(filePath);
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.open(REQUEST_METHOD, filePath, IS_ASYNCRONOUS_REQUEST);
      request.onload = () => {
            if (request.readyState === REQUEST_DONE && request.status === RESPONSE_READY) {
                resolve(request.response);
            } else {
                reject(request.statusText);
            }
        };
      request.onerror = () => reject(request.statusText);
      request.send();
    });
  }

  _validate(target, name) {
    if (target === null || typeof target === "undefined") {
      let errorMessage = `${name} can not be ${target}!`;
      throw errorMessage;
    }
    else if (target == "") {
      let errorMessage = `${name} can not be an empty string!`;
      throw errorMessage;
    }

    return target;
  }
}
