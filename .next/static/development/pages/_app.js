(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/_app.js"],{

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/styles.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./styles/styles.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".bg-red {\n  background: #FF4136;\n}\n\n.bg-red-10 {\n  background: #ff7169;\n}\n\n.bg-red-20 {\n  background: #ffa19c;\n}\n\n.bg-red-30 {\n  background: #ffd2cf;\n}\n\n.fill-red {\n  fill: #FF4136;\n}\n\n.fill-red-10 {\n  fill: #ff7169;\n}\n\n.fill-red-20 {\n  fill: #ffa19c;\n}\n\n.fill-red-30 {\n  fill: #ffd2cf;\n}\n\n.bdr-red {\n  border: 1px solid #FF4136;\n}\n\n.bdr-red-10 {\n  border: 1px solid #ff7169;\n}\n\n.bdr-red-20 {\n  border: 1px solid #ffa19c;\n}\n\n.bdr-red-30 {\n  border: 1px solid #ffd2cf;\n}\n\n.red {\n  color: #FF4136;\n}\n\n.red-10 {\n  color: #ff7169;\n}\n\n.red-20 {\n  color: #ffa19c;\n}\n\n.red-30 {\n  color: #ffd2cf;\n}\n\n.bg-orange {\n  background: #FF851B;\n}\n\n.bg-orange-10 {\n  background: #ffa04e;\n}\n\n.bg-orange-20 {\n  background: #ffbc81;\n}\n\n.bg-orange-30 {\n  background: #ffd7b4;\n}\n\n.fill-orange {\n  fill: #FF851B;\n}\n\n.fill-orange-10 {\n  fill: #ffa04e;\n}\n\n.fill-orange-20 {\n  fill: #ffbc81;\n}\n\n.fill-orange-30 {\n  fill: #ffd7b4;\n}\n\n.bdr-orange {\n  border: 1px solid #FF851B;\n}\n\n.bdr-orange-10 {\n  border: 1px solid #ffa04e;\n}\n\n.bdr-orange-20 {\n  border: 1px solid #ffbc81;\n}\n\n.bdr-orange-30 {\n  border: 1px solid #ffd7b4;\n}\n\n.orange {\n  color: #FF851B;\n}\n\n.orange-10 {\n  color: #ffa04e;\n}\n\n.orange-20 {\n  color: #ffbc81;\n}\n\n.orange-30 {\n  color: #ffd7b4;\n}\n\n.bg-yellow {\n  background: #FFDC00;\n}\n\n.bg-yellow-10 {\n  background: #ffe333;\n}\n\n.bg-yellow-20 {\n  background: #ffea66;\n}\n\n.bg-yellow-30 {\n  background: #fff199;\n}\n\n.fill-yellow {\n  fill: #FFDC00;\n}\n\n.fill-yellow-10 {\n  fill: #ffe333;\n}\n\n.fill-yellow-20 {\n  fill: #ffea66;\n}\n\n.fill-yellow-30 {\n  fill: #fff199;\n}\n\n.bdr-yellow {\n  border: 1px solid #FFDC00;\n}\n\n.bdr-yellow-10 {\n  border: 1px solid #ffe333;\n}\n\n.bdr-yellow-20 {\n  border: 1px solid #ffea66;\n}\n\n.bdr-yellow-30 {\n  border: 1px solid #fff199;\n}\n\n.yellow {\n  color: #FFDC00;\n}\n\n.yellow-10 {\n  color: #ffe333;\n}\n\n.yellow-20 {\n  color: #ffea66;\n}\n\n.yellow-30 {\n  color: #fff199;\n}\n\n.bg-green {\n  background: #2ECC40;\n}\n\n.bg-green-10 {\n  background: #54d964;\n}\n\n.bg-green-20 {\n  background: #7ee289;\n}\n\n.bg-green-30 {\n  background: #a8ebaf;\n}\n\n.fill-green {\n  fill: #2ECC40;\n}\n\n.fill-green-10 {\n  fill: #54d964;\n}\n\n.fill-green-20 {\n  fill: #7ee289;\n}\n\n.fill-green-30 {\n  fill: #a8ebaf;\n}\n\n.bdr-green {\n  border: 1px solid #2ECC40;\n}\n\n.bdr-green-10 {\n  border: 1px solid #54d964;\n}\n\n.bdr-green-20 {\n  border: 1px solid #7ee289;\n}\n\n.bdr-green-30 {\n  border: 1px solid #a8ebaf;\n}\n\n.green {\n  color: #2ECC40;\n}\n\n.green-10 {\n  color: #54d964;\n}\n\n.green-20 {\n  color: #7ee289;\n}\n\n.green-30 {\n  color: #a8ebaf;\n}\n\n.bg-blue {\n  background: #0074D9;\n}\n\n.bg-blue-10 {\n  background: #0d8eff;\n}\n\n.bg-blue-20 {\n  background: #40a6ff;\n}\n\n.bg-blue-30 {\n  background: #73beff;\n}\n\n.fill-blue {\n  fill: #0074D9;\n}\n\n.fill-blue-10 {\n  fill: #0d8eff;\n}\n\n.fill-blue-20 {\n  fill: #40a6ff;\n}\n\n.fill-blue-30 {\n  fill: #73beff;\n}\n\n.bdr-blue {\n  border: 1px solid #0074D9;\n}\n\n.bdr-blue-10 {\n  border: 1px solid #0d8eff;\n}\n\n.bdr-blue-20 {\n  border: 1px solid #40a6ff;\n}\n\n.bdr-blue-30 {\n  border: 1px solid #73beff;\n}\n\n.blue {\n  color: #0074D9;\n}\n\n.blue-10 {\n  color: #0d8eff;\n}\n\n.blue-20 {\n  color: #40a6ff;\n}\n\n.blue-30 {\n  color: #73beff;\n}\n\n.bg-pink {\n  background: #ef336c;\n}\n\n.bg-pink-10 {\n  background: #f3628e;\n}\n\n.bg-pink-20 {\n  background: #f692b0;\n}\n\n.bg-pink-30 {\n  background: #fac1d2;\n}\n\n.fill-pink {\n  fill: #ef336c;\n}\n\n.fill-pink-10 {\n  fill: #f3628e;\n}\n\n.fill-pink-20 {\n  fill: #f692b0;\n}\n\n.fill-pink-30 {\n  fill: #fac1d2;\n}\n\n.bdr-pink {\n  border: 1px solid #ef336c;\n}\n\n.bdr-pink-10 {\n  border: 1px solid #f3628e;\n}\n\n.bdr-pink-20 {\n  border: 1px solid #f692b0;\n}\n\n.bdr-pink-30 {\n  border: 1px solid #fac1d2;\n}\n\n.pink {\n  color: #ef336c;\n}\n\n.pink-10 {\n  color: #f3628e;\n}\n\n.pink-20 {\n  color: #f692b0;\n}\n\n.pink-30 {\n  color: #fac1d2;\n}\n\n.bg-purple {\n  background: #B10DC9;\n}\n\n.bg-purple-10 {\n  background: #d519f0;\n}\n\n.bg-purple-20 {\n  background: #dd49f3;\n}\n\n.bg-purple-30 {\n  background: #e679f6;\n}\n\n.fill-purple {\n  fill: #B10DC9;\n}\n\n.fill-purple-10 {\n  fill: #d519f0;\n}\n\n.fill-purple-20 {\n  fill: #dd49f3;\n}\n\n.fill-purple-30 {\n  fill: #e679f6;\n}\n\n.bdr-purple {\n  border: 1px solid #B10DC9;\n}\n\n.bdr-purple-10 {\n  border: 1px solid #d519f0;\n}\n\n.bdr-purple-20 {\n  border: 1px solid #dd49f3;\n}\n\n.bdr-purple-30 {\n  border: 1px solid #e679f6;\n}\n\n.purple {\n  color: #B10DC9;\n}\n\n.purple-10 {\n  color: #d519f0;\n}\n\n.purple-20 {\n  color: #dd49f3;\n}\n\n.purple-30 {\n  color: #e679f6;\n}\n\n.bg-navy {\n  background: #34495e;\n}\n\n.bg-navy-10 {\n  background: #46637f;\n}\n\n.bg-navy-20 {\n  background: #587ca0;\n}\n\n.bg-navy-30 {\n  background: #7796b4;\n}\n\n.fill-navy {\n  fill: #34495e;\n}\n\n.fill-navy-10 {\n  fill: #46637f;\n}\n\n.fill-navy-20 {\n  fill: #587ca0;\n}\n\n.fill-navy-30 {\n  fill: #7796b4;\n}\n\n.bdr-navy {\n  border: 1px solid #34495e;\n}\n\n.bdr-navy-10 {\n  border: 1px solid #46637f;\n}\n\n.bdr-navy-20 {\n  border: 1px solid #587ca0;\n}\n\n.bdr-navy-30 {\n  border: 1px solid #7796b4;\n}\n\n.navy {\n  color: #34495e;\n}\n\n.navy-10 {\n  color: #46637f;\n}\n\n.navy-20 {\n  color: #587ca0;\n}\n\n.navy-30 {\n  color: #7796b4;\n}\n\n.bg-aqua {\n  background: #7FDBFF;\n}\n\n.bg-aqua-10 {\n  background: #b2e9ff;\n}\n\n.bg-aqua-20 {\n  background: #e5f8ff;\n}\n\n.bg-aqua-30 {\n  background: white;\n}\n\n.fill-aqua {\n  fill: #7FDBFF;\n}\n\n.fill-aqua-10 {\n  fill: #b2e9ff;\n}\n\n.fill-aqua-20 {\n  fill: #e5f8ff;\n}\n\n.fill-aqua-30 {\n  fill: white;\n}\n\n.bdr-aqua {\n  border: 1px solid #7FDBFF;\n}\n\n.bdr-aqua-10 {\n  border: 1px solid #b2e9ff;\n}\n\n.bdr-aqua-20 {\n  border: 1px solid #e5f8ff;\n}\n\n.bdr-aqua-30 {\n  border: 1px solid white;\n}\n\n.aqua {\n  color: #7FDBFF;\n}\n\n.aqua-10 {\n  color: #b2e9ff;\n}\n\n.aqua-20 {\n  color: #e5f8ff;\n}\n\n.aqua-30 {\n  color: white;\n}\n\n.bg-teal {\n  background: #39CCCC;\n}\n\n.bg-teal-10 {\n  background: #62d6d6;\n}\n\n.bg-teal-20 {\n  background: #8ae1e1;\n}\n\n.bg-teal-30 {\n  background: #b3ebeb;\n}\n\n.fill-teal {\n  fill: #39CCCC;\n}\n\n.fill-teal-10 {\n  fill: #62d6d6;\n}\n\n.fill-teal-20 {\n  fill: #8ae1e1;\n}\n\n.fill-teal-30 {\n  fill: #b3ebeb;\n}\n\n.bdr-teal {\n  border: 1px solid #39CCCC;\n}\n\n.bdr-teal-10 {\n  border: 1px solid #62d6d6;\n}\n\n.bdr-teal-20 {\n  border: 1px solid #8ae1e1;\n}\n\n.bdr-teal-30 {\n  border: 1px solid #b3ebeb;\n}\n\n.teal {\n  color: #39CCCC;\n}\n\n.teal-10 {\n  color: #62d6d6;\n}\n\n.teal-20 {\n  color: #8ae1e1;\n}\n\n.teal-30 {\n  color: #b3ebeb;\n}\n\n.bg-maroon {\n  background: #85144b;\n}\n\n.bg-maroon-10 {\n  background: #b11b64;\n}\n\n.bg-maroon-20 {\n  background: #de217d;\n}\n\n.bg-maroon-30 {\n  background: #e44e97;\n}\n\n.fill-maroon {\n  fill: #85144b;\n}\n\n.fill-maroon-10 {\n  fill: #b11b64;\n}\n\n.fill-maroon-20 {\n  fill: #de217d;\n}\n\n.fill-maroon-30 {\n  fill: #e44e97;\n}\n\n.bdr-maroon {\n  border: 1px solid #85144b;\n}\n\n.bdr-maroon-10 {\n  border: 1px solid #b11b64;\n}\n\n.bdr-maroon-20 {\n  border: 1px solid #de217d;\n}\n\n.bdr-maroon-30 {\n  border: 1px solid #e44e97;\n}\n\n.maroon {\n  color: #85144b;\n}\n\n.maroon-10 {\n  color: #b11b64;\n}\n\n.maroon-20 {\n  color: #de217d;\n}\n\n.maroon-30 {\n  color: #e44e97;\n}\n\n.bg-lime {\n  background: #01FF70;\n}\n\n.bg-lime-10 {\n  background: #34ff8d;\n}\n\n.bg-lime-20 {\n  background: #67ffa9;\n}\n\n.bg-lime-30 {\n  background: #9affc6;\n}\n\n.fill-lime {\n  fill: #01FF70;\n}\n\n.fill-lime-10 {\n  fill: #34ff8d;\n}\n\n.fill-lime-20 {\n  fill: #67ffa9;\n}\n\n.fill-lime-30 {\n  fill: #9affc6;\n}\n\n.bdr-lime {\n  border: 1px solid #01FF70;\n}\n\n.bdr-lime-10 {\n  border: 1px solid #34ff8d;\n}\n\n.bdr-lime-20 {\n  border: 1px solid #67ffa9;\n}\n\n.bdr-lime-30 {\n  border: 1px solid #9affc6;\n}\n\n.lime {\n  color: #01FF70;\n}\n\n.lime-10 {\n  color: #34ff8d;\n}\n\n.lime-20 {\n  color: #67ffa9;\n}\n\n.lime-30 {\n  color: #9affc6;\n}\n\n.bg-olive {\n  background: #3D9970;\n}\n\n.bg-olive-10 {\n  background: #50b98a;\n}\n\n.bg-olive-20 {\n  background: #74c8a3;\n}\n\n.bg-olive-30 {\n  background: #99d6bb;\n}\n\n.fill-olive {\n  fill: #3D9970;\n}\n\n.fill-olive-10 {\n  fill: #50b98a;\n}\n\n.fill-olive-20 {\n  fill: #74c8a3;\n}\n\n.fill-olive-30 {\n  fill: #99d6bb;\n}\n\n.bdr-olive {\n  border: 1px solid #3D9970;\n}\n\n.bdr-olive-10 {\n  border: 1px solid #50b98a;\n}\n\n.bdr-olive-20 {\n  border: 1px solid #74c8a3;\n}\n\n.bdr-olive-30 {\n  border: 1px solid #99d6bb;\n}\n\n.olive {\n  color: #3D9970;\n}\n\n.olive-10 {\n  color: #50b98a;\n}\n\n.olive-20 {\n  color: #74c8a3;\n}\n\n.olive-30 {\n  color: #99d6bb;\n}\n\n.bg-white {\n  background: #fff;\n}\n\n.bg-white-10 {\n  background: white;\n}\n\n.bg-white-20 {\n  background: white;\n}\n\n.bg-white-30 {\n  background: white;\n}\n\n.fill-white {\n  fill: #fff;\n}\n\n.fill-white-10 {\n  fill: white;\n}\n\n.fill-white-20 {\n  fill: white;\n}\n\n.fill-white-30 {\n  fill: white;\n}\n\n.bdr-white {\n  border: 1px solid #fff;\n}\n\n.bdr-white-10 {\n  border: 1px solid white;\n}\n\n.bdr-white-20 {\n  border: 1px solid white;\n}\n\n.bdr-white-30 {\n  border: 1px solid white;\n}\n\n.white {\n  color: #fff;\n}\n\n.white-10 {\n  color: white;\n}\n\n.white-20 {\n  color: white;\n}\n\n.white-30 {\n  color: white;\n}\n\n.bg-light {\n  background: #f9f9f9;\n}\n\n.bg-light-10 {\n  background: white;\n}\n\n.bg-light-20 {\n  background: white;\n}\n\n.bg-light-30 {\n  background: white;\n}\n\n.fill-light {\n  fill: #f9f9f9;\n}\n\n.fill-light-10 {\n  fill: white;\n}\n\n.fill-light-20 {\n  fill: white;\n}\n\n.fill-light-30 {\n  fill: white;\n}\n\n.bdr-light {\n  border: 1px solid #f9f9f9;\n}\n\n.bdr-light-10 {\n  border: 1px solid white;\n}\n\n.bdr-light-20 {\n  border: 1px solid white;\n}\n\n.bdr-light-30 {\n  border: 1px solid white;\n}\n\n.light {\n  color: #f9f9f9;\n}\n\n.light-10 {\n  color: white;\n}\n\n.light-20 {\n  color: white;\n}\n\n.light-30 {\n  color: white;\n}\n\n.bg-grey {\n  background: #e5e5e5;\n}\n\n.bg-grey-10 {\n  background: white;\n}\n\n.bg-grey-20 {\n  background: white;\n}\n\n.bg-grey-30 {\n  background: white;\n}\n\n.fill-grey {\n  fill: #e5e5e5;\n}\n\n.fill-grey-10 {\n  fill: white;\n}\n\n.fill-grey-20 {\n  fill: white;\n}\n\n.fill-grey-30 {\n  fill: white;\n}\n\n.bdr-grey {\n  border: 1px solid #e5e5e5;\n}\n\n.bdr-grey-10 {\n  border: 1px solid white;\n}\n\n.bdr-grey-20 {\n  border: 1px solid white;\n}\n\n.bdr-grey-30 {\n  border: 1px solid white;\n}\n\n.grey {\n  color: #e5e5e5;\n}\n\n.grey-10 {\n  color: white;\n}\n\n.grey-20 {\n  color: white;\n}\n\n.grey-30 {\n  color: white;\n}\n\n.bg-dark {\n  background: #666;\n}\n\n.bg-dark-10 {\n  background: gray;\n}\n\n.bg-dark-20 {\n  background: #999999;\n}\n\n.bg-dark-30 {\n  background: #b3b3b3;\n}\n\n.fill-dark {\n  fill: #666;\n}\n\n.fill-dark-10 {\n  fill: gray;\n}\n\n.fill-dark-20 {\n  fill: #999999;\n}\n\n.fill-dark-30 {\n  fill: #b3b3b3;\n}\n\n.bdr-dark {\n  border: 1px solid #666;\n}\n\n.bdr-dark-10 {\n  border: 1px solid gray;\n}\n\n.bdr-dark-20 {\n  border: 1px solid #999999;\n}\n\n.bdr-dark-30 {\n  border: 1px solid #b3b3b3;\n}\n\n.dark {\n  color: #666;\n}\n\n.dark-10 {\n  color: gray;\n}\n\n.dark-20 {\n  color: #999999;\n}\n\n.dark-30 {\n  color: #b3b3b3;\n}\n\n.bg-almost-black {\n  background: #333;\n}\n\n.bg-almost-black-10 {\n  background: #4d4d4d;\n}\n\n.bg-almost-black-20 {\n  background: #666666;\n}\n\n.bg-almost-black-30 {\n  background: gray;\n}\n\n.fill-almost-black {\n  fill: #333;\n}\n\n.fill-almost-black-10 {\n  fill: #4d4d4d;\n}\n\n.fill-almost-black-20 {\n  fill: #666666;\n}\n\n.fill-almost-black-30 {\n  fill: gray;\n}\n\n.bdr-almost-black {\n  border: 1px solid #333;\n}\n\n.bdr-almost-black-10 {\n  border: 1px solid #4d4d4d;\n}\n\n.bdr-almost-black-20 {\n  border: 1px solid #666666;\n}\n\n.bdr-almost-black-30 {\n  border: 1px solid gray;\n}\n\n.almost-black {\n  color: #333;\n}\n\n.almost-black-10 {\n  color: #4d4d4d;\n}\n\n.almost-black-20 {\n  color: #666666;\n}\n\n.almost-black-30 {\n  color: gray;\n}\n\n.bg-black {\n  background: #000;\n}\n\n.bg-black-10 {\n  background: #1a1a1a;\n}\n\n.bg-black-20 {\n  background: #333333;\n}\n\n.bg-black-30 {\n  background: #4d4d4d;\n}\n\n.fill-black {\n  fill: #000;\n}\n\n.fill-black-10 {\n  fill: #1a1a1a;\n}\n\n.fill-black-20 {\n  fill: #333333;\n}\n\n.fill-black-30 {\n  fill: #4d4d4d;\n}\n\n.bdr-black {\n  border: 1px solid #000;\n}\n\n.bdr-black-10 {\n  border: 1px solid #1a1a1a;\n}\n\n.bdr-black-20 {\n  border: 1px solid #333333;\n}\n\n.bdr-black-30 {\n  border: 1px solid #4d4d4d;\n}\n\n.black {\n  color: #000;\n}\n\n.black-10 {\n  color: #1a1a1a;\n}\n\n.black-20 {\n  color: #333333;\n}\n\n.black-30 {\n  color: #4d4d4d;\n}\n\n.bg-brand {\n  background: #0074D9;\n}\n\n.bg-brand-10 {\n  background: #0d8eff;\n}\n\n.bg-brand-20 {\n  background: #40a6ff;\n}\n\n.bg-brand-30 {\n  background: #73beff;\n}\n\n.fill-brand {\n  fill: #0074D9;\n}\n\n.fill-brand-10 {\n  fill: #0d8eff;\n}\n\n.fill-brand-20 {\n  fill: #40a6ff;\n}\n\n.fill-brand-30 {\n  fill: #73beff;\n}\n\n.bdr-brand {\n  border: 1px solid #0074D9;\n}\n\n.bdr-brand-10 {\n  border: 1px solid #0d8eff;\n}\n\n.bdr-brand-20 {\n  border: 1px solid #40a6ff;\n}\n\n.bdr-brand-30 {\n  border: 1px solid #73beff;\n}\n\n.brand {\n  color: #0074D9;\n}\n\n.brand-10 {\n  color: #0d8eff;\n}\n\n.brand-20 {\n  color: #40a6ff;\n}\n\n.brand-30 {\n  color: #73beff;\n}\n\n.bg-primary {\n  background: #0074D9;\n}\n\n.bg-primary-10 {\n  background: #0d8eff;\n}\n\n.bg-primary-20 {\n  background: #40a6ff;\n}\n\n.bg-primary-30 {\n  background: #73beff;\n}\n\n.fill-primary {\n  fill: #0074D9;\n}\n\n.fill-primary-10 {\n  fill: #0d8eff;\n}\n\n.fill-primary-20 {\n  fill: #40a6ff;\n}\n\n.fill-primary-30 {\n  fill: #73beff;\n}\n\n.bdr-primary {\n  border: 1px solid #0074D9;\n}\n\n.bdr-primary-10 {\n  border: 1px solid #0d8eff;\n}\n\n.bdr-primary-20 {\n  border: 1px solid #40a6ff;\n}\n\n.bdr-primary-30 {\n  border: 1px solid #73beff;\n}\n\n.primary {\n  color: #0074D9;\n}\n\n.primary-10 {\n  color: #0d8eff;\n}\n\n.primary-20 {\n  color: #40a6ff;\n}\n\n.primary-30 {\n  color: #73beff;\n}\n\n.bg-secondary {\n  background: #f9f9f9;\n}\n\n.bg-secondary-10 {\n  background: white;\n}\n\n.bg-secondary-20 {\n  background: white;\n}\n\n.bg-secondary-30 {\n  background: white;\n}\n\n.fill-secondary {\n  fill: #f9f9f9;\n}\n\n.fill-secondary-10 {\n  fill: white;\n}\n\n.fill-secondary-20 {\n  fill: white;\n}\n\n.fill-secondary-30 {\n  fill: white;\n}\n\n.bdr-secondary {\n  border: 1px solid #f9f9f9;\n}\n\n.bdr-secondary-10 {\n  border: 1px solid white;\n}\n\n.bdr-secondary-20 {\n  border: 1px solid white;\n}\n\n.bdr-secondary-30 {\n  border: 1px solid white;\n}\n\n.secondary {\n  color: #f9f9f9;\n}\n\n.secondary-10 {\n  color: white;\n}\n\n.secondary-20 {\n  color: white;\n}\n\n.secondary-30 {\n  color: white;\n}\n\n.bg-success {\n  background: #2ECC40;\n}\n\n.bg-success-10 {\n  background: #54d964;\n}\n\n.bg-success-20 {\n  background: #7ee289;\n}\n\n.bg-success-30 {\n  background: #a8ebaf;\n}\n\n.fill-success {\n  fill: #2ECC40;\n}\n\n.fill-success-10 {\n  fill: #54d964;\n}\n\n.fill-success-20 {\n  fill: #7ee289;\n}\n\n.fill-success-30 {\n  fill: #a8ebaf;\n}\n\n.bdr-success {\n  border: 1px solid #2ECC40;\n}\n\n.bdr-success-10 {\n  border: 1px solid #54d964;\n}\n\n.bdr-success-20 {\n  border: 1px solid #7ee289;\n}\n\n.bdr-success-30 {\n  border: 1px solid #a8ebaf;\n}\n\n.success {\n  color: #2ECC40;\n}\n\n.success-10 {\n  color: #54d964;\n}\n\n.success-20 {\n  color: #7ee289;\n}\n\n.success-30 {\n  color: #a8ebaf;\n}\n\n.bg-info {\n  background: #39CCCC;\n}\n\n.bg-info-10 {\n  background: #62d6d6;\n}\n\n.bg-info-20 {\n  background: #8ae1e1;\n}\n\n.bg-info-30 {\n  background: #b3ebeb;\n}\n\n.fill-info {\n  fill: #39CCCC;\n}\n\n.fill-info-10 {\n  fill: #62d6d6;\n}\n\n.fill-info-20 {\n  fill: #8ae1e1;\n}\n\n.fill-info-30 {\n  fill: #b3ebeb;\n}\n\n.bdr-info {\n  border: 1px solid #39CCCC;\n}\n\n.bdr-info-10 {\n  border: 1px solid #62d6d6;\n}\n\n.bdr-info-20 {\n  border: 1px solid #8ae1e1;\n}\n\n.bdr-info-30 {\n  border: 1px solid #b3ebeb;\n}\n\n.info {\n  color: #39CCCC;\n}\n\n.info-10 {\n  color: #62d6d6;\n}\n\n.info-20 {\n  color: #8ae1e1;\n}\n\n.info-30 {\n  color: #b3ebeb;\n}\n\n.bg-warning {\n  background: #FFDC00;\n}\n\n.bg-warning-10 {\n  background: #ffe333;\n}\n\n.bg-warning-20 {\n  background: #ffea66;\n}\n\n.bg-warning-30 {\n  background: #fff199;\n}\n\n.fill-warning {\n  fill: #FFDC00;\n}\n\n.fill-warning-10 {\n  fill: #ffe333;\n}\n\n.fill-warning-20 {\n  fill: #ffea66;\n}\n\n.fill-warning-30 {\n  fill: #fff199;\n}\n\n.bdr-warning {\n  border: 1px solid #FFDC00;\n}\n\n.bdr-warning-10 {\n  border: 1px solid #ffe333;\n}\n\n.bdr-warning-20 {\n  border: 1px solid #ffea66;\n}\n\n.bdr-warning-30 {\n  border: 1px solid #fff199;\n}\n\n.warning {\n  color: #FFDC00;\n}\n\n.warning-10 {\n  color: #ffe333;\n}\n\n.warning-20 {\n  color: #ffea66;\n}\n\n.warning-30 {\n  color: #fff199;\n}\n\n.bg-error {\n  background: #FF4136;\n}\n\n.bg-error-10 {\n  background: #ff7169;\n}\n\n.bg-error-20 {\n  background: #ffa19c;\n}\n\n.bg-error-30 {\n  background: #ffd2cf;\n}\n\n.fill-error {\n  fill: #FF4136;\n}\n\n.fill-error-10 {\n  fill: #ff7169;\n}\n\n.fill-error-20 {\n  fill: #ffa19c;\n}\n\n.fill-error-30 {\n  fill: #ffd2cf;\n}\n\n.bdr-error {\n  border: 1px solid #FF4136;\n}\n\n.bdr-error-10 {\n  border: 1px solid #ff7169;\n}\n\n.bdr-error-20 {\n  border: 1px solid #ffa19c;\n}\n\n.bdr-error-30 {\n  border: 1px solid #ffd2cf;\n}\n\n.error {\n  color: #FF4136;\n}\n\n.error-10 {\n  color: #ff7169;\n}\n\n.error-20 {\n  color: #ffa19c;\n}\n\n.error-30 {\n  color: #ffd2cf;\n}\n\nbody {\n  background: white;\n  padding: 0;\n  margin: 0;\n  padding: 20px;\n}\n\n.Header {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  background: #f5f5f5;\n  padding: 10px;\n  border-bottom: 1px solid #ccc;\n}\n\n.logo {\n  width: 80px;\n  margin-right: 40px;\n}\n.logo__img {\n  width: 100%;\n}\n\n.row {\n  display: flex;\n  padding: 10px;\n  border: 1px solid #ccc;\n}\n.row > div {\n  padding: 20px;\n  margin-right: 10px;\n}", "",{"version":3,"sources":["/Users/andreortiz/Desktop/helloandre/styles/tools/_color-gen.scss","/Users/andreortiz/Desktop/helloandre/styles/settings/_colors.scss","/Users/andreortiz/Desktop/helloandre/styles/styles.scss","/Users/andreortiz/Desktop/helloandre/styles/elements/_body.scss"],"names":[],"mappings":"AAGI;EAAgB,mBCkCX;ACnCT;;AFEI;EAAmB,mBAAA;AEEvB;;AFDI;EAAmB,mBAAA;AEKvB;;AFJI;EAAmB,mBAAA;AEQvB;;AFLI;EAAkB,aC4Bb;ACnBT;;AFRI;EAAqB,aAAA;AEYzB;;AFXI;EAAqB,aAAA;AEezB;;AFdI;EAAqB,aAAA;AEkBzB;;AFfI;EAAiB,yBAAA;AEmBrB;;AFlBI;EAAoB,yBAAA;AEsBxB;;AFrBI;EAAoB,yBAAA;AEyBxB;;AFxBI;EAAoB,yBAAA;AE4BxB;;AFzBI;EAAa,cCgBR;ACaT;;AF5BI;EAAgB,cAAA;AEgCpB;;AF/BI;EAAgB,cAAA;AEmCpB;;AFlCI;EAAgB,cAAA;AEsCpB;;AF3DI;EAAgB,mBCkCX;AC6BT;;AF9DI;EAAmB,mBAAA;AEkEvB;;AFjEI;EAAmB,mBAAA;AEqEvB;;AFpEI;EAAmB,mBAAA;AEwEvB;;AFrEI;EAAkB,aC4Bb;AC6CT;;AFxEI;EAAqB,aAAA;AE4EzB;;AF3EI;EAAqB,aAAA;AE+EzB;;AF9EI;EAAqB,aAAA;AEkFzB;;AF/EI;EAAiB,yBAAA;AEmFrB;;AFlFI;EAAoB,yBAAA;AEsFxB;;AFrFI;EAAoB,yBAAA;AEyFxB;;AFxFI;EAAoB,yBAAA;AE4FxB;;AFzFI;EAAa,cCgBR;AC6ET;;AF5FI;EAAgB,cAAA;AEgGpB;;AF/FI;EAAgB,cAAA;AEmGpB;;AFlGI;EAAgB,cAAA;AEsGpB;;AF3HI;EAAgB,mBCkCX;AC6FT;;AF9HI;EAAmB,mBAAA;AEkIvB;;AFjII;EAAmB,mBAAA;AEqIvB;;AFpII;EAAmB,mBAAA;AEwIvB;;AFrII;EAAkB,aC4Bb;AC6GT;;AFxII;EAAqB,aAAA;AE4IzB;;AF3II;EAAqB,aAAA;AE+IzB;;AF9II;EAAqB,aAAA;AEkJzB;;AF/II;EAAiB,yBAAA;AEmJrB;;AFlJI;EAAoB,yBAAA;AEsJxB;;AFrJI;EAAoB,yBAAA;AEyJxB;;AFxJI;EAAoB,yBAAA;AE4JxB;;AFzJI;EAAa,cCgBR;AC6IT;;AF5JI;EAAgB,cAAA;AEgKpB;;AF/JI;EAAgB,cAAA;AEmKpB;;AFlKI;EAAgB,cAAA;AEsKpB;;AF3LI;EAAgB,mBCkCX;AC6JT;;AF9LI;EAAmB,mBAAA;AEkMvB;;AFjMI;EAAmB,mBAAA;AEqMvB;;AFpMI;EAAmB,mBAAA;AEwMvB;;AFrMI;EAAkB,aC4Bb;AC6KT;;AFxMI;EAAqB,aAAA;AE4MzB;;AF3MI;EAAqB,aAAA;AE+MzB;;AF9MI;EAAqB,aAAA;AEkNzB;;AF/MI;EAAiB,yBAAA;AEmNrB;;AFlNI;EAAoB,yBAAA;AEsNxB;;AFrNI;EAAoB,yBAAA;AEyNxB;;AFxNI;EAAoB,yBAAA;AE4NxB;;AFzNI;EAAa,cCgBR;AC6MT;;AF5NI;EAAgB,cAAA;AEgOpB;;AF/NI;EAAgB,cAAA;AEmOpB;;AFlOI;EAAgB,cAAA;AEsOpB;;AF3PI;EAAgB,mBCkCX;AC6NT;;AF9PI;EAAmB,mBAAA;AEkQvB;;AFjQI;EAAmB,mBAAA;AEqQvB;;AFpQI;EAAmB,mBAAA;AEwQvB;;AFrQI;EAAkB,aC4Bb;AC6OT;;AFxQI;EAAqB,aAAA;AE4QzB;;AF3QI;EAAqB,aAAA;AE+QzB;;AF9QI;EAAqB,aAAA;AEkRzB;;AF/QI;EAAiB,yBAAA;AEmRrB;;AFlRI;EAAoB,yBAAA;AEsRxB;;AFrRI;EAAoB,yBAAA;AEyRxB;;AFxRI;EAAoB,yBAAA;AE4RxB;;AFzRI;EAAa,cCgBR;AC6QT;;AF5RI;EAAgB,cAAA;AEgSpB;;AF/RI;EAAgB,cAAA;AEmSpB;;AFlSI;EAAgB,cAAA;AEsSpB;;AF3TI;EAAgB,mBCkCX;AC6RT;;AF9TI;EAAmB,mBAAA;AEkUvB;;AFjUI;EAAmB,mBAAA;AEqUvB;;AFpUI;EAAmB,mBAAA;AEwUvB;;AFrUI;EAAkB,aC4Bb;AC6ST;;AFxUI;EAAqB,aAAA;AE4UzB;;AF3UI;EAAqB,aAAA;AE+UzB;;AF9UI;EAAqB,aAAA;AEkVzB;;AF/UI;EAAiB,yBAAA;AEmVrB;;AFlVI;EAAoB,yBAAA;AEsVxB;;AFrVI;EAAoB,yBAAA;AEyVxB;;AFxVI;EAAoB,yBAAA;AE4VxB;;AFzVI;EAAa,cCgBR;AC6UT;;AF5VI;EAAgB,cAAA;AEgWpB;;AF/VI;EAAgB,cAAA;AEmWpB;;AFlWI;EAAgB,cAAA;AEsWpB;;AF3XI;EAAgB,mBCkCX;AC6VT;;AF9XI;EAAmB,mBAAA;AEkYvB;;AFjYI;EAAmB,mBAAA;AEqYvB;;AFpYI;EAAmB,mBAAA;AEwYvB;;AFrYI;EAAkB,aC4Bb;AC6WT;;AFxYI;EAAqB,aAAA;AE4YzB;;AF3YI;EAAqB,aAAA;AE+YzB;;AF9YI;EAAqB,aAAA;AEkZzB;;AF/YI;EAAiB,yBAAA;AEmZrB;;AFlZI;EAAoB,yBAAA;AEsZxB;;AFrZI;EAAoB,yBAAA;AEyZxB;;AFxZI;EAAoB,yBAAA;AE4ZxB;;AFzZI;EAAa,cCgBR;AC6YT;;AF5ZI;EAAgB,cAAA;AEgapB;;AF/ZI;EAAgB,cAAA;AEmapB;;AFlaI;EAAgB,cAAA;AEsapB;;AF3bI;EAAgB,mBCkCX;AC6ZT;;AF9bI;EAAmB,mBAAA;AEkcvB;;AFjcI;EAAmB,mBAAA;AEqcvB;;AFpcI;EAAmB,mBAAA;AEwcvB;;AFrcI;EAAkB,aC4Bb;AC6aT;;AFxcI;EAAqB,aAAA;AE4czB;;AF3cI;EAAqB,aAAA;AE+czB;;AF9cI;EAAqB,aAAA;AEkdzB;;AF/cI;EAAiB,yBAAA;AEmdrB;;AFldI;EAAoB,yBAAA;AEsdxB;;AFrdI;EAAoB,yBAAA;AEydxB;;AFxdI;EAAoB,yBAAA;AE4dxB;;AFzdI;EAAa,cCgBR;AC6cT;;AF5dI;EAAgB,cAAA;AEgepB;;AF/dI;EAAgB,cAAA;AEmepB;;AFleI;EAAgB,cAAA;AEsepB;;AF3fI;EAAgB,mBCkCX;AC6dT;;AF9fI;EAAmB,mBAAA;AEkgBvB;;AFjgBI;EAAmB,mBAAA;AEqgBvB;;AFpgBI;EAAmB,iBAAA;AEwgBvB;;AFrgBI;EAAkB,aC4Bb;AC6eT;;AFxgBI;EAAqB,aAAA;AE4gBzB;;AF3gBI;EAAqB,aAAA;AE+gBzB;;AF9gBI;EAAqB,WAAA;AEkhBzB;;AF/gBI;EAAiB,yBAAA;AEmhBrB;;AFlhBI;EAAoB,yBAAA;AEshBxB;;AFrhBI;EAAoB,yBAAA;AEyhBxB;;AFxhBI;EAAoB,uBAAA;AE4hBxB;;AFzhBI;EAAa,cCgBR;AC6gBT;;AF5hBI;EAAgB,cAAA;AEgiBpB;;AF/hBI;EAAgB,cAAA;AEmiBpB;;AFliBI;EAAgB,YAAA;AEsiBpB;;AF3jBI;EAAgB,mBCkCX;AC6hBT;;AF9jBI;EAAmB,mBAAA;AEkkBvB;;AFjkBI;EAAmB,mBAAA;AEqkBvB;;AFpkBI;EAAmB,mBAAA;AEwkBvB;;AFrkBI;EAAkB,aC4Bb;AC6iBT;;AFxkBI;EAAqB,aAAA;AE4kBzB;;AF3kBI;EAAqB,aAAA;AE+kBzB;;AF9kBI;EAAqB,aAAA;AEklBzB;;AF/kBI;EAAiB,yBAAA;AEmlBrB;;AFllBI;EAAoB,yBAAA;AEslBxB;;AFrlBI;EAAoB,yBAAA;AEylBxB;;AFxlBI;EAAoB,yBAAA;AE4lBxB;;AFzlBI;EAAa,cCgBR;AC6kBT;;AF5lBI;EAAgB,cAAA;AEgmBpB;;AF/lBI;EAAgB,cAAA;AEmmBpB;;AFlmBI;EAAgB,cAAA;AEsmBpB;;AF3nBI;EAAgB,mBCkCX;AC6lBT;;AF9nBI;EAAmB,mBAAA;AEkoBvB;;AFjoBI;EAAmB,mBAAA;AEqoBvB;;AFpoBI;EAAmB,mBAAA;AEwoBvB;;AFroBI;EAAkB,aC4Bb;AC6mBT;;AFxoBI;EAAqB,aAAA;AE4oBzB;;AF3oBI;EAAqB,aAAA;AE+oBzB;;AF9oBI;EAAqB,aAAA;AEkpBzB;;AF/oBI;EAAiB,yBAAA;AEmpBrB;;AFlpBI;EAAoB,yBAAA;AEspBxB;;AFrpBI;EAAoB,yBAAA;AEypBxB;;AFxpBI;EAAoB,yBAAA;AE4pBxB;;AFzpBI;EAAa,cCgBR;AC6oBT;;AF5pBI;EAAgB,cAAA;AEgqBpB;;AF/pBI;EAAgB,cAAA;AEmqBpB;;AFlqBI;EAAgB,cAAA;AEsqBpB;;AF3rBI;EAAgB,mBCkCX;AC6pBT;;AF9rBI;EAAmB,mBAAA;AEksBvB;;AFjsBI;EAAmB,mBAAA;AEqsBvB;;AFpsBI;EAAmB,mBAAA;AEwsBvB;;AFrsBI;EAAkB,aC4Bb;AC6qBT;;AFxsBI;EAAqB,aAAA;AE4sBzB;;AF3sBI;EAAqB,aAAA;AE+sBzB;;AF9sBI;EAAqB,aAAA;AEktBzB;;AF/sBI;EAAiB,yBAAA;AEmtBrB;;AFltBI;EAAoB,yBAAA;AEstBxB;;AFrtBI;EAAoB,yBAAA;AEytBxB;;AFxtBI;EAAoB,yBAAA;AE4tBxB;;AFztBI;EAAa,cCgBR;AC6sBT;;AF5tBI;EAAgB,cAAA;AEguBpB;;AF/tBI;EAAgB,cAAA;AEmuBpB;;AFluBI;EAAgB,cAAA;AEsuBpB;;AF3vBI;EAAgB,mBCkCX;AC6tBT;;AF9vBI;EAAmB,mBAAA;AEkwBvB;;AFjwBI;EAAmB,mBAAA;AEqwBvB;;AFpwBI;EAAmB,mBAAA;AEwwBvB;;AFrwBI;EAAkB,aC4Bb;AC6uBT;;AFxwBI;EAAqB,aAAA;AE4wBzB;;AF3wBI;EAAqB,aAAA;AE+wBzB;;AF9wBI;EAAqB,aAAA;AEkxBzB;;AF/wBI;EAAiB,yBAAA;AEmxBrB;;AFlxBI;EAAoB,yBAAA;AEsxBxB;;AFrxBI;EAAoB,yBAAA;AEyxBxB;;AFxxBI;EAAoB,yBAAA;AE4xBxB;;AFzxBI;EAAa,cCgBR;AC6wBT;;AF5xBI;EAAgB,cAAA;AEgyBpB;;AF/xBI;EAAgB,cAAA;AEmyBpB;;AFlyBI;EAAgB,cAAA;AEsyBpB;;AF3zBI;EAAgB,gBCkCX;AC6xBT;;AF9zBI;EAAmB,iBAAA;AEk0BvB;;AFj0BI;EAAmB,iBAAA;AEq0BvB;;AFp0BI;EAAmB,iBAAA;AEw0BvB;;AFr0BI;EAAkB,UC4Bb;AC6yBT;;AFx0BI;EAAqB,WAAA;AE40BzB;;AF30BI;EAAqB,WAAA;AE+0BzB;;AF90BI;EAAqB,WAAA;AEk1BzB;;AF/0BI;EAAiB,sBAAA;AEm1BrB;;AFl1BI;EAAoB,uBAAA;AEs1BxB;;AFr1BI;EAAoB,uBAAA;AEy1BxB;;AFx1BI;EAAoB,uBAAA;AE41BxB;;AFz1BI;EAAa,WCgBR;AC60BT;;AF51BI;EAAgB,YAAA;AEg2BpB;;AF/1BI;EAAgB,YAAA;AEm2BpB;;AFl2BI;EAAgB,YAAA;AEs2BpB;;AF33BI;EAAgB,mBCkCX;AC61BT;;AF93BI;EAAmB,iBAAA;AEk4BvB;;AFj4BI;EAAmB,iBAAA;AEq4BvB;;AFp4BI;EAAmB,iBAAA;AEw4BvB;;AFr4BI;EAAkB,aC4Bb;AC62BT;;AFx4BI;EAAqB,WAAA;AE44BzB;;AF34BI;EAAqB,WAAA;AE+4BzB;;AF94BI;EAAqB,WAAA;AEk5BzB;;AF/4BI;EAAiB,yBAAA;AEm5BrB;;AFl5BI;EAAoB,uBAAA;AEs5BxB;;AFr5BI;EAAoB,uBAAA;AEy5BxB;;AFx5BI;EAAoB,uBAAA;AE45BxB;;AFz5BI;EAAa,cCgBR;AC64BT;;AF55BI;EAAgB,YAAA;AEg6BpB;;AF/5BI;EAAgB,YAAA;AEm6BpB;;AFl6BI;EAAgB,YAAA;AEs6BpB;;AF37BI;EAAgB,mBCkCX;AC65BT;;AF97BI;EAAmB,iBAAA;AEk8BvB;;AFj8BI;EAAmB,iBAAA;AEq8BvB;;AFp8BI;EAAmB,iBAAA;AEw8BvB;;AFr8BI;EAAkB,aC4Bb;AC66BT;;AFx8BI;EAAqB,WAAA;AE48BzB;;AF38BI;EAAqB,WAAA;AE+8BzB;;AF98BI;EAAqB,WAAA;AEk9BzB;;AF/8BI;EAAiB,yBAAA;AEm9BrB;;AFl9BI;EAAoB,uBAAA;AEs9BxB;;AFr9BI;EAAoB,uBAAA;AEy9BxB;;AFx9BI;EAAoB,uBAAA;AE49BxB;;AFz9BI;EAAa,cCgBR;AC68BT;;AF59BI;EAAgB,YAAA;AEg+BpB;;AF/9BI;EAAgB,YAAA;AEm+BpB;;AFl+BI;EAAgB,YAAA;AEs+BpB;;AF3/BI;EAAgB,gBCkCX;AC69BT;;AF9/BI;EAAmB,gBAAA;AEkgCvB;;AFjgCI;EAAmB,mBAAA;AEqgCvB;;AFpgCI;EAAmB,mBAAA;AEwgCvB;;AFrgCI;EAAkB,UC4Bb;AC6+BT;;AFxgCI;EAAqB,UAAA;AE4gCzB;;AF3gCI;EAAqB,aAAA;AE+gCzB;;AF9gCI;EAAqB,aAAA;AEkhCzB;;AF/gCI;EAAiB,sBAAA;AEmhCrB;;AFlhCI;EAAoB,sBAAA;AEshCxB;;AFrhCI;EAAoB,yBAAA;AEyhCxB;;AFxhCI;EAAoB,yBAAA;AE4hCxB;;AFzhCI;EAAa,WCgBR;AC6gCT;;AF5hCI;EAAgB,WAAA;AEgiCpB;;AF/hCI;EAAgB,cAAA;AEmiCpB;;AFliCI;EAAgB,cAAA;AEsiCpB;;AF3jCI;EAAgB,gBCkCX;AC6hCT;;AF9jCI;EAAmB,mBAAA;AEkkCvB;;AFjkCI;EAAmB,mBAAA;AEqkCvB;;AFpkCI;EAAmB,gBAAA;AEwkCvB;;AFrkCI;EAAkB,UC4Bb;AC6iCT;;AFxkCI;EAAqB,aAAA;AE4kCzB;;AF3kCI;EAAqB,aAAA;AE+kCzB;;AF9kCI;EAAqB,UAAA;AEklCzB;;AF/kCI;EAAiB,sBAAA;AEmlCrB;;AFllCI;EAAoB,yBAAA;AEslCxB;;AFrlCI;EAAoB,yBAAA;AEylCxB;;AFxlCI;EAAoB,sBAAA;AE4lCxB;;AFzlCI;EAAa,WCgBR;AC6kCT;;AF5lCI;EAAgB,cAAA;AEgmCpB;;AF/lCI;EAAgB,cAAA;AEmmCpB;;AFlmCI;EAAgB,WAAA;AEsmCpB;;AF3nCI;EAAgB,gBCkCX;AC6lCT;;AF9nCI;EAAmB,mBAAA;AEkoCvB;;AFjoCI;EAAmB,mBAAA;AEqoCvB;;AFpoCI;EAAmB,mBAAA;AEwoCvB;;AFroCI;EAAkB,UC4Bb;AC6mCT;;AFxoCI;EAAqB,aAAA;AE4oCzB;;AF3oCI;EAAqB,aAAA;AE+oCzB;;AF9oCI;EAAqB,aAAA;AEkpCzB;;AF/oCI;EAAiB,sBAAA;AEmpCrB;;AFlpCI;EAAoB,yBAAA;AEspCxB;;AFrpCI;EAAoB,yBAAA;AEypCxB;;AFxpCI;EAAoB,yBAAA;AE4pCxB;;AFzpCI;EAAa,WCgBR;AC6oCT;;AF5pCI;EAAgB,cAAA;AEgqCpB;;AF/pCI;EAAgB,cAAA;AEmqCpB;;AFlqCI;EAAgB,cAAA;AEsqCpB;;AF3rCI;EAAgB,mBCkCX;AC6pCT;;AF9rCI;EAAmB,mBAAA;AEksCvB;;AFjsCI;EAAmB,mBAAA;AEqsCvB;;AFpsCI;EAAmB,mBAAA;AEwsCvB;;AFrsCI;EAAkB,aC4Bb;AC6qCT;;AFxsCI;EAAqB,aAAA;AE4sCzB;;AF3sCI;EAAqB,aAAA;AE+sCzB;;AF9sCI;EAAqB,aAAA;AEktCzB;;AF/sCI;EAAiB,yBAAA;AEmtCrB;;AFltCI;EAAoB,yBAAA;AEstCxB;;AFrtCI;EAAoB,yBAAA;AEytCxB;;AFxtCI;EAAoB,yBAAA;AE4tCxB;;AFztCI;EAAa,cCgBR;AC6sCT;;AF5tCI;EAAgB,cAAA;AEguCpB;;AF/tCI;EAAgB,cAAA;AEmuCpB;;AFluCI;EAAgB,cAAA;AEsuCpB;;AF3vCI;EAAgB,mBCkCX;AC6tCT;;AF9vCI;EAAmB,mBAAA;AEkwCvB;;AFjwCI;EAAmB,mBAAA;AEqwCvB;;AFpwCI;EAAmB,mBAAA;AEwwCvB;;AFrwCI;EAAkB,aC4Bb;AC6uCT;;AFxwCI;EAAqB,aAAA;AE4wCzB;;AF3wCI;EAAqB,aAAA;AE+wCzB;;AF9wCI;EAAqB,aAAA;AEkxCzB;;AF/wCI;EAAiB,yBAAA;AEmxCrB;;AFlxCI;EAAoB,yBAAA;AEsxCxB;;AFrxCI;EAAoB,yBAAA;AEyxCxB;;AFxxCI;EAAoB,yBAAA;AE4xCxB;;AFzxCI;EAAa,cCgBR;AC6wCT;;AF5xCI;EAAgB,cAAA;AEgyCpB;;AF/xCI;EAAgB,cAAA;AEmyCpB;;AFlyCI;EAAgB,cAAA;AEsyCpB;;AF3zCI;EAAgB,mBCkCX;AC6xCT;;AF9zCI;EAAmB,iBAAA;AEk0CvB;;AFj0CI;EAAmB,iBAAA;AEq0CvB;;AFp0CI;EAAmB,iBAAA;AEw0CvB;;AFr0CI;EAAkB,aC4Bb;AC6yCT;;AFx0CI;EAAqB,WAAA;AE40CzB;;AF30CI;EAAqB,WAAA;AE+0CzB;;AF90CI;EAAqB,WAAA;AEk1CzB;;AF/0CI;EAAiB,yBAAA;AEm1CrB;;AFl1CI;EAAoB,uBAAA;AEs1CxB;;AFr1CI;EAAoB,uBAAA;AEy1CxB;;AFx1CI;EAAoB,uBAAA;AE41CxB;;AFz1CI;EAAa,cCgBR;AC60CT;;AF51CI;EAAgB,YAAA;AEg2CpB;;AF/1CI;EAAgB,YAAA;AEm2CpB;;AFl2CI;EAAgB,YAAA;AEs2CpB;;AF33CI;EAAgB,mBCkCX;AC61CT;;AF93CI;EAAmB,mBAAA;AEk4CvB;;AFj4CI;EAAmB,mBAAA;AEq4CvB;;AFp4CI;EAAmB,mBAAA;AEw4CvB;;AFr4CI;EAAkB,aC4Bb;AC62CT;;AFx4CI;EAAqB,aAAA;AE44CzB;;AF34CI;EAAqB,aAAA;AE+4CzB;;AF94CI;EAAqB,aAAA;AEk5CzB;;AF/4CI;EAAiB,yBAAA;AEm5CrB;;AFl5CI;EAAoB,yBAAA;AEs5CxB;;AFr5CI;EAAoB,yBAAA;AEy5CxB;;AFx5CI;EAAoB,yBAAA;AE45CxB;;AFz5CI;EAAa,cCgBR;AC64CT;;AF55CI;EAAgB,cAAA;AEg6CpB;;AF/5CI;EAAgB,cAAA;AEm6CpB;;AFl6CI;EAAgB,cAAA;AEs6CpB;;AF37CI;EAAgB,mBCkCX;AC65CT;;AF97CI;EAAmB,mBAAA;AEk8CvB;;AFj8CI;EAAmB,mBAAA;AEq8CvB;;AFp8CI;EAAmB,mBAAA;AEw8CvB;;AFr8CI;EAAkB,aC4Bb;AC66CT;;AFx8CI;EAAqB,aAAA;AE48CzB;;AF38CI;EAAqB,aAAA;AE+8CzB;;AF98CI;EAAqB,aAAA;AEk9CzB;;AF/8CI;EAAiB,yBAAA;AEm9CrB;;AFl9CI;EAAoB,yBAAA;AEs9CxB;;AFr9CI;EAAoB,yBAAA;AEy9CxB;;AFx9CI;EAAoB,yBAAA;AE49CxB;;AFz9CI;EAAa,cCgBR;AC68CT;;AF59CI;EAAgB,cAAA;AEg+CpB;;AF/9CI;EAAgB,cAAA;AEm+CpB;;AFl+CI;EAAgB,cAAA;AEs+CpB;;AF3/CI;EAAgB,mBCkCX;AC69CT;;AF9/CI;EAAmB,mBAAA;AEkgDvB;;AFjgDI;EAAmB,mBAAA;AEqgDvB;;AFpgDI;EAAmB,mBAAA;AEwgDvB;;AFrgDI;EAAkB,aC4Bb;AC6+CT;;AFxgDI;EAAqB,aAAA;AE4gDzB;;AF3gDI;EAAqB,aAAA;AE+gDzB;;AF9gDI;EAAqB,aAAA;AEkhDzB;;AF/gDI;EAAiB,yBAAA;AEmhDrB;;AFlhDI;EAAoB,yBAAA;AEshDxB;;AFrhDI;EAAoB,yBAAA;AEyhDxB;;AFxhDI;EAAoB,yBAAA;AE4hDxB;;AFzhDI;EAAa,cCgBR;AC6gDT;;AF5hDI;EAAgB,cAAA;AEgiDpB;;AF/hDI;EAAgB,cAAA;AEmiDpB;;AFliDI;EAAgB,cAAA;AEsiDpB;;AF3jDI;EAAgB,mBCkCX;AC6hDT;;AF9jDI;EAAmB,mBAAA;AEkkDvB;;AFjkDI;EAAmB,mBAAA;AEqkDvB;;AFpkDI;EAAmB,mBAAA;AEwkDvB;;AFrkDI;EAAkB,aC4Bb;AC6iDT;;AFxkDI;EAAqB,aAAA;AE4kDzB;;AF3kDI;EAAqB,aAAA;AE+kDzB;;AF9kDI;EAAqB,aAAA;AEklDzB;;AF/kDI;EAAiB,yBAAA;AEmlDrB;;AFllDI;EAAoB,yBAAA;AEslDxB;;AFrlDI;EAAoB,yBAAA;AEylDxB;;AFxlDI;EAAoB,yBAAA;AE4lDxB;;AFzlDI;EAAa,cCgBR;AC6kDT;;AF5lDI;EAAgB,cAAA;AEgmDpB;;AF/lDI;EAAgB,cAAA;AEmmDpB;;AFlmDI;EAAgB,cAAA;AEsmDpB;;AC9nDA;EACE,iBAAA;EACA,UAAA;EACA,SAAA;EACA,aAAA;ADioDF;;AC9nDA;EACE,aAAA;EACA,2BAAA;EACA,mBAAA;EACA,mBAAA;EACA,aAAA;EACA,6BAAA;ADioDF;;AC9nDA;EACE,WAAA;EACA,kBAAA;ADioDF;AChoDE;EACE,WAAA;ADkoDJ;;AC9nDA;EACE,aAAA;EACA,aAAA;EACA,sBAAA;ADioDF;AC/nDE;EACE,aAAA;EACA,kBAAA;ADioDJ","file":"styles.scss","sourcesContent":["@each $class, $color in $colors {\n  // Backgound colors\n  @if (type-of($color) == 'color'){\n    .bg-#{$class} { background: $color; }\n    .bg-#{$class}-10 { background: lighten($color, 10%); }\n    .bg-#{$class}-20 { background: lighten($color, 20%); }\n    .bg-#{$class}-30 { background: lighten($color, 30%); }\n\n    // Fill colors (for SVG)\n    .fill-#{$class} { fill: $color; }\n    .fill-#{$class}-10 { fill: lighten($color, 10%); }\n    .fill-#{$class}-20 { fill: lighten($color, 20%); }\n    .fill-#{$class}-30 { fill: lighten($color, 30%); }\n\n    // Border colors\n    .bdr-#{$class} { border: 1px solid $color; }\n    .bdr-#{$class}-10 { border: 1px solid lighten($color, 10%); }\n    .bdr-#{$class}-20 { border: 1px solid lighten($color, 20%); }\n    .bdr-#{$class}-30 { border: 1px solid lighten($color, 30%); }\n\n    // Text Colors\n    .#{$class} { color: $color; }\n    .#{$class}-10 { color: lighten($color, 10%); }\n    .#{$class}-20 { color: lighten($color, 20%); }\n    .#{$class}-30 { color: lighten($color, 30%); }\n  }\n}\n","// Colors\n$red: #FF4136;\n$orange: #FF851B;\n$yellow: #FFDC00;\n$green: #2ECC40;\n$blue: #0074D9;\n$pink: #ef336c;\n$purple: #B10DC9;\n$navy: #34495e;\n$aqua: #7FDBFF;\n$teal: #39CCCC;\n$olive: #3D9970;\n$lime: #01FF70;\n$maroon: #85144b;\n$black: #000;\n$softblue: #edf0f3;\n\n// Shades\n$almost-black: #333;\n$dark: #666;\n$grey: #e5e5e5;\n$light: #f9f9f9;\n$white: #fff;\n$trans: transparent;\n$halfwhite: rgba(white, 0.5);\n$halfblack: rgba(black, 0.5);\n\n// Semantics\n$brand: $blue;\n$primary: $blue;\n$secondary: $light;\n$success: $green;\n$info: $teal;\n$warning: $yellow;\n$error: $red;\n$interesting: $pink;\n// Color collection for creating util classes\n$colors: (\n  \"red\": $red,\n  \"orange\": $orange,\n  \"yellow\": $yellow,\n  \"green\": $green,\n  \"blue\": $blue,\n  \"pink\": $pink,\n  \"purple\": $purple,\n  \"navy\": $navy,\n  \"aqua\": $aqua,\n  \"teal\": $teal,\n  \"maroon\": $maroon,\n  \"lime\": $lime,\n  \"olive\": $olive,\n  \"white\": $white,\n  \"light\": $light,\n  \"grey\": $grey,\n  \"dark\": $dark,\n  \"almost-black\": $almost-black,\n  \"black\": $black,\n  \"brand\": $brand,\n  \"primary\": $primary,\n  \"secondary\": $secondary,\n  \"success\": $success,\n  \"info\": $info,\n  \"warning\": $warning,\n  \"error\": $error\n);\n",".bg-red {\n  background: #FF4136;\n}\n\n.bg-red-10 {\n  background: #ff7169;\n}\n\n.bg-red-20 {\n  background: #ffa19c;\n}\n\n.bg-red-30 {\n  background: #ffd2cf;\n}\n\n.fill-red {\n  fill: #FF4136;\n}\n\n.fill-red-10 {\n  fill: #ff7169;\n}\n\n.fill-red-20 {\n  fill: #ffa19c;\n}\n\n.fill-red-30 {\n  fill: #ffd2cf;\n}\n\n.bdr-red {\n  border: 1px solid #FF4136;\n}\n\n.bdr-red-10 {\n  border: 1px solid #ff7169;\n}\n\n.bdr-red-20 {\n  border: 1px solid #ffa19c;\n}\n\n.bdr-red-30 {\n  border: 1px solid #ffd2cf;\n}\n\n.red {\n  color: #FF4136;\n}\n\n.red-10 {\n  color: #ff7169;\n}\n\n.red-20 {\n  color: #ffa19c;\n}\n\n.red-30 {\n  color: #ffd2cf;\n}\n\n.bg-orange {\n  background: #FF851B;\n}\n\n.bg-orange-10 {\n  background: #ffa04e;\n}\n\n.bg-orange-20 {\n  background: #ffbc81;\n}\n\n.bg-orange-30 {\n  background: #ffd7b4;\n}\n\n.fill-orange {\n  fill: #FF851B;\n}\n\n.fill-orange-10 {\n  fill: #ffa04e;\n}\n\n.fill-orange-20 {\n  fill: #ffbc81;\n}\n\n.fill-orange-30 {\n  fill: #ffd7b4;\n}\n\n.bdr-orange {\n  border: 1px solid #FF851B;\n}\n\n.bdr-orange-10 {\n  border: 1px solid #ffa04e;\n}\n\n.bdr-orange-20 {\n  border: 1px solid #ffbc81;\n}\n\n.bdr-orange-30 {\n  border: 1px solid #ffd7b4;\n}\n\n.orange {\n  color: #FF851B;\n}\n\n.orange-10 {\n  color: #ffa04e;\n}\n\n.orange-20 {\n  color: #ffbc81;\n}\n\n.orange-30 {\n  color: #ffd7b4;\n}\n\n.bg-yellow {\n  background: #FFDC00;\n}\n\n.bg-yellow-10 {\n  background: #ffe333;\n}\n\n.bg-yellow-20 {\n  background: #ffea66;\n}\n\n.bg-yellow-30 {\n  background: #fff199;\n}\n\n.fill-yellow {\n  fill: #FFDC00;\n}\n\n.fill-yellow-10 {\n  fill: #ffe333;\n}\n\n.fill-yellow-20 {\n  fill: #ffea66;\n}\n\n.fill-yellow-30 {\n  fill: #fff199;\n}\n\n.bdr-yellow {\n  border: 1px solid #FFDC00;\n}\n\n.bdr-yellow-10 {\n  border: 1px solid #ffe333;\n}\n\n.bdr-yellow-20 {\n  border: 1px solid #ffea66;\n}\n\n.bdr-yellow-30 {\n  border: 1px solid #fff199;\n}\n\n.yellow {\n  color: #FFDC00;\n}\n\n.yellow-10 {\n  color: #ffe333;\n}\n\n.yellow-20 {\n  color: #ffea66;\n}\n\n.yellow-30 {\n  color: #fff199;\n}\n\n.bg-green {\n  background: #2ECC40;\n}\n\n.bg-green-10 {\n  background: #54d964;\n}\n\n.bg-green-20 {\n  background: #7ee289;\n}\n\n.bg-green-30 {\n  background: #a8ebaf;\n}\n\n.fill-green {\n  fill: #2ECC40;\n}\n\n.fill-green-10 {\n  fill: #54d964;\n}\n\n.fill-green-20 {\n  fill: #7ee289;\n}\n\n.fill-green-30 {\n  fill: #a8ebaf;\n}\n\n.bdr-green {\n  border: 1px solid #2ECC40;\n}\n\n.bdr-green-10 {\n  border: 1px solid #54d964;\n}\n\n.bdr-green-20 {\n  border: 1px solid #7ee289;\n}\n\n.bdr-green-30 {\n  border: 1px solid #a8ebaf;\n}\n\n.green {\n  color: #2ECC40;\n}\n\n.green-10 {\n  color: #54d964;\n}\n\n.green-20 {\n  color: #7ee289;\n}\n\n.green-30 {\n  color: #a8ebaf;\n}\n\n.bg-blue {\n  background: #0074D9;\n}\n\n.bg-blue-10 {\n  background: #0d8eff;\n}\n\n.bg-blue-20 {\n  background: #40a6ff;\n}\n\n.bg-blue-30 {\n  background: #73beff;\n}\n\n.fill-blue {\n  fill: #0074D9;\n}\n\n.fill-blue-10 {\n  fill: #0d8eff;\n}\n\n.fill-blue-20 {\n  fill: #40a6ff;\n}\n\n.fill-blue-30 {\n  fill: #73beff;\n}\n\n.bdr-blue {\n  border: 1px solid #0074D9;\n}\n\n.bdr-blue-10 {\n  border: 1px solid #0d8eff;\n}\n\n.bdr-blue-20 {\n  border: 1px solid #40a6ff;\n}\n\n.bdr-blue-30 {\n  border: 1px solid #73beff;\n}\n\n.blue {\n  color: #0074D9;\n}\n\n.blue-10 {\n  color: #0d8eff;\n}\n\n.blue-20 {\n  color: #40a6ff;\n}\n\n.blue-30 {\n  color: #73beff;\n}\n\n.bg-pink {\n  background: #ef336c;\n}\n\n.bg-pink-10 {\n  background: #f3628e;\n}\n\n.bg-pink-20 {\n  background: #f692b0;\n}\n\n.bg-pink-30 {\n  background: #fac1d2;\n}\n\n.fill-pink {\n  fill: #ef336c;\n}\n\n.fill-pink-10 {\n  fill: #f3628e;\n}\n\n.fill-pink-20 {\n  fill: #f692b0;\n}\n\n.fill-pink-30 {\n  fill: #fac1d2;\n}\n\n.bdr-pink {\n  border: 1px solid #ef336c;\n}\n\n.bdr-pink-10 {\n  border: 1px solid #f3628e;\n}\n\n.bdr-pink-20 {\n  border: 1px solid #f692b0;\n}\n\n.bdr-pink-30 {\n  border: 1px solid #fac1d2;\n}\n\n.pink {\n  color: #ef336c;\n}\n\n.pink-10 {\n  color: #f3628e;\n}\n\n.pink-20 {\n  color: #f692b0;\n}\n\n.pink-30 {\n  color: #fac1d2;\n}\n\n.bg-purple {\n  background: #B10DC9;\n}\n\n.bg-purple-10 {\n  background: #d519f0;\n}\n\n.bg-purple-20 {\n  background: #dd49f3;\n}\n\n.bg-purple-30 {\n  background: #e679f6;\n}\n\n.fill-purple {\n  fill: #B10DC9;\n}\n\n.fill-purple-10 {\n  fill: #d519f0;\n}\n\n.fill-purple-20 {\n  fill: #dd49f3;\n}\n\n.fill-purple-30 {\n  fill: #e679f6;\n}\n\n.bdr-purple {\n  border: 1px solid #B10DC9;\n}\n\n.bdr-purple-10 {\n  border: 1px solid #d519f0;\n}\n\n.bdr-purple-20 {\n  border: 1px solid #dd49f3;\n}\n\n.bdr-purple-30 {\n  border: 1px solid #e679f6;\n}\n\n.purple {\n  color: #B10DC9;\n}\n\n.purple-10 {\n  color: #d519f0;\n}\n\n.purple-20 {\n  color: #dd49f3;\n}\n\n.purple-30 {\n  color: #e679f6;\n}\n\n.bg-navy {\n  background: #34495e;\n}\n\n.bg-navy-10 {\n  background: #46637f;\n}\n\n.bg-navy-20 {\n  background: #587ca0;\n}\n\n.bg-navy-30 {\n  background: #7796b4;\n}\n\n.fill-navy {\n  fill: #34495e;\n}\n\n.fill-navy-10 {\n  fill: #46637f;\n}\n\n.fill-navy-20 {\n  fill: #587ca0;\n}\n\n.fill-navy-30 {\n  fill: #7796b4;\n}\n\n.bdr-navy {\n  border: 1px solid #34495e;\n}\n\n.bdr-navy-10 {\n  border: 1px solid #46637f;\n}\n\n.bdr-navy-20 {\n  border: 1px solid #587ca0;\n}\n\n.bdr-navy-30 {\n  border: 1px solid #7796b4;\n}\n\n.navy {\n  color: #34495e;\n}\n\n.navy-10 {\n  color: #46637f;\n}\n\n.navy-20 {\n  color: #587ca0;\n}\n\n.navy-30 {\n  color: #7796b4;\n}\n\n.bg-aqua {\n  background: #7FDBFF;\n}\n\n.bg-aqua-10 {\n  background: #b2e9ff;\n}\n\n.bg-aqua-20 {\n  background: #e5f8ff;\n}\n\n.bg-aqua-30 {\n  background: white;\n}\n\n.fill-aqua {\n  fill: #7FDBFF;\n}\n\n.fill-aqua-10 {\n  fill: #b2e9ff;\n}\n\n.fill-aqua-20 {\n  fill: #e5f8ff;\n}\n\n.fill-aqua-30 {\n  fill: white;\n}\n\n.bdr-aqua {\n  border: 1px solid #7FDBFF;\n}\n\n.bdr-aqua-10 {\n  border: 1px solid #b2e9ff;\n}\n\n.bdr-aqua-20 {\n  border: 1px solid #e5f8ff;\n}\n\n.bdr-aqua-30 {\n  border: 1px solid white;\n}\n\n.aqua {\n  color: #7FDBFF;\n}\n\n.aqua-10 {\n  color: #b2e9ff;\n}\n\n.aqua-20 {\n  color: #e5f8ff;\n}\n\n.aqua-30 {\n  color: white;\n}\n\n.bg-teal {\n  background: #39CCCC;\n}\n\n.bg-teal-10 {\n  background: #62d6d6;\n}\n\n.bg-teal-20 {\n  background: #8ae1e1;\n}\n\n.bg-teal-30 {\n  background: #b3ebeb;\n}\n\n.fill-teal {\n  fill: #39CCCC;\n}\n\n.fill-teal-10 {\n  fill: #62d6d6;\n}\n\n.fill-teal-20 {\n  fill: #8ae1e1;\n}\n\n.fill-teal-30 {\n  fill: #b3ebeb;\n}\n\n.bdr-teal {\n  border: 1px solid #39CCCC;\n}\n\n.bdr-teal-10 {\n  border: 1px solid #62d6d6;\n}\n\n.bdr-teal-20 {\n  border: 1px solid #8ae1e1;\n}\n\n.bdr-teal-30 {\n  border: 1px solid #b3ebeb;\n}\n\n.teal {\n  color: #39CCCC;\n}\n\n.teal-10 {\n  color: #62d6d6;\n}\n\n.teal-20 {\n  color: #8ae1e1;\n}\n\n.teal-30 {\n  color: #b3ebeb;\n}\n\n.bg-maroon {\n  background: #85144b;\n}\n\n.bg-maroon-10 {\n  background: #b11b64;\n}\n\n.bg-maroon-20 {\n  background: #de217d;\n}\n\n.bg-maroon-30 {\n  background: #e44e97;\n}\n\n.fill-maroon {\n  fill: #85144b;\n}\n\n.fill-maroon-10 {\n  fill: #b11b64;\n}\n\n.fill-maroon-20 {\n  fill: #de217d;\n}\n\n.fill-maroon-30 {\n  fill: #e44e97;\n}\n\n.bdr-maroon {\n  border: 1px solid #85144b;\n}\n\n.bdr-maroon-10 {\n  border: 1px solid #b11b64;\n}\n\n.bdr-maroon-20 {\n  border: 1px solid #de217d;\n}\n\n.bdr-maroon-30 {\n  border: 1px solid #e44e97;\n}\n\n.maroon {\n  color: #85144b;\n}\n\n.maroon-10 {\n  color: #b11b64;\n}\n\n.maroon-20 {\n  color: #de217d;\n}\n\n.maroon-30 {\n  color: #e44e97;\n}\n\n.bg-lime {\n  background: #01FF70;\n}\n\n.bg-lime-10 {\n  background: #34ff8d;\n}\n\n.bg-lime-20 {\n  background: #67ffa9;\n}\n\n.bg-lime-30 {\n  background: #9affc6;\n}\n\n.fill-lime {\n  fill: #01FF70;\n}\n\n.fill-lime-10 {\n  fill: #34ff8d;\n}\n\n.fill-lime-20 {\n  fill: #67ffa9;\n}\n\n.fill-lime-30 {\n  fill: #9affc6;\n}\n\n.bdr-lime {\n  border: 1px solid #01FF70;\n}\n\n.bdr-lime-10 {\n  border: 1px solid #34ff8d;\n}\n\n.bdr-lime-20 {\n  border: 1px solid #67ffa9;\n}\n\n.bdr-lime-30 {\n  border: 1px solid #9affc6;\n}\n\n.lime {\n  color: #01FF70;\n}\n\n.lime-10 {\n  color: #34ff8d;\n}\n\n.lime-20 {\n  color: #67ffa9;\n}\n\n.lime-30 {\n  color: #9affc6;\n}\n\n.bg-olive {\n  background: #3D9970;\n}\n\n.bg-olive-10 {\n  background: #50b98a;\n}\n\n.bg-olive-20 {\n  background: #74c8a3;\n}\n\n.bg-olive-30 {\n  background: #99d6bb;\n}\n\n.fill-olive {\n  fill: #3D9970;\n}\n\n.fill-olive-10 {\n  fill: #50b98a;\n}\n\n.fill-olive-20 {\n  fill: #74c8a3;\n}\n\n.fill-olive-30 {\n  fill: #99d6bb;\n}\n\n.bdr-olive {\n  border: 1px solid #3D9970;\n}\n\n.bdr-olive-10 {\n  border: 1px solid #50b98a;\n}\n\n.bdr-olive-20 {\n  border: 1px solid #74c8a3;\n}\n\n.bdr-olive-30 {\n  border: 1px solid #99d6bb;\n}\n\n.olive {\n  color: #3D9970;\n}\n\n.olive-10 {\n  color: #50b98a;\n}\n\n.olive-20 {\n  color: #74c8a3;\n}\n\n.olive-30 {\n  color: #99d6bb;\n}\n\n.bg-white {\n  background: #fff;\n}\n\n.bg-white-10 {\n  background: white;\n}\n\n.bg-white-20 {\n  background: white;\n}\n\n.bg-white-30 {\n  background: white;\n}\n\n.fill-white {\n  fill: #fff;\n}\n\n.fill-white-10 {\n  fill: white;\n}\n\n.fill-white-20 {\n  fill: white;\n}\n\n.fill-white-30 {\n  fill: white;\n}\n\n.bdr-white {\n  border: 1px solid #fff;\n}\n\n.bdr-white-10 {\n  border: 1px solid white;\n}\n\n.bdr-white-20 {\n  border: 1px solid white;\n}\n\n.bdr-white-30 {\n  border: 1px solid white;\n}\n\n.white {\n  color: #fff;\n}\n\n.white-10 {\n  color: white;\n}\n\n.white-20 {\n  color: white;\n}\n\n.white-30 {\n  color: white;\n}\n\n.bg-light {\n  background: #f9f9f9;\n}\n\n.bg-light-10 {\n  background: white;\n}\n\n.bg-light-20 {\n  background: white;\n}\n\n.bg-light-30 {\n  background: white;\n}\n\n.fill-light {\n  fill: #f9f9f9;\n}\n\n.fill-light-10 {\n  fill: white;\n}\n\n.fill-light-20 {\n  fill: white;\n}\n\n.fill-light-30 {\n  fill: white;\n}\n\n.bdr-light {\n  border: 1px solid #f9f9f9;\n}\n\n.bdr-light-10 {\n  border: 1px solid white;\n}\n\n.bdr-light-20 {\n  border: 1px solid white;\n}\n\n.bdr-light-30 {\n  border: 1px solid white;\n}\n\n.light {\n  color: #f9f9f9;\n}\n\n.light-10 {\n  color: white;\n}\n\n.light-20 {\n  color: white;\n}\n\n.light-30 {\n  color: white;\n}\n\n.bg-grey {\n  background: #e5e5e5;\n}\n\n.bg-grey-10 {\n  background: white;\n}\n\n.bg-grey-20 {\n  background: white;\n}\n\n.bg-grey-30 {\n  background: white;\n}\n\n.fill-grey {\n  fill: #e5e5e5;\n}\n\n.fill-grey-10 {\n  fill: white;\n}\n\n.fill-grey-20 {\n  fill: white;\n}\n\n.fill-grey-30 {\n  fill: white;\n}\n\n.bdr-grey {\n  border: 1px solid #e5e5e5;\n}\n\n.bdr-grey-10 {\n  border: 1px solid white;\n}\n\n.bdr-grey-20 {\n  border: 1px solid white;\n}\n\n.bdr-grey-30 {\n  border: 1px solid white;\n}\n\n.grey {\n  color: #e5e5e5;\n}\n\n.grey-10 {\n  color: white;\n}\n\n.grey-20 {\n  color: white;\n}\n\n.grey-30 {\n  color: white;\n}\n\n.bg-dark {\n  background: #666;\n}\n\n.bg-dark-10 {\n  background: gray;\n}\n\n.bg-dark-20 {\n  background: #999999;\n}\n\n.bg-dark-30 {\n  background: #b3b3b3;\n}\n\n.fill-dark {\n  fill: #666;\n}\n\n.fill-dark-10 {\n  fill: gray;\n}\n\n.fill-dark-20 {\n  fill: #999999;\n}\n\n.fill-dark-30 {\n  fill: #b3b3b3;\n}\n\n.bdr-dark {\n  border: 1px solid #666;\n}\n\n.bdr-dark-10 {\n  border: 1px solid gray;\n}\n\n.bdr-dark-20 {\n  border: 1px solid #999999;\n}\n\n.bdr-dark-30 {\n  border: 1px solid #b3b3b3;\n}\n\n.dark {\n  color: #666;\n}\n\n.dark-10 {\n  color: gray;\n}\n\n.dark-20 {\n  color: #999999;\n}\n\n.dark-30 {\n  color: #b3b3b3;\n}\n\n.bg-almost-black {\n  background: #333;\n}\n\n.bg-almost-black-10 {\n  background: #4d4d4d;\n}\n\n.bg-almost-black-20 {\n  background: #666666;\n}\n\n.bg-almost-black-30 {\n  background: gray;\n}\n\n.fill-almost-black {\n  fill: #333;\n}\n\n.fill-almost-black-10 {\n  fill: #4d4d4d;\n}\n\n.fill-almost-black-20 {\n  fill: #666666;\n}\n\n.fill-almost-black-30 {\n  fill: gray;\n}\n\n.bdr-almost-black {\n  border: 1px solid #333;\n}\n\n.bdr-almost-black-10 {\n  border: 1px solid #4d4d4d;\n}\n\n.bdr-almost-black-20 {\n  border: 1px solid #666666;\n}\n\n.bdr-almost-black-30 {\n  border: 1px solid gray;\n}\n\n.almost-black {\n  color: #333;\n}\n\n.almost-black-10 {\n  color: #4d4d4d;\n}\n\n.almost-black-20 {\n  color: #666666;\n}\n\n.almost-black-30 {\n  color: gray;\n}\n\n.bg-black {\n  background: #000;\n}\n\n.bg-black-10 {\n  background: #1a1a1a;\n}\n\n.bg-black-20 {\n  background: #333333;\n}\n\n.bg-black-30 {\n  background: #4d4d4d;\n}\n\n.fill-black {\n  fill: #000;\n}\n\n.fill-black-10 {\n  fill: #1a1a1a;\n}\n\n.fill-black-20 {\n  fill: #333333;\n}\n\n.fill-black-30 {\n  fill: #4d4d4d;\n}\n\n.bdr-black {\n  border: 1px solid #000;\n}\n\n.bdr-black-10 {\n  border: 1px solid #1a1a1a;\n}\n\n.bdr-black-20 {\n  border: 1px solid #333333;\n}\n\n.bdr-black-30 {\n  border: 1px solid #4d4d4d;\n}\n\n.black {\n  color: #000;\n}\n\n.black-10 {\n  color: #1a1a1a;\n}\n\n.black-20 {\n  color: #333333;\n}\n\n.black-30 {\n  color: #4d4d4d;\n}\n\n.bg-brand {\n  background: #0074D9;\n}\n\n.bg-brand-10 {\n  background: #0d8eff;\n}\n\n.bg-brand-20 {\n  background: #40a6ff;\n}\n\n.bg-brand-30 {\n  background: #73beff;\n}\n\n.fill-brand {\n  fill: #0074D9;\n}\n\n.fill-brand-10 {\n  fill: #0d8eff;\n}\n\n.fill-brand-20 {\n  fill: #40a6ff;\n}\n\n.fill-brand-30 {\n  fill: #73beff;\n}\n\n.bdr-brand {\n  border: 1px solid #0074D9;\n}\n\n.bdr-brand-10 {\n  border: 1px solid #0d8eff;\n}\n\n.bdr-brand-20 {\n  border: 1px solid #40a6ff;\n}\n\n.bdr-brand-30 {\n  border: 1px solid #73beff;\n}\n\n.brand {\n  color: #0074D9;\n}\n\n.brand-10 {\n  color: #0d8eff;\n}\n\n.brand-20 {\n  color: #40a6ff;\n}\n\n.brand-30 {\n  color: #73beff;\n}\n\n.bg-primary {\n  background: #0074D9;\n}\n\n.bg-primary-10 {\n  background: #0d8eff;\n}\n\n.bg-primary-20 {\n  background: #40a6ff;\n}\n\n.bg-primary-30 {\n  background: #73beff;\n}\n\n.fill-primary {\n  fill: #0074D9;\n}\n\n.fill-primary-10 {\n  fill: #0d8eff;\n}\n\n.fill-primary-20 {\n  fill: #40a6ff;\n}\n\n.fill-primary-30 {\n  fill: #73beff;\n}\n\n.bdr-primary {\n  border: 1px solid #0074D9;\n}\n\n.bdr-primary-10 {\n  border: 1px solid #0d8eff;\n}\n\n.bdr-primary-20 {\n  border: 1px solid #40a6ff;\n}\n\n.bdr-primary-30 {\n  border: 1px solid #73beff;\n}\n\n.primary {\n  color: #0074D9;\n}\n\n.primary-10 {\n  color: #0d8eff;\n}\n\n.primary-20 {\n  color: #40a6ff;\n}\n\n.primary-30 {\n  color: #73beff;\n}\n\n.bg-secondary {\n  background: #f9f9f9;\n}\n\n.bg-secondary-10 {\n  background: white;\n}\n\n.bg-secondary-20 {\n  background: white;\n}\n\n.bg-secondary-30 {\n  background: white;\n}\n\n.fill-secondary {\n  fill: #f9f9f9;\n}\n\n.fill-secondary-10 {\n  fill: white;\n}\n\n.fill-secondary-20 {\n  fill: white;\n}\n\n.fill-secondary-30 {\n  fill: white;\n}\n\n.bdr-secondary {\n  border: 1px solid #f9f9f9;\n}\n\n.bdr-secondary-10 {\n  border: 1px solid white;\n}\n\n.bdr-secondary-20 {\n  border: 1px solid white;\n}\n\n.bdr-secondary-30 {\n  border: 1px solid white;\n}\n\n.secondary {\n  color: #f9f9f9;\n}\n\n.secondary-10 {\n  color: white;\n}\n\n.secondary-20 {\n  color: white;\n}\n\n.secondary-30 {\n  color: white;\n}\n\n.bg-success {\n  background: #2ECC40;\n}\n\n.bg-success-10 {\n  background: #54d964;\n}\n\n.bg-success-20 {\n  background: #7ee289;\n}\n\n.bg-success-30 {\n  background: #a8ebaf;\n}\n\n.fill-success {\n  fill: #2ECC40;\n}\n\n.fill-success-10 {\n  fill: #54d964;\n}\n\n.fill-success-20 {\n  fill: #7ee289;\n}\n\n.fill-success-30 {\n  fill: #a8ebaf;\n}\n\n.bdr-success {\n  border: 1px solid #2ECC40;\n}\n\n.bdr-success-10 {\n  border: 1px solid #54d964;\n}\n\n.bdr-success-20 {\n  border: 1px solid #7ee289;\n}\n\n.bdr-success-30 {\n  border: 1px solid #a8ebaf;\n}\n\n.success {\n  color: #2ECC40;\n}\n\n.success-10 {\n  color: #54d964;\n}\n\n.success-20 {\n  color: #7ee289;\n}\n\n.success-30 {\n  color: #a8ebaf;\n}\n\n.bg-info {\n  background: #39CCCC;\n}\n\n.bg-info-10 {\n  background: #62d6d6;\n}\n\n.bg-info-20 {\n  background: #8ae1e1;\n}\n\n.bg-info-30 {\n  background: #b3ebeb;\n}\n\n.fill-info {\n  fill: #39CCCC;\n}\n\n.fill-info-10 {\n  fill: #62d6d6;\n}\n\n.fill-info-20 {\n  fill: #8ae1e1;\n}\n\n.fill-info-30 {\n  fill: #b3ebeb;\n}\n\n.bdr-info {\n  border: 1px solid #39CCCC;\n}\n\n.bdr-info-10 {\n  border: 1px solid #62d6d6;\n}\n\n.bdr-info-20 {\n  border: 1px solid #8ae1e1;\n}\n\n.bdr-info-30 {\n  border: 1px solid #b3ebeb;\n}\n\n.info {\n  color: #39CCCC;\n}\n\n.info-10 {\n  color: #62d6d6;\n}\n\n.info-20 {\n  color: #8ae1e1;\n}\n\n.info-30 {\n  color: #b3ebeb;\n}\n\n.bg-warning {\n  background: #FFDC00;\n}\n\n.bg-warning-10 {\n  background: #ffe333;\n}\n\n.bg-warning-20 {\n  background: #ffea66;\n}\n\n.bg-warning-30 {\n  background: #fff199;\n}\n\n.fill-warning {\n  fill: #FFDC00;\n}\n\n.fill-warning-10 {\n  fill: #ffe333;\n}\n\n.fill-warning-20 {\n  fill: #ffea66;\n}\n\n.fill-warning-30 {\n  fill: #fff199;\n}\n\n.bdr-warning {\n  border: 1px solid #FFDC00;\n}\n\n.bdr-warning-10 {\n  border: 1px solid #ffe333;\n}\n\n.bdr-warning-20 {\n  border: 1px solid #ffea66;\n}\n\n.bdr-warning-30 {\n  border: 1px solid #fff199;\n}\n\n.warning {\n  color: #FFDC00;\n}\n\n.warning-10 {\n  color: #ffe333;\n}\n\n.warning-20 {\n  color: #ffea66;\n}\n\n.warning-30 {\n  color: #fff199;\n}\n\n.bg-error {\n  background: #FF4136;\n}\n\n.bg-error-10 {\n  background: #ff7169;\n}\n\n.bg-error-20 {\n  background: #ffa19c;\n}\n\n.bg-error-30 {\n  background: #ffd2cf;\n}\n\n.fill-error {\n  fill: #FF4136;\n}\n\n.fill-error-10 {\n  fill: #ff7169;\n}\n\n.fill-error-20 {\n  fill: #ffa19c;\n}\n\n.fill-error-30 {\n  fill: #ffd2cf;\n}\n\n.bdr-error {\n  border: 1px solid #FF4136;\n}\n\n.bdr-error-10 {\n  border: 1px solid #ff7169;\n}\n\n.bdr-error-20 {\n  border: 1px solid #ffa19c;\n}\n\n.bdr-error-30 {\n  border: 1px solid #ffd2cf;\n}\n\n.error {\n  color: #FF4136;\n}\n\n.error-10 {\n  color: #ff7169;\n}\n\n.error-20 {\n  color: #ffa19c;\n}\n\n.error-30 {\n  color: #ffd2cf;\n}\n\nbody {\n  background: white;\n  padding: 0;\n  margin: 0;\n  padding: 20px;\n}\n\n.Header {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  background: #f5f5f5;\n  padding: 10px;\n  border-bottom: 1px solid #ccc;\n}\n\n.logo {\n  width: 80px;\n  margin-right: 40px;\n}\n.logo__img {\n  width: 100%;\n}\n\n.row {\n  display: flex;\n  padding: 10px;\n  border: 1px solid #ccc;\n}\n.row > div {\n  padding: 20px;\n  margin-right: 10px;\n}","body {\n  background: white;\n  padding: 0;\n  margin: 0;\n  padding: 20px;\n}\n\n.Header {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  background: #f5f5f5;\n  padding: 10px;\n  border-bottom: 1px solid #ccc;\n}\n\n.logo {\n  width: 80px;\n  margin-right: 40px;\n  &__img {\n    width: 100%;\n  }\n}\n\n.row {\n  display: flex;\n  padding: 10px;\n  border: 1px solid #ccc;\n\n  > div {\n    padding: 20px;\n    margin-right: 10px;\n  }\n}\n"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/native-url/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/native-url/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var e,t=(e=__webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js"))&&"object"==typeof e&&"default"in e?e.default:e,r=/https?|ftp|gopher|file/;function o(e){"string"==typeof e&&(e=f(e));var o=function(e,t,r){var o=e.auth,a=e.hostname,s=e.protocol||"",h=e.pathname||"",c=e.hash||"",p=e.query||"",n=!1;o=o?encodeURIComponent(o).replace(/%3A/i,":")+"@":"",e.host?n=o+e.host:a&&(n=o+(~a.indexOf(":")?"["+a+"]":a),e.port&&(n+=":"+e.port)),p&&"object"==typeof p&&(p=t.encode(p));var l=e.search||p&&"?"+p||"";return s&&":"!==s.substr(-1)&&(s+=":"),e.slashes||(!s||r.test(s))&&!1!==n?(n="//"+(n||""),h&&"/"!==h[0]&&(h="/"+h)):n||(n=""),c&&"#"!==c[0]&&(c="#"+c),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:n,pathname:h=h.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:c}}(e,t,r);return""+o.protocol+o.host+o.pathname+o.search+o.hash}var a="http://",s="w.w",h=a+s,c=/^https?|ftp|gopher|file/,p=/^(.*?)([#?].*)/,n=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,l=/^([a-z0-9.+-]*:)?\/\/\/*/i,i=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function u(e){try{return decodeURI(e)}catch(t){return e}}function f(e,r,a){void 0===r&&(r=!1),void 0===a&&(a=!1);var f=(e=e.trim()).match(p);e=f?u(f[1]).replace(/\\/g,"/")+f[2]:u(e).replace(/\\/g,"/"),i.test(e)&&"/"!==e.slice(-1)&&(e+="/");var m=!/(^javascript)/.test(e)&&e.match(n),v=l.test(e),d="";m&&(c.test(m[1])||(d=m[1].toLowerCase(),e=""+m[2]+m[3]),m[2]||(v=!1,c.test(m[1])?(d=m[1],e=""+m[3]):e="//"+m[3]),3!==m[2].length&&1!==m[2].length||(d=m[1],e="/"+m[3]));var g,b=e.match(/(:[0-9]+)/),y="";b&&b[1]&&3===b[1].length&&(e=e.replace(y=b[1],y+"00"));var w={},x="",R="";try{g=new URL(e)}catch(t){x=t,d||a||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(R="/",e=e.substr(1));try{g=new URL(e,h)}catch(e){return w.protocol=d,w.href=d,w}}w.slashes=v&&!R,w.host=g.host===s?"":g.host,w.hostname=g.hostname===s?"":g.hostname.replace(/(\[|\])/g,""),w.protocol=x?d||null:g.protocol,w.search=g.search.replace(/\\/g,"%5C"),w.hash=g.hash.replace(/\\/g,"%5C");var U=e.split("#");!w.search&&~U[0].indexOf("?")&&(w.search="?"),w.hash||""!==U[1]||(w.hash="#"),w.query=r?t.decode(g.search.substr(1)):w.search.substr(1),w.pathname=R+u(g.pathname).replace(/"/g,"%22"),"about:"===w.protocol&&"blank"===w.pathname&&(w.protocol="",w.pathname=""),x&&"/"!==e[0]&&(w.pathname=w.pathname.substr(1)),d&&!c.test(d)&&"/"!==e.slice(-1)&&"/"===w.pathname&&(w.pathname=""),w.path=w.pathname+w.search,w.auth=[g.username,g.password].map(decodeURIComponent).filter(Boolean).join(":"),w.port=g.port,y&&(w.host=w.host.replace(y+"00",y),w.port=w.port.slice(0,-2)),w.href=R?""+w.pathname+w.search+w.hash:o(w);var j=/^(file)/.test(w.href)?["host","hostname"]:[];return Object.keys(w).forEach(function(e){~j.indexOf(e)||(w[e]=w[e]||null)}),w}var m=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,v=/https?|ftp|gopher|file/;function d(e,t){var r="string"==typeof e?f(e):e;e="object"==typeof e?o(e):e;var s=f(t),c="";r.protocol&&!r.slashes&&(c=r.protocol,e=e.replace(r.protocol,""),c+="/"===t[0]||"/"===e[0]?"/":""),c&&s.protocol&&(c="",s.slashes||(c=s.protocol,t=t.replace(s.protocol,"")));var p=e.match(m);p&&!s.protocol&&(e=e.substr((c=p[1]+(p[2]||"")).length),/^\/\/[^\/]/.test(t)&&(c=c.slice(0,-1)));var n=new URL(e,h+"/"),l=new URL(t,n).toString().replace(h,""),i=s.protocol||r.protocol;return i+=r.slashes||s.slashes?"//":"",!c&&i?l=l.replace(a,i):c&&(l=l.replace(a,"")),v.test(l)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==l.slice(-1)||(l=l.slice(0,-1)),c&&(l=c+("/"===l[0]?l.substr(1):l)),l}exports.parse=f,exports.format=o,exports.resolve=d,exports.resolveObject=function(e,t){return f(d(e,t))};
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!./":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/_app", function() {
      var mod = __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js")
      if(true) {
        module.hot.accept(/*! private-next-pages/_app.js */ "./pages/_app.js", function() {
          if(!next.router.components["/_app"]) return
          var updatedPage = __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js")
          next.router.update("/_app", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _construct = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

exports["default"] = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  var p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

var prepareRoute = function prepareRoute(path) {
  return toRoute(!path || path === '/' ? '/index' : path);
};

function fetchNextData(pathname, query, isServerRender, cb) {
  var attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: "/_next/data/".concat(__NEXT_DATA__.buildId).concat(pathname, ".json"),
      query: query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(function (res) {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error("Failed to load static props");
      }

      return res.json();
    });
  }

  return getResponse().then(function (data) {
    return cb ? cb(data) : data;
  })["catch"](function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

var Router = /*#__PURE__*/function () {
  function Router(pathname, query, as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback;

    _classCallCheck(this, Router);

    // Static Data Cache
    this.sdc = {};

    this.onPopState = function (e) {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname = _this.pathname,
            _query = _this.query;

        _this.changeState('replaceState', utils_1.formatWithValidation({
          pathname: _pathname,
          query: _query
        }), utils_1.getURL());

        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && _this.isSsr && e.state.as === _this.asPath && url_1.parse(e.state.url).pathname === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(e.state)) {
        return;
      }

      var _e$state = e.state,
          url = _e$state.url,
          as = _e$state.as,
          options = _e$state.options;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      _this.replace(url, as, options);
    };

    this._getStaticData = function (asPath) {
      var pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, _this.isSsr, function (data) {
        return _this.sdc[pathname] = data;
      });
    };

    this._getServerData = function (asPath) {
      var _url_1$parse = url_1.parse(asPath, true),
          pathname = _url_1$parse.pathname,
          query = _url_1$parse.query;

      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, _this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (true) {
      // in order for `e.state` to work on the `onpopstate` event
      // we have to register the initial route upon initialization
      this.changeState('replaceState', utils_1.formatWithValidation({
        pathname: pathname,
        query: query
      }), as);
      window.addEventListener('popstate', this.onPopState);
    }
  } // @deprecated backwards compatibility even though it's a private method.


  _createClass(Router, [{
    key: "update",
    value: function update(route, mod) {
      var Component = mod["default"] || mod;
      var data = this.components[route];

      if (!data) {
        throw new Error("Cannot update unavailable route: ".concat(route));
      }

      var newData = Object.assign(Object.assign({}, data), {
        Component: Component,
        __N_SSG: mod.__N_SSG,
        __N_SSP: mod.__N_SSP
      });
      this.components[route] = newData; // pages/_app.js updated

      if (route === '/_app') {
        this.notify(this.components[this.route]);
        return;
      }

      if (route === this.route) {
        this.notify(newData);
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
     * Go back in history
     */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
     * Performs a `pushState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('pushState', url, as, options);
    }
    /**
     * Performs a `replaceState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function change(method, _url, _as, options) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (!options._h) {
          _this2.isSsr = false;
        } // marking route changes as a navigation start entry


        if (utils_1.ST) {
          performance.mark('routeChange');
        } // If url and as provided as an object representation,
        // we'll format them into the string version here.


        var url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
        var as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
        // "<page>/index.html" directly for the SSR page.

        if (false) { var rewriteUrlForNextExport; }

        _this2.abortComponentLoad(as); // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.
        // WARNING: `_h` is an internal option for handing Next.js client-side
        // hydration. Your app should _never_ use this property. It may change at
        // any time without notice.


        if (!options._h && _this2.onlyAHashChange(as)) {
          _this2.asPath = as;
          Router.events.emit('hashChangeStart', as);

          _this2.changeState(method, url, addBasePath(as), options);

          _this2.scrollToHash(as);

          Router.events.emit('hashChangeComplete', as);
          return resolve(true);
        }

        var _url_1$parse2 = url_1.parse(url, true),
            pathname = _url_1$parse2.pathname,
            query = _url_1$parse2.query,
            protocol = _url_1$parse2.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return resolve(false);
        } // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url


        if (!_this2.urlIsNew(as)) {
          method = 'replaceState';
        }

        var route = toRoute(pathname);
        var _options$shallow = options.shallow,
            shallow = _options$shallow === void 0 ? false : _options$shallow;

        if (is_dynamic_1.isDynamicRoute(route)) {
          var _url_1$parse3 = url_1.parse(as),
              asPathname = _url_1$parse3.pathname;

          var routeRegex = route_regex_1.getRouteRegex(route);
          var routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

          if (!routeMatch) {
            var missingParams = Object.keys(routeRegex.groups).filter(function (param) {
              return !query[param];
            });

            if (missingParams.length > 0) {
              if (true) {
                console.warn("Mismatching `as` and `href` failed to manually provide " + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
              }

              return reject(new Error("The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ") + "Read more: https://err.sh/zeit/next.js/incompatible-href-as"));
            }
          } else {
            // Merge params into `query`, overwriting any specified in search
            Object.assign(query, routeMatch);
          }
        }

        Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

        _this2.getRouteInfo(route, pathname, query, as, shallow).then(function (routeInfo) {
          var error = routeInfo.error;

          if (error && error.cancelled) {
            return resolve(false);
          }

          Router.events.emit('beforeHistoryChange', as);

          _this2.changeState(method, url, addBasePath(as), options);

          if (true) {
            var appComp = _this2.components['/_app'].Component;
            window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
          }

          _this2.set(route, pathname, query, as, routeInfo);

          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        }, reject);
      });
    }
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || utils_1.getURL() !== as) {
        window.history[method]({
          url: url,
          as: as,
          options: options
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "getRouteInfo",
    value: function getRouteInfo(route, pathname, query, as) {
      var _this3 = this;

      var shallow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
      // If the route is already rendered on the screen.

      if (shallow && cachedRouteInfo && this.route === route) {
        return Promise.resolve(cachedRouteInfo);
      }

      var handleError = function handleError(err, loadErrorFail) {
        return new Promise(function (resolve) {
          if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
            // If we can't load the page it could be one of following reasons
            //  1. Page doesn't exists
            //  2. Page does exist in a different zone
            //  3. Internal error while loading the page
            // So, doing a hard reload is the proper way to deal with this.
            window.location.href = as; // Changing the URL doesn't block executing the current code path.
            // So, we need to mark it as a cancelled error and stop the routing logic.

            err.cancelled = true; // @ts-ignore TODO: fix the control flow here

            return resolve({
              error: err
            });
          }

          if (err.cancelled) {
            // @ts-ignore TODO: fix the control flow here
            return resolve({
              error: err
            });
          }

          resolve(_this3.fetchComponent('/_error').then(function (res) {
            var Component = res.page;
            var routeInfo = {
              Component: Component,
              err: err
            };
            return new Promise(function (resolve) {
              _this3.getInitialProps(Component, {
                err: err,
                pathname: pathname,
                query: query
              }).then(function (props) {
                routeInfo.props = props;
                routeInfo.error = err;
                resolve(routeInfo);
              }, function (gipErr) {
                console.error('Error in error page `getInitialProps`: ', gipErr);
                routeInfo.error = err;
                routeInfo.props = {};
                resolve(routeInfo);
              });
            });
          })["catch"](function (err) {
            return handleError(err, true);
          }));
        });
      };

      return new Promise(function (resolve, reject) {
        if (cachedRouteInfo) {
          return resolve(cachedRouteInfo);
        }

        _this3.fetchComponent(route).then(function (res) {
          return resolve({
            Component: res.page,
            __N_SSG: res.mod.__N_SSG,
            __N_SSP: res.mod.__N_SSP
          });
        }, reject);
      }).then(function (routeInfo) {
        var Component = routeInfo.Component,
            __N_SSG = routeInfo.__N_SSG,
            __N_SSP = routeInfo.__N_SSP;

        if (true) {
          var _require = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"),
              isValidElementType = _require.isValidElementType;

          if (!isValidElementType(Component)) {
            throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));
          }
        }

        return _this3._getData(function () {
          return __N_SSG ? _this3._getStaticData(as) : __N_SSP ? _this3._getServerData(as) : _this3.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
          {
            pathname: pathname,
            query: query,
            asPath: as
          });
        }).then(function (props) {
          routeInfo.props = props;
          _this3.components[route] = routeInfo;
          return routeInfo;
        });
      })["catch"](handleError);
    }
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.isFallback = false;
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      this.notify(data);
    }
    /**
     * Callback to execute before replacing router state
     * @param cb callback to be executed
     */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
     * Prefetch page code, you may wait for the data during page rendering.
     * This feature only works in production!
     * @param url the href of prefetched page
     * @param asPath the as path of the prefetched page
     */

  }, {
    key: "prefetch",
    value: function prefetch(url) {
      var _this4 = this;

      var asPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (resolve, reject) {
        var _url_1$parse4 = url_1.parse(url),
            pathname = _url_1$parse4.pathname,
            protocol = _url_1$parse4.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return;
        } // Prefetch is not supported in development mode because it would trigger on-demand-entries


        if (true) {
          return;
        }

        Promise.all([_this4.pageLoader.prefetchData(url, asPath), _this4.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(function () {
          return resolve();
        }, reject);
      });
    }
  }, {
    key: "fetchComponent",
    value: function fetchComponent(route) {
      var cancelled, cancel, componentResult, error;
      return _regeneratorRuntime.async(function fetchComponent$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cancelled = false;

              cancel = this.clc = function () {
                cancelled = true;
              };

              _context.next = 4;
              return _regeneratorRuntime.awrap(this.pageLoader.loadPage(route));

            case 4:
              componentResult = _context.sent;

              if (!cancelled) {
                _context.next = 9;
                break;
              }

              error = new Error("Abort fetching component for route: \"".concat(route, "\""));
              error.cancelled = true;
              throw error;

            case 9:
              if (cancel === this.clc) {
                this.clc = null;
              }

              return _context.abrupt("return", componentResult);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this5 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this5.clc) {
          _this5.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return utils_1.loadGetInitialProps(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.clc) {
        var e = new Error('Route Cancelled');
        e.cancelled = true;
        Router.events.emit('routeChangeError', e, as);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      this.sub(data, this.components['/_app'].Component);
    }
  }], [{
    key: "_rewriteUrlForNextExport",
    value: function _rewriteUrlForNextExport(url) {
      if (false) { var rewriteUrlForNextExport; } else {
        return url;
      }
    }
  }]);

  return Router;
}();

exports["default"] = Router;
Router.events = mitt_1["default"]();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = decodeURIComponent;
    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  var escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, function (_, $1) {
    var isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups: groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");
/**
 * Utils
 */


function execOnce(fn) {
  var _this = this;

  var used = false;
  var result = null;
  return function () {
    if (!used) {
      used = true;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      result = fn.apply(_this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

function loadGetInitialProps(App, ctx) {
  var _a, message, res, props, _message;

  return _regeneratorRuntime.async(function loadGetInitialProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          if (!((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps)) {
            _context.next = 4;
            break;
          }

          message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.");
          throw new Error(message);

        case 4:
          // when called from _app `ctx` is nested in `ctx`
          res = ctx.res || ctx.ctx && ctx.ctx.res;

          if (App.getInitialProps) {
            _context.next = 12;
            break;
          }

          if (!(ctx.ctx && ctx.Component)) {
            _context.next = 11;
            break;
          }

          _context.next = 9;
          return _regeneratorRuntime.awrap(loadGetInitialProps(ctx.Component, ctx.ctx));

        case 9:
          _context.t0 = _context.sent;
          return _context.abrupt("return", {
            pageProps: _context.t0
          });

        case 11:
          return _context.abrupt("return", {});

        case 12:
          _context.next = 14;
          return _regeneratorRuntime.awrap(App.getInitialProps(ctx));

        case 14:
          props = _context.sent;

          if (!(res && isResSent(res))) {
            _context.next = 17;
            break;
          }

          return _context.abrupt("return", props);

        case 17:
          if (props) {
            _context.next = 20;
            break;
          }

          _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
          throw new Error(_message);

        case 20:
          if (true) {
            if (Object.keys(props).length === 0 && !ctx.ctx) {
              console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps"));
            }
          }

          return _context.abrupt("return", props);

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(function (key) {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/styles.scss */ "./styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/andreortiz/Desktop/helloandre/pages/_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 10
    }
  }));
}

/***/ }),

/***/ "./styles/styles.scss":
/*!****************************!*\
  !*** ./styles/styles.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/styles.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/styles.scss",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/styles.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ 0:
/*!*******************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js ./node_modules/next/dist/client/router.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!./");
module.exports = __webpack_require__(/*! /Users/andreortiz/Desktop/helloandre/node_modules/next/dist/client/router.js */"./node_modules/next/dist/client/router.js");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[0,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=_app.js.map