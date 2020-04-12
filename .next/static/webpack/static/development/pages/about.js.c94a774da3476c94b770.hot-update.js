webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/Users/andreortiz/Desktop/helloandre/components/header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var _linkStyle = {
  marginRight: 15
};
var navData = [{
  title: 'Home',
  path: '/',
  linkStyle: _linkStyle
}, {
  title: 'Work',
  path: '/work',
  linkStyle: _linkStyle
}, {
  title: 'About',
  path: '/about',
  linkStyle: _linkStyle
}];

var Header = function Header() {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 3
    }
  }, navData.map(function (item) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: item.path,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }
    }, __jsx("a", {
      style: item.linkStyle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 15
      }
    }, item.title));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=about.js.c94a774da3476c94b770.hot-update.js.map