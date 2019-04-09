exports.ids = [3];
exports.modules = {

/***/ "./src/client/components/property/modalGallery/desktop/ImgStyle.js":
/*!*************************************************************************!*\
  !*** ./src/client/components/property/modalGallery/desktop/ImgStyle.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ \"./src/client/components/property/modalGallery/desktop/styled.js\");\n\n\n\nvar ImageStyle = function ImageStyle(_ref) {\n  var index = _ref.index,\n      item = _ref.item,\n      onOpenModalMulti = _ref.onOpenModalMulti,\n      gallery = _ref.gallery;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__[\"ImgStyle\"], {\n    index: index,\n    src: item.gallery_image.url,\n    onClick: function onClick() {\n      return onOpenModalMulti(item.gallery_image.url, gallery[0].items);\n    },\n    key: item.gallery_image.url\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageStyle);\n\n//# sourceURL=webpack:///./src/client/components/property/modalGallery/desktop/ImgStyle.js?");

/***/ })

};;