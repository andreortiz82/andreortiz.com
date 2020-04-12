webpackHotUpdate("static/development/pages/work.js",{

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
  title: 'About me',
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
  }, navData.map(function (item, index) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      key: index,
      href: item.path,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 15
      }
    }, __jsx("a", {
      style: item.linkStyle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }
    }, item.title));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=work.js.f8b9a184ddac923efc29.hot-update.js.map