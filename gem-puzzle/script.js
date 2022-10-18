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
    }

    if ((globalOfSmallest + Math.floor(indexOfNuN / arr.length) + 1) % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  while (true) {
    let res = createArray(size);

    if (checkArray(res)) {
      console.log(res);
      return res;
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (createField);

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
                    <button class="puzzle__btn" id="start-btn">Shuffle and start</button>
                    <button class="puzzle__btn" id="stop-btn">Stop</button>
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
                <div class="puzzle__field">

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
            </div>
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
function renderField(array) {
  const field = document.querySelector('.puzzle__field');
  let arrString = '';

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (Number.isNaN(array[i][j])) {
        arrString += `<div class="puzzle__block hidden">${array[i][j]}</div>`;
        continue;
      }

      arrString += `<div class="puzzle__block">${array[i][j]}</div>`;
    }
  }

  field.innerHTML = arrString;
}

/* harmony default export */ __webpack_exports__["default"] = (renderField);

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



document.addEventListener('DOMContentLoaded', event => {
  const array = Object(_modules_createField__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_modules_renderBaseStructure__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_renderField__WEBPACK_IMPORTED_MODULE_2__["default"])(array);
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map