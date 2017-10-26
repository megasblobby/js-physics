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

const REQUEST_DONE = 4;
const RESPONSE_READY = 200;

export default class ImageLoader {
  constructor() {}

  load(key, filePath) {
    this._validate(key);
    this._validate(filePath);
    return new Promise((resolve, reject) => {
      let image = document.createElement("img");
      image.src = filePath;
      image.onloadstart = () => {};
      image.onload = () => {resolve({key, "value": image});};
      image.onerror = () => {reject(filePath);};
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
