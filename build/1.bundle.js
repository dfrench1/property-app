(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/client/components/favouritesBtn/index.js":
/*!******************************************************!*\
  !*** ./src/client/components/favouritesBtn/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ \"./src/client/components/favouritesBtn/styled.js\");\n/* harmony import */ var _pages_dashboard_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/dashboard/index */ \"./src/client/pages/dashboard/index.js\");\n\n\n\n\n\nvar FavBtn = function FavBtn(_ref) {\n  var data = _ref.data;\n  var context = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_pages_dashboard_index__WEBPACK_IMPORTED_MODULE_3__[\"FavContext\"]);\n  return context.loggedIn && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"FavBtnHeart\"], {\n    onClick: function onClick(e) {\n      context.addFav({\n        type: \"favourite\",\n        fav: {\n          propID: data._id,\n          title: data.title\n        }\n      });\n      e.preventDefault();\n    }\n  });\n};\n\nFavBtn.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FavBtn);\n\n//# sourceURL=webpack:///./src/client/components/favouritesBtn/index.js?");

/***/ }),

/***/ "./src/client/components/favouritesBtn/styled.js":
/*!*******************************************************!*\
  !*** ./src/client/components/favouritesBtn/styled.js ***!
  \*******************************************************/
/*! exports provided: FavBtnHeart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FavBtnHeart\", function() { return FavBtnHeart; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var styled_icons_boxicons_solid_Heart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-icons/boxicons-solid/Heart */ \"./node_modules/styled-icons/boxicons-solid/Heart/Heart.esm.js\");\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\nwidth: 35px;\\nposition:absolute;\\ntop:10px;\\nright:10px;\\ncolor: #74a8cc;\\n:hover{\\n  color:white;\\n}\\n\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nvar FavBtnHeart = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(styled_icons_boxicons_solid_Heart__WEBPACK_IMPORTED_MODULE_1__[\"Heart\"])(_templateObject());\n\n//# sourceURL=webpack:///./src/client/components/favouritesBtn/styled.js?");

/***/ }),

/***/ "./src/client/components/propertyCard/image/index.js":
/*!***********************************************************!*\
  !*** ./src/client/components/propertyCard/image/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _favouritesBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../favouritesBtn */ \"./src/client/components/favouritesBtn/index.js\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ \"./src/client/components/propertyCard/image/styled.js\");\n/* harmony import */ var react_lazyload_fadein__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-lazyload-fadein */ \"./node_modules/react-lazyload-fadein/es/index.js\");\n\n\n\n\n\n\nvar Image = function Image(_ref) {\n  var data = _ref.data;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_lazyload_fadein__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    height: 400,\n    duration: 100\n  }, function (onload) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__[\"ImgStyle\"], {\n      key: data._id,\n      src: \"\".concat(\"https://s3-eu-west-1.amazonaws.com/airbnb-assets/\").concat(data.images[0]),\n      onLoad: onload\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_favouritesBtn__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      data: data\n    }));\n  });\n};\n\nImage.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Image);\n\n//# sourceURL=webpack:///./src/client/components/propertyCard/image/index.js?");

/***/ }),

/***/ "./src/client/components/propertyCard/image/styled.js":
/*!************************************************************!*\
  !*** ./src/client/components/propertyCard/image/styled.js ***!
  \************************************************************/
/*! exports provided: ImgStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ImgStyle\", function() { return ImgStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\nwidth: 100%;\\nheight: 100%;\\n\\n   @media (min-width: 767px) {\\n      width: 340px;\\n      height: 220px; \\n   }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar ImgStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].img(_templateObject());\n\n//# sourceURL=webpack:///./src/client/components/propertyCard/image/styled.js?");

/***/ })

}]);