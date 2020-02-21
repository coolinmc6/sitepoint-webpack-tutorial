(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat"],{

/***/ "./src/chat.js":
/*!*********************!*\
  !*** ./src/chat.js ***!
  \*********************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var _people__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./people */ \"./src/people.js\");\n\nfunction init() {\n  var root = document.createElement(\"div\");\n  root.innerHTML = \"<p>There are \".concat(_people__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length, \" people in the room.</p>\");\n  document.body.appendChild(root);\n}\n\n//# sourceURL=webpack:///./src/chat.js?");

/***/ }),

/***/ "./src/people.js":
/*!***********************!*\
  !*** ./src/people.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar people = [{\n  manager: \"Jen\",\n  name: \"Bob\"\n}, {\n  manager: \"Jen\",\n  name: \"Sue\"\n}, {\n  manager: \"Bob\",\n  name: \"Shirley\"\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (people);\n\n//# sourceURL=webpack:///./src/people.js?");

/***/ })

}]);