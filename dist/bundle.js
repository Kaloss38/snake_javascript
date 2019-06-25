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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/apple.js":
/*!**********************!*\
  !*** ./src/apple.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Apple; });\nclass Apple {\r\n\r\n  constructor(position = [10,10]) {\r\n      this.position = position;\r\n  }\r\n\r\n\r\n\r\n  setNewPosition(widthInBlocks, heightInBlocks) {\r\n      const newX = Math.round(Math.random()*(widthInBlocks-1));\r\n      const newY = Math.round(Math.random()*(heightInBlocks-1));\r\n      this.position = [newX,newY];\r\n  }\r\n\r\n  isOnSnake(snakeToCheck) {\r\n      let isOnSnake = false;\r\n      for (let block of snakeToCheck.body){\r\n          if(this.position[0] === block[0] && this.position[1] === block[1]){\r\n              isOnSnake = true;\r\n          }\r\n      }\r\n      return isOnSnake;\r\n  }\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./src/apple.js?");

/***/ }),

/***/ "./src/drawing.js":
/*!************************!*\
  !*** ./src/drawing.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Drawing; });\nclass Drawing{\r\n  static gameOver(ctx, centreX, centreY){\r\n        ctx.save();\r\n        ctx.font = \"bold 70px sans-serif\";\r\n        ctx.fillStyle = \"#000\";\r\n        ctx.textAlign = \"center\";\r\n        ctx.textBaseline = \"middle\";\r\n        ctx.strokeStyle = \"white\";\r\n        ctx.lineWidth = 5;\r\n        ctx.strokeText(\"Game Over\", centreX, centreY - 180);\r\n        ctx.fillText(\"Game Over\", centreX, centreY - 180);\r\n        ctx.font = \"bold 30px sans-serif\";\r\n        ctx.strokeText(\"Appuyer sur la touche Espace pour rejouer\", centreX, centreY - 120);\r\n        ctx.fillText(\"Appuyer sur la touche Espace pour rejouer\", centreX, centreY - 120);\r\n        ctx.restore();\r\n      }\r\n  static drawScore(ctx, centreX, centreY, score){\r\n          ctx.save();\r\n          ctx.font = \"bold 200px sans-serif\";\r\n          ctx.fillStyle = \"gray\";\r\n          ctx.textAlign = \"center\";\r\n          ctx.textBaseline = \"middle\";\r\n          ctx.fillText(score.toString(), centreX, centreY);\r\n          ctx.restore();\r\n      }\r\n  static drawSnake(ctx, blockSize, snake){\r\n        ctx.save();\r\n        ctx.fillStyle=\"#ff0000\";\r\n        for (let block of snake.body){\r\n            this.drawBlock(ctx, block, blockSize);\r\n        }\r\n        ctx.restore();\r\n  }\r\n  static drawApple(ctx, blockSize, apple){\r\n      const radius = blockSize/2;\r\n      const x = apple.position[0]*blockSize + radius;\r\n      const y = apple.position[1]*blockSize + radius;\r\n      ctx.save();\r\n      ctx.fillStyle = \"#33cc33\";\r\n      ctx.beginPath();\r\n      ctx.arc(x, y, radius, 0, Math.PI*2, true);\r\n      ctx.fill();\r\n      ctx.restore();\r\n  }\r\n  static drawBlock(ctx, position, blockSize){\r\n          const [x,y] = position;\r\n          ctx.fillRect(x*blockSize, y*blockSize, blockSize, blockSize);\r\n      }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/drawing.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _snake_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snake.js */ \"./src/snake.js\");\n/* harmony import */ var _apple_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apple.js */ \"./src/apple.js\");\n/* harmony import */ var _drawing_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drawing.js */ \"./src/drawing.js\");\n\r\n\r\n\r\n\r\nclass Game{\r\nconstructor(canvasWidth = 900, canvasHeight = 600){\r\n   this.canvasWidth = canvasWidth;\r\n   this.canvasHeight = canvasHeight;\r\n   this.blockSize = 30;\r\n   this.canvas = document.createElement('canvas');\r\n   this.ctx = this.canvas.getContext('2d');\r\n   this.widthInBlocks = this.canvasWidth/this.blockSize;\r\n   this.heightInBlocks = this.canvasHeight/this.blockSize;\r\n   this.centreX = this.canvasWidth / 2;\r\n   this.centreY = this.canvasHeight / 2;\r\n   this.delay = 100;\r\n   this.snakee;\r\n   this.applee;\r\n   this.score;\r\n   this.timeOut;\r\n}\r\ninit(){\r\n    this.canvas.width = this.canvasWidth;\r\n    this.canvas.height = this.canvasHeight;\r\n    this.canvas.style.border = \"30px solid gray\";\r\n    this.canvas.style.margin = \"50px auto\";\r\n    this.canvas.style.display = \"block\";\r\n    this.canvas.style.backgroundColor = \"#ddd\";\r\n    document.body.appendChild(this.canvas);\r\n    this.launch();\r\n};\r\n\r\nlaunch(){\r\n    this.snakee = new _snake_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"right\", [6,4],[5,4],[4,4],[3,4],[2,4]);\r\n    this.applee = new _apple_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]([10,10]);\r\n    this.score = 0;\r\n    clearTimeout(this.timeOut);\r\n    this.delay = 100;\r\n    this.refreshCanvas();\r\n};\r\n\r\nrefreshCanvas(){\r\n    this.snakee.advance();\r\n    if (this.snakee.checkCollision(this.widthInBlocks,this.heightInBlocks)){\r\n        _drawing_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].gameOver(this.ctx, this.centreX, this.centreY);\r\n    } else {\r\n        if (this.snakee.isEatingApple(this.applee)){\r\n            this.score++;\r\n            this.snakee.ateApple = true;\r\n\r\n            do {\r\n                this.applee.setNewPosition(this.widthInBlocks,this.heightInBlocks);\r\n            } while(this.applee.isOnSnake(this.snakee));\r\n\r\n            if(this.score % 5 == 0){\r\n                this.speedUp();\r\n            }\r\n        }\r\n        this.ctx.clearRect(0,0,this.canvasWidth,this.canvasHeight);\r\n        _drawing_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].drawScore(this.ctx, this.centreX, this.centreY, this.score);\r\n        _drawing_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].drawSnake(this.ctx, this.blockSize, this.snakee);\r\n        _drawing_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].drawApple(this.ctx, this.blockSize, this.applee);\r\n        this.timeOut = setTimeout(this.refreshCanvas.bind(this), this.delay);\r\n     }\r\n};\r\n\r\nspeedUp(){\r\n    this.delay /= 2;\r\n};\r\n}\r\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\r\n\r\nwindow.onload = () => {\r\n\r\n  let myGame = new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n  myGame.init();\r\n\r\n  document.onkeydown = (e) => {\r\n      const key = e.keyCode;\r\n      let newDirection;\r\n      switch(key){\r\n          case 37:\r\n              newDirection = \"left\";\r\n              break;\r\n          case 38:\r\n              newDirection = \"up\";\r\n              break;\r\n          case 39:\r\n              newDirection = \"right\";\r\n              break;\r\n          case 40:\r\n              newDirection = \"down\";\r\n              break;\r\n          case 32:\r\n              myGame.launch();\r\n              return;\r\n          default:\r\n              return;\r\n      }\r\n      myGame.snakee.setDirection(newDirection);\r\n  };\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./src/script.js?");

/***/ }),

/***/ "./src/snake.js":
/*!**********************!*\
  !*** ./src/snake.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Snake; });\nclass Snake {\r\n\r\n  constructor(direction, ...body) {\r\n      this.body = body;\r\n      this.direction = direction;\r\n      this.ateApple = false;\r\n  }\r\n\r\n  advance() {\r\n      const nextPosition = this.body[0].slice();\r\n      switch(this.direction){\r\n          case \"left\":\r\n              nextPosition[0] -= 1;\r\n              break;\r\n          case \"right\":\r\n              nextPosition[0] += 1;\r\n              break;\r\n          case \"down\":\r\n              nextPosition[1] += 1;\r\n              break;\r\n          case \"up\":\r\n              nextPosition[1] -= 1;\r\n              break;\r\n          default:\r\n              throw(\"invalid direction\");\r\n      }\r\n      this.body.unshift(nextPosition);\r\n      if (!this.ateApple)\r\n          this.body.pop();\r\n      else\r\n          this.ateApple = false;\r\n  }\r\n\r\n  setDirection(newDirection) {\r\n      let allowedDirections;\r\n      switch(this.direction){\r\n          case \"left\":\r\n          case \"right\":\r\n              allowedDirections=[\"up\",\"down\"];\r\n              break;\r\n          case \"down\":\r\n          case \"up\":\r\n              allowedDirections=[\"left\",\"right\"];\r\n              break;\r\n         default:\r\n              throw(\"invalid direction\");\r\n      }\r\n      if (allowedDirections.includes(newDirection)){\r\n          this.direction = newDirection;\r\n      }\r\n  }\r\n\r\n  checkCollision(widthInBlocks, heightInBlocks) {\r\n      let wallCollision = false;\r\n      let snakeCollision = false;\r\n      const [head, ...rest] = this.body;\r\n      const [snakeX, snakeY] = head;\r\n      const minX = 0;\r\n      const minY = 0;\r\n      const maxX = widthInBlocks - 1;\r\n      const maxY = heightInBlocks - 1;\r\n      const isNotBetweenHorizontalWalls = snakeX < minX || snakeX > maxX;\r\n      const isNotBetweenVerticalWalls = snakeY < minY || snakeY > maxY;\r\n\r\n      if (isNotBetweenHorizontalWalls || isNotBetweenVerticalWalls)\r\n          wallCollision = true;\r\n\r\n      for (let block of rest){\r\n          if (snakeX === block[0] && snakeY === block[1])\r\n              snakeCollision = true;\r\n      }\r\n\r\n      return wallCollision || snakeCollision;\r\n  }\r\n\r\n  isEatingApple(appleToEat) {\r\n      const head = this.body[0];\r\n      if (head[0] === appleToEat.position[0] && head[1] === appleToEat.position[1])\r\n          return true;\r\n      else\r\n          return false;\r\n  }\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./src/snake.js?");

/***/ })

/******/ });