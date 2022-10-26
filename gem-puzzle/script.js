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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/NumsAvailabledToClick.js":
/*!*************************************************!*\
  !*** ./src/js/modules/NumsAvailabledToClick.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function NumsAvailabledToClick(array) {
  let NumsAvailabledToClick = [];
  let NuNis = {};

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (Number.isNaN(array[i][j]) || array[i][j] === null) {
        array[i][j] = NaN;
        NuNis.i = i;
        NuNis.j = j;
      }
    }
  }

  switch (NuNis.i) {
    case 0:
      {
        NumsAvailabledToClick.push(array[NuNis.i + 1][NuNis.j]);
        NumsAvailabledToClick.push(100 / array.length);
        break;
      }

    case array.length - 1:
      {
        NumsAvailabledToClick.push(array[NuNis.i - 1][NuNis.j]);
        break;
      }

    default:
      {
        NumsAvailabledToClick.push(array[NuNis.i + 1][NuNis.j]);
        NumsAvailabledToClick.push(array[NuNis.i - 1][NuNis.j]);
      }
  }

  switch (NuNis.y) {
    case 0:
      {
        NumsAvailabledToClick.push(array[NuNis.i][NuNis.j + 1]);
        break;
      }

    case array.length - 1:
      {
        NumsAvailabledToClick.push(array[NuNis.i][NuNis.j - 1]);
        break;
      }

    default:
      {
        NumsAvailabledToClick.push(array[NuNis.i][NuNis.j + 1]);
        NumsAvailabledToClick.push(array[NuNis.i][NuNis.j - 1]);
      }
  }

  NumsAvailabledToClick = NumsAvailabledToClick.filter(elem => elem);
  return NumsAvailabledToClick;
}

/* harmony default export */ __webpack_exports__["default"] = (NumsAvailabledToClick);

/***/ }),

/***/ "./src/js/modules/createField.js":
/*!***************************************!*\
  !*** ./src/js/modules/createField.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function createField(size = 4) {
  function createArray(size) {
    let numsArray = [];
    let numberValues = 1;

    for (let i = 0; i < size * size; i++) {
      if (numberValues == size * size) {
        numberValues = NaN;
      }

      numsArray.push(numberValues++);
    }

    numsArray = numsArray.sort((a, b) => 0.5 - Math.random());
    let arr = [];
    let numberIndex = 0;

    for (let i = 0; i < size; i++) {
      arr[i] = [];

      for (let j = 0; j < size; j++) {
        arr[i][j] = numsArray[numberIndex++];
      }
    }

    return arr;
  }

  function checkArray(arr) {
    let numsArray = [];

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        numsArray.push(arr[i][j]);
      }
    }

    let localSumOfSmallest = 0;
    let globalOfSmallest = 0;
    let indexOfNuN = 0;

    for (let i = 0; i < numsArray.length; i++) {
      if (Number.isNaN(numsArray[i])) {
        indexOfNuN = i;
        continue;
      }

      for (let j = 0; j < i; j++) {
        if (Number.isNaN(numsArray[j])) continue;

        if (numsArray[j] < numsArray[i]) {
          localSumOfSmallest++;
        }
      }

      globalOfSmallest += numsArray[i] - localSumOfSmallest - 1;
      localSumOfSmallest = 0;
    } // console.log(globalOfSmallest);


    if (globalOfSmallest % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  while (true) {
    let res = createArray(size);

    if (checkArray(res)) {
      // console.log('created array field:', res);
      return res;
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (createField);

/***/ }),

/***/ "./src/js/modules/drugDrop.js":
/*!************************************!*\
  !*** ./src/js/modules/drugDrop.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NumsAvailabledToClick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NumsAvailabledToClick */ "./src/js/modules/NumsAvailabledToClick.js");
/* harmony import */ var _isGameWin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isGameWin */ "./src/js/modules/isGameWin.js");
/* harmony import */ var _movesAndTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movesAndTime */ "./src/js/modules/movesAndTime.js");
/* harmony import */ var _sound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sound */ "./src/js/modules/sound.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/js/modules/save.js");






function drugDrop(arr) {
  let array = arr;
  const fieldElems = document.querySelectorAll('.puzzle__block');
  const nunElem = document.querySelector('.hidden-block');
  let currElem;
  let correct = false;
  fieldElems.forEach(elem => {
    elem.draggable = true;
    elem.addEventListener('dragstart', e => {
      if (Object(_NumsAvailabledToClick__WEBPACK_IMPORTED_MODULE_0__["default"])(array).includes(+elem.textContent.trim())) {
        e.dataTransfer.setData("text", e.target.value);
        currElem = elem;
        correct = true;
      }
    });
  });
  nunElem.addEventListener('drop', e => {
    e.preventDefault();

    if (!correct) {
      return;
    }

    let nunStyles = nunElem.style.cssText;
    let elemStyles = currElem.style.cssText;
    nunElem.style.cssText = elemStyles;
    currElem.style.cssText = nunStyles;

    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (array[i][j] == currElem.textContent.trim()) {
          array[i][j] = NaN;
          continue;
        }

        if (Number.isNaN(array[i][j])) {
          array[i][j] = +currElem.textContent.trim();
        }
      }
    }

    Object(_sound__WEBPACK_IMPORTED_MODULE_3__["playSound"])();
    Object(_isGameWin__WEBPACK_IMPORTED_MODULE_1__["default"])(array);
    correct = false;
  });
  nunElem.addEventListener('dragover', e => {
    e.preventDefault();
  });
}

/* harmony default export */ __webpack_exports__["default"] = (drugDrop);

/***/ }),

/***/ "./src/js/modules/gameBloker.js":
/*!**************************************!*\
  !*** ./src/js/modules/gameBloker.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function gameBloker(status) {
  const gameField = document.querySelector('.puzzle__field');

  if (status === true) {
    gameField.classList.add('puzzle__blocked');
    document.querySelector('.puzzle__btn').setAttribute('data-start', 'false');
  } else {
    gameField.classList.remove('puzzle__blocked');
  }

  gameField.addEventListener('click', () => {
    if (document.querySelector('.puzzle__btn').getAttribute('data-start') === 'false') {
      document.querySelector('.puzzle__btn').click();
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (gameBloker);

/***/ }),

/***/ "./src/js/modules/isGameWin.js":
/*!*************************************!*\
  !*** ./src/js/modules/isGameWin.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _results__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./results */ "./src/js/modules/results.js");


function isGameWin(array) {
  let checker = 0;

  if (Number.isNaN(array[array.length - 1][array.length - 1])) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        checker = checker + 1;

        if (i == array.length - 1 && j == array.length - 1) {
          continue;
        }

        if (array[i][j] !== checker) {
          return false;
        }
      }
    }
  } else {
    return false;
  }

  Object(_results__WEBPACK_IMPORTED_MODULE_0__["addNewResults"])();
  winnerPopup();
  return true;
}

function winnerPopup() {
  const winBlock = document.querySelector('.win');
  const resultsBlock = document.querySelector('.results__content');
  const layout = document.querySelector('.win__layout');
  const moves = document.querySelector('.puzzle__moves span').textContent;
  const time = document.querySelector('.puzzle__time span').textContent;
  winBlock.classList.remove('hidden');
  resultsBlock.textContent = `
        Hooray! You solved the puzzle in ${time} and ${moves} moves!
    `;
  layout.addEventListener('click', () => {
    winBlock.classList.add('hidden');
    document.querySelector('#variant-4').click();
  });
}

/* harmony default export */ __webpack_exports__["default"] = (isGameWin);

/***/ }),

/***/ "./src/js/modules/movesAndTime.js":
/*!****************************************!*\
  !*** ./src/js/modules/movesAndTime.js ***!
  \****************************************/
/*! exports provided: moves, Timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moves", function() { return moves; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
function moves() {
  const movesField = document.querySelector('.puzzle__moves span');

  if (movesField.textContent == '0') {
    movesField.textContent = 1;
  } else {
    movesField.textContent = +movesField.textContent + 1;
  }
}

class Timer {
  constructor(min = 0, sec = 0) {
    this.timeField = document.querySelector('.puzzle__time span');
    this.sec = sec;
    this.min = min;
  }

  zeroChecker(num) {
    if (num <= 9) {
      return '0' + num;
    }

    return num;
  }

  start() {
    this.timeField.textContent = `${this.zeroChecker(this.min)} : ${this.zeroChecker(this.sec)}`;
    this.timeField.setAttribute('data-start', true);
    this.timeTicker = setInterval(() => {
      if (this.timeField.getAttribute('data-start') == 'false') {
        this.timeField.textContent = '00 : 00';
        this.sec = 0;
        this.min = 0;
        clearInterval(this.timeTicker);
      } else {
        this.timeField.textContent = `${this.zeroChecker(this.min)} : ${this.zeroChecker(++this.sec)}`;
      }

      if (this.sec >= 59) {
        this.sec = -1;
        this.min = this.min + 1;
      }
    }, 1000);
  }

  stop() {
    clearInterval(this.timeTicker);
    this.timeField.textContent = '00 : 00';
    this.sec = 0;
    this.min = 0;
    this.timeField.setAttribute('data-start', false);
  }

  getTime() {
    return this.timeField.textContent.split(' : ');
  }

}



/***/ }),

/***/ "./src/js/modules/movesControl.js":
/*!****************************************!*\
  !*** ./src/js/modules/movesControl.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isGameWin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isGameWin */ "./src/js/modules/isGameWin.js");
/* harmony import */ var _movesAndTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movesAndTime */ "./src/js/modules/movesAndTime.js");
/* harmony import */ var _NumsAvailabledToClick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NumsAvailabledToClick */ "./src/js/modules/NumsAvailabledToClick.js");
/* harmony import */ var _sound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sound */ "./src/js/modules/sound.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/js/modules/save.js");
/* harmony import */ var _drugDrop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drugDrop */ "./src/js/modules/drugDrop.js");







function movesControl(arr) {
  let array = arr;
  const fieldElems = document.querySelectorAll('.puzzle__block');
  const nunElem = document.querySelector('.hidden-block');
  Object(_drugDrop__WEBPACK_IMPORTED_MODULE_5__["default"])(array);
  fieldElems.forEach(elem => {
    elem.addEventListener('click', () => {
      Object(_save__WEBPACK_IMPORTED_MODULE_4__["saveElem"])('array', array);

      if (Object(_NumsAvailabledToClick__WEBPACK_IMPORTED_MODULE_2__["default"])(array).includes(+elem.textContent.trim())) {
        let nunStyles = nunElem.style.cssText;
        let elemStyles = elem.style.cssText;
        nunElem.style.cssText = elemStyles;
        elem.style.cssText = nunStyles;
        Object(_movesAndTime__WEBPACK_IMPORTED_MODULE_1__["moves"])();

        for (let i = 0; i < array.length; i++) {
          for (let j = 0; j < array.length; j++) {
            if (array[i][j] == elem.textContent.trim()) {
              array[i][j] = NaN;
              continue;
            }

            if (Number.isNaN(array[i][j])) {
              array[i][j] = +elem.textContent.trim();
            }
          }
        } // console.log(array);


        Object(_sound__WEBPACK_IMPORTED_MODULE_3__["playSound"])();
        Object(_isGameWin__WEBPACK_IMPORTED_MODULE_0__["default"])(array);
      }
    });
  });
  return array;
}

/* harmony default export */ __webpack_exports__["default"] = (movesControl);

/***/ }),

/***/ "./src/js/modules/renderBaseStructure.js":
/*!***********************************************!*\
  !*** ./src/js/modules/renderBaseStructure.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function renderBaseStructure() {
  const body = document.querySelector('body');
  body.innerHTML = `
        <div class="puzzle">
            <div class="container">
                <div class="puzzle__btns">
                    <button class="puzzle__btn" id="start-btn" data-start=false >Shuffle and start</button>
                    <button class="puzzle__btn" title="Sound options" id="sound-btn" data-sound='true'><img src="./assets/icons/sound-on.svg"></img></button>
                    <button class="puzzle__btn" id="save-btn">Save</button>
                    <button class="puzzle__btn" id="result-btn">Result</button>
                </div>
                <div class="puzzle__indicators">
                    <div class="puzzle__moves">
                        Moves:
                        <span></span>
                    </div>
                    <div class="puzzle__time">
                        Time:
                        <span></span>
                    </div>
                </div>
                <div class="puzzle__field puzzle__blocked">

                </div>
                <div class="puzzle__current-size">
                    Frame size:
                    <span class="puzzle__current-size-variant">4x4</span>
                </div>
                <div class="puzzle__sizes">
                    Other sizes:
                    <span class="puzzle__size-variant" id="variant-3">3x3</span>
                    <span class="puzzle__size-variant" id="variant-4">4x4</span>
                    <span class="puzzle__size-variant" id="variant-5">5x5</span>
                    <span class="puzzle__size-variant" id="variant-6">6x6</span>
                    <span class="puzzle__size-variant" id="variant-7">7x7</span>
                    <span class="puzzle__size-variant" id="variant-8">8x8</span>
                </div>
            </.div>
            <div class="results hidden">
                <div class="results__main">
                    <div class="results__exit">✖</div>
                    <h2 class="results__title">results table</h2>
                    <div class="results__header">
                        <span>size</span><span>time</span><span>moves</span>
                    </div>
                </div>
                <div class="results__layout"></div>
            </div>

            <div class="win hidden">
                <div class="win__main">
                    <div class="win__exit">✖</div>
                    <div class="results__content"></div>
                </div>
                <div class="win__layout"></div>
            </div>

            <audio id="sound">
                <source src="./assets/sounds/sound.mp3" type="audio/mp3">
            </audio>
        </div>
    `;
}

/* harmony default export */ __webpack_exports__["default"] = (renderBaseStructure);

/***/ }),

/***/ "./src/js/modules/renderField.js":
/*!***************************************!*\
  !*** ./src/js/modules/renderField.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameBloker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBloker */ "./src/js/modules/gameBloker.js");


function renderField(array) {
  const field = document.querySelector('.puzzle__field');
  let arrString = '';
  let left = 0;
  let top = 0;
  let step = 100 / array.length;
  let blockSize = step;

  for (let i = 0; i < array.length; i++) {
    left = 0;

    for (let j = 0; j < array.length; j++) {
      if (Number.isNaN(array[i][j])) {
        arrString += `
                <div 
                    class="puzzle__block 
                    hidden-block" value="${array[i][j]}"
                    style="top: ${top}%; left: ${left}%; width: ${blockSize}%; height: ${blockSize}%;">${array[i][j]}
                </div>
                `;
        left += step;
        continue;
      }

      arrString += `
            <div 
            class="puzzle__block" value="${array[i][j]}"
            style="top: ${top}%; left: ${left}%; width: ${blockSize}%; height: ${blockSize}%;">${array[i][j]}
        </div>
                `;
      left += step;
    }

    top += step;
  }

  if (localStorage.getItem('arrayHtml')) {
    field.innerHTML = localStorage.getItem('arrayHtml');
    Object(_gameBloker__WEBPACK_IMPORTED_MODULE_0__["default"])(false);
    return;
  }

  field.innerHTML = arrString;
}

/* harmony default export */ __webpack_exports__["default"] = (renderField);

/***/ }),

/***/ "./src/js/modules/results.js":
/*!***********************************!*\
  !*** ./src/js/modules/results.js ***!
  \***********************************/
/*! exports provided: resultsBtn, addNewResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resultsBtn", function() { return resultsBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewResults", function() { return addNewResults; });
function resultsBtn() {
  const resBtn = document.querySelector('#result-btn');
  const resField = document.querySelector('.results');
  const resLayout = document.querySelector('.results__layout');
  const content = document.querySelector('.results__main');
  resBtn.addEventListener('click', () => {
    resField.classList.remove('hidden');
  });
  resLayout.addEventListener('click', () => {
    resField.classList.add('hidden');
  });

  if (localStorage.getItem('results')) {
    const resultsStorage = JSON.parse(localStorage.getItem('results'));
    resultsStorage.forEach(elem => {
      content.innerHTML += `
        <div class="results__table">
            <span>${elem[0]}</span>
            <span>${elem[1]}</span>
            <span>${elem[2]}</span>
        </div>`;
    });
  } else {
    let emptyResult = `<div class="results__table">
                                No games played yet :(
                            </div>`;
    content.innerHTML += emptyResult;
  }
}

function addNewResults() {
  // console.log('You WIN!');
  const moves = document.querySelector('.puzzle__moves span').textContent;
  const time = document.querySelector('.puzzle__time span').textContent;
  const size = document.querySelector('.puzzle__current-size-variant').textContent;
  const content = document.querySelector('.results__main');
  const resultsStorage = localStorage.getItem('results') ? JSON.parse(localStorage.getItem('results')) : [];
  const showedResults = document.querySelectorAll('.results__table');
  showedResults.forEach(elem => {
    elem.remove();
  });
  resultsStorage.push([size, time, moves]); // console.log('resultsStorage ',resultsStorage);

  resultsStorage.forEach(elem => {
    content.innerHTML += `
        <div class="results__table">
            <span>${elem[0]}</span>
            <span>${elem[1]}</span>
            <span>${elem[2]}</span>
        </div>`;
  });
  localStorage.setItem('results', JSON.stringify(resultsStorage));
}



/***/ }),

/***/ "./src/js/modules/save.js":
/*!********************************!*\
  !*** ./src/js/modules/save.js ***!
  \********************************/
/*! exports provided: save, saveElem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save", function() { return save; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveElem", function() { return saveElem; });
/* harmony import */ var _movesAndTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movesAndTime */ "./src/js/modules/movesAndTime.js");


function save() {
  const saveBtn = document.querySelector('#save-btn');
  saveBtn.addEventListener('click', () => {
    if (!saveBtn.classList.contains('saved')) {
      saveBtn.classList.add('saved');
      saveBtn.setAttribute('data-save', true);
      document.querySelector('.hidden-block').click();
    }
  });

  if (localStorage.getItem('moves')) {
    document.querySelector('.puzzle__moves span').textContent = localStorage.getItem('moves'); // set data-start = true on btn

    document.querySelector('.puzzle__btn').setAttribute('data-start', 'true');
  }

  if (localStorage.getItem('time')) {
    let savedTime = localStorage.getItem('time').split(',');
    new _movesAndTime__WEBPACK_IMPORTED_MODULE_0__["Timer"](savedTime[0].slice(1), savedTime[1].slice(1)).start();
  }

  if (!saveBtn.getAttribute('data-save')) {
    localStorage.removeItem('array');
    localStorage.removeItem('moves');
    localStorage.removeItem('time');
    localStorage.removeItem('arrayHtml');
  }
}

function saveElem(type, elem) {
  if (document.querySelector('#save-btn').getAttribute('data-save')) {
    const arrayHtml = document.querySelector('.puzzle__field').innerHTML;

    switch (type) {
      case 'array':
        {
          localStorage.setItem('array', JSON.stringify(elem));
          localStorage.setItem('arrayHtml', arrayHtml);
        }
    }

    localStorage.setItem('moves', document.querySelector('.puzzle__moves span').textContent);
    localStorage.setItem('time', new _movesAndTime__WEBPACK_IMPORTED_MODULE_0__["Timer"]().getTime());
  }
}



/***/ }),

/***/ "./src/js/modules/sizeBtns.js":
/*!************************************!*\
  !*** ./src/js/modules/sizeBtns.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _renderField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderField */ "./src/js/modules/renderField.js");
/* harmony import */ var _movesControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movesControl */ "./src/js/modules/movesControl.js");
/* harmony import */ var _createField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createField */ "./src/js/modules/createField.js");
/* harmony import */ var _gameBloker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameBloker */ "./src/js/modules/gameBloker.js");
/* harmony import */ var _movesAndTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movesAndTime */ "./src/js/modules/movesAndTime.js");






function sizeBtns() {
  const sizeBtns = document.querySelectorAll('.puzzle__size-variant');
  const currentSizeVariant = document.querySelector('.puzzle__current-size-variant');
  const timer = new _movesAndTime__WEBPACK_IMPORTED_MODULE_4__["Timer"]();
  sizeBtns.forEach(elem => {
    elem.addEventListener('click', e => {
      const checkedFieldSize = +e.target.id.slice(-1);
      let array = Object(_createField__WEBPACK_IMPORTED_MODULE_2__["default"])(checkedFieldSize);
      Object(_renderField__WEBPACK_IMPORTED_MODULE_0__["default"])(array);
      Object(_movesControl__WEBPACK_IMPORTED_MODULE_1__["default"])(array);
      currentSizeVariant.textContent = `${checkedFieldSize}x${checkedFieldSize}`;
      const movesField = document.querySelector('.puzzle__moves span');
      movesField.textContent = '0';
      Object(_gameBloker__WEBPACK_IMPORTED_MODULE_3__["default"])(true);
      timer.stop();
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (sizeBtns);

/***/ }),

/***/ "./src/js/modules/sound.js":
/*!*********************************!*\
  !*** ./src/js/modules/sound.js ***!
  \*********************************/
/*! exports provided: sound, playSound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sound", function() { return sound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playSound", function() { return playSound; });
function sound() {
  const Sbtn = document.querySelector('#sound-btn');
  Sbtn.addEventListener('click', () => {
    if (Sbtn.getAttribute('data-sound') === 'true') {
      Sbtn.setAttribute('data-sound', 'false');
      Sbtn.firstChild.setAttribute('src', './assets/icons/sound-off.svg');
    } else {
      Sbtn.setAttribute('data-sound', 'true');
      Sbtn.firstChild.setAttribute('src', './assets/icons/sound-on.svg');
    }
  });
}

function playSound() {
  const Sbtn = document.querySelector('#sound-btn');

  if (Sbtn.getAttribute('data-sound') === 'true') {
    var song = document.querySelector('#sound');
    song.volume = 0.7;

    if (song.paused) {
      song.play();
    } else {
      song.pause();
    }
  }
}



/***/ }),

/***/ "./src/js/modules/startGameBtn.js":
/*!****************************************!*\
  !*** ./src/js/modules/startGameBtn.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _movesAndTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movesAndTime */ "./src/js/modules/movesAndTime.js");
/* harmony import */ var _gameBloker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBloker */ "./src/js/modules/gameBloker.js");
/* harmony import */ var _renderField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderField */ "./src/js/modules/renderField.js");
/* harmony import */ var _movesControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movesControl */ "./src/js/modules/movesControl.js");
/* harmony import */ var _createField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createField */ "./src/js/modules/createField.js");






function startGameBtn() {
  const startBtn = document.querySelector('#start-btn');
  const timer = new _movesAndTime__WEBPACK_IMPORTED_MODULE_0__["Timer"]();
  const movesField = document.querySelector('.puzzle__moves span');
  startBtn.addEventListener('click', () => {
    timer.stop();
    timer.start();
    Object(_gameBloker__WEBPACK_IMPORTED_MODULE_1__["default"])(false);
    movesField.textContent = '0';
    startBtn.setAttribute('data-start', 'true');

    if (startBtn.getAttribute('data-start') === 'true') {
      const checkedFieldSize = document.querySelector('.puzzle__current-size-variant').textContent.slice(0, 1);
      let array = Object(_createField__WEBPACK_IMPORTED_MODULE_4__["default"])(checkedFieldSize);
      Object(_renderField__WEBPACK_IMPORTED_MODULE_2__["default"])(array);
      Object(_movesControl__WEBPACK_IMPORTED_MODULE_3__["default"])(array);
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (startGameBtn);

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_renderBaseStructure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/renderBaseStructure */ "./src/js/modules/renderBaseStructure.js");
/* harmony import */ var _modules_createField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/createField */ "./src/js/modules/createField.js");
/* harmony import */ var _modules_renderField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/renderField */ "./src/js/modules/renderField.js");
/* harmony import */ var _modules_movesControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/movesControl */ "./src/js/modules/movesControl.js");
/* harmony import */ var _modules_sizeBtns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/sizeBtns */ "./src/js/modules/sizeBtns.js");
/* harmony import */ var _modules_startGameBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/startGameBtn */ "./src/js/modules/startGameBtn.js");
/* harmony import */ var _modules_sound__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/sound */ "./src/js/modules/sound.js");
/* harmony import */ var _modules_save__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/save */ "./src/js/modules/save.js");
/* harmony import */ var _modules_gameBloker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/gameBloker */ "./src/js/modules/gameBloker.js");
/* harmony import */ var _modules_results__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/results */ "./src/js/modules/results.js");










document.addEventListener('DOMContentLoaded', event => {
  const savedArray = localStorage.getItem('array') ? JSON.parse(localStorage.getItem('array')) : null;
  let array = savedArray || Object(_modules_createField__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_modules_renderBaseStructure__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_gameBloker__WEBPACK_IMPORTED_MODULE_8__["default"])(true);
  Object(_modules_renderField__WEBPACK_IMPORTED_MODULE_2__["default"])(array);
  Object(_modules_movesControl__WEBPACK_IMPORTED_MODULE_3__["default"])(array);
  Object(_modules_sizeBtns__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_modules_startGameBtn__WEBPACK_IMPORTED_MODULE_5__["default"])();
  Object(_modules_sound__WEBPACK_IMPORTED_MODULE_6__["sound"])();
  Object(_modules_results__WEBPACK_IMPORTED_MODULE_9__["resultsBtn"])();
  Object(_modules_save__WEBPACK_IMPORTED_MODULE_7__["save"])();
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map