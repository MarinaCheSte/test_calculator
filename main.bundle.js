/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/calculator.js":
      /*!***************************!*\
  !*** ./src/calculator.js ***!
  \***************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _calculator_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculator.css */ \"./src/calculator.css\");\n/* harmony import */ var _normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./normalize.css */ \"./src/normalize.css\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n//THEME CHANGE\n\nvar section = document.querySelector('.section');\nvar wrapper = document.querySelector('.wrapper');\nvar items = document.querySelectorAll('.calculator__item');\nvar lightItems = document.querySelectorAll('.calculator__item_light');\nvar coloredItems = document.querySelectorAll('.calculator__item_colored');\nvar disabledBtns = document.querySelectorAll('.func');\nfunction toggleTheme() {\n  if (!section.classList.contains('_section_light')) {\n    section.classList.add('_section_light');\n  } else {\n    section.classList.remove('_section_light');\n  }\n  if (!wrapper.classList.contains('_wrapper_light')) {\n    wrapper.classList.add('_wrapper_light');\n  } else {\n    wrapper.classList.remove('_wrapper_light');\n  }\n  var _iterator = _createForOfIteratorHelper(items),\n    _step;\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var item = _step.value;\n      if (!item.classList.contains('_item_light')) {\n        item.classList.add('_item_light');\n      } else {\n        item.classList.remove('_item_light');\n      }\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n  var _iterator2 = _createForOfIteratorHelper(lightItems),\n    _step2;\n  try {\n    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n      var lightItem = _step2.value;\n      if (!lightItem.classList.contains('_light')) {\n        lightItem.classList.add('_light');\n      } else {\n        lightItem.classList.remove('_light');\n      }\n    }\n  } catch (err) {\n    _iterator2.e(err);\n  } finally {\n    _iterator2.f();\n  }\n  var _iterator3 = _createForOfIteratorHelper(coloredItems),\n    _step3;\n  try {\n    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n      var coloredItem = _step3.value;\n      if (!coloredItem.classList.contains('_colored_light')) {\n        coloredItem.classList.add('_colored_light');\n      } else {\n        coloredItem.classList.remove('_colored_light');\n      }\n    }\n  } catch (err) {\n    _iterator3.e(err);\n  } finally {\n    _iterator3.f();\n  }\n}\ndocument.querySelector('.mode-button').onclick = toggleTheme;\n\n// CALCULATOR\n\nvar firstNumber = '';\nvar secondNumber = '';\nvar action = '';\nvar result = false;\nvar numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];\nvar actions = ['+', '-', 'x', '÷'];\nvar screen = document.querySelector('.calculator__result');\nscreen.textContent = '0';\nvar clearScreen = document.querySelector('.clear');\nfunction clear() {\n  firstNumber = '';\n  secondNumber = '';\n  action = '';\n  result = false;\n  screen.textContent = '0';\n}\nclearScreen.addEventListener('click', clear);\nvar buttonsArea = document.querySelectorAll('.calculator__numbers');\nvar _iterator4 = _createForOfIteratorHelper(buttonsArea),\n  _step4;\ntry {\n  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {\n    var buttonline = _step4.value;\n    buttonline.addEventListener('click', function (event) {\n      if (!event.target.classList.contains('calculator__item')) return;\n      if (event.target.classList.contains('clear')) {\n        var _iterator5 = _createForOfIteratorHelper(disabledBtns),\n          _step5;\n        try {\n          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {\n            var disabledBtn = _step5.value;\n            disabledBtn.classList.remove('_disabled');\n          }\n        } catch (err) {\n          _iterator5.e(err);\n        } finally {\n          _iterator5.f();\n        }\n        clear();\n      }\n      screen.textContent = '0';\n      var key = event.target.textContent;\n      if (numbers.includes(key)) {\n        if (action === '' && secondNumber === '') {\n          if (key == '.') {\n            if (firstNumber.toString().indexOf('.') < 0) firstNumber += '.';\n          } else {\n            firstNumber += key;\n          }\n          if (firstNumber.toString().startsWith('.')) {\n            firstNumber = '0' + firstNumber;\n          }\n          screen.textContent = +firstNumber.toString().slice(0, 12);\n        } else if (firstNumber !== '' && secondNumber !== '' && result) {\n          if (key == '.') {\n            if (secondNumber.toString().indexOf('.') < 0) secondNumber += '.';\n            if (result) {\n              clear();\n            }\n          } else {\n            secondNumber = key;\n          }\n          if (secondNumber.toString().startsWith('.')) {\n            secondNumber = '0' + secondNumber;\n          }\n          result = false;\n          screen.textContent = +secondNumber.slice(0, 12);\n        } else {\n          if (key == '.') {\n            if (secondNumber.toString().indexOf('.') < 0) secondNumber += '.';\n          } else {\n            secondNumber += key;\n          }\n          if (secondNumber.toString().startsWith('.')) {\n            secondNumber = '0' + secondNumber;\n          }\n          screen.textContent = +secondNumber.toString().slice(0, 12);\n        }\n      }\n      if (actions.includes(key)) {\n        action = key;\n        screen.textContent = action;\n        var _iterator6 = _createForOfIteratorHelper(disabledBtns),\n          _step6;\n        try {\n          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {\n            var _disabledBtn = _step6.value;\n            if (action !== '') {\n              _disabledBtn.classList.add('_disabled');\n            }\n          }\n        } catch (err) {\n          _iterator6.e(err);\n        } finally {\n          _iterator6.f();\n        }\n        return;\n      }\n      if (key === '%') {\n        firstNumber = Number(firstNumber) / 100 * Number(secondNumber);\n        result = true;\n        screen.textContent = +firstNumber.toString().slice(0, 12);\n        var _iterator7 = _createForOfIteratorHelper(disabledBtns),\n          _step7;\n        try {\n          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {\n            var _disabledBtn2 = _step7.value;\n            _disabledBtn2.classList.remove('_disabled');\n          }\n        } catch (err) {\n          _iterator7.e(err);\n        } finally {\n          _iterator7.f();\n        }\n      }\n      if (key === '+/-') {\n        if (firstNumber !== '' && secondNumber == '') {\n          firstNumber = firstNumber * -1;\n          screen.textContent = firstNumber.toString().slice(0, 12);\n        }\n        if (secondNumber !== '' && firstNumber !== '') {\n          secondNumber = secondNumber * -1;\n          screen.textContent = secondNumber.toString().slice(0, 12);\n        }\n        if (secondNumber !== '' && firstNumber !== '' && result) {\n          firstNumber = firstNumber * -1;\n          result = true;\n          screen.textContent = +firstNumber.toString().slice(0, 12);\n        }\n      }\n      if (key === '=') {\n        var _iterator8 = _createForOfIteratorHelper(disabledBtns),\n          _step8;\n        try {\n          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {\n            var _disabledBtn3 = _step8.value;\n            _disabledBtn3.classList.remove('_disabled');\n          }\n        } catch (err) {\n          _iterator8.e(err);\n        } finally {\n          _iterator8.f();\n        }\n        if (secondNumber === '') {\n          secondNumber = firstNumber;\n        }\n        switch (action) {\n          case '':\n            firstNumber = Number(firstNumber);\n            break;\n          case '+':\n            firstNumber = Number(firstNumber) + Number(secondNumber);\n            break;\n          case '-':\n            firstNumber = Number(firstNumber) - Number(secondNumber);\n            break;\n          case 'x':\n            firstNumber = Number(firstNumber) * Number(secondNumber);\n            break;\n          case '÷':\n            if (secondNumber === '0') {\n              screen.textContent = 'Error';\n              firstNumber = '';\n              secondNumber = '';\n              action = '';\n              return;\n            }\n            firstNumber = Number(firstNumber) / Number(secondNumber);\n            break;\n        }\n        result = true;\n        screen.textContent = +firstNumber.toString().slice(0, 12);\n      }\n    });\n  }\n} catch (err) {\n  _iterator4.e(err);\n} finally {\n  _iterator4.f();\n}\n\n\n\n//# sourceURL=webpack://test_calculator/./src/calculator.js?"
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js!./src/calculator.css":
      /*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/calculator.css ***!
  \******************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap);"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, "body {\\r\\n\\tfont-family: \\"Roboto\\", sans-serif;\\r\\n\\tmargin: 0;\\r\\n}\\r\\n\\r\\n* {\\r\\n\\tbox-sizing: border-box;\\r\\n}\\r\\n\\r\\n.section {\\r\\n\\theight: 100vh;\\r\\n\\twidth: 100%;\\r\\n\\tdisplay: flex;\\r\\n\\talign-items: center;\\r\\n\\tjustify-content: center;\\r\\n\\tbackground: -webkit-linear-gradient(90deg, #ffba08, #ff1b3a, #370617);\\r\\n\\tbackground: linear-gradient(90deg, #ffba08, #ff1b3a, #370617);\\r\\n\\tmargin: 0;\\r\\n}\\r\\n\\r\\n._section_light {\\r\\n\\tbackground: -webkit-linear-gradient(90deg, #fde4cf, #a3c4f3, #8eecf5);\\r\\n\\tbackground: linear-gradient(90deg, #fde4cf, #a3c4f3, #8eecf5);\\r\\n}\\r\\n\\r\\n.mode-button {\\r\\n\\tposition: absolute;\\r\\n\\tdisplay: flex;\\r\\n\\talign-items: center;\\r\\n\\tjustify-content: center;\\r\\n\\twidth: 100px;\\r\\n\\theight: 30px;\\r\\n\\tborder-radius: 15px;\\r\\n\\ttop: 20px;\\r\\n\\tright: 20px;\\r\\n\\tbackground-color: rgba(255, 255, 255, 0.5);\\r\\n\\tfont-size: 14px;\\r\\n\\tfont-weight: 600;\\r\\n\\tcursor: pointer;\\r\\n}\\r\\n\\r\\n.mode-button:hover {\\r\\n\\tbackground-color: rgba(255, 255, 255);\\r\\n}\\r\\n\\r\\n.wrapper {\\r\\n\\twidth: 360px;\\r\\n\\theight: fit-content;\\r\\n\\tbackground-color: #370617;\\r\\n\\tborder-radius: 15px;\\r\\n\\tjustify-content: center;\\r\\n\\tbox-shadow: 0 0 30px #000;\\r\\n}\\r\\n\\r\\n._wrapper_light {\\r\\n\\tbackground-color: #EDEDE9;\\r\\n\\tbox-shadow: 0 0 30px #649ff6;\\r\\n}\\r\\n\\r\\n.calculator {\\r\\n\\tdisplay: grid;\\r\\n\\theight: 100%;\\r\\n\\tmargin: 10px;\\r\\n\\tborder-radius: 15px;\\r\\n}\\r\\n\\r\\n.calculator__result {\\r\\n\\tmax-width: 340px;\\r\\n\\tpadding: 20px;\\r\\n\\theight: 120px;\\r\\n\\t/*overflow-x: hidden;*/\\r\\n\\tborder-radius: 15px 15px 0px 0px;\\r\\n\\tdisplay: flex;\\r\\n\\tjustify-content: flex-end;\\r\\n\\talign-items: center;\\r\\n\\tfont-weight: 900;\\r\\n\\tfont-size: 45px;\\r\\n\\tbackground-color: rgba(255, 255, 255, 0.3);\\r\\n\\tmargin-bottom: 20px;\\r\\n}\\r\\n\\r\\n.calculator__numbers {\\r\\n\\twidth: 100%;\\r\\n\\theight: 80px;\\r\\n\\tdisplay: grid;\\r\\n\\tgrid-template-columns: 1fr 1fr 1fr 1fr;\\r\\n\\tmargin-bottom: 5px;\\r\\n}\\r\\n\\r\\n.calculator__item {\\r\\n\\tborder-radius: 50%;\\r\\n\\twidth: 80px;\\r\\n\\theight: 80px;\\r\\n\\tdisplay: flex;\\r\\n\\tjustify-content: center;\\r\\n\\talign-items: center;\\r\\n\\tcursor: pointer;\\r\\n\\tbackground-color: #a77a09;\\r\\n\\tjustify-self: center;\\r\\n\\tcolor: rgb(6, 6, 6);\\r\\n\\tfont-size: 40px;\\r\\n\\tfont-weight: bolder;\\r\\n}\\r\\n\\r\\n._item_light {\\r\\n\\tbackground-color: #fc97d2;\\r\\n}\\r\\n\\r\\n.calculator__item._item_light:hover {\\r\\n\\tbackground-color: #FF75C6;\\r\\n}\\r\\n\\r\\n.calculator__item:hover {\\r\\n\\tbackground-color: #ffba08;\\r\\n\\tcolor: rgb(255, 255, 255);\\r\\n}\\r\\n\\r\\n\\r\\n.calculator__item_light {\\r\\n\\tbackground-color: #9a7a40;\\r\\n\\tcolor: black;\\r\\n}\\r\\n\\r\\n._light {\\r\\n\\tbackground-color: #99f3fb;\\r\\n}\\r\\n\\r\\n.calculator__item_light._light:hover {\\r\\n\\tbackground-color: #64eefb;\\r\\n\\tcolor: black;\\r\\n}\\r\\n\\r\\n.calculator__item_light:hover {\\r\\n\\tbackground-color: #ffcb69;\\r\\n\\tcolor: rgb(255, 255, 255);\\r\\n}\\r\\n\\r\\n.calculator__item_long {\\r\\n\\tdisplay: grid;\\r\\n\\twidth: 165px;\\r\\n\\tborder-radius: 40px;\\r\\n}\\r\\n\\r\\n.calculator__item_colored {\\r\\n\\tbackground-color: #c4182f;\\r\\n\\tcolor: #080808;\\r\\n}\\r\\n\\r\\n._colored_light {\\r\\n\\tbackground-color: #a2c7fd;\\r\\n}\\r\\n\\r\\n.calculator__item_colored._colored_light:hover {\\r\\n\\tbackground-color: #80b1f9;\\r\\n}\\r\\n\\r\\n.calculator__item_colored:hover {\\r\\n\\tbackground-color: #ff1b3a;\\r\\n\\tcolor: rgb(255, 255, 255);\\r\\n}\\r\\n\\r\\n.calculator__numbers_finalrow {\\r\\n\\tdisplay: grid;\\r\\n\\theight: 80px;\\r\\n\\tgrid-template-columns: 2fr 1fr 1fr;\\r\\n}\\r\\n\\r\\n._disabled {\\r\\n\\tpointer-events: none;\\r\\n\\topacity: 0.5\\r\\n}\\r\\n", ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://test_calculator/./src/calculator.css?./node_modules/css-loader/dist/cjs.js'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js!./src/normalize.css":
      /*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/normalize.css ***!
  \*****************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\\r\\n/* Document\\r\\n   ========================================================================== */\\r\\n/**\\r\\n * 1. Correct the line height in all browsers.\\r\\n * 2. Prevent adjustments of font size after orientation changes in iOS.\\r\\n */\\r\\nhtml {\\r\\n  line-height: 1.15;\\r\\n  /* 1 */\\r\\n  -webkit-text-size-adjust: 100%;\\r\\n  /* 2 */\\r\\n}\\r\\n\\r\\n/* Sections\\r\\n\\t ========================================================================== */\\r\\n/**\\r\\n   * Remove the margin in all browsers.\\r\\n   */\\r\\nbody {\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n/**\\r\\n   * Render the `main` element consistently in IE.\\r\\n   */\\r\\nmain {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n/**\\r\\n   * Correct the font size and margin on `h1` elements within `section` and\\r\\n   * `article` contexts in Chrome, Firefox, and Safari.\\r\\n   */\\r\\nh1 {\\r\\n  font-size: 2em;\\r\\n  margin: 0.67em 0;\\r\\n}\\r\\n\\r\\n/* Grouping content\\r\\n\\t ========================================================================== */\\r\\n/**\\r\\n   * 1. Add the correct box sizing in Firefox.\\r\\n   * 2. Show the overflow in Edge and IE.\\r\\n   */\\r\\nhr {\\r\\n  box-sizing: content-box;\\r\\n  /* 1 */\\r\\n  height: 0;\\r\\n  /* 1 */\\r\\n  overflow: visible;\\r\\n  /* 2 */\\r\\n}\\r\\n\\r\\n/**\\r\\n   * 1. Correct the inheritance and scaling of font size in all browsers.\\r\\n   * 2. Correct the odd `em` font sizing in all browsers.\\r\\n   */\\r\\npre {\\r\\n  font-family: monospace, monospace;\\r\\n  /* 1 */\\r\\n  font-size: 1em;\\r\\n  /* 2 */\\r\\n}\\r\\n\\r\\n/* Text-level semantics\\r\\n\\t ========================================================================== */\\r\\n/**\\r\\n   * Remove the gray background on active links in IE 10.\\r\\n   */\\r\\na {\\r\\n  background-color: transparent;\\r\\n}\\r\\n\\r\\n/**\\r\\n   * 1. Remove the bottom border in Chrome 57-\\r\\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\\r\\n   */\\r\\nabbr[title] {\\r\\n  border-bottom: none;\\r\\n  /* 1 */\\r\\n  text-decoration: underline;\\r\\n  /* 2 */\\r\\n  -webkit-text-decoration: underline dotted;\\r\\n          text-decoration: underline dotted;\\r\\n  /* 2 */\\r\\n}\\r\\n\\r\\n/**\\r\\n   * Add the correct font weight in Chrome, Edge, and Safari.\\r\\n   */\\r\\nb,\\r\\nstrong {\\r\\n  font-weight: bolder;\\r\\n}\\r\\n\\r\\n/**\\r\\n   * 1. Correct the inheritance and scaling of font size in all browsers.\\r\\n   * 2. Correct the odd `em` font sizing in all browsers.\\r\\n   */\\r\\ncode,\\r\\nkbd,\\r\\nsamp {\\r\\n  font-family: monospace, monospace;\\r\\n  /* 1 */\\r\\n  font-size: 1em;\\r\\n  /* 2 */\\r\\n}\\r\\n\\r\\n/**\\r\\n   * Add the correct font size in all browsers.\\r\\n   */\\r\\nsmall {\\r\\n  font-size: 80%;\\r\\n}\\r\\n\\r\\n/**\\r\\n   * Prevent `sub` and `sup` elements from affecting the line height in\\r\\n   * all browsers.\\r\\n   */\\r\\nsub,\\r\\nsup {\\r\\n  font-size: 75%;\\r\\n  line-height: 0;\\r\\n  position: relative;\\r\\n  vertical-align: baseline;\\r\\n}\\r\\n\\r\\nsub {\\r\\n  bottom: -0.25em;\\r\\n}\\r\\n\\r\\nsup {\\r\\n  top: -0.5em;\\r\\n}\\r\\n\\r\\n/* Embedded content\\r\\n\\t ========================================================================== */\\r\\n/**\\r\\n   * Remove the border on images inside links in IE 10.\\r\\n   */\\r\\nimg {\\r\\n  border-style: none;\\r\\n}\\r\\n\\r\\n/* Forms\\r\\n\\t ========================================================================== */\\r\\n/**\\r\\n   * 1. Change the font styles in all browsers.\\r\\n   * 2. Remove the margin in Firefox and Safari.\\r\\n   */\\r\\nbutton,\\r\\ninput,\\r\\noptgroup,\\r\\nselect,\\r\\ntextarea {\\r\\n  font-family: inherit;\\r\\n  /* 1 */\\r\\n  font-size: 100%;\\r\\n  /* 1 */\\r\\n  line-height: 1.15;\\r\\n  /* 1 */\\r\\n  margin: 0;\\r\\n  /* 2 */\\r\\n}\\r\\n\\r\\n/**\\r\\n   * Show the overflow in IE.\\r\\n   * 1. Show the overflow in Edge.\\r\\n   */\\r\\nbutton,\\r\\ninput {\\r\\n  /* 1 */\\r\\n  overflow: visible;\\r\\n}\\r\\n\\r\\n/**\\r\\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\\r\\n   * 1. Remove the inheritance of text transform in Firefox.\\r\\n   */\\r\\nbutton,\\r\\nselect {\\r\\n  /* 1 */\\r\\n  text-transform: none;\\r\\n}\\r\\n\\r\\n/**\\r\\n   * Correct the inability to style clickable types in iOS and Safari.\\r\\n   */\\r\\nbutton,\\r\\n[type=button],\\r\\n[type=reset],\\r\\n[type=submit] {\\r\\n  -webkit-appearance: button;\\r\\n}\\r\\n\\r\\n/**\\r\\n   * Remove the inner border and padding in Firefox.\\r\\n   */\\r\\nbutton::-moz-focus-inner,\\r\\n[type=button]::-moz-focus-inner,\\r\\n[type=reset]::-moz-focus-inner,\\r\\n[type=submit]::-moz-focus-inner {\\r\\n  border-style: none;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n/**\\r\\n   * Restore the focus styles unset by the previous rule.\\r\\n   */\\r\\nbutton:-moz-focusring,\\r\\n[type=button]:-moz-focusring,\\r\\n[type=reset]:-moz-focusring,\\r\\n[type=submit]:-moz-focusring {\\r\\n  outline: 1px dotted ButtonText;\\r\\n}\\r\\n\\r\\n/**\\r\\n   * Correct the padding in Firefox.\\r\\n   */\\r\\nfieldset {\\r\\n  padding: 0.35em 0.75em 0.625em;\\r\\n}\\r\\n\\r\\n/**\\r\\n   * 1. Correct the text wrapping in Edge and IE.\\r\\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\\r\\n   * 3. Remove the padding so developers are not caught out when they zero out\\r\\n   *    `fieldset` elements in all browsers.\\r\\n   */\\r\\nlegend {\\r\\n  box-sizing: border-box;\\r\\n  /* 1 */\\r\\n  color: inherit;\\r\\n  /* 2 */\\r\\n  display: table;\\r\\n  /* 1 */\\r\\n  max-width: 100%;\\r\\n  /* 1 */\\r\\n  padding: 0;\\r\\n  /* 3 */\\r\\n  white-space: normal;\\r\\n  /* 1 */\\r\\n}\\r\\n\\r\\n/**\\r\\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\\r\\n   */\\r\\nprogress {\\r\\n  vertical-align: baseline;\\r\\n}\\r\\n\\r\\n/**\\r\\n   * Remove the default vertical scrollbar in IE 10+.\\r\\n   */\\r\\ntextarea {\\r\\n  overflow: auto;\\r\\n}\\r\\n\\r\\n/**\\r\\n   * 1. Add the correct box sizing in IE 10.\\r\\n   * 2. Remove the padding in IE 10.\\r\\n   */\\r\\n[type=checkbox],\\r\\n[type=radio] {\\r\\n  box-sizing: border-box;\\r\\n  /* 1 */\\r\\n  padding: 0;\\r\\n  /* 2 */\\r\\n}\\r\\n\\r\\n/**\\r\\n   * Correct the cursor style of increment and decrement buttons in Chrome.\\r\\n   */\\r\\n[type=number]::-webkit-inner-spin-button,\\r\\n[type=number]::-webkit-outer-spin-button {\\r\\n  height: auto;\\r\\n}\\r\\n\\r\\n/**\\r\\n   * 1. Correct the odd appearance in Chrome and Safari.\\r\\n   * 2. Correct the outline style in Safari.\\r\\n   */\\r\\n[type=search] {\\r\\n  -webkit-appearance: textfield;\\r\\n  /* 1 */\\r\\n  outline-offset: -2px;\\r\\n  /* 2 */\\r\\n}\\r\\n\\r\\n/**\\r\\n   * Remove the inner padding in Chrome and Safari on macOS.\\r\\n   */\\r\\n[type=search]::-webkit-search-decoration {\\r\\n  -webkit-appearance: none;\\r\\n}\\r\\n\\r\\n/**\\r\\n   * 1. Correct the inability to style clickable types in iOS and Safari.\\r\\n   * 2. Change font properties to `inherit` in Safari.\\r\\n   */\\r\\n::-webkit-file-upload-button {\\r\\n  -webkit-appearance: button;\\r\\n  /* 1 */\\r\\n  font: inherit;\\r\\n  /* 2 */\\r\\n}\\r\\n\\r\\n/* Interactive\\r\\n\\t ========================================================================== */\\r\\n/*\\r\\n   * Add the correct display in Edge, IE 10+, and Firefox.\\r\\n   */\\r\\ndetails {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n/*\\r\\n   * Add the correct display in all browsers.\\r\\n   */\\r\\nsummary {\\r\\n  display: list-item;\\r\\n}\\r\\n\\r\\n/* Misc\\r\\n\\t ========================================================================== */\\r\\n/**\\r\\n   * Add the correct display in IE 10+.\\r\\n   */\\r\\ntemplate {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n/**\\r\\n   * Add the correct display in IE 10.\\r\\n   */\\r\\n[hidden] {\\r\\n  display: none;\\r\\n}", ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://test_calculator/./src/normalize.css?./node_modules/css-loader/dist/cjs.js'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
        eval(
          '\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = "";\n      var needLayer = typeof item[5] !== "undefined";\n      if (item[4]) {\n        content += "@supports (".concat(item[4], ") {");\n      }\n      if (item[2]) {\n        content += "@media ".concat(item[2], " {");\n      }\n      if (needLayer) {\n        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += "}";\n      }\n      if (item[2]) {\n        content += "}";\n      }\n      if (item[4]) {\n        content += "}";\n      }\n      return content;\n    }).join("");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === "string") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== "undefined") {\n        if (typeof item[5] === "undefined") {\n          item[5] = layer;\n        } else {\n          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = "".concat(supports);\n        } else {\n          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://test_calculator/./node_modules/css-loader/dist/runtime/api.js?'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
      /*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
      /***/ (module) => {
        eval(
          "\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://test_calculator/./node_modules/css-loader/dist/runtime/noSourceMaps.js?"
        );

        /***/
      },

    /***/ "./src/calculator.css":
      /*!****************************!*\
  !*** ./src/calculator.css ***!
  \****************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_calculator_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./calculator.css */ "./node_modules/css-loader/dist/cjs.js!./src/calculator.css");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_calculator_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_calculator_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === "default") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === "default") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_calculator_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;\n    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_calculator_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_calculator_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;\n\n    module.hot.accept(\n      /*! !!../node_modules/css-loader/dist/cjs.js!./calculator.css */ "./node_modules/css-loader/dist/cjs.js!./src/calculator.css",\n      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_calculator_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./calculator.css */ "./node_modules/css-loader/dist/cjs.js!./src/calculator.css");\n(function () {\n        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_calculator_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_calculator_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_calculator_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_calculator_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_calculator_css__WEBPACK_IMPORTED_MODULE_6__["default"]);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_calculator_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_calculator_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_calculator_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://test_calculator/./src/calculator.css?'
        );

        /***/
      },

    /***/ "./src/normalize.css":
      /*!***************************!*\
  !*** ./src/normalize.css ***!
  \***************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/normalize.css");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === "default") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === "default") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;\n    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;\n\n    module.hot.accept(\n      /*! !!../node_modules/css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/normalize.css",\n      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/normalize.css");\n(function () {\n        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"]);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://test_calculator/./src/normalize.css?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = "".concat(id, " ").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://test_calculator/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === "undefined") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://test_calculator/./node_modules/style-loader/dist/runtime/insertBySelector.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement("style");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://test_calculator/./node_modules/style-loader/dist/runtime/insertStyleElement.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute("nonce", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://test_calculator/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = "";\n\n  if (obj.supports) {\n    css += "@supports (".concat(obj.supports, ") {");\n  }\n\n  if (obj.media) {\n    css += "@media ".concat(obj.media, " {");\n  }\n\n  var needLayer = typeof obj.layer !== "undefined";\n\n  if (needLayer) {\n    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += "}";\n  }\n\n  if (obj.media) {\n    css += "}";\n  }\n\n  if (obj.supports) {\n    css += "}";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== "undefined") {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://test_calculator/./node_modules/style-loader/dist/runtime/styleDomAPI.js?'
        );

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
        eval(
          "\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://test_calculator/./node_modules/style-loader/dist/runtime/styleTagTransform.js?"
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ if (cachedModule.error !== undefined) throw cachedModule.error;
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ try {
      /******/ var execOptions = {
        id: moduleId,
        module: module,
        factory: __webpack_modules__[moduleId],
        require: __webpack_require__,
      };
      /******/ __webpack_require__.i.forEach(function (handler) {
        handler(execOptions);
      });
      /******/ module = execOptions.module;
      /******/ execOptions.factory.call(
        module.exports,
        module,
        module.exports,
        execOptions.require
      );
      /******/
    } catch (e) {
      /******/ module.error = e;
      /******/ throw e;
      /******/
    }
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = __webpack_modules__;
  /******/
  /******/ // expose the module cache
  /******/ __webpack_require__.c = __webpack_module_cache__;
  /******/
  /******/ // expose the module execution interceptor
  /******/ __webpack_require__.i = [];
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/get javascript update chunk filename */
  /******/ (() => {
    /******/ // This function allow to reference all chunks
    /******/ __webpack_require__.hu = (chunkId) => {
      /******/ // return url for filenames based on template
      /******/ return (
        "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js"
      );
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/get update manifest filename */
  /******/ (() => {
    /******/ __webpack_require__.hmrF = () =>
      "main." + __webpack_require__.h() + ".hot-update.json";
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/getFullHash */
  /******/ (() => {
    /******/ __webpack_require__.h = () => "8d5edc7260f8309e5844";
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/global */
  /******/ (() => {
    /******/ __webpack_require__.g = (function () {
      /******/ if (typeof globalThis === "object") return globalThis;
      /******/ try {
        /******/ return this || new Function("return this")();
        /******/
      } catch (e) {
        /******/ if (typeof window === "object") return window;
        /******/
      }
      /******/
    })();
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/load script */
  /******/ (() => {
    /******/ var inProgress = {};
    /******/ var dataWebpackPrefix = "test_calculator:";
    /******/ // loadScript function to load a script via script tag
    /******/ __webpack_require__.l = (url, done, key, chunkId) => {
      /******/ if (inProgress[url]) {
        inProgress[url].push(done);
        return;
      }
      /******/ var script, needAttach;
      /******/ if (key !== undefined) {
        /******/ var scripts = document.getElementsByTagName("script");
        /******/ for (var i = 0; i < scripts.length; i++) {
          /******/ var s = scripts[i];
          /******/ if (
            s.getAttribute("src") == url ||
            s.getAttribute("data-webpack") == dataWebpackPrefix + key
          ) {
            script = s;
            break;
          }
          /******/
        }
        /******/
      }
      /******/ if (!script) {
        /******/ needAttach = true;
        /******/ script = document.createElement("script");
        /******/
        /******/ script.charset = "utf-8";
        /******/ script.timeout = 120;
        /******/ if (__webpack_require__.nc) {
          /******/ script.setAttribute("nonce", __webpack_require__.nc);
          /******/
        }
        /******/ script.setAttribute("data-webpack", dataWebpackPrefix + key);
        /******/ script.src = url;
        /******/
      }
      /******/ inProgress[url] = [done];
      /******/ var onScriptComplete = (prev, event) => {
        /******/ // avoid mem leaks in IE.
        /******/ script.onerror = script.onload = null;
        /******/ clearTimeout(timeout);
        /******/ var doneFns = inProgress[url];
        /******/ delete inProgress[url];
        /******/ script.parentNode && script.parentNode.removeChild(script);
        /******/ doneFns && doneFns.forEach((fn) => fn(event));
        /******/ if (prev) return prev(event);
        /******/
      };
      /******/ var timeout = setTimeout(
        onScriptComplete.bind(null, undefined, {
          type: "timeout",
          target: script,
        }),
        120000
      );
      /******/ script.onerror = onScriptComplete.bind(null, script.onerror);
      /******/ script.onload = onScriptComplete.bind(null, script.onload);
      /******/ needAttach && document.head.appendChild(script);
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hot module replacement */
  /******/ (() => {
    /******/ var currentModuleData = {};
    /******/ var installedModules = __webpack_require__.c;
    /******/
    /******/ // module and require creation
    /******/ var currentChildModule;
    /******/ var currentParents = [];
    /******/
    /******/ // status
    /******/ var registeredStatusHandlers = [];
    /******/ var currentStatus = "idle";
    /******/
    /******/ // while downloading
    /******/ var blockingPromises = 0;
    /******/ var blockingPromisesWaiting = [];
    /******/
    /******/ // The update info
    /******/ var currentUpdateApplyHandlers;
    /******/ var queuedInvalidatedModules;
    /******/
    /******/ // eslint-disable-next-line no-unused-vars
    /******/ __webpack_require__.hmrD = currentModuleData;
    /******/
    /******/ __webpack_require__.i.push(function (options) {
      /******/ var module = options.module;
      /******/ var require = createRequire(options.require, options.id);
      /******/ module.hot = createModuleHotObject(options.id, module);
      /******/ module.parents = currentParents;
      /******/ module.children = [];
      /******/ currentParents = [];
      /******/ options.require = require;
      /******/
    });
    /******/
    /******/ __webpack_require__.hmrC = {};
    /******/ __webpack_require__.hmrI = {};
    /******/
    /******/ function createRequire(require, moduleId) {
      /******/ var me = installedModules[moduleId];
      /******/ if (!me) return require;
      /******/ var fn = function (request) {
        /******/ if (me.hot.active) {
          /******/ if (installedModules[request]) {
            /******/ var parents = installedModules[request].parents;
            /******/ if (parents.indexOf(moduleId) === -1) {
              /******/ parents.push(moduleId);
              /******/
            }
            /******/
          } else {
            /******/ currentParents = [moduleId];
            /******/ currentChildModule = request;
            /******/
          }
          /******/ if (me.children.indexOf(request) === -1) {
            /******/ me.children.push(request);
            /******/
          }
          /******/
        } else {
          /******/ console.warn(
            /******/ "[HMR] unexpected require(" +
              /******/ request +
              /******/ ") from disposed module " +
              /******/ moduleId
            /******/
          );
          /******/ currentParents = [];
          /******/
        }
        /******/ return require(request);
        /******/
      };
      /******/ var createPropertyDescriptor = function (name) {
        /******/ return {
          /******/ configurable: true,
          /******/ enumerable: true,
          /******/ get: function () {
            /******/ return require[name];
            /******/
          },
          /******/ set: function (value) {
            /******/ require[name] = value;
            /******/
          },
          /******/
        };
        /******/
      };
      /******/ for (var name in require) {
        /******/ if (
          Object.prototype.hasOwnProperty.call(require, name) &&
          name !== "e"
        ) {
          /******/ Object.defineProperty(
            fn,
            name,
            createPropertyDescriptor(name)
          );
          /******/
        }
        /******/
      }
      /******/ fn.e = function (chunkId) {
        /******/ return trackBlockingPromise(require.e(chunkId));
        /******/
      };
      /******/ return fn;
      /******/
    }
    /******/
    /******/ function createModuleHotObject(moduleId, me) {
      /******/ var _main = currentChildModule !== moduleId;
      /******/ var hot = {
        /******/ // private stuff
        /******/ _acceptedDependencies: {},
        /******/ _acceptedErrorHandlers: {},
        /******/ _declinedDependencies: {},
        /******/ _selfAccepted: false,
        /******/ _selfDeclined: false,
        /******/ _selfInvalidated: false,
        /******/ _disposeHandlers: [],
        /******/ _main: _main,
        /******/ _requireSelf: function () {
          /******/ currentParents = me.parents.slice();
          /******/ currentChildModule = _main ? undefined : moduleId;
          /******/ __webpack_require__(moduleId);
          /******/
        },
        /******/
        /******/ // Module API
        /******/ active: true,
        /******/ accept: function (dep, callback, errorHandler) {
          /******/ if (dep === undefined) hot._selfAccepted = true;
          /******/ else if (typeof dep === "function") hot._selfAccepted = dep;
          /******/ else if (typeof dep === "object" && dep !== null) {
            /******/ for (var i = 0; i < dep.length; i++) {
              /******/ hot._acceptedDependencies[dep[i]] =
                callback || function () {};
              /******/ hot._acceptedErrorHandlers[dep[i]] = errorHandler;
              /******/
            }
            /******/
          } else {
            /******/ hot._acceptedDependencies[dep] =
              callback || function () {};
            /******/ hot._acceptedErrorHandlers[dep] = errorHandler;
            /******/
          }
          /******/
        },
        /******/ decline: function (dep) {
          /******/ if (dep === undefined) hot._selfDeclined = true;
          /******/ else if (typeof dep === "object" && dep !== null)
            /******/ for (var i = 0; i < dep.length; i++)
              /******/ hot._declinedDependencies[dep[i]] = true;
          /******/ else hot._declinedDependencies[dep] = true;
          /******/
        },
        /******/ dispose: function (callback) {
          /******/ hot._disposeHandlers.push(callback);
          /******/
        },
        /******/ addDisposeHandler: function (callback) {
          /******/ hot._disposeHandlers.push(callback);
          /******/
        },
        /******/ removeDisposeHandler: function (callback) {
          /******/ var idx = hot._disposeHandlers.indexOf(callback);
          /******/ if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
          /******/
        },
        /******/ invalidate: function () {
          /******/ this._selfInvalidated = true;
          /******/ switch (currentStatus) {
            /******/ case "idle":
              /******/ currentUpdateApplyHandlers = [];
              /******/ Object.keys(__webpack_require__.hmrI).forEach(function (
                key
              ) {
                /******/ __webpack_require__.hmrI[key](
                  /******/ moduleId,
                  /******/ currentUpdateApplyHandlers
                  /******/
                );
                /******/
              });
              /******/ setStatus("ready");
              /******/ break;
            /******/ case "ready":
              /******/ Object.keys(__webpack_require__.hmrI).forEach(function (
                key
              ) {
                /******/ __webpack_require__.hmrI[key](
                  /******/ moduleId,
                  /******/ currentUpdateApplyHandlers
                  /******/
                );
                /******/
              });
              /******/ break;
            /******/ case "prepare":
            /******/ case "check":
            /******/ case "dispose":
            /******/ case "apply":
              /******/ (queuedInvalidatedModules =
                queuedInvalidatedModules || []).push(
                /******/ moduleId
                /******/
              );
              /******/ break;
            /******/ default: // ignore requests in error states
              /******/ /******/ break;
            /******/
          }
          /******/
        },
        /******/
        /******/ // Management API
        /******/ check: hotCheck,
        /******/ apply: hotApply,
        /******/ status: function (l) {
          /******/ if (!l) return currentStatus;
          /******/ registeredStatusHandlers.push(l);
          /******/
        },
        /******/ addStatusHandler: function (l) {
          /******/ registeredStatusHandlers.push(l);
          /******/
        },
        /******/ removeStatusHandler: function (l) {
          /******/ var idx = registeredStatusHandlers.indexOf(l);
          /******/ if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
          /******/
        },
        /******/
        /******/ //inherit from previous dispose call
        /******/ data: currentModuleData[moduleId],
        /******/
      };
      /******/ currentChildModule = undefined;
      /******/ return hot;
      /******/
    }
    /******/
    /******/ function setStatus(newStatus) {
      /******/ currentStatus = newStatus;
      /******/ var results = [];
      /******/
      /******/ for (var i = 0; i < registeredStatusHandlers.length; i++)
        /******/ results[i] = registeredStatusHandlers[i].call(null, newStatus);
      /******/
      /******/ return Promise.all(results);
      /******/
    }
    /******/
    /******/ function unblock() {
      /******/ if (--blockingPromises === 0) {
        /******/ setStatus("ready").then(function () {
          /******/ if (blockingPromises === 0) {
            /******/ var list = blockingPromisesWaiting;
            /******/ blockingPromisesWaiting = [];
            /******/ for (var i = 0; i < list.length; i++) {
              /******/ list[i]();
              /******/
            }
            /******/
          }
          /******/
        });
        /******/
      }
      /******/
    }
    /******/
    /******/ function trackBlockingPromise(promise) {
      /******/ switch (currentStatus) {
        /******/ case "ready":
          /******/ setStatus("prepare");
        /******/ /* fallthrough */
        /******/ case "prepare":
          /******/ blockingPromises++;
          /******/ promise.then(unblock, unblock);
          /******/ return promise;
        /******/ default:
          /******/ return promise;
        /******/
      }
      /******/
    }
    /******/
    /******/ function waitForBlockingPromises(fn) {
      /******/ if (blockingPromises === 0) return fn();
      /******/ return new Promise(function (resolve) {
        /******/ blockingPromisesWaiting.push(function () {
          /******/ resolve(fn());
          /******/
        });
        /******/
      });
      /******/
    }
    /******/
    /******/ function hotCheck(applyOnUpdate) {
      /******/ if (currentStatus !== "idle") {
        /******/ throw new Error("check() is only allowed in idle status");
        /******/
      }
      /******/ return setStatus("check")
        /******/ .then(__webpack_require__.hmrM)
        /******/ .then(function (update) {
          /******/ if (!update) {
            /******/ return setStatus(
              applyInvalidatedModules() ? "ready" : "idle"
            ).then(
              /******/ function () {
                /******/ return null;
                /******/
              }
              /******/
            );
            /******/
          }
          /******/
          /******/ return setStatus("prepare").then(function () {
            /******/ var updatedModules = [];
            /******/ currentUpdateApplyHandlers = [];
            /******/
            /******/ return Promise.all(
              /******/ Object.keys(__webpack_require__.hmrC).reduce(
                function (
                  /******/ promises,
                  /******/ key
                  /******/
                ) {
                  /******/ __webpack_require__.hmrC[key](
                    /******/ update.c,
                    /******/ update.r,
                    /******/ update.m,
                    /******/ promises,
                    /******/ currentUpdateApplyHandlers,
                    /******/ updatedModules
                    /******/
                  );
                  /******/ return promises;
                  /******/
                },
                /******/ []
              )
              /******/
            ).then(function () {
              /******/ return waitForBlockingPromises(function () {
                /******/ if (applyOnUpdate) {
                  /******/ return internalApply(applyOnUpdate);
                  /******/
                } else {
                  /******/ return setStatus("ready").then(function () {
                    /******/ return updatedModules;
                    /******/
                  });
                  /******/
                }
                /******/
              });
              /******/
            });
            /******/
          });
          /******/
        });
      /******/
    }
    /******/
    /******/ function hotApply(options) {
      /******/ if (currentStatus !== "ready") {
        /******/ return Promise.resolve().then(function () {
          /******/ throw new Error(
            /******/ "apply() is only allowed in ready status (state: " +
              /******/ currentStatus +
              /******/ ")"
            /******/
          );
          /******/
        });
        /******/
      }
      /******/ return internalApply(options);
      /******/
    }
    /******/
    /******/ function internalApply(options) {
      /******/ options = options || {};
      /******/
      /******/ applyInvalidatedModules();
      /******/
      /******/ var results = currentUpdateApplyHandlers.map(function (handler) {
        /******/ return handler(options);
        /******/
      });
      /******/ currentUpdateApplyHandlers = undefined;
      /******/
      /******/ var errors = results
        /******/ .map(function (r) {
          /******/ return r.error;
          /******/
        })
        /******/ .filter(Boolean);
      /******/
      /******/ if (errors.length > 0) {
        /******/ return setStatus("abort").then(function () {
          /******/ throw errors[0];
          /******/
        });
        /******/
      }
      /******/
      /******/ // Now in "dispose" phase
      /******/ var disposePromise = setStatus("dispose");
      /******/
      /******/ results.forEach(function (result) {
        /******/ if (result.dispose) result.dispose();
        /******/
      });
      /******/
      /******/ // Now in "apply" phase
      /******/ var applyPromise = setStatus("apply");
      /******/
      /******/ var error;
      /******/ var reportError = function (err) {
        /******/ if (!error) error = err;
        /******/
      };
      /******/
      /******/ var outdatedModules = [];
      /******/ results.forEach(function (result) {
        /******/ if (result.apply) {
          /******/ var modules = result.apply(reportError);
          /******/ if (modules) {
            /******/ for (var i = 0; i < modules.length; i++) {
              /******/ outdatedModules.push(modules[i]);
              /******/
            }
            /******/
          }
          /******/
        }
        /******/
      });
      /******/
      /******/ return Promise.all([disposePromise, applyPromise]).then(
        function () {
          /******/ // handle errors in accept handlers and self accepted module load
          /******/ if (error) {
            /******/ return setStatus("fail").then(function () {
              /******/ throw error;
              /******/
            });
            /******/
          }
          /******/
          /******/ if (queuedInvalidatedModules) {
            /******/ return internalApply(options).then(function (list) {
              /******/ outdatedModules.forEach(function (moduleId) {
                /******/ if (list.indexOf(moduleId) < 0) list.push(moduleId);
                /******/
              });
              /******/ return list;
              /******/
            });
            /******/
          }
          /******/
          /******/ return setStatus("idle").then(function () {
            /******/ return outdatedModules;
            /******/
          });
          /******/
        }
      );
      /******/
    }
    /******/
    /******/ function applyInvalidatedModules() {
      /******/ if (queuedInvalidatedModules) {
        /******/ if (!currentUpdateApplyHandlers)
          currentUpdateApplyHandlers = [];
        /******/ Object.keys(__webpack_require__.hmrI).forEach(function (key) {
          /******/ queuedInvalidatedModules.forEach(function (moduleId) {
            /******/ __webpack_require__.hmrI[key](
              /******/ moduleId,
              /******/ currentUpdateApplyHandlers
              /******/
            );
            /******/
          });
          /******/
        });
        /******/ queuedInvalidatedModules = undefined;
        /******/ return true;
        /******/
      }
      /******/
    }
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/publicPath */
  /******/ (() => {
    /******/ var scriptUrl;
    /******/ if (__webpack_require__.g.importScripts)
      scriptUrl = __webpack_require__.g.location + "";
    /******/ var document = __webpack_require__.g.document;
    /******/ if (!scriptUrl && document) {
      /******/ if (document.currentScript)
        /******/ scriptUrl = document.currentScript.src;
      /******/ if (!scriptUrl) {
        /******/ var scripts = document.getElementsByTagName("script");
        /******/ if (scripts.length)
          scriptUrl = scripts[scripts.length - 1].src;
        /******/
      }
      /******/
    }
    /******/ // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
    /******/ // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
    /******/ if (!scriptUrl)
      throw new Error("Automatic publicPath is not supported in this browser");
    /******/ scriptUrl = scriptUrl
      .replace(/#.*$/, "")
      .replace(/\?.*$/, "")
      .replace(/\/[^\/]+$/, "/");
    /******/ __webpack_require__.p = scriptUrl;
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/jsonp chunk loading */
  /******/ (() => {
    /******/ // no baseURI
    /******/
    /******/ // object to store loaded and loading chunks
    /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
    /******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
    /******/ var installedChunks = (__webpack_require__.hmrS_jsonp =
      __webpack_require__.hmrS_jsonp || {
        /******/ main: 0,
        /******/
      });
    /******/
    /******/ // no chunk on demand loading
    /******/
    /******/ // no prefetching
    /******/
    /******/ // no preloaded
    /******/
    /******/ var currentUpdatedModulesList;
    /******/ var waitingUpdateResolves = {};
    /******/ function loadUpdateChunk(chunkId, updatedModulesList) {
      /******/ currentUpdatedModulesList = updatedModulesList;
      /******/ return new Promise((resolve, reject) => {
        /******/ waitingUpdateResolves[chunkId] = resolve;
        /******/ // start update chunk loading
        /******/ var url =
          __webpack_require__.p + __webpack_require__.hu(chunkId);
        /******/ // create error before stack unwound to get useful stacktrace later
        /******/ var error = new Error();
        /******/ var loadingEnded = (event) => {
          /******/ if (waitingUpdateResolves[chunkId]) {
            /******/ waitingUpdateResolves[chunkId] = undefined;
            /******/ var errorType =
              event && (event.type === "load" ? "missing" : event.type);
            /******/ var realSrc = event && event.target && event.target.src;
            /******/ error.message =
              "Loading hot update chunk " +
              chunkId +
              " failed.\n(" +
              errorType +
              ": " +
              realSrc +
              ")";
            /******/ error.name = "ChunkLoadError";
            /******/ error.type = errorType;
            /******/ error.request = realSrc;
            /******/ reject(error);
            /******/
          }
          /******/
        };
        /******/ __webpack_require__.l(url, loadingEnded);
        /******/
      });
      /******/
    }
    /******/
    /******/ self["webpackHotUpdatetest_calculator"] = (
      chunkId,
      moreModules,
      runtime
    ) => {
      /******/ for (var moduleId in moreModules) {
        /******/ if (__webpack_require__.o(moreModules, moduleId)) {
          /******/ currentUpdate[moduleId] = moreModules[moduleId];
          /******/ if (currentUpdatedModulesList)
            currentUpdatedModulesList.push(moduleId);
          /******/
        }
        /******/
      }
      /******/ if (runtime) currentUpdateRuntime.push(runtime);
      /******/ if (waitingUpdateResolves[chunkId]) {
        /******/ waitingUpdateResolves[chunkId]();
        /******/ waitingUpdateResolves[chunkId] = undefined;
        /******/
      }
      /******/
    };
    /******/
    /******/ var currentUpdateChunks;
    /******/ var currentUpdate;
    /******/ var currentUpdateRemovedChunks;
    /******/ var currentUpdateRuntime;
    /******/ function applyHandler(options) {
      /******/ if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
      /******/ currentUpdateChunks = undefined;
      /******/ function getAffectedModuleEffects(updateModuleId) {
        /******/ var outdatedModules = [updateModuleId];
        /******/ var outdatedDependencies = {};
        /******/
        /******/ var queue = outdatedModules.map(function (id) {
          /******/ return {
            /******/ chain: [id],
            /******/ id: id,
            /******/
          };
          /******/
        });
        /******/ while (queue.length > 0) {
          /******/ var queueItem = queue.pop();
          /******/ var moduleId = queueItem.id;
          /******/ var chain = queueItem.chain;
          /******/ var module = __webpack_require__.c[moduleId];
          /******/ if (
            /******/ !module ||
            /******/ (module.hot._selfAccepted && !module.hot._selfInvalidated)
            /******/
          )
            /******/ continue;
          /******/ if (module.hot._selfDeclined) {
            /******/ return {
              /******/ type: "self-declined",
              /******/ chain: chain,
              /******/ moduleId: moduleId,
              /******/
            };
            /******/
          }
          /******/ if (module.hot._main) {
            /******/ return {
              /******/ type: "unaccepted",
              /******/ chain: chain,
              /******/ moduleId: moduleId,
              /******/
            };
            /******/
          }
          /******/ for (var i = 0; i < module.parents.length; i++) {
            /******/ var parentId = module.parents[i];
            /******/ var parent = __webpack_require__.c[parentId];
            /******/ if (!parent) continue;
            /******/ if (parent.hot._declinedDependencies[moduleId]) {
              /******/ return {
                /******/ type: "declined",
                /******/ chain: chain.concat([parentId]),
                /******/ moduleId: moduleId,
                /******/ parentId: parentId,
                /******/
              };
              /******/
            }
            /******/ if (outdatedModules.indexOf(parentId) !== -1) continue;
            /******/ if (parent.hot._acceptedDependencies[moduleId]) {
              /******/ if (!outdatedDependencies[parentId])
                /******/ outdatedDependencies[parentId] = [];
              /******/ addAllToSet(outdatedDependencies[parentId], [moduleId]);
              /******/ continue;
              /******/
            }
            /******/ delete outdatedDependencies[parentId];
            /******/ outdatedModules.push(parentId);
            /******/ queue.push({
              /******/ chain: chain.concat([parentId]),
              /******/ id: parentId,
              /******/
            });
            /******/
          }
          /******/
        }
        /******/
        /******/ return {
          /******/ type: "accepted",
          /******/ moduleId: updateModuleId,
          /******/ outdatedModules: outdatedModules,
          /******/ outdatedDependencies: outdatedDependencies,
          /******/
        };
        /******/
      }
      /******/
      /******/ function addAllToSet(a, b) {
        /******/ for (var i = 0; i < b.length; i++) {
          /******/ var item = b[i];
          /******/ if (a.indexOf(item) === -1) a.push(item);
          /******/
        }
        /******/
      }
      /******/
      /******/ // at begin all updates modules are outdated
      /******/ // the "outdated" status can propagate to parents if they don't accept the children
      /******/ var outdatedDependencies = {};
      /******/ var outdatedModules = [];
      /******/ var appliedUpdate = {};
      /******/
      /******/ var warnUnexpectedRequire = function warnUnexpectedRequire(
        module
      ) {
        /******/ console.warn(
          /******/ "[HMR] unexpected require(" +
            module.id +
            ") to disposed module"
          /******/
        );
        /******/
      };
      /******/
      /******/ for (var moduleId in currentUpdate) {
        /******/ if (__webpack_require__.o(currentUpdate, moduleId)) {
          /******/ var newModuleFactory = currentUpdate[moduleId];
          /******/ /** @type {TODO} */
          /******/ var result;
          /******/ if (newModuleFactory) {
            /******/ result = getAffectedModuleEffects(moduleId);
            /******/
          } else {
            /******/ result = {
              /******/ type: "disposed",
              /******/ moduleId: moduleId,
              /******/
            };
            /******/
          }
          /******/ /** @type {Error|false} */
          /******/ var abortError = false;
          /******/ var doApply = false;
          /******/ var doDispose = false;
          /******/ var chainInfo = "";
          /******/ if (result.chain) {
            /******/ chainInfo =
              "\nUpdate propagation: " + result.chain.join(" -> ");
            /******/
          }
          /******/ switch (result.type) {
            /******/ case "self-declined":
              /******/ if (options.onDeclined) options.onDeclined(result);
              /******/ if (!options.ignoreDeclined)
                /******/ abortError = new Error(
                  /******/ "Aborted because of self decline: " +
                    /******/ result.moduleId +
                    /******/ chainInfo
                  /******/
                );
              /******/ break;
            /******/ case "declined":
              /******/ if (options.onDeclined) options.onDeclined(result);
              /******/ if (!options.ignoreDeclined)
                /******/ abortError = new Error(
                  /******/ "Aborted because of declined dependency: " +
                    /******/ result.moduleId +
                    /******/ " in " +
                    /******/ result.parentId +
                    /******/ chainInfo
                  /******/
                );
              /******/ break;
            /******/ case "unaccepted":
              /******/ if (options.onUnaccepted) options.onUnaccepted(result);
              /******/ if (!options.ignoreUnaccepted)
                /******/ abortError = new Error(
                  /******/ "Aborted because " +
                    moduleId +
                    " is not accepted" +
                    chainInfo
                  /******/
                );
              /******/ break;
            /******/ case "accepted":
              /******/ if (options.onAccepted) options.onAccepted(result);
              /******/ doApply = true;
              /******/ break;
            /******/ case "disposed":
              /******/ if (options.onDisposed) options.onDisposed(result);
              /******/ doDispose = true;
              /******/ break;
            /******/ default:
              /******/ throw new Error("Unexception type " + result.type);
            /******/
          }
          /******/ if (abortError) {
            /******/ return {
              /******/ error: abortError,
              /******/
            };
            /******/
          }
          /******/ if (doApply) {
            /******/ appliedUpdate[moduleId] = newModuleFactory;
            /******/ addAllToSet(outdatedModules, result.outdatedModules);
            /******/ for (moduleId in result.outdatedDependencies) {
              /******/ if (
                __webpack_require__.o(result.outdatedDependencies, moduleId)
              ) {
                /******/ if (!outdatedDependencies[moduleId])
                  /******/ outdatedDependencies[moduleId] = [];
                /******/ addAllToSet(
                  /******/ outdatedDependencies[moduleId],
                  /******/ result.outdatedDependencies[moduleId]
                  /******/
                );
                /******/
              }
              /******/
            }
            /******/
          }
          /******/ if (doDispose) {
            /******/ addAllToSet(outdatedModules, [result.moduleId]);
            /******/ appliedUpdate[moduleId] = warnUnexpectedRequire;
            /******/
          }
          /******/
        }
        /******/
      }
      /******/ currentUpdate = undefined;
      /******/
      /******/ // Store self accepted outdated modules to require them later by the module system
      /******/ var outdatedSelfAcceptedModules = [];
      /******/ for (var j = 0; j < outdatedModules.length; j++) {
        /******/ var outdatedModuleId = outdatedModules[j];
        /******/ var module = __webpack_require__.c[outdatedModuleId];
        /******/ if (
          /******/ module &&
          /******/ (module.hot._selfAccepted || module.hot._main) &&
          /******/ // removed self-accepted modules should not be required
          /******/ appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
          /******/ // when called invalidate self-accepting is not possible
          /******/ !module.hot._selfInvalidated
          /******/
        ) {
          /******/ outdatedSelfAcceptedModules.push({
            /******/ module: outdatedModuleId,
            /******/ require: module.hot._requireSelf,
            /******/ errorHandler: module.hot._selfAccepted,
            /******/
          });
          /******/
        }
        /******/
      }
      /******/
      /******/ var moduleOutdatedDependencies;
      /******/
      /******/ return {
        /******/ dispose: function () {
          /******/ currentUpdateRemovedChunks.forEach(function (chunkId) {
            /******/ delete installedChunks[chunkId];
            /******/
          });
          /******/ currentUpdateRemovedChunks = undefined;
          /******/
          /******/ var idx;
          /******/ var queue = outdatedModules.slice();
          /******/ while (queue.length > 0) {
            /******/ var moduleId = queue.pop();
            /******/ var module = __webpack_require__.c[moduleId];
            /******/ if (!module) continue;
            /******/
            /******/ var data = {};
            /******/
            /******/ // Call dispose handlers
            /******/ var disposeHandlers = module.hot._disposeHandlers;
            /******/ for (j = 0; j < disposeHandlers.length; j++) {
              /******/ disposeHandlers[j].call(null, data);
              /******/
            }
            /******/ __webpack_require__.hmrD[moduleId] = data;
            /******/
            /******/ // disable module (this disables requires from this module)
            /******/ module.hot.active = false;
            /******/
            /******/ // remove module from cache
            /******/ delete __webpack_require__.c[moduleId];
            /******/
            /******/ // when disposing there is no need to call dispose handler
            /******/ delete outdatedDependencies[moduleId];
            /******/
            /******/ // remove "parents" references from all children
            /******/ for (j = 0; j < module.children.length; j++) {
              /******/ var child = __webpack_require__.c[module.children[j]];
              /******/ if (!child) continue;
              /******/ idx = child.parents.indexOf(moduleId);
              /******/ if (idx >= 0) {
                /******/ child.parents.splice(idx, 1);
                /******/
              }
              /******/
            }
            /******/
          }
          /******/
          /******/ // remove outdated dependency from module children
          /******/ var dependency;
          /******/ for (var outdatedModuleId in outdatedDependencies) {
            /******/ if (
              __webpack_require__.o(outdatedDependencies, outdatedModuleId)
            ) {
              /******/ module = __webpack_require__.c[outdatedModuleId];
              /******/ if (module) {
                /******/ moduleOutdatedDependencies =
                  /******/ outdatedDependencies[outdatedModuleId];
                /******/ for (
                  j = 0;
                  j < moduleOutdatedDependencies.length;
                  j++
                ) {
                  /******/ dependency = moduleOutdatedDependencies[j];
                  /******/ idx = module.children.indexOf(dependency);
                  /******/ if (idx >= 0) module.children.splice(idx, 1);
                  /******/
                }
                /******/
              }
              /******/
            }
            /******/
          }
          /******/
        },
        /******/ apply: function (reportError) {
          /******/ // insert new code
          /******/ for (var updateModuleId in appliedUpdate) {
            /******/ if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
              /******/ __webpack_require__.m[updateModuleId] =
                appliedUpdate[updateModuleId];
              /******/
            }
            /******/
          }
          /******/
          /******/ // run new runtime modules
          /******/ for (var i = 0; i < currentUpdateRuntime.length; i++) {
            /******/ currentUpdateRuntime[i](__webpack_require__);
            /******/
          }
          /******/
          /******/ // call accept handlers
          /******/ for (var outdatedModuleId in outdatedDependencies) {
            /******/ if (
              __webpack_require__.o(outdatedDependencies, outdatedModuleId)
            ) {
              /******/ var module = __webpack_require__.c[outdatedModuleId];
              /******/ if (module) {
                /******/ moduleOutdatedDependencies =
                  /******/ outdatedDependencies[outdatedModuleId];
                /******/ var callbacks = [];
                /******/ var errorHandlers = [];
                /******/ var dependenciesForCallbacks = [];
                /******/ for (
                  var j = 0;
                  j < moduleOutdatedDependencies.length;
                  j++
                ) {
                  /******/ var dependency = moduleOutdatedDependencies[j];
                  /******/ var acceptCallback =
                    /******/ module.hot._acceptedDependencies[dependency];
                  /******/ var errorHandler =
                    /******/ module.hot._acceptedErrorHandlers[dependency];
                  /******/ if (acceptCallback) {
                    /******/ if (callbacks.indexOf(acceptCallback) !== -1)
                      continue;
                    /******/ callbacks.push(acceptCallback);
                    /******/ errorHandlers.push(errorHandler);
                    /******/ dependenciesForCallbacks.push(dependency);
                    /******/
                  }
                  /******/
                }
                /******/ for (var k = 0; k < callbacks.length; k++) {
                  /******/ try {
                    /******/ callbacks[k].call(
                      null,
                      moduleOutdatedDependencies
                    );
                    /******/
                  } catch (err) {
                    /******/ if (typeof errorHandlers[k] === "function") {
                      /******/ try {
                        /******/ errorHandlers[k](err, {
                          /******/ moduleId: outdatedModuleId,
                          /******/ dependencyId: dependenciesForCallbacks[k],
                          /******/
                        });
                        /******/
                      } catch (err2) {
                        /******/ if (options.onErrored) {
                          /******/ options.onErrored({
                            /******/ type: "accept-error-handler-errored",
                            /******/ moduleId: outdatedModuleId,
                            /******/ dependencyId: dependenciesForCallbacks[k],
                            /******/ error: err2,
                            /******/ originalError: err,
                            /******/
                          });
                          /******/
                        }
                        /******/ if (!options.ignoreErrored) {
                          /******/ reportError(err2);
                          /******/ reportError(err);
                          /******/
                        }
                        /******/
                      }
                      /******/
                    } else {
                      /******/ if (options.onErrored) {
                        /******/ options.onErrored({
                          /******/ type: "accept-errored",
                          /******/ moduleId: outdatedModuleId,
                          /******/ dependencyId: dependenciesForCallbacks[k],
                          /******/ error: err,
                          /******/
                        });
                        /******/
                      }
                      /******/ if (!options.ignoreErrored) {
                        /******/ reportError(err);
                        /******/
                      }
                      /******/
                    }
                    /******/
                  }
                  /******/
                }
                /******/
              }
              /******/
            }
            /******/
          }
          /******/
          /******/ // Load self accepted modules
          /******/ for (
            var o = 0;
            o < outdatedSelfAcceptedModules.length;
            o++
          ) {
            /******/ var item = outdatedSelfAcceptedModules[o];
            /******/ var moduleId = item.module;
            /******/ try {
              /******/ item.require(moduleId);
              /******/
            } catch (err) {
              /******/ if (typeof item.errorHandler === "function") {
                /******/ try {
                  /******/ item.errorHandler(err, {
                    /******/ moduleId: moduleId,
                    /******/ module: __webpack_require__.c[moduleId],
                    /******/
                  });
                  /******/
                } catch (err2) {
                  /******/ if (options.onErrored) {
                    /******/ options.onErrored({
                      /******/ type: "self-accept-error-handler-errored",
                      /******/ moduleId: moduleId,
                      /******/ error: err2,
                      /******/ originalError: err,
                      /******/
                    });
                    /******/
                  }
                  /******/ if (!options.ignoreErrored) {
                    /******/ reportError(err2);
                    /******/ reportError(err);
                    /******/
                  }
                  /******/
                }
                /******/
              } else {
                /******/ if (options.onErrored) {
                  /******/ options.onErrored({
                    /******/ type: "self-accept-errored",
                    /******/ moduleId: moduleId,
                    /******/ error: err,
                    /******/
                  });
                  /******/
                }
                /******/ if (!options.ignoreErrored) {
                  /******/ reportError(err);
                  /******/
                }
                /******/
              }
              /******/
            }
            /******/
          }
          /******/
          /******/ return outdatedModules;
          /******/
        },
        /******/
      };
      /******/
    }
    /******/ __webpack_require__.hmrI.jsonp = function (
      moduleId,
      applyHandlers
    ) {
      /******/ if (!currentUpdate) {
        /******/ currentUpdate = {};
        /******/ currentUpdateRuntime = [];
        /******/ currentUpdateRemovedChunks = [];
        /******/ applyHandlers.push(applyHandler);
        /******/
      }
      /******/ if (!__webpack_require__.o(currentUpdate, moduleId)) {
        /******/ currentUpdate[moduleId] = __webpack_require__.m[moduleId];
        /******/
      }
      /******/
    };
    /******/ __webpack_require__.hmrC.jsonp = function (
      /******/ chunkIds,
      /******/ removedChunks,
      /******/ removedModules,
      /******/ promises,
      /******/ applyHandlers,
      /******/ updatedModulesList
      /******/
    ) {
      /******/ applyHandlers.push(applyHandler);
      /******/ currentUpdateChunks = {};
      /******/ currentUpdateRemovedChunks = removedChunks;
      /******/ currentUpdate = removedModules.reduce(function (obj, key) {
        /******/ obj[key] = false;
        /******/ return obj;
        /******/
      }, {});
      /******/ currentUpdateRuntime = [];
      /******/ chunkIds.forEach(function (chunkId) {
        /******/ if (
          /******/ __webpack_require__.o(installedChunks, chunkId) &&
          /******/ installedChunks[chunkId] !== undefined
          /******/
        ) {
          /******/ promises.push(loadUpdateChunk(chunkId, updatedModulesList));
          /******/ currentUpdateChunks[chunkId] = true;
          /******/
        } else {
          /******/ currentUpdateChunks[chunkId] = false;
          /******/
        }
        /******/
      });
      /******/ if (__webpack_require__.f) {
        /******/ __webpack_require__.f.jsonpHmr = function (chunkId, promises) {
          /******/ if (
            /******/ currentUpdateChunks &&
            /******/ __webpack_require__.o(currentUpdateChunks, chunkId) &&
            /******/ !currentUpdateChunks[chunkId]
            /******/
          ) {
            /******/ promises.push(loadUpdateChunk(chunkId));
            /******/ currentUpdateChunks[chunkId] = true;
            /******/
          }
          /******/
        };
        /******/
      }
      /******/
    };
    /******/
    /******/ __webpack_require__.hmrM = () => {
      /******/ if (typeof fetch === "undefined")
        throw new Error("No browser support: need fetch API");
      /******/ return fetch(
        __webpack_require__.p + __webpack_require__.hmrF()
      ).then((response) => {
        /******/ if (response.status === 404) return; // no update available
        /******/ if (!response.ok)
          throw new Error(
            "Failed to fetch update manifest " + response.statusText
          );
        /******/ return response.json();
        /******/
      });
      /******/
    };
    /******/
    /******/ // no on chunks loaded
    /******/
    /******/ // no jsonp function
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // module cache are used so entry inlining is disabled
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ var __webpack_exports__ = __webpack_require__("./src/calculator.js");
  /******/
  /******/
})();
