/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + chunkId + ".server.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/App.js":
/*!***************************!*\
  !*** ./src/client/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shared_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/routes */ \"./src/shared/routes.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/layout */ \"./src/client/components/layout/index.js\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-transition-group */ \"react-transition-group\");\n/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _functions_VerifyToken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/VerifyToken */ \"./src/client/functions/VerifyToken.js\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styled */ \"./src/client/styled.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\nfunction App(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      _useState2 = _slicedToArray(_useState, 2),\n      user = _useState2[0],\n      setUser = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    Object(_functions_VerifyToken__WEBPACK_IMPORTED_MODULE_5__[\"verifyToken\"])(window, setUser);\n  }, []);\n  return (// <TransitionGroup component=\"main\" className=\"fade\">\n    //  <CSSTransition\n    //     key={currentKey}\n    //     classNames=\"fade\"\n    //     timeout={{enter: 1000, exit:1000}}\n    //     appear\n    //   >\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _extends({\n      user: user\n    }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_6__[\"GlobalStyle\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, _shared_routes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].map(function (_ref) {\n      var path = _ref.path,\n          exact = _ref.exact,\n          Component = _ref.component,\n          rest = _objectWithoutProperties(_ref, [\"path\", \"exact\", \"component\"]);\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n        key: path,\n        path: path,\n        exact: exact,\n        user: user,\n        render: function render(props) {\n          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, props, rest, {\n            user: user\n          }));\n        }\n      });\n    }))) // </CSSTransition>\n    // </TransitionGroup>\n\n  );\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/client/App.js?");

/***/ }),

/***/ "./src/client/components/favouritesWidget/index.js":
/*!*********************************************************!*\
  !*** ./src/client/components/favouritesWidget/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ \"./src/client/components/favouritesWidget/styled.js\");\n\n\n\n\n\nvar Favourites = function Favourites(_ref) {\n  var data = _ref.data,\n      property = _ref.property;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__[\"FavWrap\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Favourites\"), Object.entries(data).length > 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__[\"FavUl\"], null, Object.values(data).map(function (el) {\n    var matchProp = property.find(function (item) {\n      return item.title == el;\n    });\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n      to: {\n        pathname: \"/property/\".concat(el.replace(/\\s/g, '-')),\n        data: matchProp\n      }\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__[\"FavLi\"], null, el));\n  })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"no favourites added yet...\"));\n};\n\nFavourites.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Favourites);\n\n//# sourceURL=webpack:///./src/client/components/favouritesWidget/index.js?");

/***/ }),

/***/ "./src/client/components/favouritesWidget/styled.js":
/*!**********************************************************!*\
  !*** ./src/client/components/favouritesWidget/styled.js ***!
  \**********************************************************/
/*! exports provided: FavWrap, FavUl, FavLi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FavWrap\", function() { return FavWrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FavUl\", function() { return FavUl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FavLi\", function() { return FavLi; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n    padding:0.8em;\\n    border-top: 1px solid;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n    list-style-type: none;\\n    padding-left:0;\\n    /* background: lightblue; */\\n    color:black;\\n    border-radius: 5px;\\n\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n    margin-top:1em;\\n    @media (min-width: 767px) {\\n        width:350px;\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar FavWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject());\nvar FavUl = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul(_templateObject2());\nvar FavLi = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li(_templateObject3());\n\n//# sourceURL=webpack:///./src/client/components/favouritesWidget/styled.js?");

/***/ }),

/***/ "./src/client/components/filters/index.js":
/*!************************************************!*\
  !*** ./src/client/components/filters/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ \"./src/client/components/filters/styled.js\");\n/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-slider */ \"rc-slider\");\n/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rc_slider__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction SideBar(_ref) {\n  var guestMethod = _ref.guestMethod,\n      guests = _ref.guests,\n      priceMethod = _ref.priceMethod,\n      price = _ref.price;\n  var marks = {\n    0: \"£10\",\n    500: \"£500\"\n  };\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"SidebarWrap\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"PriceWrap\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Price\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rc_slider__WEBPACK_IMPORTED_MODULE_3__[\"Range\"], {\n    marks: marks,\n    max: 500,\n    defaultValue: [10, 150],\n    onChange: function onChange(val) {\n      priceMethod({\n        type: \"price\",\n        price: val\n      });\n    }\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"GuestWrap\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Guests\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"FilterButton\"], {\n    onClick: function onClick() {\n      guestMethod({\n        type: \"guests\",\n        count: guests - 1\n      });\n    },\n    disabled: guests == 1 ? true : false\n  }, '-'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"GuestCount\"], null, guests), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"FilterButton\"], {\n    onClick: function onClick() {\n      guestMethod({\n        type: \"guests\",\n        count: guests + 1\n      });\n    }\n  }, '+')));\n}\n\nSideBar.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideBar);\n\n//# sourceURL=webpack:///./src/client/components/filters/index.js?");

/***/ }),

/***/ "./src/client/components/filters/styled.js":
/*!*************************************************!*\
  !*** ./src/client/components/filters/styled.js ***!
  \*************************************************/
/*! exports provided: SidebarWrap, GuestCount, FilterButton, PriceWrap, GuestWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SidebarWrap\", function() { return SidebarWrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GuestCount\", function() { return GuestCount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FilterButton\", function() { return FilterButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PriceWrap\", function() { return PriceWrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GuestWrap\", function() { return GuestWrap; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject5() {\n  var data = _taggedTemplateLiteral([\"\\n  margin-top: 3em;\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = _taggedTemplateLiteral([\"\\n  margin-top: 1.5em;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n  margin: 0.5em 0em 0.5em 0;\\n  padding: 0.2em;\\n  color:white;\\n  border-radius: 5px;\\n  width: 30px;\\n  height: 30px;\\n  :hover {\\n    background: #1890ff;\\n    color: white;\\n  }\\n\\n  :focus {\\n    outline: none;\\n  }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n  padding: 0 0.5em 0 0.5em;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  @media (min-width: 767px) {\\n    width: 350px;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar SidebarWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject());\nvar GuestCount = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span(_templateObject2());\nvar FilterButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button(_templateObject3());\nvar PriceWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject4());\nvar GuestWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject5());\n\n//# sourceURL=webpack:///./src/client/components/filters/styled.js?");

/***/ }),

/***/ "./src/client/components/layout/index.js":
/*!***********************************************!*\
  !*** ./src/client/components/layout/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _nav_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav/index */ \"./src/client/components/nav/index.js\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ \"./src/client/components/layout/styled.js\");\n\n\n\n\n\nvar Layout = function Layout(_ref) {\n  var user = _ref.user,\n      children = _ref.children;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nav_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    user: user\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__[\"ContainerStyle\"], null, children));\n};\n\nLayout.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\n//# sourceURL=webpack:///./src/client/components/layout/index.js?");

/***/ }),

/***/ "./src/client/components/layout/styled.js":
/*!************************************************!*\
  !*** ./src/client/components/layout/styled.js ***!
  \************************************************/
/*! exports provided: ContainerStyle, ContentWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContainerStyle\", function() { return ContainerStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContentWrap\", function() { return ContentWrap; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n    display:flex;\\n    flex-wrap:wrap;\\n    @media (min-width: 767px) {\\n        display:inline-flex;\\n        flex-wrap:nowrap;\\n    }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n color: rgb(147, 146, 146);\\n padding: 1em 2em 2em 2em;\\n font-family: sans-serif;\\n font-size: 14px;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar ContainerStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject());\nvar ContentWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject2());\n\n//# sourceURL=webpack:///./src/client/components/layout/styled.js?");

/***/ }),

/***/ "./src/client/components/loading/Loading.js":
/*!**************************************************!*\
  !*** ./src/client/components/loading/Loading.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ \"./src/client/components/loading/styled.js\");\n/* harmony import */ var styled_spinkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-spinkit */ \"styled-spinkit\");\n/* harmony import */ var styled_spinkit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_spinkit__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar Loading = function Loading(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"LoadingContainer\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_spinkit__WEBPACK_IMPORTED_MODULE_3__[\"FoldingCube\"], {\n    color: '#ADD8E6',\n    size: 80\n  }));\n};\n\nLoading.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Loading);\n\n//# sourceURL=webpack:///./src/client/components/loading/Loading.js?");

/***/ }),

/***/ "./src/client/components/loading/styled.js":
/*!*************************************************!*\
  !*** ./src/client/components/loading/styled.js ***!
  \*************************************************/
/*! exports provided: LoadingContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoadingContainer\", function() { return LoadingContainer; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n   position: relative;\\n   width: 440px;\\n   height: 290px;\\n   border: grey solid 1px;\\n\\n   @media (min-width: 767px) {\\n        width:340px;\\n        height:220px;\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar LoadingContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject());\n\n//# sourceURL=webpack:///./src/client/components/loading/styled.js?");

/***/ }),

/***/ "./src/client/components/loginWidget/index.js":
/*!****************************************************!*\
  !*** ./src/client/components/loginWidget/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _functions_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../functions/Login */ \"./src/client/functions/Login.js\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ \"./src/client/components/loginWidget/styled.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nfunction Login(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      _useState2 = _slicedToArray(_useState, 2),\n      data = _useState2[0],\n      setData = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      _useState4 = _slicedToArray(_useState3, 2),\n      flash = _useState4[0],\n      setFlash = _useState4[1];\n\n  var handleSubmit = function handleSubmit(e) {\n    Object(_functions_Login__WEBPACK_IMPORTED_MODULE_2__[\"fetchLogin\"])(e, data, window, props, setFlash);\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__[\"FormWrap\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Login\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__[\"FormStyle\"], {\n    onSubmit: handleSubmit\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    placeholder: \"email\",\n    onChange: function onChange(e) {\n      setData(_objectSpread({}, data, {\n        email: e.target.value\n      }));\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    placeholder: \"password\",\n    onChange: function onChange(e) {\n      setData(_objectSpread({}, data, {\n        password: e.target.value\n      }));\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    id: \"submit\"\n  }, \"submit\"), flash && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, flash.map(function (el) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, el.message);\n  }))));\n}\n\n;\nLogin.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\n//# sourceURL=webpack:///./src/client/components/loginWidget/index.js?");

/***/ }),

/***/ "./src/client/components/loginWidget/styled.js":
/*!*****************************************************!*\
  !*** ./src/client/components/loginWidget/styled.js ***!
  \*****************************************************/
/*! exports provided: FormStyle, FormWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FormStyle\", function() { return FormStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FormWrap\", function() { return FormWrap; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n    text-align:center;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\ninput {\\n    display:block;\\n    margin:auto auto 1em auto;\\n    width:300px;\\n    /* padding:0.5em;  */\\n}\\nbutton {\\n    width:312px;\\n    display:block;\\n    margin:auto auto 1em auto;\\n}\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar FormStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form(_templateObject());\nvar FormWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject2());\n\n//# sourceURL=webpack:///./src/client/components/loginWidget/styled.js?");

/***/ }),

/***/ "./src/client/components/modalGallery/desktop/index.js":
/*!*************************************************************!*\
  !*** ./src/client/components/modalGallery/desktop/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ \"./src/client/components/modalGallery/desktop/styled.js\");\n\n\n\n\nvar DesktopImg = function DesktopImg(_ref) {\n  var gallery = _ref.gallery,\n      onOpenModalMulti = _ref.onOpenModalMulti;\n  var galleryLength = gallery[0].items.length;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"DesktopWrap\"], {\n    length: galleryLength\n  }, gallery[0].items.map(function (item, index) {\n    return index == 1 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"SmallWrap\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"ImgStyle\"], {\n      index: index,\n      src: item.gallery_image.url,\n      onClick: function onClick() {\n        return onOpenModalMulti(item.gallery_image.url, gallery[0].items);\n      },\n      key: item.gallery_image.url\n    })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"ImgStyle\"], {\n      index: index,\n      src: item.gallery_image.url,\n      onClick: function onClick() {\n        return onOpenModalMulti(item.gallery_image.url, gallery[0].items);\n      },\n      key: item.gallery_image.url\n    });\n  }));\n};\n\nDesktopImg.propTypes = {\n  gallery: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,\n  onOpenModalMulti: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (DesktopImg);\n\n//# sourceURL=webpack:///./src/client/components/modalGallery/desktop/index.js?");

/***/ }),

/***/ "./src/client/components/modalGallery/desktop/styled.js":
/*!**************************************************************!*\
  !*** ./src/client/components/modalGallery/desktop/styled.js ***!
  \**************************************************************/
/*! exports provided: SmallWrap, DesktopWrap, ImgStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SmallWrap\", function() { return SmallWrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DesktopWrap\", function() { return DesktopWrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ImgStyle\", function() { return ImgStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n    width: \", \";\\n    height: \", \";\\n    padding-bottom: \", \";\\n\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-between;\\n  flex-direction: row;\\n  max-width: 700px;\\n\\n  @media (min-width: 767px) {\\n      margin: auto;\\n  }\\n\\n  @media (min-width: 1100px) {\\n        display:inline-flex;\\n        flex-wrap: wrap;\\n  }\\n    \\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n\\n@media (min-width: 767px) {\\n    display:inline-block;\\n    width:50%;\\n    img {\\n     width:100%;\\n    }\\n}\\n@media (min-width: 1100px) {\\n\\n}\\n\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar SmallWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject());\nvar DesktopWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject2());\nvar ImgStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img(_templateObject3(), function (props) {\n  return props.index == 0 ? '100%' : '49%';\n}, function (props) {\n  return props.index == 0 ? '50%' : '230px';\n}, function (props) {\n  return props.index == 0 ? '0.5em' : '0';\n});\n\n//# sourceURL=webpack:///./src/client/components/modalGallery/desktop/styled.js?");

/***/ }),

/***/ "./src/client/components/modalGallery/functions/BackMethod.js":
/*!********************************************************************!*\
  !*** ./src/client/components/modalGallery/functions/BackMethod.js ***!
  \********************************************************************/
/*! exports provided: BackMethod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BackMethod\", function() { return BackMethod; });\nfunction BackMethod(img, imgArray) {\n  var getCurrentImg = imgArray.filter(function (el) {\n    return el.url === img;\n  });\n  var prevImg, newImg;\n\n  if (getCurrentImg[0].id === 0) {\n    prevImg = imgArray.length - 1;\n  } else {\n    prevImg = getCurrentImg[0].id - 1;\n  }\n\n  return newImg = imgArray[prevImg];\n}\n\n//# sourceURL=webpack:///./src/client/components/modalGallery/functions/BackMethod.js?");

/***/ }),

/***/ "./src/client/components/modalGallery/functions/ForwardMethod.js":
/*!***********************************************************************!*\
  !*** ./src/client/components/modalGallery/functions/ForwardMethod.js ***!
  \***********************************************************************/
/*! exports provided: ForwardMethod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ForwardMethod\", function() { return ForwardMethod; });\nfunction ForwardMethod(img, imgArray) {\n  var getCurrentImg = imgArray.filter(function (el) {\n    return el.url === img;\n  });\n  var nextImg, newImg;\n\n  if (getCurrentImg[0].id === imgArray.length - 1) {\n    nextImg = 0;\n  } else {\n    nextImg = getCurrentImg[0].id + 1;\n  }\n\n  return newImg = imgArray[nextImg];\n}\n\n//# sourceURL=webpack:///./src/client/components/modalGallery/functions/ForwardMethod.js?");

/***/ }),

/***/ "./src/client/components/modalGallery/icons/Arrow.js":
/*!***********************************************************!*\
  !*** ./src/client/components/modalGallery/icons/Arrow.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ \"./src/client/components/modalGallery/icons/styled.js\");\n/* harmony import */ var styled_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-icons/material/KeyboardArrowLeft */ \"styled-icons/material/KeyboardArrowLeft\");\n/* harmony import */ var styled_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-icons/material/KeyboardArrowRight */ \"styled-icons/material/KeyboardArrowRight\");\n/* harmony import */ var styled_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nvar Arrow = function Arrow(_ref) {\n  var BtnMethod = _ref.BtnMethod,\n      img = _ref.img,\n      imgArray = _ref.imgArray,\n      left = _ref.left;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"IconWrap\"], {\n    left: left,\n    onClick: function onClick() {\n      return BtnMethod(img, imgArray);\n    }\n  }, left ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_3__[\"KeyboardArrowLeft\"], {\n    onClick: function onClick() {\n      return BtnMethod(img, imgArray);\n    },\n    color: \"white\",\n    size: \"70\"\n  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_4__[\"KeyboardArrowRight\"], {\n    onClick: function onClick() {\n      return BtnMethod(img, imgArray);\n    },\n    color: \"white\",\n    size: \"70\"\n  }));\n};\n\nArrow.propTypes = {\n  BtnMethod: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  img: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  imgArray: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,\n  left: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Arrow);\n\n//# sourceURL=webpack:///./src/client/components/modalGallery/icons/Arrow.js?");

/***/ }),

/***/ "./src/client/components/modalGallery/icons/styled.js":
/*!************************************************************!*\
  !*** ./src/client/components/modalGallery/icons/styled.js ***!
  \************************************************************/
/*! exports provided: IconWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IconWrap\", function() { return IconWrap; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n      right: 0 !important;\\n    \"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n      left: 0 !important;\\n    \"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  height: 100%;\\n  position: absolute;\\n  bottom: 0;\\n  top:35%;\\n  cursor: pointer;\\n  \", \";\\n  \", \";\\n    @media (min-width: 767px) {\\n      top:40%;\\n    }\\n\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar IconWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject(), function (props) {\n  return props.left && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])(_templateObject2());\n}, function (props) {\n  return !props.left && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])(_templateObject3());\n});\n\n//# sourceURL=webpack:///./src/client/components/modalGallery/icons/styled.js?");

/***/ }),

/***/ "./src/client/components/modalGallery/index.js":
/*!*****************************************************!*\
  !*** ./src/client/components/modalGallery/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _functions_BackMethod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/BackMethod */ \"./src/client/components/modalGallery/functions/BackMethod.js\");\n/* harmony import */ var _functions_ForwardMethod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/ForwardMethod */ \"./src/client/components/modalGallery/functions/ForwardMethod.js\");\n/* harmony import */ var _desktop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./desktop */ \"./src/client/components/modalGallery/desktop/index.js\");\n/* harmony import */ var _mobile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mobile */ \"./src/client/components/modalGallery/mobile/index.js\");\n/* harmony import */ var _modal_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal/index */ \"./src/client/components/modalGallery/modal/index.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\nfunction Gallery(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      modal = _useState2[0],\n      setModal = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      _useState4 = _slicedToArray(_useState3, 2),\n      img = _useState4[0],\n      setImg = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState6 = _slicedToArray(_useState5, 2),\n      imgArray = _useState6[0],\n      setImgArray = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      _useState8 = _slicedToArray(_useState7, 2),\n      desktop = _useState8[0],\n      setDesktop = _useState8[1];\n\n  var windowGlobal = typeof window !== 'undefined' && window;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    resize();\n    windowGlobal.addEventListener('resize', resize);\n    return function cleanup() {\n      windowGlobal.removeEventListener('resize', resize);\n    };\n  });\n\n  var resize = function resize() {\n    if (windowGlobal.innerWidth > 767) {\n      setDesktop(true);\n    } else {\n      setDesktop(false);\n    }\n  };\n\n  var onOpenModal = function onOpenModal(img) {\n    setModal(true);\n    setImg(img);\n  };\n\n  var onOpenModalMulti = function onOpenModalMulti(img, imgArray) {\n    var images = imgArray.map(function (item, index) {\n      return _objectSpread({\n        id: index,\n        url: item.gallery_image.url\n      }, item);\n    });\n    setModal(true);\n    setImg(img);\n    setImgArray(images);\n  };\n\n  var onCloseModal = function onCloseModal() {\n    setModal(false);\n  };\n\n  var onBackBtn = function onBackBtn(img, imgArray) {\n    var newImg = Object(_functions_BackMethod__WEBPACK_IMPORTED_MODULE_2__[\"BackMethod\"])(img, imgArray);\n    setImg(newImg.url);\n  };\n\n  var onForwardBtn = function onForwardBtn(img, imgArray) {\n    var newImg = Object(_functions_ForwardMethod__WEBPACK_IMPORTED_MODULE_3__[\"ForwardMethod\"])(img, imgArray);\n    setImg(newImg.url);\n  };\n\n  var modalSize, gallery;\n  windowGlobal.innerWidth > 767 ? modalSize = ['700px', '500px'] : modalSize = ['320px', '250px'];\n  desktop ? gallery = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_desktop__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    gallery: props.gallery,\n    onOpenModalMulti: onOpenModalMulti\n  }) : gallery = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mobile__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    gallery: props.gallery,\n    onOpenModalMulti: onOpenModalMulti\n  });\n  return props.gallery[0].items.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, gallery, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modal_index__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    open: modal,\n    onCloseModal: onCloseModal,\n    imgArray: imgArray,\n    img: img,\n    onBackBtn: onBackBtn,\n    onForwardBtn: onForwardBtn\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gallery);\nGallery.propTypes = {\n  gallery: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,\n  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object\n};\n\n//# sourceURL=webpack:///./src/client/components/modalGallery/index.js?");

/***/ }),

/***/ "./src/client/components/modalGallery/mobile/ExtraImgIcon.js":
/*!*******************************************************************!*\
  !*** ./src/client/components/modalGallery/mobile/ExtraImgIcon.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ \"./src/client/components/modalGallery/mobile/styled.js\");\n\n\n\n\nvar ExtraImgIcon = function ExtraImgIcon(_ref) {\n  var method = _ref.method,\n      count = _ref.count;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"ExtraImgStyle\"], {\n    onClick: function onClick() {\n      return method();\n    }\n  }, \"+\", count);\n};\n\nExtraImgIcon.propTypes = {\n  method: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExtraImgIcon);\n\n//# sourceURL=webpack:///./src/client/components/modalGallery/mobile/ExtraImgIcon.js?");

/***/ }),

/***/ "./src/client/components/modalGallery/mobile/Image.js":
/*!************************************************************!*\
  !*** ./src/client/components/modalGallery/mobile/Image.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Image = function Image(_ref) {\n  var item = _ref.item,\n      method = _ref.method;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: item.gallery_image.url,\n    style: {\n      cursor: \"pointer\"\n    },\n    width: \"100%\",\n    height: \"310px\",\n    onClick: function onClick() {\n      return method();\n    }\n  });\n};\n\nImage.propTypes = {\n  item: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,\n  method: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Image);\n\n//# sourceURL=webpack:///./src/client/components/modalGallery/mobile/Image.js?");

/***/ }),

/***/ "./src/client/components/modalGallery/mobile/index.js":
/*!************************************************************!*\
  !*** ./src/client/components/modalGallery/mobile/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ \"./src/client/components/modalGallery/mobile/styled.js\");\n/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Image */ \"./src/client/components/modalGallery/mobile/Image.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ExtraImgIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ExtraImgIcon */ \"./src/client/components/modalGallery/mobile/ExtraImgIcon.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nvar MobileImg = function MobileImg(_ref) {\n  var onOpenModalMulti = _ref.onOpenModalMulti,\n      gallery = _ref.gallery;\n  var galleryLength = gallery[0].items.length;\n  var ExtraImgCount = galleryLength - 1;\n  var sliceGallery = gallery[0].items.slice(0, 1);\n  var sliceArray = [];\n  sliceGallery.map(function (el, index) {\n    return sliceArray.push(_objectSpread({\n      id: index\n    }, el));\n  });\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__[\"MobileWrap\"], null, sliceArray.map(function (item) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n      style: {\n        position: item.id === sliceArray.length - 1 && ExtraImgCount > 0 ? \"relative\" : 'none',\n        paddingBottom: \"1em\"\n      },\n      key: item.id\n    }, item.id === sliceArray.length - 1 && ExtraImgCount > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ExtraImgIcon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      method: function method() {\n        return onOpenModalMulti(item.gallery_image.url, gallery[0].items);\n      },\n      count: ExtraImgCount\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      item: item,\n      method: function method() {\n        return onOpenModalMulti(item.gallery_image.url, gallery[0].items);\n      }\n    }));\n  }));\n};\n\nMobileImg.propTypes = {\n  gallery: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,\n  onOpenModalMulti: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (MobileImg);\n\n//# sourceURL=webpack:///./src/client/components/modalGallery/mobile/index.js?");

/***/ }),

/***/ "./src/client/components/modalGallery/mobile/styled.js":
/*!*************************************************************!*\
  !*** ./src/client/components/modalGallery/mobile/styled.js ***!
  \*************************************************************/
/*! exports provided: MobileWrap, ExtraImgStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MobileWrap\", function() { return MobileWrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ExtraImgStyle\", function() { return ExtraImgStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n  position: absolute;\\n  right: 4%;\\n  letter-spacing: 2px;\\n  bottom: 20px;\\n  cursor: pointer;\\n  color: white;\\n  z-index: 100;\\n  width: 32px;\\n  height: 30px;\\n  font-size: 18px;\\n  background: black;\\n  opacity: 0.9;\\n  border-radius: 5px;\\n  text-align: center;\\n  font-family: Raleway, 'sans-serif';\\n  @media screen and (device-aspect-ratio: 40/71) {\\n    bottom: 8%;\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  img {\\n    width: 100%;\\n    height: 100%;\\n    cursor: pointer;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar MobileWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject());\nvar ExtraImgStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject2());\n\n//# sourceURL=webpack:///./src/client/components/modalGallery/mobile/styled.js?");

/***/ }),

/***/ "./src/client/components/modalGallery/modal/index.js":
/*!***********************************************************!*\
  !*** ./src/client/components/modalGallery/modal/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_responsive_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive-modal */ \"react-responsive-modal\");\n/* harmony import */ var react_responsive_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive_modal__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ \"./src/client/components/modalGallery/modal/styled.js\");\n/* harmony import */ var _icons_Arrow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/Arrow */ \"./src/client/components/modalGallery/icons/Arrow.js\");\n\n\n\n\n\n\nvar GalleryModal = function GalleryModal(_ref) {\n  var open = _ref.open,\n      onCloseModal = _ref.onCloseModal,\n      imgArray = _ref.imgArray,\n      img = _ref.img,\n      onBackBtn = _ref.onBackBtn,\n      onForwardBtn = _ref.onForwardBtn;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_responsive_modal__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    open: open,\n    onClose: onCloseModal,\n    center: true,\n    showCloseIcon: false,\n    closeIconSize: 20,\n    styles: {\n      modal: {\n        padding: '0.3em'\n      }\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__[\"ModalWrap\"], null, imgArray.length > 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_Arrow__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    img: img,\n    imgArray: imgArray,\n    BtnMethod: onBackBtn,\n    left: true\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__[\"ModalImageStyle\"], {\n    src: img,\n    width: '100%',\n    height: '100%',\n    style: {\n      maxWidth: '846px',\n      maxHeight: '564px'\n    }\n  }), imgArray.length > 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_Arrow__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    img: img,\n    imgArray: imgArray,\n    BtnMethod: onForwardBtn,\n    left: false\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__[\"CloseIcon\"], {\n    onClick: onCloseModal\n  })));\n};\n\nGalleryModal.propTypes = {\n  img: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  imgArray: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,\n  onBackBtn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  onCloseModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  onForwardBtn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  open: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (GalleryModal);\n\n//# sourceURL=webpack:///./src/client/components/modalGallery/modal/index.js?");

/***/ }),

/***/ "./src/client/components/modalGallery/modal/styled.js":
/*!************************************************************!*\
  !*** ./src/client/components/modalGallery/modal/styled.js ***!
  \************************************************************/
/*! exports provided: CloseIcon, ModalWrap, ModalImageStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CloseIcon\", function() { return CloseIcon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ModalWrap\", function() { return ModalWrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ModalImageStyle\", function() { return ModalImageStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_icons_material_Close__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-icons/material/Close */ \"styled-icons/material/Close\");\n/* harmony import */ var styled_icons_material_Close__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_icons_material_Close__WEBPACK_IMPORTED_MODULE_1__);\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n  cursor:pointer;\\n  -webkit-touch-callout: none;\\n  -webkit-user-select: none;\\n  -khtml-user-select: none;\\n  -moz-user-select: none;\\n  -ms-user-select: none;\\n  user-select: none;\\n\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n   min-width:250px;\\n   height: 240px;\\n   cursor: pointer;\\n  @media (min-width: 567px) {\\n    height:400px;\\n  }\\n  @media (min-width: 767px) {\\n    height:500px;\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\nz-index:20;\\nposition:absolute;\\ntop:10px;\\nright:10px;\\nwidth:20px;\\ncolor:white;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nvar CloseIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(styled_icons_material_Close__WEBPACK_IMPORTED_MODULE_1__[\"Close\"])(_templateObject());\nvar ModalWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject2());\nvar ModalImageStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img(_templateObject3());\n\n//# sourceURL=webpack:///./src/client/components/modalGallery/modal/styled.js?");

/***/ }),

/***/ "./src/client/components/nav/HomeLink.js":
/*!***********************************************!*\
  !*** ./src/client/components/nav/HomeLink.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_icons_fa_solid_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-icons/fa-solid/Home */ \"styled-icons/fa-solid/Home\");\n/* harmony import */ var styled_icons_fa_solid_Home__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_icons_fa_solid_Home__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar HomeLink = function HomeLink() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    to: \"/\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_icons_fa_solid_Home__WEBPACK_IMPORTED_MODULE_1__[\"Home\"], {\n    size: \"30\",\n    color: \"green\"\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeLink);\n\n//# sourceURL=webpack:///./src/client/components/nav/HomeLink.js?");

/***/ }),

/***/ "./src/client/components/nav/LoginLink.js":
/*!************************************************!*\
  !*** ./src/client/components/nav/LoginLink.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar LoginLink = function LoginLink(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    style: {\n      color: 'grey'\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    to: \"/login\"\n  }, \"Login\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"or\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    to: \"/register\"\n  }, \"Register\"));\n};\n\nLoginLink.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginLink);\n\n//# sourceURL=webpack:///./src/client/components/nav/LoginLink.js?");

/***/ }),

/***/ "./src/client/components/nav/WelcomeUser.js":
/*!**************************************************!*\
  !*** ./src/client/components/nav/WelcomeUser.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Welcome = function Welcome() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    style: {\n      color: \"green\",\n      marginRight: \"1em\"\n    }\n  }, \"Welcome \", user.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    style: {\n      color: \"black\"\n    },\n    onClick: function onClick() {\n      window.sessionStorage.removeItem(\"jwtToken\");\n      setUser(false);\n    },\n    to: \"/\"\n  }, \"Logout\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Welcome);\n\n//# sourceURL=webpack:///./src/client/components/nav/WelcomeUser.js?");

/***/ }),

/***/ "./src/client/components/nav/index.js":
/*!********************************************!*\
  !*** ./src/client/components/nav/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ \"./src/client/components/nav/styled.js\");\n/* harmony import */ var _HomeLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HomeLink */ \"./src/client/components/nav/HomeLink.js\");\n/* harmony import */ var _WelcomeUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WelcomeUser */ \"./src/client/components/nav/WelcomeUser.js\");\n/* harmony import */ var _LoginLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoginLink */ \"./src/client/components/nav/LoginLink.js\");\n\n\n\n\n\n\n\nvar Nav = function Nav(_ref) {\n  var user = _ref.user;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"NavStyle\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HomeLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), user ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WelcomeUser__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginLink__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null));\n};\n\nNav.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\n\n//# sourceURL=webpack:///./src/client/components/nav/index.js?");

/***/ }),

/***/ "./src/client/components/nav/styled.js":
/*!*********************************************!*\
  !*** ./src/client/components/nav/styled.js ***!
  \*********************************************/
/*! exports provided: NavStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavStyle\", function() { return NavStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  background: #AAE2FB;\\n  padding: 0.5em 1em 0.5em 1.8em;\\n  * {\\n    padding-right: 0.5em;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar NavStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.nav(_templateObject());\n\n//# sourceURL=webpack:///./src/client/components/nav/styled.js?");

/***/ }),

/***/ "./src/client/components/propertyCard/fullCard/index.js":
/*!**************************************************************!*\
  !*** ./src/client/components/propertyCard/fullCard/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loadable */ \"react-loadable\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../title */ \"./src/client/components/propertyCard/title/index.js\");\n/* harmony import */ var _rooms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rooms */ \"./src/client/components/propertyCard/rooms/index.js\");\n/* harmony import */ var _guests__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../guests */ \"./src/client/components/propertyCard/guests/index.js\");\n/* harmony import */ var _price__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../price */ \"./src/client/components/propertyCard/price/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styled */ \"./src/client/components/propertyCard/fullCard/styled.js\");\n/* harmony import */ var _loading_Loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../loading/Loading */ \"./src/client/components/loading/Loading.js\");\n\n\n\n\n\n\n\n\n\n\nvar CardImage = react_loadable__WEBPACK_IMPORTED_MODULE_2___default()({\n  loader: function loader() {\n    return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../image */ \"./src/client/components/propertyCard/image/index.js\"));\n  },\n  loading: function loading() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_loading_Loading__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null);\n  }\n});\n\nfunction Card(_ref) {\n  var el = _ref.el,\n      searchVal = _ref.searchVal;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__[\"Link\"], {\n    to: {\n      pathname: \"/property/\".concat(el.title.replace(/\\s/g, '-')),\n      data: el\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_8__[\"CardWrap\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CardImage, {\n    data: el\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_title__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    data: el,\n    highlight: el.title.toLowerCase().includes(searchVal.value.toLowerCase()) && searchVal.value !== '' ? true : false\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rooms__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    data: el\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_guests__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    data: el\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_price__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    data: el\n  })));\n}\n\n;\nCard.propTypes = {\n  el: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\n//# sourceURL=webpack:///./src/client/components/propertyCard/fullCard/index.js?");

/***/ }),

/***/ "./src/client/components/propertyCard/fullCard/styled.js":
/*!***************************************************************!*\
  !*** ./src/client/components/propertyCard/fullCard/styled.js ***!
  \***************************************************************/
/*! exports provided: CardWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CardWrap\", function() { return CardWrap; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n    span, div {\\n        color:black;\\n    }\\n    margin: 1em 1em 1em 0;\\n    display: flex;\\n    flex-direction: column;\\n    flex-wrap: wrap;\\n    position: relative;\\n    @media (min-width: 767px) {\\n        display:inline-flex;\\n        width:340px;\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar CardWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject());\n\n//# sourceURL=webpack:///./src/client/components/propertyCard/fullCard/styled.js?");

/***/ }),

/***/ "./src/client/components/propertyCard/guests/index.js":
/*!************************************************************!*\
  !*** ./src/client/components/propertyCard/guests/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ \"./src/client/components/propertyCard/guests/styled.js\");\n\n\n\n\nvar Guests = function Guests(_ref) {\n  var data = _ref.data;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"GuestStyle\"], null, data.guests, \" guests\");\n};\n\nGuests.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Guests);\n\n//# sourceURL=webpack:///./src/client/components/propertyCard/guests/index.js?");

/***/ }),

/***/ "./src/client/components/propertyCard/guests/styled.js":
/*!*************************************************************!*\
  !*** ./src/client/components/propertyCard/guests/styled.js ***!
  \*************************************************************/
/*! exports provided: GuestStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GuestStyle\", function() { return GuestStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar GuestStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span(_templateObject());\n\n//# sourceURL=webpack:///./src/client/components/propertyCard/guests/styled.js?");

/***/ }),

/***/ "./src/client/components/propertyCard/index.js":
/*!*****************************************************!*\
  !*** ./src/client/components/propertyCard/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fullCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fullCard */ \"./src/client/components/propertyCard/fullCard/index.js\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ \"./src/client/components/propertyCard/styled.js\");\n\n\n\n\n\nfunction Card(_ref) {\n  var data = _ref.data,\n      searchVal = _ref.searchVal,\n      guests = _ref.guests,\n      slider = _ref.slider;\n  var cards = [];\n\n  if (searchVal.value == '') {\n    data.map(function (el) {\n      el.guests >= guests && el.price >= slider.price[0] && el.price <= slider.price[1] ? cards.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fullCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        el: el,\n        searchVal: searchVal\n      })) : null;\n    });\n  } else {\n    data.map(function (el) {\n      el.title.toLowerCase().includes(searchVal.value.toLowerCase()) && el.guests >= guests && el.price >= slider.price[0] && el.price <= slider.price[1] ? cards.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fullCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        el: el,\n        searchVal: searchVal\n      })) : null;\n    });\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__[\"CardWrap\"], null, cards.length ? cards : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__[\"NoResults\"], null, \"No results, try adjusting your search criteria\"));\n}\n\n;\nCard.propTypes = {\n  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\n//# sourceURL=webpack:///./src/client/components/propertyCard/index.js?");

/***/ }),

/***/ "./src/client/components/propertyCard/price/index.js":
/*!***********************************************************!*\
  !*** ./src/client/components/propertyCard/price/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ \"./src/client/components/propertyCard/price/styled.js\");\n\n\n\n\nvar Price = function Price(_ref) {\n  var data = _ref.data;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"PriceStyle\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, '£', data.price, ' per night'));\n};\n\nPrice.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Price);\n\n//# sourceURL=webpack:///./src/client/components/propertyCard/price/index.js?");

/***/ }),

/***/ "./src/client/components/propertyCard/price/styled.js":
/*!************************************************************!*\
  !*** ./src/client/components/propertyCard/price/styled.js ***!
  \************************************************************/
/*! exports provided: PriceStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PriceStyle\", function() { return PriceStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n    padding-top:0.3em;\\n    div {\\n        font-weight: 600;\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar PriceStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject());\n\n//# sourceURL=webpack:///./src/client/components/propertyCard/price/styled.js?");

/***/ }),

/***/ "./src/client/components/propertyCard/rooms/index.js":
/*!***********************************************************!*\
  !*** ./src/client/components/propertyCard/rooms/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ \"./src/client/components/propertyCard/rooms/styled.js\");\n\n\n\n\nvar Rooms = function Rooms(_ref) {\n  var data = _ref.data;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"RoomStyle\"], null, data.rooms, ' - ');\n};\n\nRooms.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Rooms);\n\n//# sourceURL=webpack:///./src/client/components/propertyCard/rooms/index.js?");

/***/ }),

/***/ "./src/client/components/propertyCard/rooms/styled.js":
/*!************************************************************!*\
  !*** ./src/client/components/propertyCard/rooms/styled.js ***!
  \************************************************************/
/*! exports provided: RoomStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RoomStyle\", function() { return RoomStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar RoomStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span(_templateObject());\n\n//# sourceURL=webpack:///./src/client/components/propertyCard/rooms/styled.js?");

/***/ }),

/***/ "./src/client/components/propertyCard/styled.js":
/*!******************************************************!*\
  !*** ./src/client/components/propertyCard/styled.js ***!
  \******************************************************/
/*! exports provided: CardWrap, NoResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CardWrap\", function() { return CardWrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NoResults\", function() { return NoResults; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n    margin: 1em 0 0 0;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\norder: 3;\\n    @media (min-width: 767px) {\\n        /* margin: 0.5em 0 0 50px; */\\n        display: inline-flex;\\n        flex-wrap:wrap;\\n        justify-content: center;\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar CardWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject());\nvar NoResults = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3(_templateObject2());\n\n//# sourceURL=webpack:///./src/client/components/propertyCard/styled.js?");

/***/ }),

/***/ "./src/client/components/propertyCard/title/index.js":
/*!***********************************************************!*\
  !*** ./src/client/components/propertyCard/title/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ \"./src/client/components/propertyCard/title/styled.js\");\n\n\n\n\nvar Title = function Title(_ref) {\n  var data = _ref.data,\n      highlight = _ref.highlight;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"TitleStyle\"], {\n    key: data._id,\n    highlight: highlight\n  }, data.title);\n};\n\nTitle.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Title);\n\n//# sourceURL=webpack:///./src/client/components/propertyCard/title/index.js?");

/***/ }),

/***/ "./src/client/components/propertyCard/title/styled.js":
/*!************************************************************!*\
  !*** ./src/client/components/propertyCard/title/styled.js ***!
  \************************************************************/
/*! exports provided: TitleStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TitleStyle\", function() { return TitleStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n    font-weight: 500;\\n    font-size:16px;\\n    margin: 0.3em 0 0.2em 0;\\n    color: black;\\n    /* background: \", \"; */\\n    \\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar TitleStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h4(_templateObject(), function (props) {\n  return props.highlight ? '#69C0FD' : 'white';\n});\n\n//# sourceURL=webpack:///./src/client/components/propertyCard/title/styled.js?");

/***/ }),

/***/ "./src/client/components/propertyHome/index.js":
/*!*****************************************************!*\
  !*** ./src/client/components/propertyHome/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_propertyCard_rooms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/propertyCard/rooms */ \"./src/client/components/propertyCard/rooms/index.js\");\n/* harmony import */ var _components_propertyCard_guests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/propertyCard/guests */ \"./src/client/components/propertyCard/guests/index.js\");\n/* harmony import */ var _components_propertyCard_price__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/propertyCard/price */ \"./src/client/components/propertyCard/price/index.js\");\n/* harmony import */ var _components_modalGallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/modalGallery */ \"./src/client/components/modalGallery/index.js\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styled */ \"./src/client/components/propertyHome/styled.js\");\n\n\n\n\n\n\n\n\nvar Property = function Property(_ref) {\n  var data = _ref.data;\n  var arr = [];\n  var newArray = Object.values(data.images).map(function (item) {\n    return arr.push({\n      gallery_image: {\n        url: \"\".concat(process.env.S3_URL).concat(item)\n      }\n    });\n  });\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_6__[\"PropertyWrap\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_modalGallery__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    gallery: [{\n      items: arr\n    }]\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_6__[\"PropertyInfo\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, data.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_propertyCard_rooms__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    data: data\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_propertyCard_guests__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    data: data\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_propertyCard_price__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    data: data\n  }))));\n};\n\nProperty.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Property);\n\n//# sourceURL=webpack:///./src/client/components/propertyHome/index.js?");

/***/ }),

/***/ "./src/client/components/propertyHome/styled.js":
/*!******************************************************!*\
  !*** ./src/client/components/propertyHome/styled.js ***!
  \******************************************************/
/*! exports provided: PropertyWrap, PropertyInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PropertyWrap\", function() { return PropertyWrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PropertyInfo\", function() { return PropertyInfo; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\ntext-align:center;\\npadding-top:1em;\\n\\n\\n@media (min-width: 1100px) {\\n    display:inline-block;\\n    vertical-align:top;\\n    margin-left:3em;\\n    text-align:left;\\n    padding-top:0;\\n}\\n\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n    text-align:left;\\n    @media (min-width: 1000px) {\\n        display:inline-block;\\n    }\\n \\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar PropertyWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject());\nvar PropertyInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject2());\n\n//# sourceURL=webpack:///./src/client/components/propertyHome/styled.js?");

/***/ }),

/***/ "./src/client/components/registerWidget/index.js":
/*!*******************************************************!*\
  !*** ./src/client/components/registerWidget/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _functions_Register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../functions/Register */ \"./src/client/functions/Register.js\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ \"./src/client/components/registerWidget/styled.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nfunction SignUp(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      _useState2 = _slicedToArray(_useState, 2),\n      data = _useState2[0],\n      setData = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      _useState4 = _slicedToArray(_useState3, 2),\n      flash = _useState4[0],\n      setFlash = _useState4[1];\n\n  var handleSubmit = function handleSubmit(e) {\n    Object(_functions_Register__WEBPACK_IMPORTED_MODULE_1__[\"register\"])(e, data, setFlash, window, props);\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"FormWrap\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Register\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"FormStyle\"], {\n    onSubmit: handleSubmit\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    placeholder: \"name\",\n    onChange: function onChange(e) {\n      setData(_objectSpread({}, data, {\n        name: e.target.value\n      }));\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    placeholder: \"email\",\n    onChange: function onChange(e) {\n      setData(_objectSpread({}, data, {\n        email: e.target.value\n      }));\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    placeholder: \"password\",\n    onChange: function onChange(e) {\n      setData(_objectSpread({}, data, {\n        password: e.target.value\n      }));\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    id: \"submit\"\n  }, \"submit\"), flash && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, flash.map(function (el) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, el.message);\n  }))));\n}\n\n;\nSignUp.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignUp);\n\n//# sourceURL=webpack:///./src/client/components/registerWidget/index.js?");

/***/ }),

/***/ "./src/client/components/registerWidget/styled.js":
/*!********************************************************!*\
  !*** ./src/client/components/registerWidget/styled.js ***!
  \********************************************************/
/*! exports provided: FormStyle, FormWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FormStyle\", function() { return FormStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FormWrap\", function() { return FormWrap; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n    text-align:center;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\ninput {\\n    display:block;\\n    margin:auto auto 1em auto;\\n    width:300px;\\n    /* padding:0.5em;  */\\n}\\nbutton {\\n    width:312px;\\n    display:block;\\n    margin:auto auto 1em auto;\\n}\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar FormStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form(_templateObject());\nvar FormWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject2());\n\n//# sourceURL=webpack:///./src/client/components/registerWidget/styled.js?");

/***/ }),

/***/ "./src/client/components/search/index.js":
/*!***********************************************!*\
  !*** ./src/client/components/search/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ \"./src/client/components/search/styled.js\");\n\n\n\n\nfunction Search(_ref) {\n  var searchMethod = _ref.searchMethod;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"SearchStyle\"], {\n    placeholder: \"Search\",\n    onChange: function onChange(e) {\n      return searchMethod({\n        type: 'search',\n        input: e.target.value\n      });\n    }\n  });\n}\n\n;\nSearch.propTypes = {\n  searchMethod: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\n\n//# sourceURL=webpack:///./src/client/components/search/index.js?");

/***/ }),

/***/ "./src/client/components/search/styled.js":
/*!************************************************!*\
  !*** ./src/client/components/search/styled.js ***!
  \************************************************/
/*! exports provided: SearchStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SearchStyle\", function() { return SearchStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n    width:100%;    \\n    margin:0;\\n \\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar SearchStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input(_templateObject());\n\n//# sourceURL=webpack:///./src/client/components/search/styled.js?");

/***/ }),

/***/ "./src/client/functions/AddFavourite.js":
/*!**********************************************!*\
  !*** ./src/client/functions/AddFavourite.js ***!
  \**********************************************/
/*! exports provided: addFavourite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addFavourite\", function() { return addFavourite; });\nfunction addFavourite(data, setFave, user) {\n  data.user = user;\n  fetch(\"http://localhost:3000/api/favourites\", {\n    method: 'POST',\n    body: JSON.stringify(data),\n    headers: {\n      'Content-Type': 'application/json'\n    }\n  }).then(function (res) {\n    return res.json();\n  }).then(function (json) {\n    setFave(json);\n  }).catch(function (err) {\n    return console.log(err);\n  });\n}\n\n//# sourceURL=webpack:///./src/client/functions/AddFavourite.js?");

/***/ }),

/***/ "./src/client/functions/FetchProperties.js":
/*!*************************************************!*\
  !*** ./src/client/functions/FetchProperties.js ***!
  \*************************************************/
/*! exports provided: fetchProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchProperties\", function() { return fetchProperties; });\nfunction fetchProperties(setData) {\n  fetch(\"http://localhost:3000/api/properties\").then(function (res) {\n    return res.json();\n  }).then(function (json) {\n    return setData(json);\n  }).catch(function (err) {\n    return console.log(err);\n  });\n}\n\n//# sourceURL=webpack:///./src/client/functions/FetchProperties.js?");

/***/ }),

/***/ "./src/client/functions/Login.js":
/*!***************************************!*\
  !*** ./src/client/functions/Login.js ***!
  \***************************************/
/*! exports provided: fetchLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchLogin\", function() { return fetchLogin; });\nfunction fetchLogin(e, data, window, props, setFlash) {\n  e.preventDefault();\n\n  if (data) {\n    fetch(\"http://localhost:3000/api/login\", {\n      method: 'POST',\n      body: JSON.stringify(data),\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    }).then(function (res) {\n      return res.json();\n    }).then(function (json) {\n      if (json.errors) {\n        setFlash(json.errors);\n      } else {\n        window.sessionStorage.setItem('jwtToken', json.token);\n        props.history.push('/');\n      }\n    }).catch(function (err) {\n      return console.log(err);\n    });\n  } else {\n    setFlash([{\n      message: 'form is empty'\n    }]);\n  }\n}\n\n//# sourceURL=webpack:///./src/client/functions/Login.js?");

/***/ }),

/***/ "./src/client/functions/Register.js":
/*!******************************************!*\
  !*** ./src/client/functions/Register.js ***!
  \******************************************/
/*! exports provided: register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"register\", function() { return register; });\nfunction register(e, data, setFlash, window, props) {\n  e.preventDefault();\n\n  if (data) {\n    fetch(\"http://localhost:3000/api/register\", {\n      method: 'POST',\n      body: JSON.stringify(data),\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    }).then(function (res) {\n      return res.json();\n    }).then(function (json) {\n      if (json.errors) {\n        setFlash(json.errors);\n      } else {\n        window.sessionStorage.setItem('jwtToken', json.token);\n        props.history.push('/');\n      }\n    }).catch(function (err) {\n      return console.log(err);\n    });\n  } else {\n    setFlash([{\n      message: 'form is empty'\n    }]);\n  }\n}\n\n//# sourceURL=webpack:///./src/client/functions/Register.js?");

/***/ }),

/***/ "./src/client/functions/VerifyToken.js":
/*!*********************************************!*\
  !*** ./src/client/functions/VerifyToken.js ***!
  \*********************************************/
/*! exports provided: verifyToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"verifyToken\", function() { return verifyToken; });\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ \"jwt-decode\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction verifyToken(window, setUser) {\n  var token = window.sessionStorage.getItem('jwtToken');\n\n  if (token) {\n    fetch(\"http://localhost:3000/api/verifyToken\", {\n      method: 'POST',\n      body: JSON.stringify({\n        token: token\n      }),\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    }).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      var userVal = jwt_decode__WEBPACK_IMPORTED_MODULE_0__(data.token);\n      setUser(userVal);\n    }).catch(function (err) {\n      console.log(err, 'token invalid');\n    });\n  }\n}\n\n//# sourceURL=webpack:///./src/client/functions/VerifyToken.js?");

/***/ }),

/***/ "./src/client/functions/checkProperty.js":
/*!***********************************************!*\
  !*** ./src/client/functions/checkProperty.js ***!
  \***********************************************/
/*! exports provided: checkProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkProperty\", function() { return checkProperty; });\nfunction checkProperty(localStorage, props, setData, setFlash) {\n  var check = localStorage.getItem('property');\n\n  if (check) {\n    var parse = JSON.parse(check);\n\n    if (props.history.location.data && parse._id !== props.history.location.data._id) {\n      localStorage.setItem('property', JSON.stringify(props.history.location.data));\n      setData(props.history.location.data);\n    } else {\n      if (props.history.location.pathname.includes(parse.title.replace(/\\s/g, '-'))) {\n        setData(parse);\n      } else {\n        setFlash('Property unavailable');\n      }\n    }\n  } else {\n    localStorage.setItem('property', JSON.stringify(props.history.location.data));\n    setData(props.history.location.data);\n  }\n}\n\n//# sourceURL=webpack:///./src/client/functions/checkProperty.js?");

/***/ }),

/***/ "./src/client/pages/dashboard/index.js":
/*!*********************************************!*\
  !*** ./src/client/pages/dashboard/index.js ***!
  \*********************************************/
/*! exports provided: FavContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FavContext\", function() { return FavContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/search */ \"./src/client/components/search/index.js\");\n/* harmony import */ var _components_propertyCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/propertyCard */ \"./src/client/components/propertyCard/index.js\");\n/* harmony import */ var _components_filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/filters */ \"./src/client/components/filters/index.js\");\n/* harmony import */ var _components_favouritesWidget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/favouritesWidget */ \"./src/client/components/favouritesWidget/index.js\");\n/* harmony import */ var _redux_reducers_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/reducers/search */ \"./src/client/redux/reducers/search.js\");\n/* harmony import */ var _redux_reducers_favourites__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/reducers/favourites */ \"./src/client/redux/reducers/favourites.js\");\n/* harmony import */ var _functions_VerifyToken__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../functions/VerifyToken */ \"./src/client/functions/VerifyToken.js\");\n/* harmony import */ var _functions_FetchProperties__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../functions/FetchProperties */ \"./src/client/functions/FetchProperties.js\");\n/* harmony import */ var _functions_AddFavourite__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../functions/AddFavourite */ \"./src/client/functions/AddFavourite.js\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styled */ \"./src/client/pages/dashboard/styled.js\");\n/* harmony import */ var _components_layout_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/layout/index */ \"./src/client/components/layout/index.js\");\n/* harmony import */ var styled_spinkit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-spinkit */ \"styled-spinkit\");\n/* harmony import */ var styled_spinkit__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(styled_spinkit__WEBPACK_IMPORTED_MODULE_12__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar FavContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();\n\nfunction Dashboard(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      _useState2 = _slicedToArray(_useState, 2),\n      data = _useState2[0],\n      setData = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      _useState4 = _slicedToArray(_useState3, 2),\n      user = _useState4[0],\n      setUser = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      _useState6 = _slicedToArray(_useState5, 2),\n      favs = _useState6[0],\n      initialFav = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      _useState8 = _slicedToArray(_useState7, 2),\n      newFav = _useState8[0],\n      setFave = _useState8[1];\n\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useReducer\"])(_redux_reducers_favourites__WEBPACK_IMPORTED_MODULE_6__[\"favouritesReducer\"], {\n    fav: null\n  }),\n      _useReducer2 = _slicedToArray(_useReducer, 2),\n      fav = _useReducer2[0],\n      setFav = _useReducer2[1];\n\n  var _useReducer3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useReducer\"])(_redux_reducers_search__WEBPACK_IMPORTED_MODULE_5__[\"searchReducer\"], {\n    value: \"\"\n  }),\n      _useReducer4 = _slicedToArray(_useReducer3, 2),\n      state = _useReducer4[0],\n      setSearch = _useReducer4[1];\n\n  var _useReducer5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useReducer\"])(_redux_reducers_search__WEBPACK_IMPORTED_MODULE_5__[\"searchReducer\"], {\n    guests: 1\n  }),\n      _useReducer6 = _slicedToArray(_useReducer5, 2),\n      count = _useReducer6[0],\n      setCount = _useReducer6[1];\n\n  var _useReducer7 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useReducer\"])(_redux_reducers_search__WEBPACK_IMPORTED_MODULE_5__[\"searchReducer\"], {\n    price: [10, 150]\n  }),\n      _useReducer8 = _slicedToArray(_useReducer7, 2),\n      price = _useReducer8[0],\n      setPrice = _useReducer8[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    Object(_functions_VerifyToken__WEBPACK_IMPORTED_MODULE_7__[\"verifyToken\"])(window, setUser);\n    Object(_functions_FetchProperties__WEBPACK_IMPORTED_MODULE_8__[\"fetchProperties\"])(setData);\n  }, []);\n\n  var favouriteMethod = function favouriteMethod(data) {\n    Object(_functions_AddFavourite__WEBPACK_IMPORTED_MODULE_9__[\"addFavourite\"])(data, setFave, user);\n  };\n\n  return data ? // <Layout component={<React.Fragment>\n  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_10__[\"ContentWrap\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_10__[\"SideBarWrap\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_10__[\"SearchWrap\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_search__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    searchMethod: setSearch\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_filters__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    guestMethod: setCount,\n    guests: count.guests,\n    priceMethod: setPrice,\n    price: price\n  }), user && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_favouritesWidget__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    data: !newFav ? user.fav : newFav,\n    property: data\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FavContext.Provider, {\n    value: {\n      addFav: favouriteMethod,\n      loggedIn: user\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_propertyCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    data: data,\n    searchVal: state,\n    guests: count.guests,\n    slider: price\n  }))))\n  /* </React.Fragment>} user={user} /> */\n  : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_spinkit__WEBPACK_IMPORTED_MODULE_12__[\"FoldingCube\"], {\n    color: '#ADD8E6',\n    size: 80\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\n\n//# sourceURL=webpack:///./src/client/pages/dashboard/index.js?");

/***/ }),

/***/ "./src/client/pages/dashboard/styled.js":
/*!**********************************************!*\
  !*** ./src/client/pages/dashboard/styled.js ***!
  \**********************************************/
/*! exports provided: ContainerStyle, ContentWrap, SearchWrap, SideBarWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContainerStyle\", function() { return ContainerStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContentWrap\", function() { return ContentWrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SearchWrap\", function() { return SearchWrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SideBarWrap\", function() { return SideBarWrap; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject4() {\n  var data = _taggedTemplateLiteral([\"\\n    width:100%;\\n    margin-top: 1em;\\n    order: 2;\\n    span:first-of-type {\\n        left:3% !important;\\n    }\\n    @media (min-width: 767px) {\\n        width: 350px;\\n    }\\n    @media (min-width: 1000px) {\\n        margin-right:5em;\\n\\n        span:first-of-type {\\n            left:3% !important;\\n        }\\n    }\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n    width:100%;\\n    @media (min-width: 767px) {\\n        \\n    }\\n\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n    display:flex;\\n    flex-wrap:wrap;\\n    @media (min-width: 1000px) {\\n        display:inline-flex;\\n        flex-wrap:nowrap;\\n    }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n color: rgb(147, 146, 146);\\n padding:1em;\\n font-family: sans-serif;\\n font-size: 14px;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar ContainerStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject());\nvar ContentWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject2());\nvar SearchWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject3());\nvar SideBarWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.aside(_templateObject4());\n\n//# sourceURL=webpack:///./src/client/pages/dashboard/styled.js?");

/***/ }),

/***/ "./src/client/pages/login/index.js":
/*!*****************************************!*\
  !*** ./src/client/pages/login/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout/index */ \"./src/client/components/layout/index.js\");\n/* harmony import */ var _components_loginWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/loginWidget */ \"./src/client/components/loginWidget/index.js\");\n\n\n\n\n\nvar Login = function Login(props) {\n  return (// <Layout component={\n    !props.user && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_loginWidget__WEBPACK_IMPORTED_MODULE_3__[\"default\"], props) // } user={props.user} />\n\n  );\n};\n\nLogin.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\n//# sourceURL=webpack:///./src/client/pages/login/index.js?");

/***/ }),

/***/ "./src/client/pages/property/index.js":
/*!********************************************!*\
  !*** ./src/client/pages/property/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _functions_checkProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../functions/checkProperty */ \"./src/client/functions/checkProperty.js\");\n/* harmony import */ var _functions_VerifyToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../functions/VerifyToken */ \"./src/client/functions/VerifyToken.js\");\n/* harmony import */ var _components_layout_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/layout/index */ \"./src/client/components/layout/index.js\");\n/* harmony import */ var _components_propertyHome_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/propertyHome/index */ \"./src/client/components/propertyHome/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\nfunction Property(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      _useState2 = _slicedToArray(_useState, 2),\n      data = _useState2[0],\n      setData = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      _useState4 = _slicedToArray(_useState3, 2),\n      user = _useState4[0],\n      setUser = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      _useState6 = _slicedToArray(_useState5, 2),\n      flash = _useState6[0],\n      setFlash = _useState6[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    Object(_functions_checkProperty__WEBPACK_IMPORTED_MODULE_2__[\"checkProperty\"])(localStorage, props, setData, setFlash); //fetchProperty(props, setData)\n\n    Object(_functions_VerifyToken__WEBPACK_IMPORTED_MODULE_3__[\"verifyToken\"])(window, setUser);\n  }, []);\n  return (// <Layout\n    //   component={\n    flash ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, flash), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      to: \"/\"\n    }, \"Home\")) : data ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_propertyHome_index__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      data: data\n    }) : null //   }\n    //   user={user}\n    // />\n\n  );\n}\n\nProperty.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Property);\n\n//# sourceURL=webpack:///./src/client/pages/property/index.js?");

/***/ }),

/***/ "./src/client/pages/register/index.js":
/*!********************************************!*\
  !*** ./src/client/pages/register/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_registerWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/registerWidget */ \"./src/client/components/registerWidget/index.js\");\n/* harmony import */ var _components_layout_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout/index */ \"./src/client/components/layout/index.js\");\n\n\n\n\n\nvar Register = function Register(props) {\n  return (// <Layout component={\n    !props.user && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_registerWidget__WEBPACK_IMPORTED_MODULE_2__[\"default\"], props) // } user={props.user} />\n\n  );\n};\n\nRegister.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);\n\n//# sourceURL=webpack:///./src/client/pages/register/index.js?");

/***/ }),

/***/ "./src/client/redux/reducers/favourites.js":
/*!*************************************************!*\
  !*** ./src/client/redux/reducers/favourites.js ***!
  \*************************************************/
/*! exports provided: favouritesReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"favouritesReducer\", function() { return favouritesReducer; });\nfunction favouritesReducer(state, action) {\n  switch (action.type) {\n    case 'favourites':\n      return {\n        fav: action.fav\n      };\n\n    default:\n      return state;\n  }\n}\n\n//# sourceURL=webpack:///./src/client/redux/reducers/favourites.js?");

/***/ }),

/***/ "./src/client/redux/reducers/search.js":
/*!*********************************************!*\
  !*** ./src/client/redux/reducers/search.js ***!
  \*********************************************/
/*! exports provided: searchReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchReducer\", function() { return searchReducer; });\nfunction searchReducer(state, action) {\n  switch (action.type) {\n    case 'search':\n      return {\n        value: action.input\n      };\n\n    case 'guests':\n      return {\n        guests: action.count\n      };\n\n    case 'price':\n      return {\n        price: action.price\n      };\n\n    default:\n      return state;\n  }\n}\n\n//# sourceURL=webpack:///./src/client/redux/reducers/search.js?");

/***/ }),

/***/ "./src/client/styled.js":
/*!******************************!*\
  !*** ./src/client/styled.js ***!
  \******************************/
/*! exports provided: GlobalStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlobalStyle\", function() { return GlobalStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  body {\\n    color:black;\\n    font-size: 16px\\n  }\\n  a {\\n    text-decoration:none;\\n    color:black;\\n  }\\n  input, button {\\n    border-radius: 4px;\\n    border: 1px solid #d9d9d9;\\n    padding:0.5em;\\n    background-color: white;\\n    line-height:1.5;\\n    margin:0.5em;\\n  }\\n  h4, h3 {\\n    font-weight:500;\\n  }\\n  input {\\n    font-size: 14px;\\n    :hover{\\n      border-color: #7aabdb;\\n    }\\n    :focus {\\n      outline:none !important;\\n      border-color: #7aabdb;\\n    }\\n  }\\n  button {\\n    background: #AAE2FB;\\n    color: #2028c1;\\n    font-size: 14px;\\n\\n  }\\n\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"createGlobalStyle\"])(_templateObject());\n\n//# sourceURL=webpack:///./src/client/styled.js?");

/***/ }),

/***/ "./src/server/config/GenToken.js":
/*!***************************************!*\
  !*** ./src/server/config/GenToken.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nfunction genToken(user) {\n  var id = {\n    id: user._id.toString(),\n    name: user.name,\n    fav: user.favourites\n  };\n  return jwt.sign(id, process.env.JWT, {\n    expiresIn: 60 * 60 * 24\n  });\n}\n\nmodule.exports = genToken;\n\n//# sourceURL=webpack:///./src/server/config/GenToken.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _client_App__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../client/App */ \"./src/client/App.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _shared_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/routes */ \"./src/shared/routes.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n__webpack_require__(/*! dotenv */ \"dotenv\").config({\n  path: '.env'\n});\n\nvar port = 3000;\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static('build')); // Connect to DB\n\nmongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connect(\"mongodb://localhost/properties\", {\n  useNewUrlParser: true\n}).then(function () {\n  return console.log('MongoDB connected…');\n}).catch(function (err) {\n  return console.log(err);\n});\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_4___default.a.urlencoded({\n  extended: true\n}));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_4___default.a.json());\napp.use(cors__WEBPACK_IMPORTED_MODULE_3___default()());\napp.use('/api', __webpack_require__(/*! ./routes/index.js */ \"./src/server/routes/index.js\"));\napp.use('/api', __webpack_require__(/*! ./routes/User.js */ \"./src/server/routes/User.js\"));\napp.use('/api', __webpack_require__(/*! ./routes/Property.js */ \"./src/server/routes/Property.js\"));\napp.get(\"*\", function (req, res, next) {\n  var sheet = new styled_components__WEBPACK_IMPORTED_MODULE_9__[\"ServerStyleSheet\"]();\n  var activeRoute = _shared_routes__WEBPACK_IMPORTED_MODULE_10__[\"default\"].find(function (route) {\n    return Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[\"matchPath\"])(req.url, route);\n  }) || {}; // const promise = activeRoute.fetchInitialData\n  //   ? activeRoute.fetchInitialData(req.path)\n  //   : Promise.resolve()\n  // promise.then((data) => {\n\n  var data = {\n    data: 'test data'\n  };\n  var context = {\n    data: 'test data'\n  };\n  var markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_5__[\"renderToString\"])(sheet.collectStyles(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[\"StaticRouter\"], {\n    location: req.url,\n    context: context\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_client_App__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null))));\n  var styles = sheet.getStyleTags();\n  res.send(\"\\n        <!DOCTYPE html>\\n        <html>\\n          <head>\\n            <title>SSR with RR</title>\\n            \".concat(styles, \"\\n            <script src=\\\"/bundle.js\\\" defer></script>\\n            <script>window.__INITIAL_DATA__ = \").concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_7___default()(data), \"</script>\\n          </head>\\n  \\n          <body>\\n            <div id=\\\"root\\\">\").concat(markup, \"</div>\\n          </body>\\n        </html>\\n      \")); // }).catch(next)\n}); // app.get('*', (req, res) => {\n//     res.sendFile(path.join(__dirname, '../build/index.html'));\n// });\n\napp.listen(port);\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/models/Property.js":
/*!***************************************!*\
  !*** ./src/server/models/Property.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar propertySchema = new mongoose.Schema({\n  title: String,\n  rooms: String,\n  guests: Number,\n  price: Number,\n  images: {\n    type: Map,\n    of: String\n  }\n});\nmodule.exports = mongoose.model('property', propertySchema, 'property', {\n  useNewUrlParser: true\n});\n\n//# sourceURL=webpack:///./src/server/models/Property.js?");

/***/ }),

/***/ "./src/server/models/Users.js":
/*!************************************!*\
  !*** ./src/server/models/Users.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar userSchema = new mongoose.Schema({\n  name: String,\n  email: String,\n  password: String,\n  favourites: {\n    type: Map,\n    of: String\n  }\n});\nmodule.exports = mongoose.model('user', userSchema, 'user', {\n  useNewUrlParser: true\n});\n\n//# sourceURL=webpack:///./src/server/models/Users.js?");

/***/ }),

/***/ "./src/server/routes/Property.js":
/*!***************************************!*\
  !*** ./src/server/routes/Property.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar Property = __webpack_require__(/*! ../models/Property */ \"./src/server/models/Property.js\");\n\nvar router = express.Router();\nrouter.get('/properties',\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res) {\n    var properties;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return Property.find({});\n\n          case 3:\n            properties = _context.sent;\n            res.json(properties);\n            _context.next = 10;\n            break;\n\n          case 7:\n            _context.prev = 7;\n            _context.t0 = _context[\"catch\"](0);\n            throw _context.t0;\n\n          case 10:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 7]]);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\nrouter.get('/properties/:id',\n/*#__PURE__*/\nfunction () {\n  var _ref2 = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee2(req, res) {\n    var id, property;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            console.log('qqqq', req.query);\n            id = req.query.id;\n            _context2.prev = 2;\n            _context2.next = 5;\n            return Property.findById({\n              '_id': id\n            });\n\n          case 5:\n            property = _context2.sent;\n            res.json(property);\n            _context2.next = 12;\n            break;\n\n          case 9:\n            _context2.prev = 9;\n            _context2.t0 = _context2[\"catch\"](2);\n            throw _context2.t0;\n\n          case 12:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[2, 9]]);\n  }));\n\n  return function (_x3, _x4) {\n    return _ref2.apply(this, arguments);\n  };\n}());\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/server/routes/Property.js?");

/***/ }),

/***/ "./src/server/routes/User.js":
/*!***********************************!*\
  !*** ./src/server/routes/User.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar User = __webpack_require__(/*! ../models/Users */ \"./src/server/models/Users.js\");\n\nvar config = __webpack_require__(/*! ../config/GenToken */ \"./src/server/config/GenToken.js\");\n\nvar bcrypt = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n\nvar router = express.Router(); //'5c73f8872d8fe7283d7d62c2': 'Fantastic warm bright apartment overlooking park'\n\nrouter.post('/register',\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee2(req, res) {\n    var _req$body, name, email, password, errors, checkExists, newUser;\n\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _req$body = req.body, name = _req$body.name, email = _req$body.email, password = _req$body.password;\n            errors = [];\n\n            if (!(!name || !email || !password)) {\n              _context2.next = 5;\n              break;\n            }\n\n            errors.push({\n              message: 'Please enter all fields'\n            });\n            return _context2.abrupt(\"return\", res.send({\n              errors: errors\n            }));\n\n          case 5:\n            if (password.length < 6) {\n              errors.push({\n                message: 'Password must be at least 6 characters'\n              });\n            }\n\n            if (!(errors.length > 0)) {\n              _context2.next = 10;\n              break;\n            }\n\n            res.send({\n              errors: errors\n            });\n            _context2.next = 27;\n            break;\n\n          case 10:\n            _context2.next = 12;\n            return User.findOne({\n              email: email\n            });\n\n          case 12:\n            checkExists = _context2.sent;\n\n            if (!checkExists) {\n              _context2.next = 18;\n              break;\n            }\n\n            errors.push({\n              message: 'Email already exists'\n            });\n            return _context2.abrupt(\"return\", res.send({\n              errors: errors\n            }));\n\n          case 18:\n            _context2.prev = 18;\n            newUser = new User({\n              name: name,\n              email: email,\n              password: password,\n              favourites: {}\n            });\n            bcrypt.genSalt(10, function (err, salt) {\n              bcrypt.hash(newUser.password, salt,\n              /*#__PURE__*/\n              function () {\n                var _ref2 = _asyncToGenerator(\n                /*#__PURE__*/\n                regeneratorRuntime.mark(function _callee(err, hash) {\n                  var token;\n                  return regeneratorRuntime.wrap(function _callee$(_context) {\n                    while (1) {\n                      switch (_context.prev = _context.next) {\n                        case 0:\n                          if (!err) {\n                            _context.next = 3;\n                            break;\n                          }\n\n                          errors.push({\n                            message: 'Server error please try again'\n                          });\n                          return _context.abrupt(\"return\", res.send({\n                            errors: errors\n                          }));\n\n                        case 3:\n                          newUser.password = hash;\n                          _context.next = 6;\n                          return newUser.save();\n\n                        case 6:\n                          token = config(newUser);\n                          res.json({\n                            token: token\n                          });\n\n                        case 8:\n                        case \"end\":\n                          return _context.stop();\n                      }\n                    }\n                  }, _callee);\n                }));\n\n                return function (_x3, _x4) {\n                  return _ref2.apply(this, arguments);\n                };\n              }());\n            });\n            _context2.next = 27;\n            break;\n\n          case 23:\n            _context2.prev = 23;\n            _context2.t0 = _context2[\"catch\"](18);\n            errors.push({\n              message: 'Server error please try again'\n            });\n            return _context2.abrupt(\"return\", res.send({\n              errors: errors\n            }));\n\n          case 27:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[18, 23]]);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}()); // Login\n\nrouter.post('/login', function (req, res, next) {\n  var _req$body2 = req.body,\n      email = _req$body2.email,\n      password = _req$body2.password;\n  var errors = [];\n\n  if (!email || !password) {\n    errors.push({\n      message: 'Please enter all fields'\n    });\n    return res.send({\n      errors: errors\n    });\n  }\n\n  User.findOne({\n    email: email\n  }).then(function (user) {\n    if (!user) {\n      errors.push({\n        message: 'That email is not registered'\n      });\n      return res.send({\n        errors: errors\n      });\n    } // Match password\n\n\n    bcrypt.compare(password, user.password, function (err, isMatch) {\n      if (err) {\n        errors.push({\n          message: 'Server error'\n        });\n        return res.send({\n          errors: errors\n        });\n      }\n\n      if (isMatch) {\n        var token = config(user);\n        res.json({\n          token: token\n        });\n      } else {\n        errors.push({\n          message: 'Password incorrect'\n        });\n        return res.send({\n          errors: errors\n        });\n      }\n    });\n  });\n}); //favourites\n\nrouter.post('/favourites', function (req, res, next) {\n  var _req$body3 = req.body,\n      fav = _req$body3.fav,\n      user = _req$body3.user;\n  User.findOne({\n    _id: user.id\n  },\n  /*#__PURE__*/\n  function () {\n    var _ref3 = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee3(err, user) {\n      var checkFav;\n      return regeneratorRuntime.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              if (!err) {\n                _context3.next = 2;\n                break;\n              }\n\n              return _context3.abrupt(\"return\", err);\n\n            case 2:\n              _context3.next = 4;\n              return user.favourites.get(fav.propID);\n\n            case 4:\n              checkFav = _context3.sent;\n\n              if (!checkFav) {\n                _context3.next = 12;\n                break;\n              }\n\n              _context3.next = 8;\n              return user.favourites.set(\"\".concat(fav.propID), undefined);\n\n            case 8:\n              user.save();\n              return _context3.abrupt(\"return\", res.json(user.favourites));\n\n            case 12:\n              _context3.next = 14;\n              return user.favourites.set(\"\".concat(fav.propID), \"\".concat(fav.title));\n\n            case 14:\n              user.save();\n              return _context3.abrupt(\"return\", res.json(user.favourites));\n\n            case 16:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    return function (_x5, _x6) {\n      return _ref3.apply(this, arguments);\n    };\n  }()).catch(function (err) {\n    return console.log(err);\n  });\n});\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/server/routes/User.js?");

/***/ }),

/***/ "./src/server/routes/index.js":
/*!************************************!*\
  !*** ./src/server/routes/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar router = express.Router();\n\nvar User = __webpack_require__(/*! ../models/Users */ \"./src/server/models/Users.js\");\n\nvar config = __webpack_require__(/*! ../config/GenToken */ \"./src/server/config/GenToken.js\");\n\nvar jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nrouter.post('/verifyToken', function (req, res, next) {\n  var token = req.body.token;\n\n  if (!token) {\n    return res.json({\n      message: 'Must pass token'\n    });\n  }\n\n  jwt.verify(token, process.env.JWT, function (err, user) {\n    if (err) return res.json({\n      message: 'Token invalid'\n    });\n    User.findById({\n      '_id': user.id\n    }, function (err, user) {\n      if (err) return res.json({\n        message: 'User not found'\n      });\n      var token = config(user);\n      res.json({\n        token: token\n      });\n    });\n  });\n});\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/server/routes/index.js?");

/***/ }),

/***/ "./src/shared/routes.js":
/*!******************************!*\
  !*** ./src/shared/routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _client_pages_dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../client/pages/dashboard */ \"./src/client/pages/dashboard/index.js\");\n/* harmony import */ var _client_pages_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client/pages/property */ \"./src/client/pages/property/index.js\");\n/* harmony import */ var _client_pages_register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client/pages/register */ \"./src/client/pages/register/index.js\");\n/* harmony import */ var _client_pages_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client/pages/login */ \"./src/client/pages/login/index.js\");\n\n\n\n\nvar routes = [{\n  path: '/',\n  exact: true,\n  component: _client_pages_dashboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n}, {\n  path: '/property/:title',\n  component: _client_pages_property__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}, {\n  path: '/register',\n  component: _client_pages_register__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}, {\n  path: '/login',\n  component: _client_pages_login__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\n\n//# sourceURL=webpack:///./src/shared/routes.js?");

/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi @babel/polyfill ./src/server/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! @babel/polyfill */\"@babel/polyfill\");\nmodule.exports = __webpack_require__(/*! ./src/server/index.js */\"./src/server/index.js\");\n\n\n//# sourceURL=webpack:///multi_@babel/polyfill_./src/server/index.js?");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/polyfill\");\n\n//# sourceURL=webpack:///external_%22@babel/polyfill%22?");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcryptjs\");\n\n//# sourceURL=webpack:///external_%22bcryptjs%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jwt-decode\");\n\n//# sourceURL=webpack:///external_%22jwt-decode%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "rc-slider":
/*!****************************!*\
  !*** external "rc-slider" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"rc-slider\");\n\n//# sourceURL=webpack:///external_%22rc-slider%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-lazyload-fadein":
/*!****************************************!*\
  !*** external "react-lazyload-fadein" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-lazyload-fadein\");\n\n//# sourceURL=webpack:///external_%22react-lazyload-fadein%22?");

/***/ }),

/***/ "react-loadable":
/*!*********************************!*\
  !*** external "react-loadable" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-loadable\");\n\n//# sourceURL=webpack:///external_%22react-loadable%22?");

/***/ }),

/***/ "react-responsive-modal":
/*!*****************************************!*\
  !*** external "react-responsive-modal" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-responsive-modal\");\n\n//# sourceURL=webpack:///external_%22react-responsive-modal%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-transition-group\");\n\n//# sourceURL=webpack:///external_%22react-transition-group%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");\n\n//# sourceURL=webpack:///external_%22styled-components%22?");

/***/ }),

/***/ "styled-icons/boxicons-solid/Heart":
/*!****************************************************!*\
  !*** external "styled-icons/boxicons-solid/Heart" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-icons/boxicons-solid/Heart\");\n\n//# sourceURL=webpack:///external_%22styled-icons/boxicons-solid/Heart%22?");

/***/ }),

/***/ "styled-icons/fa-solid/Home":
/*!*********************************************!*\
  !*** external "styled-icons/fa-solid/Home" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-icons/fa-solid/Home\");\n\n//# sourceURL=webpack:///external_%22styled-icons/fa-solid/Home%22?");

/***/ }),

/***/ "styled-icons/material/Close":
/*!**********************************************!*\
  !*** external "styled-icons/material/Close" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-icons/material/Close\");\n\n//# sourceURL=webpack:///external_%22styled-icons/material/Close%22?");

/***/ }),

/***/ "styled-icons/material/KeyboardArrowLeft":
/*!**********************************************************!*\
  !*** external "styled-icons/material/KeyboardArrowLeft" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-icons/material/KeyboardArrowLeft\");\n\n//# sourceURL=webpack:///external_%22styled-icons/material/KeyboardArrowLeft%22?");

/***/ }),

/***/ "styled-icons/material/KeyboardArrowRight":
/*!***********************************************************!*\
  !*** external "styled-icons/material/KeyboardArrowRight" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-icons/material/KeyboardArrowRight\");\n\n//# sourceURL=webpack:///external_%22styled-icons/material/KeyboardArrowRight%22?");

/***/ }),

/***/ "styled-spinkit":
/*!*********************************!*\
  !*** external "styled-spinkit" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-spinkit\");\n\n//# sourceURL=webpack:///external_%22styled-spinkit%22?");

/***/ })

/******/ });