exports.ids = [1];
exports.modules = {

/***/ "./src/client/components/dashboard/propertyCard/image/index.js":
/*!*********************************************************************!*\
  !*** ./src/client/components/dashboard/propertyCard/image/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _favouritesBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../favouritesBtn */ \"./src/client/components/dashboard/favouritesBtn/index.js\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ \"./src/client/components/dashboard/propertyCard/image/styled.js\");\n/* harmony import */ var react_lazyload_fadein__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-lazyload-fadein */ \"react-lazyload-fadein\");\n/* harmony import */ var react_lazyload_fadein__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_lazyload_fadein__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nvar CardImage = function CardImage(_ref) {\n  var data = _ref.data;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__[\"ImgStyle\"], {\n    key: data._id,\n    src: \"https://s3-eu-west-1.amazonaws.com/property-app-assets/\".concat(data.images[0])\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_favouritesBtn__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    data: data\n  }));\n};\n\nCardImage.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardImage);\n\n//# sourceURL=webpack:///./src/client/components/dashboard/propertyCard/image/index.js?");

/***/ }),

/***/ "./src/client/components/dashboard/propertyCard/image/styled.js":
/*!**********************************************************************!*\
  !*** ./src/client/components/dashboard/propertyCard/image/styled.js ***!
  \**********************************************************************/
/*! exports provided: ImgStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ImgStyle\", function() { return ImgStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  width: 340px;\\n  height: 220px; \\n\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar ImgStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img(_templateObject());\n\n//# sourceURL=webpack:///./src/client/components/dashboard/propertyCard/image/styled.js?");

/***/ })

};;