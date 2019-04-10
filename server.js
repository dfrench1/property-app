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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shared_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/routes */ \"./src/shared/routes.js\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/layout */ \"./src/client/components/layout/index.js\");\n/* harmony import */ var _pages_noMatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/noMatch */ \"./src/client/pages/noMatch/index.js\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styled */ \"./src/client/styled.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\nfunction App(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(props.initUser && props.initUser.user),\n      _useState2 = _slicedToArray(_useState, 2),\n      auth = _useState2[0],\n      setAuth = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(props.user),\n      _useState4 = _slicedToArray(_useState3, 2),\n      reduxUser = _useState4[0],\n      setUser = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    props.user ? setUser(props.user) : setUser(null);\n  }, [props.user]);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    user: auth ? auth : reduxUser ? reduxUser : null,\n    setAuth: setAuth\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_5__[\"GlobalStyle\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], {\n    location: props.location\n  }, _shared_routes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].map(function (_ref) {\n    var path = _ref.path,\n        exact = _ref.exact,\n        Component = _ref.component,\n        rest = _objectWithoutProperties(_ref, [\"path\", \"exact\", \"component\"]);\n\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n      key: path,\n      path: path,\n      exact: exact,\n      render: function render(props) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, props, rest, {\n          user: auth ? auth : reduxUser ? reduxUser : null\n        }));\n      }\n    });\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    render: function render(props) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_noMatch__WEBPACK_IMPORTED_MODULE_4__[\"default\"], props);\n    }\n  })));\n}\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    user: state.user\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"withRouter\"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"connect\"])(mapStateToProps)(App))); //export default App;\n\n//# sourceURL=webpack:///./src/client/App.js?");

/***/ }),

/***/ "./src/client/components/admin/addProperty/PropertyForm.js":
/*!*****************************************************************!*\
  !*** ./src/client/components/admin/addProperty/PropertyForm.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styled */ \"./src/client/components/admin/styled.js\");\n/* harmony import */ var _generic_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../generic/modal */ \"./src/client/components/generic/modal/index.js\");\n/* harmony import */ var _generic_flashMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../generic/flashMessages */ \"./src/client/components/generic/flashMessages/index.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nvar AddProperty = function AddProperty(_ref) {\n  var showForm = _ref.showForm,\n      handleSubmit = _ref.handleSubmit,\n      setData = _ref.setData,\n      data = _ref.data,\n      postcodes = _ref.postcodes,\n      setFlash = _ref.setFlash,\n      newModal = _ref.newModal,\n      setNewModal = _ref.setNewModal,\n      flash = _ref.flash;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      setNewModal(true);\n    }\n  }, \" \", \"Add New Property\"), newModal && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_generic_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    trigger: newModal,\n    triggerFunc: setNewModal,\n    content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__[\"FormStyle\"], {\n      onSubmit: handleSubmit,\n      style: {\n        paddingTop: \"2em\"\n      }\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      placeholder: \"title\",\n      onChange: function onChange(e) {\n        setData(_objectSpread({}, data, {\n          title: e.target.value\n        }));\n      }\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      placeholder: \"rooms\",\n      onChange: function onChange(e) {\n        setData(_objectSpread({}, data, {\n          rooms: e.target.value\n        }));\n      }\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      placeholder: \"guests\",\n      type: \"number\",\n      name: \"guests\",\n      min: \"1\",\n      max: \"30\",\n      onChange: function onChange(e) {\n        setData(_objectSpread({}, data, {\n          guests: e.target.value\n        }));\n      }\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      placeholder: \"price\",\n      type: \"number\",\n      name: \"price\",\n      min: \"1\",\n      max: \"500\",\n      step: \"0.01\",\n      onChange: function onChange(e) {\n        setData(_objectSpread({}, data, {\n          price: e.target.value\n        }));\n      }\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"select\", {\n      onChange: function onChange(e) {\n        if (e.target.value !== \"\") {\n          var coords = e.target.value;\n          setData(_objectSpread({}, data, {\n            coords: coords\n          }));\n        }\n      }\n    }, \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n      value: \"\"\n    }, \"postcode\"), postcodes.map(function (el) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n        value: el,\n        key: el\n      }, el);\n    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      id: \"submit\"\n    }, \"save\"), flash && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_generic_flashMessages__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      message: flash[0].message\n    }))\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddProperty);\n\n//# sourceURL=webpack:///./src/client/components/admin/addProperty/PropertyForm.js?");

/***/ }),

/***/ "./src/client/components/admin/addProperty/index.js":
/*!**********************************************************!*\
  !*** ./src/client/components/admin/addProperty/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _PropertyForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PropertyForm */ \"./src/client/components/admin/addProperty/PropertyForm.js\");\n/* harmony import */ var _generic_flashMessages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../generic/flashMessages */ \"./src/client/components/generic/flashMessages/index.js\");\n\n\n\n\nvar AddProperty = function AddProperty(_ref) {\n  var showForm = _ref.showForm,\n      handleAddProperty = _ref.handleAddProperty,\n      setData = _ref.setData,\n      data = _ref.data,\n      postcodes = _ref.postcodes,\n      setFlash = _ref.setFlash,\n      newModal = _ref.newModal,\n      setNewModal = _ref.setNewModal,\n      flash = _ref.flash,\n      added = _ref.added;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n    style: {\n      textAlign: \"center\"\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Admin\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      maxWidth: \"300px\",\n      margin: \"auto\"\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PropertyForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    showForm: showForm,\n    handleSubmit: handleAddProperty,\n    setData: setData,\n    data: data,\n    postcodes: postcodes,\n    setFlash: setFlash,\n    newModal: newModal,\n    setNewModal: setNewModal,\n    flash: flash\n  }), added && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_generic_flashMessages__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    message: added[0].message\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddProperty);\n\n//# sourceURL=webpack:///./src/client/components/admin/addProperty/index.js?");

/***/ }),

/***/ "./src/client/components/admin/functions/AddProperty.js":
/*!**************************************************************!*\
  !*** ./src/client/components/admin/functions/AddProperty.js ***!
  \**************************************************************/
/*! exports provided: addProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addProperty\", function() { return addProperty; });\nfunction addProperty(e, data, props, setNewProp, setUser, setFlash, setNewModal, setAdded) {\n  e.preventDefault();\n\n  if (data && Object.keys(data).length < 5) {\n    return setFlash([{\n      message: 'Please enter all fields...'\n    }]);\n  } else if (data && Object.values(data).find(function (el) {\n    return el == '' || el == null;\n  })) {\n    return setFlash([{\n      message: 'Please enter all fields...'\n    }]);\n  } else if (data) {\n    fetch(\"/addProperty\", {\n      method: \"POST\",\n      body: JSON.stringify({\n        data: data,\n        user: props.user\n      }),\n      headers: {\n        \"Content-Type\": \"application/json\"\n      }\n    }).then(function (res) {\n      return res.json();\n    }).then(function (json) {\n      //setNewProp(json);\n      setUser(json);\n    }).catch(function (err) {\n      return console.log(err);\n    });\n    setNewModal(false);\n    setAdded([{\n      message: 'Property Added...'\n    }]);\n  } else {\n    return setFlash([{\n      message: 'Please enter all fields...'\n    }]);\n  }\n}\n\n//# sourceURL=webpack:///./src/client/components/admin/functions/AddProperty.js?");

/***/ }),

/***/ "./src/client/components/admin/functions/DeleteImage.js":
/*!**************************************************************!*\
  !*** ./src/client/components/admin/functions/DeleteImage.js ***!
  \**************************************************************/
/*! exports provided: deleteImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteImage\", function() { return deleteImage; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction deleteImage(el, editData, props, delImg) {\n  var arr = _toConsumableArray(el);\n\n  fetch(\"/deletePropImage\", {\n    method: 'DELETE',\n    body: JSON.stringify({\n      img: arr,\n      property: editData,\n      user: props.user\n    }),\n    headers: {\n      'Content-Type': \"application/json\"\n    }\n  }).then(function (res) {\n    return res.json();\n  }).then(function (json) {\n    console.log('deleted imgs', json);\n    delImg(json);\n  }).catch(function (err) {\n    return console.log(err);\n  });\n}\n\n//# sourceURL=webpack:///./src/client/components/admin/functions/DeleteImage.js?");

/***/ }),

/***/ "./src/client/components/admin/functions/DeleteProperty.js":
/*!*****************************************************************!*\
  !*** ./src/client/components/admin/functions/DeleteProperty.js ***!
  \*****************************************************************/
/*! exports provided: deleteProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteProperty\", function() { return deleteProperty; });\nfunction deleteProperty(el, props, setNewProp, setUser) {\n  fetch(\"/deleteProp\", {\n    method: 'DELETE',\n    body: JSON.stringify({\n      id: el._id,\n      user: props.user\n    }),\n    headers: {\n      'Content-Type': \"application/json\"\n    }\n  }).then(function (res) {\n    return res.json();\n  }).then(function (json) {\n    //setNewProp(json);\n    setUser(json);\n  }).catch(function (err) {\n    return console.log(err);\n  });\n}\n\n//# sourceURL=webpack:///./src/client/components/admin/functions/DeleteProperty.js?");

/***/ }),

/***/ "./src/client/components/admin/functions/EditProperty.js":
/*!***************************************************************!*\
  !*** ./src/client/components/admin/functions/EditProperty.js ***!
  \***************************************************************/
/*! exports provided: editProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"editProperty\", function() { return editProperty; });\nfunction editProperty(e, editData, props, setNewProp, setUser) {\n  e.preventDefault();\n  fetch(\"/editProperty\", {\n    method: \"PUT\",\n    body: JSON.stringify({\n      data: editData,\n      user: props.user\n    }),\n    headers: {\n      \"Content-Type\": \"application/json\"\n    }\n  }).then(function (res) {\n    return res.json();\n  }).then(function (json) {\n    //setNewProp(json);\n    setUser(json);\n  }).catch(function (err) {\n    return console.log(err);\n  });\n}\n\n//# sourceURL=webpack:///./src/client/components/admin/functions/EditProperty.js?");

/***/ }),

/***/ "./src/client/components/admin/functions/UpdateProps.js":
/*!**************************************************************!*\
  !*** ./src/client/components/admin/functions/UpdateProps.js ***!
  \**************************************************************/
/*! exports provided: updateProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateProps\", function() { return updateProps; });\nfunction updateProps(newImg, delImg, checkUser) {\n  if (newImg || delImg) {\n    var img = newImg ? newImg : delImg;\n    var updateProperty = checkUser().properties.find(function (x) {\n      return x._id == img._id;\n    });\n    updateProperty.images = img.images;\n    return checkUser().properties;\n  } else {\n    return checkUser().properties;\n  }\n}\n\n//# sourceURL=webpack:///./src/client/components/admin/functions/UpdateProps.js?");

/***/ }),

/***/ "./src/client/components/admin/functions/UploadImages.js":
/*!***************************************************************!*\
  !*** ./src/client/components/admin/functions/UploadImages.js ***!
  \***************************************************************/
/*! exports provided: uploadImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"uploadImage\", function() { return uploadImage; });\nfunction uploadImage(images, currentData, setSuccess, setError, setNewImg, setUser) {\n  var formData = new FormData();\n  Object.values(images).forEach(function (file) {\n    formData.append(\"file\", file);\n  });\n  fetch(\"/addPropImages?id=\".concat(currentData._id), {\n    method: 'POST',\n    body: formData\n  }).then(function (res) {\n    return res.json();\n  }).then(function (json) {\n    if (json.error) {\n      return setError(true);\n    }\n\n    setNewImg(json);\n    setSuccess(true);\n  }).catch(function (err) {\n    console.log('err', err);\n    setError(true);\n  });\n}\n\n//# sourceURL=webpack:///./src/client/components/admin/functions/UploadImages.js?");

/***/ }),

/***/ "./src/client/components/admin/index.js":
/*!**********************************************!*\
  !*** ./src/client/components/admin/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ \"./src/client/components/admin/styled.js\");\n/* harmony import */ var _addProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addProperty */ \"./src/client/components/admin/addProperty/index.js\");\n/* harmony import */ var _propertyList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./propertyList */ \"./src/client/components/admin/propertyList/index.js\");\n/* harmony import */ var _functions_AddProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/AddProperty */ \"./src/client/components/admin/functions/AddProperty.js\");\n/* harmony import */ var _functions_EditProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/EditProperty */ \"./src/client/components/admin/functions/EditProperty.js\");\n/* harmony import */ var _functions_DeleteProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./functions/DeleteProperty */ \"./src/client/components/admin/functions/DeleteProperty.js\");\n/* harmony import */ var _functions_UploadImages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./functions/UploadImages */ \"./src/client/components/admin/functions/UploadImages.js\");\n/* harmony import */ var _functions_DeleteImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./functions/DeleteImage */ \"./src/client/components/admin/functions/DeleteImage.js\");\n/* harmony import */ var _functions_UpdateProps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./functions/UpdateProps */ \"./src/client/components/admin/functions/UpdateProps.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/actions */ \"./src/client/redux/actions/index.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Admin(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      form = _useState2[0],\n      showForm = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      _useState4 = _slicedToArray(_useState3, 2),\n      data = _useState4[0],\n      setData = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      _useState6 = _slicedToArray(_useState5, 2),\n      images = _useState6[0],\n      setImages = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      _useState8 = _slicedToArray(_useState7, 2),\n      newImg = _useState8[0],\n      setNewImg = _useState8[1];\n\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      _useState10 = _slicedToArray(_useState9, 2),\n      delImg = _useState10[0],\n      delNewImg = _useState10[1];\n\n  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      _useState12 = _slicedToArray(_useState11, 2),\n      imgIndex = _useState12[0],\n      setImgIndex = _useState12[1];\n\n  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      _useState14 = _slicedToArray(_useState13, 2),\n      newProp = _useState14[0],\n      setNewProp = _useState14[1];\n\n  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState16 = _slicedToArray(_useState15, 2),\n      modal = _useState16[0],\n      setModal = _useState16[1];\n\n  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState18 = _slicedToArray(_useState17, 2),\n      newModal = _useState18[0],\n      setNewModal = _useState18[1];\n\n  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      _useState20 = _slicedToArray(_useState19, 2),\n      currentData = _useState20[0],\n      setCurrentData = _useState20[1];\n\n  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      _useState22 = _slicedToArray(_useState21, 2),\n      editData = _useState22[0],\n      setEditData = _useState22[1];\n\n  var _useState23 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState24 = _slicedToArray(_useState23, 2),\n      delImgModal = _useState24[0],\n      setImgModal = _useState24[1];\n\n  var _useState25 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState26 = _slicedToArray(_useState25, 2),\n      error = _useState26[0],\n      setError = _useState26[1];\n\n  var _useState27 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState28 = _slicedToArray(_useState27, 2),\n      success = _useState28[0],\n      setSuccess = _useState28[1];\n\n  var _useState29 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      _useState30 = _slicedToArray(_useState29, 2),\n      flash = _useState30[0],\n      setFlash = _useState30[1];\n\n  var _useState31 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      _useState32 = _slicedToArray(_useState31, 2),\n      added = _useState32[0],\n      setAdded = _useState32[1];\n\n  var _useState33 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState34 = _slicedToArray(_useState33, 2),\n      selected = _useState34[0],\n      setDeleteImg = _useState34[1];\n\n  var postcodes = [\"N1\", \"NW1\", \"N5\", \"E1\", \"E2\", \"E8\", \"SE1\", \"SE16\", \"SW8\", \"W1\", \"W2\", \"W9\"];\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (images) {\n      imageUpload();\n    }\n  }, [images, props.user, props.reduxUser, selected]);\n\n  var checkUser = function checkUser() {\n    return props.reduxUser ? props.reduxUser : props.user;\n  };\n\n  var clearProps = function clearProps() {\n    delNewImg(null);\n    setNewImg(null);\n  };\n\n  var handleAddProperty = function handleAddProperty(e) {\n    clearProps();\n    Object(_functions_AddProperty__WEBPACK_IMPORTED_MODULE_4__[\"addProperty\"])(e, data, props, setNewProp, props.setUser, setFlash, setNewModal, setAdded);\n  };\n\n  var handleEditSubmit = function handleEditSubmit(e) {\n    clearProps();\n    Object(_functions_EditProperty__WEBPACK_IMPORTED_MODULE_5__[\"editProperty\"])(e, editData, props, setNewProp, props.setUser);\n    setModal(false);\n  };\n\n  var handleDeleteProp = function handleDeleteProp(el) {\n    clearProps();\n    Object(_functions_DeleteProperty__WEBPACK_IMPORTED_MODULE_6__[\"deleteProperty\"])(el, props, setNewProp, props.setUser);\n  };\n\n  var imageUpload = function imageUpload() {\n    delNewImg(null);\n    Object(_functions_UploadImages__WEBPACK_IMPORTED_MODULE_7__[\"uploadImage\"])(images, currentData, setSuccess, setError, setNewImg, props);\n    setImages(null);\n  };\n\n  var handleSelectImage = function handleSelectImage(el) {\n    var check = selected.find(function (item) {\n      return item == el;\n    });\n\n    if (check) {\n      var update = selected.filter(function (item) {\n        return item !== el;\n      });\n      setDeleteImg(update);\n    } else {\n      setDeleteImg([].concat(_toConsumableArray(selected), [el]));\n    }\n  };\n\n  var handleDeleteImages = function handleDeleteImages(clear) {\n    if (clear) {\n      setDeleteImg([]);\n      return;\n    }\n\n    var uniqueImages = new Set(selected);\n    setNewImg(null);\n    Object(_functions_DeleteImage__WEBPACK_IMPORTED_MODULE_8__[\"deleteImage\"])(uniqueImages, editData, props, delNewImg);\n  };\n\n  var currentProperties = function currentProperties() {\n    return Object(_functions_UpdateProps__WEBPACK_IMPORTED_MODULE_9__[\"updateProps\"])(newImg, delImg, checkUser);\n  };\n\n  return checkUser() ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__[\"AdminWrap\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_addProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    showForm: showForm,\n    handleAddProperty: handleAddProperty,\n    setData: setData,\n    data: data,\n    postcodes: postcodes,\n    setFlash: setFlash,\n    newModal: newModal,\n    setNewModal: setNewModal,\n    flash: flash,\n    added: added\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Your current properties\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__[\"TableStyle\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Title\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Edit\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", {\n    style: {\n      position: 'relative'\n    }\n  }, \"Add Images\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__[\"InfoWrap\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__[\"InfoIcon\"], {\n    size: \"23\",\n    color: \"darkred\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__[\"Tooltip\"], {\n    className: \"tooltip\"\n  }, \"Type - \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", null, \"jpg, jpeg, gif, or png.\"), \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \" Recommended: \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \" Aspect Ratio - \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", null, \"3:2\")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Delete Images\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Delete Property\")), currentProperties().map(function (el) {\n    var _React$createElement;\n\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_propertyList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], (_React$createElement = {\n      el: el,\n      key: el._id,\n      handleDeleteProp: handleDeleteProp,\n      setModal: setModal,\n      modal: modal,\n      editData: editData,\n      delImg: delImg,\n      setEditData: setEditData,\n      handleEditSubmit: handleEditSubmit,\n      postcodes: postcodes,\n      setCurrentData: setCurrentData,\n      setImages: setImages,\n      setImgIndex: setImgIndex,\n      setImgModal: setImgModal,\n      delImgModal: delImgModal,\n      error: error,\n      success: success\n    }, _defineProperty(_React$createElement, \"setImgIndex\", setImgIndex), _defineProperty(_React$createElement, \"imgIndex\", imgIndex), _defineProperty(_React$createElement, \"newProp\", newProp), _defineProperty(_React$createElement, \"handleSelectImage\", handleSelectImage), _defineProperty(_React$createElement, \"handleDeleteImages\", handleDeleteImages), _React$createElement));\n  }))))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Loading...\");\n}\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    setUser: function setUser(user) {\n      return dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_11__[\"setUser\"])(user));\n    }\n  };\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    reduxUser: state.user\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Admin));\n\n//# sourceURL=webpack:///./src/client/components/admin/index.js?");

/***/ }),

/***/ "./src/client/components/admin/propertyList/addImages/index.js":
/*!*********************************************************************!*\
  !*** ./src/client/components/admin/propertyList/addImages/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ \"./src/client/components/admin/propertyList/addImages/styled.js\");\n/* harmony import */ var styled_icons_material_Done__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-icons/material/Done */ \"styled-icons/material/Done\");\n/* harmony import */ var styled_icons_material_Done__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_icons_material_Done__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_icons_boxicons_regular_ErrorCircle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-icons/boxicons-regular/ErrorCircle */ \"styled-icons/boxicons-regular/ErrorCircle\");\n/* harmony import */ var styled_icons_boxicons_regular_ErrorCircle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_icons_boxicons_regular_ErrorCircle__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar AddImages = function AddImages(_ref) {\n  var setCurrentData = _ref.setCurrentData,\n      el = _ref.el,\n      setImages = _ref.setImages,\n      setImgIndex = _ref.setImgIndex,\n      success = _ref.success,\n      error = _ref.error,\n      imgIndex = _ref.imgIndex;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__[\"FileWrap\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__[\"ImgInput\"], {\n    type: \"file\",\n    id: \"files\",\n    name: \"name\",\n    multiple: true,\n    accept: \"image/*\",\n    onChange: function onChange(e) {\n      if (e.target.files.length > 0) {\n        setCurrentData(el);\n        setImages(e.target.files);\n        setImgIndex(el._id);\n      }\n    }\n  })), success && imgIndex == el._id && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_icons_material_Done__WEBPACK_IMPORTED_MODULE_2__[\"Done\"], {\n    size: 20,\n    color: \"green\",\n    style: {\n      marginTop: '0.5em'\n    }\n  }), error && imgIndex == el._id && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_icons_boxicons_regular_ErrorCircle__WEBPACK_IMPORTED_MODULE_3__[\"ErrorCircle\"], {\n    size: 20,\n    color: \"red\",\n    style: {\n      marginTop: '0.5em'\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddImages);\n\n//# sourceURL=webpack:///./src/client/components/admin/propertyList/addImages/index.js?");

/***/ }),

/***/ "./src/client/components/admin/propertyList/addImages/styled.js":
/*!**********************************************************************!*\
  !*** ./src/client/components/admin/propertyList/addImages/styled.js ***!
  \**********************************************************************/
/*! exports provided: FileWrap, ImgInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FileWrap\", function() { return FileWrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ImgInput\", function() { return ImgInput; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\nwidth:200px;\\nbackground: darkred;\\nposition: relative;\\ncolor: white;\\n\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\ntext-align:center;\\n\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar FileWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject());\nvar ImgInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input(_templateObject2());\n\n//# sourceURL=webpack:///./src/client/components/admin/propertyList/addImages/styled.js?");

/***/ }),

/***/ "./src/client/components/admin/propertyList/deleteImages/ImageModal.js":
/*!*****************************************************************************!*\
  !*** ./src/client/components/admin/propertyList/deleteImages/ImageModal.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _generic_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../generic/modal */ \"./src/client/components/generic/modal/index.js\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ \"./src/client/components/admin/propertyList/deleteImages/styled.js\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loadable */ \"react-loadable\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _generic_loading_placeholder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../generic/loading/placeholder */ \"./src/client/components/generic/loading/placeholder.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nvar ModalImg = react_loadable__WEBPACK_IMPORTED_MODULE_3___default()({\n  loader: function loader() {\n    return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./ModalImg */ \"./src/client/components/admin/propertyList/deleteImages/ModalImg.js\"));\n  },\n  loading: function loading() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_generic_loading_placeholder__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      width: '200px',\n      height: '100px'\n    });\n  }\n});\n\nfunction DeleteImages(_ref) {\n  var delImgModal = _ref.delImgModal,\n      setImgModal = _ref.setImgModal,\n      editData = _ref.editData,\n      handleSelectImage = _ref.handleSelectImage,\n      handleDeleteImages = _ref.handleDeleteImages;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      selected = _useState2[0],\n      setSelected = _useState2[1];\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_generic_modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    trigger: delImgModal,\n    triggerFunc: setImgModal,\n    clear: setSelected,\n    content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"ModalWrap\"], null, editData.images.map(function (el) {\n      var checkSel = selected.find(function (item) {\n        return item == el;\n      });\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n        style: {\n          margin: \"0.5em\",\n          position: \"relative\"\n        },\n        key: el\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ModalImg, {\n        el: el\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"DeleteIcon\"], {\n        size: \"30\",\n        color: checkSel ? 'red' : 'darkred',\n        onClick: function onClick() {\n          if (checkSel) {\n            var update = selected.filter(function (item) {\n              return item !== el;\n            });\n            setSelected(update);\n            handleSelectImage(el);\n          } else {\n            setSelected([].concat(_toConsumableArray(selected), [el]));\n            handleSelectImage(el);\n          }\n        }\n      }));\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      id: \"submit\",\n      onClick: function onClick() {\n        if (selected.length > 0) {\n          handleDeleteImages();\n          setSelected([]);\n          setImgModal(false);\n        }\n      }\n    }, \"save\"))\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DeleteImages);\n\n//# sourceURL=webpack:///./src/client/components/admin/propertyList/deleteImages/ImageModal.js?");

/***/ }),

/***/ "./src/client/components/admin/propertyList/deleteImages/index.js":
/*!************************************************************************!*\
  !*** ./src/client/components/admin/propertyList/deleteImages/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ \"./src/client/components/admin/propertyList/deleteImages/styled.js\");\n\n\n\nvar ToggleImages = function ToggleImages(_ref) {\n  var setEditData = _ref.setEditData,\n      el = _ref.el,\n      setImgModal = _ref.setImgModal,\n      handleDeleteImages = _ref.handleDeleteImages;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n    style: {\n      textAlign: 'center'\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__[\"ViewImgBtn\"], {\n    id: \"delImg\",\n    onClick: function onClick() {\n      setEditData(el);\n      setImgModal(true);\n      handleDeleteImages(true);\n    }\n  }, \"View\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToggleImages);\n\n//# sourceURL=webpack:///./src/client/components/admin/propertyList/deleteImages/index.js?");

/***/ }),

/***/ "./src/client/components/admin/propertyList/deleteImages/styled.js":
/*!*************************************************************************!*\
  !*** ./src/client/components/admin/propertyList/deleteImages/styled.js ***!
  \*************************************************************************/
/*! exports provided: DeleteIcon, ViewImgBtn, ModalWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DeleteIcon\", function() { return DeleteIcon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ViewImgBtn\", function() { return ViewImgBtn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ModalWrap\", function() { return ModalWrap; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_icons_material_Delete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-icons/material/Delete */ \"styled-icons/material/Delete\");\n/* harmony import */ var styled_icons_material_Delete__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_icons_material_Delete__WEBPACK_IMPORTED_MODULE_1__);\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n  padding: 1em 1em 3em 1em;\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n  button {\\n    width:312px;\\n    position:absolute;\\n    bottom:10px;\\n    margin:0;\\n  }\\n\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n  background: darkred;\\n  color: white !important;\\n  margin: 0;\\n  :hover {\\n    background: darkred !important;\\n    border: 1px solid black;\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  position: absolute;\\n  bottom: 5px;\\n  right: 0;\\n\\n  :hover {\\n    color: red;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nvar DeleteIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(styled_icons_material_Delete__WEBPACK_IMPORTED_MODULE_1__[\"Delete\"])(_templateObject());\nvar ViewImgBtn = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button(_templateObject2());\nvar ModalWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject3());\n\n//# sourceURL=webpack:///./src/client/components/admin/propertyList/deleteImages/styled.js?");

/***/ }),

/***/ "./src/client/components/admin/propertyList/editProperty/index.js":
/*!************************************************************************!*\
  !*** ./src/client/components/admin/propertyList/editProperty/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _generic_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../generic/modal */ \"./src/client/components/generic/modal/index.js\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styled */ \"./src/client/components/admin/styled.js\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styled */ \"./src/client/components/admin/propertyList/editProperty/styled.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nvar EditProperty = function EditProperty(_ref) {\n  var el = _ref.el,\n      setModal = _ref.setModal,\n      modal = _ref.modal,\n      editData = _ref.editData,\n      setEditData = _ref.setEditData,\n      handleEditSubmit = _ref.handleEditSubmit,\n      postcodes = _ref.postcodes;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n    style: {\n      textAlign: 'center'\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_4__[\"EditIcon\"], {\n    id: \"edit\",\n    size: \"30\",\n    onClick: function onClick() {\n      setEditData(el);\n      setModal(true);\n    },\n    color: \"darkred\"\n  })), modal && editData._id == el._id && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_generic_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    trigger: modal,\n    triggerFunc: setModal,\n    content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__[\"FormModal\"], {\n      onSubmit: handleEditSubmit\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      placeholder: \"title\",\n      value: editData.title,\n      onChange: function onChange(e) {\n        setEditData(_objectSpread({}, editData, {\n          title: e.target.value\n        }));\n      }\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      value: editData.rooms,\n      placeholder: \"rooms\",\n      onChange: function onChange(e) {\n        setEditData(_objectSpread({}, editData, {\n          rooms: e.target.value\n        }));\n      }\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      value: editData.guests,\n      placeholder: \"guests\",\n      type: \"number\",\n      name: \"guests\",\n      min: \"1\",\n      max: \"30\",\n      onChange: function onChange(e) {\n        setEditData(_objectSpread({}, editData, {\n          guests: e.target.value\n        }));\n      }\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      value: editData.price,\n      placeholder: \"price\",\n      type: \"number\",\n      name: \"price\",\n      min: \"1\",\n      max: \"500\",\n      step: \"0.01\",\n      onChange: function onChange(e) {\n        setEditData(_objectSpread({}, editData, {\n          price: e.target.value\n        }));\n      }\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"select\", {\n      onChange: function onChange(e) {\n        if (e.target.value !== \"\") {\n          var coords = e.target.value;\n          setEditData(_objectSpread({}, editData, {\n            coords: coords\n          }));\n        }\n      }\n    }, \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n      value: \"\"\n    }, \"select\"), postcodes.map(function (el) {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n        value: el,\n        key: el\n      }, el);\n    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      id: \"submit\"\n    }, \"save\"))\n  }));\n};\n\nEditProperty.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditProperty);\n\n//# sourceURL=webpack:///./src/client/components/admin/propertyList/editProperty/index.js?");

/***/ }),

/***/ "./src/client/components/admin/propertyList/editProperty/styled.js":
/*!*************************************************************************!*\
  !*** ./src/client/components/admin/propertyList/editProperty/styled.js ***!
  \*************************************************************************/
/*! exports provided: EditIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EditIcon\", function() { return EditIcon; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_icons_boxicons_solid_Edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-icons/boxicons-solid/Edit */ \"styled-icons/boxicons-solid/Edit\");\n/* harmony import */ var styled_icons_boxicons_solid_Edit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_icons_boxicons_solid_Edit__WEBPACK_IMPORTED_MODULE_1__);\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n:hover {\\n    color: black;\\n}\\n\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nvar EditIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(styled_icons_boxicons_solid_Edit__WEBPACK_IMPORTED_MODULE_1__[\"Edit\"])(_templateObject());\n\n//# sourceURL=webpack:///./src/client/components/admin/propertyList/editProperty/styled.js?");

/***/ }),

/***/ "./src/client/components/admin/propertyList/index.js":
/*!***********************************************************!*\
  !*** ./src/client/components/admin/propertyList/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styled */ \"./src/client/components/admin/styled.js\");\n/* harmony import */ var _editProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editProperty */ \"./src/client/components/admin/propertyList/editProperty/index.js\");\n/* harmony import */ var _deleteImages_ImageModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deleteImages/ImageModal */ \"./src/client/components/admin/propertyList/deleteImages/ImageModal.js\");\n/* harmony import */ var _addImages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addImages */ \"./src/client/components/admin/propertyList/addImages/index.js\");\n/* harmony import */ var _deleteImages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deleteImages */ \"./src/client/components/admin/propertyList/deleteImages/index.js\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styled */ \"./src/client/components/admin/propertyList/styled.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\nfunction PropertyList(_ref) {\n  var el = _ref.el,\n      handleDeleteProp = _ref.handleDeleteProp,\n      setModal = _ref.setModal,\n      modal = _ref.modal,\n      editData = _ref.editData,\n      delImg = _ref.delImg,\n      setEditData = _ref.setEditData,\n      handleEditSubmit = _ref.handleEditSubmit,\n      postcodes = _ref.postcodes,\n      setCurrentData = _ref.setCurrentData,\n      setImages = _ref.setImages,\n      setImgModal = _ref.setImgModal,\n      delImgModal = _ref.delImgModal,\n      success = _ref.success,\n      error = _ref.error,\n      setImgIndex = _ref.setImgIndex,\n      imgIndex = _ref.imgIndex,\n      newProp = _ref.newProp,\n      handleSelectImage = _ref.handleSelectImage,\n      handleDeleteImages = _ref.handleDeleteImages;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      remove = _useState2[0],\n      setRemove = _useState2[1];\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", {\n    id: \"property\",\n    className: remove ? \"remove\" : undefined\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, el.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_editProperty__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    el: el,\n    setModal: setModal,\n    modal: modal,\n    editData: editData,\n    setEditData: setEditData,\n    handleEditSubmit: handleEditSubmit,\n    postcodes: postcodes\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_addImages__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    setCurrentData: setCurrentData,\n    setImages: setImages,\n    setImgIndex: setImgIndex,\n    success: success,\n    error: error,\n    imgIndex: imgIndex,\n    el: el\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, el.images.length > 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_deleteImages__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    setEditData: setEditData,\n    el: el,\n    setImgModal: setImgModal,\n    handleSelectImage: handleSelectImage,\n    handleDeleteImages: handleDeleteImages\n  }) : 'No images added yet...'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n    style: {\n      textAlign: 'center'\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_7__[\"DeleteIcon\"], {\n    size: \"30\",\n    color: \"darkred\",\n    onClick: function onClick() {\n      setRemove(true);\n      handleDeleteProp(el);\n    }\n  }))), delImgModal && editData._id == el._id && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_deleteImages_ImageModal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    delImgModal: delImgModal,\n    setImgModal: setImgModal,\n    editData: editData,\n    delImg: delImg,\n    newProp: newProp,\n    el: el,\n    handleSelectImage: handleSelectImage,\n    handleDeleteImages: handleDeleteImages\n  }));\n}\n\nPropertyList.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PropertyList);\n\n//# sourceURL=webpack:///./src/client/components/admin/propertyList/index.js?");

/***/ }),

/***/ "./src/client/components/admin/propertyList/styled.js":
/*!************************************************************!*\
  !*** ./src/client/components/admin/propertyList/styled.js ***!
  \************************************************************/
/*! exports provided: DeleteIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DeleteIcon\", function() { return DeleteIcon; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_icons_material_Delete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-icons/material/Delete */ \"styled-icons/material/Delete\");\n/* harmony import */ var styled_icons_material_Delete__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_icons_material_Delete__WEBPACK_IMPORTED_MODULE_1__);\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n:hover{\\n    color:red;\\n}\\n\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nvar DeleteIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(styled_icons_material_Delete__WEBPACK_IMPORTED_MODULE_1__[\"Delete\"])(_templateObject());\n\n//# sourceURL=webpack:///./src/client/components/admin/propertyList/styled.js?");

/***/ }),

/***/ "./src/client/components/admin/styled.js":
/*!***********************************************!*\
  !*** ./src/client/components/admin/styled.js ***!
  \***********************************************/
/*! exports provided: InfoIcon, InfoWrap, Tooltip, AdminWrap, FormStyle, FormModal, TableStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InfoIcon\", function() { return InfoIcon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InfoWrap\", function() { return InfoWrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tooltip\", function() { return Tooltip; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AdminWrap\", function() { return AdminWrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FormStyle\", function() { return FormStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FormModal\", function() { return FormModal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TableStyle\", function() { return TableStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-icons/boxicons-regular/InfoCircle */ \"styled-icons/boxicons-regular/InfoCircle\");\n/* harmony import */ var styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_1__);\nfunction _templateObject7() {\n  var data = _taggedTemplateLiteral([\"\\n  margin: auto;\\n  width:100%;\\n  text-align:center;\\n  th,\\n  td {\\n    padding: 8px;\\n    text-align:center;\\n  }\\n  th {\\n    color: white;\\n    background-color: lightslategray;\\n    font-weight: 500;\\n  }\\n  tr {\\n    background-color: #e9e9e9;\\n    color: midnightblue;\\n  }\\n  div {\\n    padding: 0.3em;\\n    margin-bottom: 0.5em;\\n    display: flex;\\n  }\\n  label {\\n    width: 120px;\\n    padding-top: 0.5em;\\n  }\\n  input {\\n    margin: 0;\\n  }\\n\\n  button {\\n    color: black;\\n  }\\n\\n  transition: all 2000ms;\\n  opacity: 1;\\n\"]);\n\n  _templateObject7 = function _templateObject7() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject6() {\n  var data = _taggedTemplateLiteral([\"\\n  margin-top: 2em;\\n  * {\\n    margin: auto;\\n  }\\n  select {\\n    margin-left: auto !important;\\n  }\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = _taggedTemplateLiteral([\"\\n  width: 100%;\\n  * {\\n    margin: auto;\\n  }\\n  select {\\n  }\\n  input,\\n  select {\\n    display: block;\\n    width: 300px;\\n  }\\n  button {\\n    width: 312px;\\n    display: block;\\n    margin-top: 2em;\\n  }\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = _taggedTemplateLiteral([\"\\n  h4 {\\n    text-align: center;\\n  }\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n    opacity:0;\\n    position:absolute;\\n    z-index:10;\\n    background:rgba(53,48,48,0.9);\\n    padding:0.3em;\\n    border-radius:5px;\\n    width:200px;\\n    top:-6em;\\n    :hover {\\n      opacity:0 !important;\\n    }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n:hover {\\n  .tooltip {\\n    opacity:1\\n  }\\n}\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nvar InfoIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(styled_icons_boxicons_regular_InfoCircle__WEBPACK_IMPORTED_MODULE_1__[\"InfoCircle\"])(_templateObject());\nvar InfoWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span(_templateObject2());\nvar Tooltip = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span(_templateObject3());\nvar AdminWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject4());\nvar FormStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form(_templateObject5());\nvar FormModal = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(FormStyle)(_templateObject6());\nvar TableStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.table(_templateObject7());\n\n//# sourceURL=webpack:///./src/client/components/admin/styled.js?");

/***/ }),

/***/ "./src/client/components/bookings/bookingList/bookingCard/cardContent/index.js":
/*!*************************************************************************************!*\
  !*** ./src/client/components/bookings/bookingList/bookingCard/cardContent/index.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _viewings_functions_ModifyDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../viewings/functions/ModifyDate */ \"./src/client/components/viewings/functions/ModifyDate.js\");\n\n\n\nvar CardText = function CardText(_ref) {\n  var item = _ref.item,\n      remove = _ref.remove,\n      setRemove = _ref.setRemove,\n      date = _ref.date,\n      handleCancelBooking = _ref.handleCancelBooking;\n  //const date = modifyDate(item.event);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", {\n    className: remove ? \"remove\" : undefined\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, \"\".concat(date.date, \" - \").concat(date.time)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, item.event.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, item.event.description)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, item.property.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, item.property.price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    style: {\n      background: \"darkred\",\n      marginTop: \"1em\"\n    },\n    onClick: function onClick() {\n      handleCancelBooking(item);\n      setRemove(true);\n    }\n  }, \"Cancel\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardText);\n\n//# sourceURL=webpack:///./src/client/components/bookings/bookingList/bookingCard/cardContent/index.js?");

/***/ }),

/***/ "./src/client/components/bookings/bookingList/bookingCard/index.js":
/*!*************************************************************************!*\
  !*** ./src/client/components/bookings/bookingList/bookingCard/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _viewings_functions_ModifyDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../viewings/functions/ModifyDate */ \"./src/client/components/viewings/functions/ModifyDate.js\");\n/* harmony import */ var _cardContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cardContent */ \"./src/client/components/bookings/bookingList/bookingCard/cardContent/index.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nfunction BookingCard(_ref) {\n  var item = _ref.item,\n      handleCancelBooking = _ref.handleCancelBooking;\n  var date = Object(_viewings_functions_ModifyDate__WEBPACK_IMPORTED_MODULE_1__[\"modifyDate\"])(item.event);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      remove = _useState2[0],\n      setRemove = _useState2[1];\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_cardContent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    remove: remove,\n    date: date,\n    item: item,\n    handleCancelBooking: handleCancelBooking,\n    setRemove: setRemove\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BookingCard);\n\n//# sourceURL=webpack:///./src/client/components/bookings/bookingList/bookingCard/index.js?");

/***/ }),

/***/ "./src/client/components/bookings/bookingList/index.js":
/*!*************************************************************!*\
  !*** ./src/client/components/bookings/bookingList/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _admin_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../admin/styled */ \"./src/client/components/admin/styled.js\");\n/* harmony import */ var _generic_table_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../generic/table/styled */ \"./src/client/components/generic/table/styled.js\");\n/* harmony import */ var _bookingCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bookingCard */ \"./src/client/components/bookings/bookingList/bookingCard/index.js\");\n\n\n\n\n\nfunction BookingList(_ref) {\n  var setMap = _ref.setMap,\n      bookings = _ref.bookings,\n      handleCancelBooking = _ref.handleCancelBooking;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Scheduled Viewings:\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      setMap(true);\n    },\n    style: {\n      margin: \"0.5em 0 0.5em 0\",\n      padding: '0.5em'\n    }\n  }, \"Map\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      overflowX: 'auto'\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_generic_table_styled__WEBPACK_IMPORTED_MODULE_2__[\"TableStyle\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Date\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Details\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Property\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Price\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Cancel\")), bookings.map(function (item) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_bookingCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      item: item,\n      handleCancelBooking: handleCancelBooking,\n      key: item._id\n    });\n  })))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BookingList);\n\n//# sourceURL=webpack:///./src/client/components/bookings/bookingList/index.js?");

/***/ }),

/***/ "./src/client/components/bookings/bookingMap/index.js":
/*!************************************************************!*\
  !*** ./src/client/components/bookings/bookingMap/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _generic_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../generic/map */ \"./src/client/components/generic/map/index.js\");\n\n\n\nvar BookingMap = function BookingMap(_ref) {\n  var switchFunc = _ref.switchFunc,\n      bookings = _ref.bookings;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Map\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      switchFunc(false);\n    },\n    style: {\n      margin: '0.5em 0 0.5em 0',\n      padding: '0.5em'\n    }\n  }, \"Viewings\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_generic_map__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    booking: bookings\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BookingMap);\n\n//# sourceURL=webpack:///./src/client/components/bookings/bookingMap/index.js?");

/***/ }),

/***/ "./src/client/components/bookings/functions/CancelBooking.js":
/*!*******************************************************************!*\
  !*** ./src/client/components/bookings/functions/CancelBooking.js ***!
  \*******************************************************************/
/*! exports provided: cancelBooking */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cancelBooking\", function() { return cancelBooking; });\nfunction cancelBooking(item, props, setBookings) {\n  fetch('/deleteBooking', {\n    method: 'DELETE',\n    body: JSON.stringify({\n      data: item,\n      user: props.user\n    }),\n    headers: {\n      'Content-Type': 'application/json'\n    }\n  }).then(function (res) {\n    return res.json();\n  }).then(function (json) {\n    setBookings(json);\n  }).catch(function (err) {\n    return console.log(err);\n  });\n}\n\n//# sourceURL=webpack:///./src/client/components/bookings/functions/CancelBooking.js?");

/***/ }),

/***/ "./src/client/components/bookings/functions/FetchBookings.js":
/*!*******************************************************************!*\
  !*** ./src/client/components/bookings/functions/FetchBookings.js ***!
  \*******************************************************************/
/*! exports provided: fetchBookings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchBookings\", function() { return fetchBookings; });\nfunction fetchBookings(props, setBookings) {\n  fetch('/bookings', {\n    method: 'POST',\n    body: JSON.stringify({\n      user: props.user\n    }),\n    headers: {\n      'Content-Type': 'application/json'\n    }\n  }).then(function (res) {\n    return res.json();\n  }).then(function (json) {\n    setBookings(json);\n  }).catch(function (err) {\n    console.log(err);\n  });\n}\n\n//# sourceURL=webpack:///./src/client/components/bookings/functions/FetchBookings.js?");

/***/ }),

/***/ "./src/client/components/bookings/functions/SwitchView.js":
/*!****************************************************************!*\
  !*** ./src/client/components/bookings/functions/SwitchView.js ***!
  \****************************************************************/
/*! exports provided: switchView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"switchView\", function() { return switchView; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _bookingList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bookingList */ \"./src/client/components/bookings/bookingList/index.js\");\n/* harmony import */ var _bookingMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bookingMap */ \"./src/client/components/bookings/bookingMap/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction switchView(props, bookings, map, setMap, handleCancelBooking) {\n  var component;\n\n  if (props.user && bookings.length > 0 && !map) {\n    component = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_bookingList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      setMap: setMap,\n      bookings: bookings,\n      handleCancelBooking: handleCancelBooking\n    });\n  } else if (props.user && bookings.length > 0 && map) {\n    component = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_bookingMap__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      switchFunc: setMap,\n      bookings: bookings\n    });\n  } else if (props.user && !bookings.length) {\n    component = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"You have not made any bookings yet...\");\n  } else {\n    component = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Please \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Link\"], {\n      to: \"/login\"\n    }, \"login\"), \" to see Bookings\");\n  }\n\n  return component;\n}\n\n//# sourceURL=webpack:///./src/client/components/bookings/functions/SwitchView.js?");

/***/ }),

/***/ "./src/client/components/bookings/index.js":
/*!*************************************************!*\
  !*** ./src/client/components/bookings/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _functions_CancelBooking__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/CancelBooking */ \"./src/client/components/bookings/functions/CancelBooking.js\");\n/* harmony import */ var _functions_FetchBookings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/FetchBookings */ \"./src/client/components/bookings/functions/FetchBookings.js\");\n/* harmony import */ var _functions_SwitchView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/SwitchView */ \"./src/client/components/bookings/functions/SwitchView.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nfunction Bookings(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      bookings = _useState2[0],\n      setBookings = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState4 = _slicedToArray(_useState3, 2),\n      map = _useState4[0],\n      setMap = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    Object(_functions_FetchBookings__WEBPACK_IMPORTED_MODULE_2__[\"fetchBookings\"])(props, setBookings);\n  }, [props.user, map]);\n\n  var handleCancelBooking = function handleCancelBooking(item) {\n    Object(_functions_CancelBooking__WEBPACK_IMPORTED_MODULE_1__[\"cancelBooking\"])(item, props, setBookings);\n  };\n\n  var changeView = function changeView() {\n    return Object(_functions_SwitchView__WEBPACK_IMPORTED_MODULE_3__[\"switchView\"])(props, bookings, map, setMap, handleCancelBooking);\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n    style: {\n      textAlign: \"center\"\n    }\n  }, changeView());\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bookings);\n\n//# sourceURL=webpack:///./src/client/components/bookings/index.js?");

/***/ }),

/***/ "./src/client/components/dashboard/favouritesBtn/index.js":
/*!****************************************************************!*\
  !*** ./src/client/components/dashboard/favouritesBtn/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ \"./src/client/components/dashboard/favouritesBtn/styled.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ \"./src/client/components/dashboard/index.js\");\n\n\n\n\n\nvar FavBtn = function FavBtn(_ref) {\n  var data = _ref.data;\n  var context = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_index__WEBPACK_IMPORTED_MODULE_3__[\"FavContext\"]);\n  return context.loggedIn && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"FavBtnHeart\"], {\n    onClick: function onClick(e) {\n      context.addFav({\n        type: \"favourite\",\n        fav: {\n          propID: data._id,\n          title: data.title\n        }\n      });\n      e.preventDefault();\n    }\n  });\n};\n\nFavBtn.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FavBtn);\n\n//# sourceURL=webpack:///./src/client/components/dashboard/favouritesBtn/index.js?");

/***/ }),

/***/ "./src/client/components/dashboard/favouritesBtn/styled.js":
/*!*****************************************************************!*\
  !*** ./src/client/components/dashboard/favouritesBtn/styled.js ***!
  \*****************************************************************/
/*! exports provided: FavBtnHeart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FavBtnHeart\", function() { return FavBtnHeart; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_icons_boxicons_solid_Heart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-icons/boxicons-solid/Heart */ \"styled-icons/boxicons-solid/Heart\");\n/* harmony import */ var styled_icons_boxicons_solid_Heart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_icons_boxicons_solid_Heart__WEBPACK_IMPORTED_MODULE_1__);\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\nwidth: 35px;\\nposition:absolute;\\ntop:10px;\\nright:10px;\\ncolor: darkred;\\n:hover{\\n  color:#778899;\\n}\\n\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nvar FavBtnHeart = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(styled_icons_boxicons_solid_Heart__WEBPACK_IMPORTED_MODULE_1__[\"Heart\"])(_templateObject());\n\n//# sourceURL=webpack:///./src/client/components/dashboard/favouritesBtn/styled.js?");

/***/ }),

/***/ "./src/client/components/dashboard/favouritesWidget/index.js":
/*!*******************************************************************!*\
  !*** ./src/client/components/dashboard/favouritesWidget/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ \"./src/client/components/dashboard/favouritesWidget/styled.js\");\n\n\n\n\n\nvar Favourites = function Favourites(_ref) {\n  var data = _ref.data,\n      property = _ref.property;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__[\"FavWrap\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Favourites\"), Object.entries(data).length > 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__[\"FavUl\"], null, Object.entries(data).map(function (el) {\n    var matchProp = property.find(function (item) {\n      return item._id == el[0];\n    });\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n      to: {\n        pathname: \"/property/\".concat(el[0]),\n        state: {\n          data: matchProp\n        }\n      },\n      key: el\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__[\"FavLi\"], null, el[1]));\n  })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"no favourites added yet...\"));\n};\n\nFavourites.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Favourites);\n\n//# sourceURL=webpack:///./src/client/components/dashboard/favouritesWidget/index.js?");

/***/ }),

/***/ "./src/client/components/dashboard/favouritesWidget/styled.js":
/*!********************************************************************!*\
  !*** ./src/client/components/dashboard/favouritesWidget/styled.js ***!
  \********************************************************************/
/*! exports provided: FavWrap, FavUl, FavLi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FavWrap\", function() { return FavWrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FavUl\", function() { return FavUl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FavLi\", function() { return FavLi; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n    padding:0.8em;\\n    border-top: 1px solid lightslategray;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n    list-style-type: none;\\n    padding-left:0;\\n    /* background: lightblue; */\\n    color:black;\\n    border-radius: 5px;\\n\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n    margin-top:1em;\\n    @media (min-width: 767px) {\\n        width:350px;\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar FavWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject());\nvar FavUl = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul(_templateObject2());\nvar FavLi = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li(_templateObject3());\n\n//# sourceURL=webpack:///./src/client/components/dashboard/favouritesWidget/styled.js?");

/***/ }),

/***/ "./src/client/components/dashboard/filters/guestCount/index.js":
/*!*********************************************************************!*\
  !*** ./src/client/components/dashboard/filters/guestCount/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ \"./src/client/components/dashboard/filters/guestCount/styled.js\");\n\n\n\n\nvar GuestCount = function GuestCount(_ref) {\n  var guestMethod = _ref.guestMethod,\n      guests = _ref.guests;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"GuestWrap\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Guests\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"FilterButton\"], {\n    onClick: function onClick() {\n      guestMethod({\n        type: \"guests\",\n        count: guests - 1\n      });\n    },\n    disabled: guests == 1 ? true : false\n  }, \"-\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"GuestCountStyle\"], null, guests), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"FilterButton\"], {\n    onClick: function onClick() {\n      guestMethod({\n        type: \"guests\",\n        count: guests + 1\n      });\n    }\n  }, \"+\"));\n};\n\nGuestCount.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (GuestCount);\n\n//# sourceURL=webpack:///./src/client/components/dashboard/filters/guestCount/index.js?");

/***/ }),

/***/ "./src/client/components/dashboard/filters/guestCount/styled.js":
/*!**********************************************************************!*\
  !*** ./src/client/components/dashboard/filters/guestCount/styled.js ***!
  \**********************************************************************/
/*! exports provided: GuestWrap, FilterButton, GuestCountStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GuestWrap\", function() { return GuestWrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FilterButton\", function() { return FilterButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GuestCountStyle\", function() { return GuestCountStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n  padding: 0 0.5em 0 0.5em;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n  margin: 0.5em 0em 0.5em 0;\\n  padding: 0.2em;\\n  color:white;\\n  border-radius: 5px;\\n  width: 30px;\\n  height: 30px;\\n  :hover {\\n    color: white;\\n  }\\n\\n  :focus {\\n    outline: none;\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  margin-top: 3em;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar GuestWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject());\nvar FilterButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button(_templateObject2());\nvar GuestCountStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span(_templateObject3());\n\n//# sourceURL=webpack:///./src/client/components/dashboard/filters/guestCount/styled.js?");

/***/ }),

/***/ "./src/client/components/dashboard/filters/index.js":
/*!**********************************************************!*\
  !*** ./src/client/components/dashboard/filters/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ \"./src/client/components/dashboard/filters/styled.js\");\n/* harmony import */ var _priceRange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./priceRange */ \"./src/client/components/dashboard/filters/priceRange/index.js\");\n/* harmony import */ var _guestCount__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guestCount */ \"./src/client/components/dashboard/filters/guestCount/index.js\");\n\n\n\n\n\n\nfunction SideBar(_ref) {\n  var guestMethod = _ref.guestMethod,\n      guests = _ref.guests,\n      priceMethod = _ref.priceMethod;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"SidebarWrap\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_priceRange__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    priceMethod: priceMethod\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_guestCount__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    guestMethod: guestMethod,\n    guests: guests\n  }));\n}\n\nSideBar.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideBar);\n\n//# sourceURL=webpack:///./src/client/components/dashboard/filters/index.js?");

/***/ }),

/***/ "./src/client/components/dashboard/filters/priceRange/index.js":
/*!*********************************************************************!*\
  !*** ./src/client/components/dashboard/filters/priceRange/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ \"./src/client/components/dashboard/filters/priceRange/styled.js\");\n\n\n\nvar marks = {\n  0: \"£10\",\n  500: \"£500\"\n};\n\nvar PriceRange = function PriceRange(_ref) {\n  var priceMethod = _ref.priceMethod;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"PriceWrap\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Price\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"RangeStyle\"], {\n    marks: marks,\n    max: 500,\n    defaultValue: [10, 150],\n    trackStyle: [{\n      background: 'darkred'\n    }],\n    onChange: function onChange(val) {\n      priceMethod({\n        type: \"price\",\n        price: val\n      });\n    }\n  }));\n};\n\nPriceRange.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PriceRange);\n\n//# sourceURL=webpack:///./src/client/components/dashboard/filters/priceRange/index.js?");

/***/ }),

/***/ "./src/client/components/dashboard/filters/priceRange/styled.js":
/*!**********************************************************************!*\
  !*** ./src/client/components/dashboard/filters/priceRange/styled.js ***!
  \**********************************************************************/
/*! exports provided: PriceWrap, RangeStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PriceWrap\", function() { return PriceWrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RangeStyle\", function() { return RangeStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-slider */ \"rc-slider\");\n/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rc_slider__WEBPACK_IMPORTED_MODULE_1__);\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n.rc-slider-handle.rc-slider-handle-1{\\n  border: solid 2px darkred !important;\\n}\\n.rc-slider-handle.rc-slider-handle-2{\\n  border: solid 2px darkred !important;\\n}\\n.rc-slider-mark-text{\\n  left:97% !important;\\n}\\n.rc-slider-step{\\n  width:97% !important;\\n}\\n.rc-slider-rail{\\n  width:99% !important;\\n}\\n\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  margin-top: 1.5em;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nvar PriceWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject());\nvar RangeStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(rc_slider__WEBPACK_IMPORTED_MODULE_1__[\"Range\"])(_templateObject2());\n\n//# sourceURL=webpack:///./src/client/components/dashboard/filters/priceRange/styled.js?");

/***/ }),

/***/ "./src/client/components/dashboard/filters/styled.js":
/*!***********************************************************!*\
  !*** ./src/client/components/dashboard/filters/styled.js ***!
  \***********************************************************/
/*! exports provided: SidebarWrap, GuestCount, FilterButton, PriceWrap, GuestWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SidebarWrap\", function() { return SidebarWrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GuestCount\", function() { return GuestCount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FilterButton\", function() { return FilterButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PriceWrap\", function() { return PriceWrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GuestWrap\", function() { return GuestWrap; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-slider */ \"rc-slider\");\n/* harmony import */ var rc_slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rc_slider__WEBPACK_IMPORTED_MODULE_1__);\nfunction _templateObject5() {\n  var data = _taggedTemplateLiteral([\"\\n  margin-top: 3em;\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = _taggedTemplateLiteral([\"\\n  margin-top: 1.5em;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n  margin: 0.5em 0em 0.5em 0;\\n  padding: 0.2em;\\n  color:white;\\n  border-radius: 5px;\\n  width: 30px;\\n  height: 30px;\\n  :hover {\\n    color: white;\\n  }\\n\\n  :focus {\\n    outline: none;\\n  }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n  padding: 0 0.5em 0 0.5em;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  @media (min-width: 767px) {\\n    width: 350px;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nvar SidebarWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject());\nvar GuestCount = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span(_templateObject2());\nvar FilterButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button(_templateObject3());\nvar PriceWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject4());\nvar GuestWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject5());\n\n//# sourceURL=webpack:///./src/client/components/dashboard/filters/styled.js?");

/***/ }),

/***/ "./src/client/components/dashboard/functions/AddFavourite.js":
/*!*******************************************************************!*\
  !*** ./src/client/components/dashboard/functions/AddFavourite.js ***!
  \*******************************************************************/
/*! exports provided: addFavourite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addFavourite\", function() { return addFavourite; });\nfunction addFavourite(data, setFave, user) {\n  data.user = user;\n  fetch(\"/favourites\", {\n    method: 'POST',\n    body: JSON.stringify(data),\n    headers: {\n      'Content-Type': 'application/json'\n    }\n  }).then(function (res) {\n    return res.json();\n  }).then(function (json) {\n    setFave(json);\n  }).catch(function (err) {\n    return console.log(err);\n  });\n}\n\n//# sourceURL=webpack:///./src/client/components/dashboard/functions/AddFavourite.js?");

/***/ }),

/***/ "./src/client/components/dashboard/functions/FetchProperties.js":
/*!**********************************************************************!*\
  !*** ./src/client/components/dashboard/functions/FetchProperties.js ***!
  \**********************************************************************/
/*! exports provided: fetchProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchProperties\", function() { return fetchProperties; });\nfunction fetchProperties(setData) {\n  fetch(\"/properties\").then(function (res) {\n    return res.json();\n  }).then(function (json) {\n    return setData(json);\n  }).catch(function (err) {\n    return console.log(err);\n  });\n}\n\n//# sourceURL=webpack:///./src/client/components/dashboard/functions/FetchProperties.js?");

/***/ }),

/***/ "./src/client/components/dashboard/index.js":
/*!**************************************************!*\
  !*** ./src/client/components/dashboard/index.js ***!
  \**************************************************/
/*! exports provided: FavContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FavContext\", function() { return FavContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search */ \"./src/client/components/dashboard/search/index.js\");\n/* harmony import */ var _propertyCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./propertyCard */ \"./src/client/components/dashboard/propertyCard/index.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filters */ \"./src/client/components/dashboard/filters/index.js\");\n/* harmony import */ var _favouritesWidget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./favouritesWidget */ \"./src/client/components/dashboard/favouritesWidget/index.js\");\n/* harmony import */ var _redux_hooksReducers_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/hooksReducers/search */ \"./src/client/redux/hooksReducers/search.js\");\n/* harmony import */ var _redux_hooksReducers_favourites__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/hooksReducers/favourites */ \"./src/client/redux/hooksReducers/favourites.js\");\n/* harmony import */ var _functions_FetchProperties__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./functions/FetchProperties */ \"./src/client/components/dashboard/functions/FetchProperties.js\");\n/* harmony import */ var _functions_AddFavourite__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./functions/AddFavourite */ \"./src/client/components/dashboard/functions/AddFavourite.js\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styled */ \"./src/client/components/dashboard/styled.js\");\n/* harmony import */ var styled_spinkit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-spinkit */ \"styled-spinkit\");\n/* harmony import */ var styled_spinkit__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_spinkit__WEBPACK_IMPORTED_MODULE_10__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\n\n\nvar FavContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();\n\nfunction Dashboard(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      _useState2 = _slicedToArray(_useState, 2),\n      data = _useState2[0],\n      setData = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(props.user),\n      _useState4 = _slicedToArray(_useState3, 2),\n      user = _useState4[0],\n      setUser = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      _useState6 = _slicedToArray(_useState5, 2),\n      favs = _useState6[0],\n      initialFav = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      _useState8 = _slicedToArray(_useState7, 2),\n      newFav = _useState8[0],\n      setFave = _useState8[1];\n\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useReducer\"])(_redux_hooksReducers_favourites__WEBPACK_IMPORTED_MODULE_6__[\"favouritesReducer\"], {\n    fav: null\n  }),\n      _useReducer2 = _slicedToArray(_useReducer, 2),\n      fav = _useReducer2[0],\n      setFav = _useReducer2[1];\n\n  var _useReducer3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useReducer\"])(_redux_hooksReducers_search__WEBPACK_IMPORTED_MODULE_5__[\"searchReducer\"], {\n    value: \"\"\n  }),\n      _useReducer4 = _slicedToArray(_useReducer3, 2),\n      state = _useReducer4[0],\n      setSearch = _useReducer4[1];\n\n  var _useReducer5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useReducer\"])(_redux_hooksReducers_search__WEBPACK_IMPORTED_MODULE_5__[\"searchReducer\"], {\n    guests: 1\n  }),\n      _useReducer6 = _slicedToArray(_useReducer5, 2),\n      count = _useReducer6[0],\n      setCount = _useReducer6[1];\n\n  var _useReducer7 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useReducer\"])(_redux_hooksReducers_search__WEBPACK_IMPORTED_MODULE_5__[\"searchReducer\"], {\n    price: [10, 150]\n  }),\n      _useReducer8 = _slicedToArray(_useReducer7, 2),\n      price = _useReducer8[0],\n      setPrice = _useReducer8[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    Object(_functions_FetchProperties__WEBPACK_IMPORTED_MODULE_7__[\"fetchProperties\"])(setData);\n    !props.user && setUser(null);\n  }, [props.user]);\n\n  var favouriteMethod = function favouriteMethod(data) {\n    Object(_functions_AddFavourite__WEBPACK_IMPORTED_MODULE_8__[\"addFavourite\"])(data, setFave, user);\n  };\n\n  return data ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_9__[\"ContentWrap\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_9__[\"SideBarWrap\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_9__[\"SearchWrap\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_search__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    searchMethod: setSearch\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_filters__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    guestMethod: setCount,\n    guests: count.guests,\n    priceMethod: setPrice,\n    price: price\n  }), user && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_favouritesWidget__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    data: !newFav ? user.fav : newFav,\n    property: data\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FavContext.Provider, {\n    value: {\n      addFav: favouriteMethod,\n      loggedIn: user\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_propertyCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    data: data,\n    searchVal: state,\n    guests: count.guests,\n    slider: price\n  })))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_spinkit__WEBPACK_IMPORTED_MODULE_10__[\"FoldingCube\"], {\n    color: 'darkred',\n    size: 80\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\n\n//# sourceURL=webpack:///./src/client/components/dashboard/index.js?");

/***/ }),

/***/ "./src/client/components/dashboard/propertyCard/fullCard/index.js":
/*!************************************************************************!*\
  !*** ./src/client/components/dashboard/propertyCard/fullCard/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loadable */ \"react-loadable\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../title */ \"./src/client/components/dashboard/propertyCard/title/index.js\");\n/* harmony import */ var _rooms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rooms */ \"./src/client/components/dashboard/propertyCard/rooms/index.js\");\n/* harmony import */ var _guests__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../guests */ \"./src/client/components/dashboard/propertyCard/guests/index.js\");\n/* harmony import */ var _price__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../price */ \"./src/client/components/dashboard/propertyCard/price/index.js\");\n/* harmony import */ var _favouritesBtn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../favouritesBtn */ \"./src/client/components/dashboard/favouritesBtn/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styled */ \"./src/client/components/dashboard/propertyCard/fullCard/styled.js\");\n/* harmony import */ var _generic_loading_placeholder__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../generic/loading/placeholder */ \"./src/client/components/generic/loading/placeholder.js\");\n\n\n\n\n\n\n\n\n\n\n\nvar CardImage = react_loadable__WEBPACK_IMPORTED_MODULE_2___default()({\n  loader: function loader() {\n    return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../image */ \"./src/client/components/dashboard/propertyCard/image/index.js\"));\n  },\n  loading: function loading() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_generic_loading_placeholder__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null);\n  }\n});\n\nfunction Card(_ref) {\n  var el = _ref.el,\n      searchVal = _ref.searchVal;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__[\"Link\"], {\n    to: {\n      pathname: \"/property/\".concat(el._id),\n      state: {\n        data: el\n      }\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_9__[\"CardWrap\"], null, el.images.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CardImage, {\n    data: el\n  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_9__[\"DefaultImage\"], {\n    size: \"200\",\n    color: \"white\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_favouritesBtn__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    data: el\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      width: '340px'\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_title__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    data: el,\n    highlight: el.title.toLowerCase().includes(searchVal.value.toLowerCase()) && searchVal.value !== \"\" ? true : false\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rooms__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    data: el\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_guests__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    data: el\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_price__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    data: el\n  }))));\n}\n\nCard.propTypes = {\n  el: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\n//# sourceURL=webpack:///./src/client/components/dashboard/propertyCard/fullCard/index.js?");

/***/ }),

/***/ "./src/client/components/dashboard/propertyCard/fullCard/styled.js":
/*!*************************************************************************!*\
  !*** ./src/client/components/dashboard/propertyCard/fullCard/styled.js ***!
  \*************************************************************************/
/*! exports provided: CardWrap, DefaultImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CardWrap\", function() { return CardWrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DefaultImage\", function() { return DefaultImage; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_icons_boxicons_regular_Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-icons/boxicons-regular/Image */ \"styled-icons/boxicons-regular/Image\");\n/* harmony import */ var styled_icons_boxicons_regular_Image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_icons_boxicons_regular_Image__WEBPACK_IMPORTED_MODULE_1__);\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n  width: 340px;\\n  height: 220px; \\n  background: #e9e9e9;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\nmargin:auto;\\n  span,\\n  div {\\n    color: black;\\n  }\\n  margin: 1em 1em 1em 0;\\n  display: flex;\\n  flex-direction: column;\\n  flex-wrap: wrap;\\n  position: relative;\\n  @media (min-width: 767px) {\\n    display: inline-flex;\\n    width: 340px;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nvar CardWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject());\nvar DefaultImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(styled_icons_boxicons_regular_Image__WEBPACK_IMPORTED_MODULE_1__[\"Image\"])(_templateObject2());\n\n//# sourceURL=webpack:///./src/client/components/dashboard/propertyCard/fullCard/styled.js?");

/***/ }),

/***/ "./src/client/components/dashboard/propertyCard/functions/Filter.js":
/*!**************************************************************************!*\
  !*** ./src/client/components/dashboard/propertyCard/functions/Filter.js ***!
  \**************************************************************************/
/*! exports provided: searchFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchFilter\", function() { return searchFilter; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fullCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fullCard */ \"./src/client/components/dashboard/propertyCard/fullCard/index.js\");\n\n\nfunction searchFilter(el, guests, slider, cards, searchVal) {\n  el.guests >= guests && el.price >= slider.price[0] && el.price <= slider.price[1] ? cards.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fullCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    el: el,\n    key: el._id,\n    searchVal: searchVal\n  })) : null;\n}\n\n//# sourceURL=webpack:///./src/client/components/dashboard/propertyCard/functions/Filter.js?");

/***/ }),

/***/ "./src/client/components/dashboard/propertyCard/guests/index.js":
/*!**********************************************************************!*\
  !*** ./src/client/components/dashboard/propertyCard/guests/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ \"./src/client/components/dashboard/propertyCard/guests/styled.js\");\n\n\n\n\nvar Guests = function Guests(_ref) {\n  var data = _ref.data;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"GuestStyle\"], null, data.guests, \" guests\");\n};\n\nGuests.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Guests);\n\n//# sourceURL=webpack:///./src/client/components/dashboard/propertyCard/guests/index.js?");

/***/ }),

/***/ "./src/client/components/dashboard/propertyCard/guests/styled.js":
/*!***********************************************************************!*\
  !*** ./src/client/components/dashboard/propertyCard/guests/styled.js ***!
  \***********************************************************************/
/*! exports provided: GuestStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GuestStyle\", function() { return GuestStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar GuestStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject());\n\n//# sourceURL=webpack:///./src/client/components/dashboard/propertyCard/guests/styled.js?");

/***/ }),

/***/ "./src/client/components/dashboard/propertyCard/index.js":
/*!***************************************************************!*\
  !*** ./src/client/components/dashboard/propertyCard/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ \"./src/client/components/dashboard/propertyCard/styled.js\");\n/* harmony import */ var _functions_Filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/Filter */ \"./src/client/components/dashboard/propertyCard/functions/Filter.js\");\n\n\n\n\n\nfunction Card(_ref) {\n  var data = _ref.data,\n      searchVal = _ref.searchVal,\n      guests = _ref.guests,\n      slider = _ref.slider;\n  var cards = [];\n\n  if (searchVal.value == \"\") {\n    data.map(function (el) {\n      Object(_functions_Filter__WEBPACK_IMPORTED_MODULE_3__[\"searchFilter\"])(el, guests, slider, cards, searchVal);\n    });\n  } else {\n    data.map(function (el) {\n      el.title.toLowerCase().includes(searchVal.value.toLowerCase()) && Object(_functions_Filter__WEBPACK_IMPORTED_MODULE_3__[\"searchFilter\"])(el, guests, slider, cards, searchVal);\n    });\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"CardWrap\"], null, cards.length ? cards : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"NoResults\"], null, \"No results, try adjusting your search criteria\"));\n}\n\nCard.propTypes = {\n  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\n//# sourceURL=webpack:///./src/client/components/dashboard/propertyCard/index.js?");

/***/ }),

/***/ "./src/client/components/dashboard/propertyCard/price/index.js":
/*!*********************************************************************!*\
  !*** ./src/client/components/dashboard/propertyCard/price/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ \"./src/client/components/dashboard/propertyCard/price/styled.js\");\n\n\n\n\nvar Price = function Price(_ref) {\n  var data = _ref.data;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"PriceStyle\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, '£', data.price, ' per night'));\n};\n\nPrice.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Price);\n\n//# sourceURL=webpack:///./src/client/components/dashboard/propertyCard/price/index.js?");

/***/ }),

/***/ "./src/client/components/dashboard/propertyCard/price/styled.js":
/*!**********************************************************************!*\
  !*** ./src/client/components/dashboard/propertyCard/price/styled.js ***!
  \**********************************************************************/
/*! exports provided: PriceStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PriceStyle\", function() { return PriceStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n    padding-top:0.3em;\\n    div {\\n        font-weight: 600;\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar PriceStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject());\n\n//# sourceURL=webpack:///./src/client/components/dashboard/propertyCard/price/styled.js?");

/***/ }),

/***/ "./src/client/components/dashboard/propertyCard/rooms/index.js":
/*!*********************************************************************!*\
  !*** ./src/client/components/dashboard/propertyCard/rooms/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ \"./src/client/components/dashboard/propertyCard/rooms/styled.js\");\n\n\n\n\nvar Rooms = function Rooms(_ref) {\n  var data = _ref.data;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"RoomStyle\"], null, data.rooms, ' rooms');\n};\n\nRooms.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Rooms);\n\n//# sourceURL=webpack:///./src/client/components/dashboard/propertyCard/rooms/index.js?");

/***/ }),

/***/ "./src/client/components/dashboard/propertyCard/rooms/styled.js":
/*!**********************************************************************!*\
  !*** ./src/client/components/dashboard/propertyCard/rooms/styled.js ***!
  \**********************************************************************/
/*! exports provided: RoomStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RoomStyle\", function() { return RoomStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar RoomStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject());\n\n//# sourceURL=webpack:///./src/client/components/dashboard/propertyCard/rooms/styled.js?");

/***/ }),

/***/ "./src/client/components/dashboard/propertyCard/styled.js":
/*!****************************************************************!*\
  !*** ./src/client/components/dashboard/propertyCard/styled.js ***!
  \****************************************************************/
/*! exports provided: CardWrap, NoResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CardWrap\", function() { return CardWrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NoResults\", function() { return NoResults; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n    margin: 1em;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\norder: 3;\\nmargin:auto;\\n    @media (min-width: 767px) {\\n\\n        display: inline-flex;\\n        flex-wrap:wrap;\\n        justify-content: center;\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar CardWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject());\nvar NoResults = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3(_templateObject2());\n\n//# sourceURL=webpack:///./src/client/components/dashboard/propertyCard/styled.js?");

/***/ }),

/***/ "./src/client/components/dashboard/propertyCard/title/index.js":
/*!*********************************************************************!*\
  !*** ./src/client/components/dashboard/propertyCard/title/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ \"./src/client/components/dashboard/propertyCard/title/styled.js\");\n\n\n\n\nvar Title = function Title(_ref) {\n  var data = _ref.data,\n      highlight = _ref.highlight;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"TitleStyle\"], {\n    key: data._id,\n    highlight: highlight\n  }, data.title);\n};\n\nTitle.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Title);\n\n//# sourceURL=webpack:///./src/client/components/dashboard/propertyCard/title/index.js?");

/***/ }),

/***/ "./src/client/components/dashboard/propertyCard/title/styled.js":
/*!**********************************************************************!*\
  !*** ./src/client/components/dashboard/propertyCard/title/styled.js ***!
  \**********************************************************************/
/*! exports provided: TitleStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TitleStyle\", function() { return TitleStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n    font-weight: 500;\\n    font-size:16px;\\n    margin: 0.3em 0 0.2em 0;\\n    color: black;\\n    /* background: \", \"; */\\n    \\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar TitleStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h4(_templateObject(), function (props) {\n  return props.highlight ? '#69C0FD' : 'white';\n});\n\n//# sourceURL=webpack:///./src/client/components/dashboard/propertyCard/title/styled.js?");

/***/ }),

/***/ "./src/client/components/dashboard/search/index.js":
/*!*********************************************************!*\
  !*** ./src/client/components/dashboard/search/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ \"./src/client/components/dashboard/search/styled.js\");\n\n\n\n\nfunction Search(_ref) {\n  var searchMethod = _ref.searchMethod;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"SearchStyle\"], {\n    placeholder: \"Search\",\n    onChange: function onChange(e) {\n      return searchMethod({\n        type: 'search',\n        input: e.target.value\n      });\n    }\n  });\n}\n\n;\nSearch.propTypes = {\n  searchMethod: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\n\n//# sourceURL=webpack:///./src/client/components/dashboard/search/index.js?");

/***/ }),

/***/ "./src/client/components/dashboard/search/styled.js":
/*!**********************************************************!*\
  !*** ./src/client/components/dashboard/search/styled.js ***!
  \**********************************************************/
/*! exports provided: SearchStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SearchStyle\", function() { return SearchStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n    width:95%;    \\n    margin:0;\\n \\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar SearchStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input(_templateObject());\n\n//# sourceURL=webpack:///./src/client/components/dashboard/search/styled.js?");

/***/ }),

/***/ "./src/client/components/dashboard/styled.js":
/*!***************************************************!*\
  !*** ./src/client/components/dashboard/styled.js ***!
  \***************************************************/
/*! exports provided: ContainerStyle, ContentWrap, SearchWrap, SideBarWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContainerStyle\", function() { return ContainerStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContentWrap\", function() { return ContentWrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SearchWrap\", function() { return SearchWrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SideBarWrap\", function() { return SideBarWrap; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject4() {\n  var data = _taggedTemplateLiteral([\"\\n    width:100%;\\n    margin-top: 1em;\\n    order: 2;\\n    span:first-of-type {\\n        left:3% !important;\\n    }\\n    @media (min-width: 767px) {\\n        width: 350px;\\n    }\\n    @media (min-width: 1000px) {\\n        margin-right:3em;\\n\\n        span:first-of-type {\\n            left:3% !important;\\n        }\\n    }\\n    h4 {\\n     margin-bottom:0;\\n    }\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n    width:100%;\\n    @media (min-width: 767px) {\\n        \\n    }\\n\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n    display:flex;\\n    flex-wrap:wrap;\\n    @media (min-width: 1000px) {\\n        display:inline-flex;\\n        flex-wrap:nowrap;\\n    }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n color: rgb(147, 146, 146);\\n padding:1em;\\n font-family: sans-serif;\\n font-size: 14px;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar ContainerStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject());\nvar ContentWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject2());\nvar SearchWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject3());\nvar SideBarWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.aside(_templateObject4());\n\n//# sourceURL=webpack:///./src/client/components/dashboard/styled.js?");

/***/ }),

/***/ "./src/client/components/generic/flashMessages/index.js":
/*!**************************************************************!*\
  !*** ./src/client/components/generic/flashMessages/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ \"./src/client/components/generic/flashMessages/styled.js\");\n\n\n\nvar Flash = function Flash(_ref) {\n  var message = _ref.message;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__[\"MessageStyle\"], null, message);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Flash);\n\n//# sourceURL=webpack:///./src/client/components/generic/flashMessages/index.js?");

/***/ }),

/***/ "./src/client/components/generic/flashMessages/styled.js":
/*!***************************************************************!*\
  !*** ./src/client/components/generic/flashMessages/styled.js ***!
  \***************************************************************/
/*! exports provided: MessageStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MessageStyle\", function() { return MessageStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\ncolor:darkred;\\ntext-align:center;\\n\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar MessageStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject());\n\n//# sourceURL=webpack:///./src/client/components/generic/flashMessages/styled.js?");

/***/ }),

/***/ "./src/client/components/generic/loading/index.js":
/*!********************************************************!*\
  !*** ./src/client/components/generic/loading/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ \"./src/client/components/generic/loading/styled.js\");\n/* harmony import */ var styled_spinkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-spinkit */ \"styled-spinkit\");\n/* harmony import */ var styled_spinkit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_spinkit__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar Loading = function Loading(_ref) {\n  var size = _ref.size,\n      container = _ref.container;\n  var loading;\n  container ? loading = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"LoadingContainer\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_spinkit__WEBPACK_IMPORTED_MODULE_3__[\"FoldingCube\"], {\n    color: \"darkred\",\n    size: size ? size : 80\n  })) : loading = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_spinkit__WEBPACK_IMPORTED_MODULE_3__[\"FoldingCube\"], {\n    color: \"darkred\",\n    size: size ? size : 80\n  });\n  return loading;\n};\n\nLoading.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Loading);\n\n//# sourceURL=webpack:///./src/client/components/generic/loading/index.js?");

/***/ }),

/***/ "./src/client/components/generic/loading/placeholder.js":
/*!**************************************************************!*\
  !*** ./src/client/components/generic/loading/placeholder.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ \"./src/client/components/generic/loading/styled.js\");\n/* harmony import */ var styled_icons_boxicons_regular_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-icons/boxicons-regular/Image */ \"styled-icons/boxicons-regular/Image\");\n/* harmony import */ var styled_icons_boxicons_regular_Image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_icons_boxicons_regular_Image__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar Placeholder = function Placeholder(_ref) {\n  var width = _ref.width,\n      height = _ref.height;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__[\"PlaceholderStyle\"], {\n    width: width,\n    height: height\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_icons_boxicons_regular_Image__WEBPACK_IMPORTED_MODULE_2__[\"Image\"], {\n    size: \"100\",\n    color: \"white\"\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Placeholder);\n\n//# sourceURL=webpack:///./src/client/components/generic/loading/placeholder.js?");

/***/ }),

/***/ "./src/client/components/generic/loading/styled.js":
/*!*********************************************************!*\
  !*** ./src/client/components/generic/loading/styled.js ***!
  \*********************************************************/
/*! exports provided: LoadingContainer, PlaceholderStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoadingContainer\", function() { return LoadingContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlaceholderStyle\", function() { return PlaceholderStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\nwidth: \", \";\\nheight: \", \";\\nmargin:0.3em;\\nbackground: rgba(233,233,233,0.8);\\n\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n   position: relative;\\n   width: 440px;\\n   height: 290px;\\n   border: grey solid 1px;\\n\\n   @media (min-width: 767px) {\\n        width:340px;\\n        height:220px;\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar LoadingContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject());\nvar PlaceholderStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject2(), function (props) {\n  return props.width ? props.width : '340px';\n}, function (props) {\n  return props.height ? props.height : '235px';\n});\n\n//# sourceURL=webpack:///./src/client/components/generic/loading/styled.js?");

/***/ }),

/***/ "./src/client/components/generic/map/Map.js":
/*!**************************************************!*\
  !*** ./src/client/components/generic/map/Map.js ***!
  \**************************************************/
/*! exports provided: Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Map\", function() { return Map; });\nfunction Map(google, LatLng) {\n  var map = new google.maps.Map(document.getElementById(\"Map\"), {\n    center: {\n      lat: parseFloat(LatLng.lat),\n      lng: parseFloat(LatLng.lng)\n    },\n    zoom: 9,\n    mapTypeControl: true,\n    panControl: false,\n    //zoomControl: false,\n    streetViewControl: false\n  });\n  return map;\n}\n\n//# sourceURL=webpack:///./src/client/components/generic/map/Map.js?");

/***/ }),

/***/ "./src/client/components/generic/map/Marker.js":
/*!*****************************************************!*\
  !*** ./src/client/components/generic/map/Marker.js ***!
  \*****************************************************/
/*! exports provided: Marker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Marker\", function() { return Marker; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ \"./src/client/components/generic/map/styled.js\");\n\n\n\nfunction Marker(google, item, map, bounds, infowindow) {\n  var marker = new google.maps.Marker({\n    position: {\n      lat: parseFloat(item.lat),\n      lng: parseFloat(item.lng)\n    },\n    map: map\n  });\n  map.markers.push(marker);\n  bounds.extend(marker.position);\n  var markersInfoWindow = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"MarkerInfoStyle\"], null, item.price ? \"\\xA3\".concat(item.price) : '£');\n  google.maps.event.addListener(marker, \"mouseover\", function () {\n    infowindow.close();\n    infowindow.setContent(Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(markersInfoWindow));\n    infowindow.open(map, marker);\n  });\n  return marker;\n}\n\n//# sourceURL=webpack:///./src/client/components/generic/map/Marker.js?");

/***/ }),

/***/ "./src/client/components/generic/map/index.js":
/*!****************************************************!*\
  !*** ./src/client/components/generic/map/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ \"./src/client/components/generic/map/styled.js\");\n/* harmony import */ var _Marker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Marker */ \"./src/client/components/generic/map/Marker.js\");\n/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Map */ \"./src/client/components/generic/map/Map.js\");\n/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loading */ \"./src/client/components/generic/loading/index.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nvar GoogleMapContainer =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(GoogleMapContainer, _Component);\n\n  function GoogleMapContainer(props) {\n    var _this;\n\n    _classCallCheck(this, GoogleMapContainer);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(GoogleMapContainer).call(this, props));\n\n    _defineProperty(_assertThisInitialized(_this), \"loadGoogle\", function () {\n      var google = window.google || {};\n\n      if (google.maps) {\n        return;\n      }\n\n      var script = document.createElement('script');\n      script.type = 'text/javascript';\n      script.src = \"https://maps.googleapis.com/maps/api/js?key=AIzaSyB8pcuOTWebMzxwpa6leAmqvHFmvHqA-gk&libraries=places\";\n      script.id = 'google-maps-script';\n      document.querySelector('head').appendChild(script);\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"initMap\", function () {\n      var google = window.google || {};\n\n      if (google.maps) {\n        _this.drawMap();\n      } else {\n        _this.setState({\n          timer: setTimeout(_this.initMap, 100)\n        });\n\n        return;\n      }\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"removeMap\", function () {\n      var script = document.querySelector('#google-maps-script');\n      script.parentNode.removeChild(script);\n      window.google = {};\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"drawMap\", function () {\n      var LatLng = {\n        lat: 51.5,\n        lng: -0.2\n      };\n      var map = Object(_Map__WEBPACK_IMPORTED_MODULE_3__[\"Map\"])(google, LatLng);\n      var bounds = new google.maps.LatLngBounds();\n      var infowindow = new google.maps.InfoWindow();\n      map.markers = [];\n      var markers = [];\n\n      if (_this.props.coords) {\n        var coords = _this.props.coords.split(',');\n\n        markers.push({\n          lat: coords[0],\n          lng: coords[1],\n          price: _this.props.price\n        });\n      } else if (_this.props.booking) {\n        _this.props.booking.map(function (el) {\n          var coords = el.property.coords.split(',');\n          markers.push({\n            lat: coords[0],\n            lng: coords[1],\n            price: el.property.price\n          });\n        });\n      }\n\n      if (markers) {\n        markers.map(function (item) {\n          Object(_Marker__WEBPACK_IMPORTED_MODULE_2__[\"Marker\"])(google, item, map, bounds, infowindow);\n        });\n      }\n    });\n\n    _this.state = {\n      timer: null,\n      loading: false\n    };\n    return _this;\n  }\n\n  _createClass(GoogleMapContainer, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.loadGoogle();\n      this.initMap();\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      this.removeMap();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var Map;\n\n      if (this.state.loading) {\n        Map = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_loading__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null);\n      } else {\n        Map = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__[\"MapStyle\"], {\n          id: \"Map\"\n        });\n      }\n\n      return Map;\n    }\n  }]);\n\n  return GoogleMapContainer;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GoogleMapContainer);\n\n//# sourceURL=webpack:///./src/client/components/generic/map/index.js?");

/***/ }),

/***/ "./src/client/components/generic/map/styled.js":
/*!*****************************************************!*\
  !*** ./src/client/components/generic/map/styled.js ***!
  \*****************************************************/
/*! exports provided: MapStyle, MarkerInfoStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MapStyle\", function() { return MapStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MarkerInfoStyle\", function() { return MarkerInfoStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\ncolor:darkred;\\nborder-radius:5px;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\nwidth: 100%;\\nheight: 448px;\\n\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar MapStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject());\nvar MarkerInfoStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject2());\n\n//# sourceURL=webpack:///./src/client/components/generic/map/styled.js?");

/***/ }),

/***/ "./src/client/components/generic/modal/index.js":
/*!******************************************************!*\
  !*** ./src/client/components/generic/modal/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_responsive_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-responsive-modal */ \"react-responsive-modal\");\n/* harmony import */ var react_responsive_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_responsive_modal__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _generic_flashMessages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../generic/flashMessages */ \"./src/client/components/generic/flashMessages/index.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nfunction VideoModal(_ref) {\n  var trigger = _ref.trigger,\n      triggerFunc = _ref.triggerFunc,\n      content = _ref.content,\n      flash = _ref.flash,\n      clear = _ref.clear;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(trigger),\n      _useState2 = _slicedToArray(_useState, 2),\n      open = _useState2[0],\n      setOpen = _useState2[1];\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_responsive_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    open: open,\n    onClose: function onClose() {\n      setOpen(false);\n      triggerFunc(false);\n      clear && clear([]);\n    },\n    center: true,\n    styles: {\n      modal: {\n        padding: \"0\",\n        width: \"100%\",\n        minHeight: \"300px\",\n        maxWidth: \"500px\",\n        borderRadius: \"5px\"\n      },\n      overlay: {\n        background: \"rgba(0,0,0,0.5)\"\n      }\n    },\n    classNames: {\n      closeButton: \"closeButtonModal\"\n    }\n  }, content, flash && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_generic_flashMessages__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    message: flash[0].message\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (VideoModal);\n\n//# sourceURL=webpack:///./src/client/components/generic/modal/index.js?");

/***/ }),

/***/ "./src/client/components/generic/table/styled.js":
/*!*******************************************************!*\
  !*** ./src/client/components/generic/table/styled.js ***!
  \*******************************************************/
/*! exports provided: TableStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TableStyle\", function() { return TableStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  margin: auto;\\n  width:100%;\\n  text-align:center;\\n  th,\\n  td {\\n    padding: 8px;\\n    text-align:center;\\n  }\\n  th {\\n    color: white;\\n    background-color: lightslategray;\\n    font-weight: 500;\\n  }\\n  tr {\\n    background-color: #e9e9e9;\\n    color: midnightblue;\\n  }\\n  \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar TableStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.table(_templateObject());\n\n//# sourceURL=webpack:///./src/client/components/generic/table/styled.js?");

/***/ }),

/***/ "./src/client/components/layout/index.js":
/*!***********************************************!*\
  !*** ./src/client/components/layout/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _nav_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav/index */ \"./src/client/components/layout/nav/index.js\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ \"./src/client/components/layout/styled.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _property_home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../property/home */ \"./src/client/components/property/home/index.js\");\n\n\n\n\n\n\n\nvar Layout = function Layout(_ref) {\n  var user = _ref.user,\n      children = _ref.children,\n      reduxUser = _ref.reduxUser,\n      setAuth = _ref.setAuth;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nav_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    user: user ? user : reduxUser,\n    setAuth: setAuth\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__[\"ContainerStyle\"], null, children));\n};\n\nLayout.propTypes = {\n  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,\n  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,\n  reduxUser: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,\n  setAuth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    reduxUser: state.user\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"connect\"])(mapStateToProps)(Layout)); //export default Layout;\n\n//# sourceURL=webpack:///./src/client/components/layout/index.js?");

/***/ }),

/***/ "./src/client/components/layout/nav/adminLink/index.js":
/*!*************************************************************!*\
  !*** ./src/client/components/layout/nav/adminLink/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar AdminLink = function AdminLink(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    to: \"/admin\"\n  }, \"Admin\"));\n};\n\nAdminLink.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AdminLink);\n\n//# sourceURL=webpack:///./src/client/components/layout/nav/adminLink/index.js?");

/***/ }),

/***/ "./src/client/components/layout/nav/bookingsLink/index.js":
/*!****************************************************************!*\
  !*** ./src/client/components/layout/nav/bookingsLink/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar BookingsLink = function BookingsLink(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    to: \"/bookings\"\n  }, \"Bookings\"));\n};\n\nBookingsLink.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (BookingsLink);\n\n//# sourceURL=webpack:///./src/client/components/layout/nav/bookingsLink/index.js?");

/***/ }),

/***/ "./src/client/components/layout/nav/homeLink/index.js":
/*!************************************************************!*\
  !*** ./src/client/components/layout/nav/homeLink/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_icons_octicons_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-icons/octicons/Home */ \"styled-icons/octicons/Home\");\n/* harmony import */ var styled_icons_octicons_Home__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_icons_octicons_Home__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar HomeLink = function HomeLink() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    to: \"/\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_icons_octicons_Home__WEBPACK_IMPORTED_MODULE_1__[\"Home\"], {\n    size: \"30\",\n    color: \"darkred\"\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeLink);\n\n//# sourceURL=webpack:///./src/client/components/layout/nav/homeLink/index.js?");

/***/ }),

/***/ "./src/client/components/layout/nav/index.js":
/*!***************************************************!*\
  !*** ./src/client/components/layout/nav/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ \"./src/client/components/layout/nav/styled.js\");\n/* harmony import */ var _homeLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homeLink */ \"./src/client/components/layout/nav/homeLink/index.js\");\n/* harmony import */ var _welcome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome */ \"./src/client/components/layout/nav/welcome/index.js\");\n/* harmony import */ var _loginLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loginLink */ \"./src/client/components/layout/nav/loginLink/index.js\");\n/* harmony import */ var _bookingsLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bookingsLink */ \"./src/client/components/layout/nav/bookingsLink/index.js\");\n/* harmony import */ var _viewingsLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./viewingsLink */ \"./src/client/components/layout/nav/viewingsLink/index.js\");\n/* harmony import */ var _adminLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./adminLink */ \"./src/client/components/layout/nav/adminLink/index.js\");\n/* harmony import */ var _logoutLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./logoutLink */ \"./src/client/components/layout/nav/logoutLink/index.js\");\n\n\n\n\n\n\n\n\n\n\n\nvar Nav = function Nav(_ref) {\n  var user = _ref.user,\n      setAuth = _ref.setAuth;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"NavStyle\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_homeLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), user ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_welcome__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    user: user\n  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_loginLink__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_viewingsLink__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_bookingsLink__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null), user && user.admin && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_adminLink__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null), user && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_logoutLink__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    setAuth: setAuth\n  }));\n};\n\nNav.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\n\n//# sourceURL=webpack:///./src/client/components/layout/nav/index.js?");

/***/ }),

/***/ "./src/client/components/layout/nav/loginLink/index.js":
/*!*************************************************************!*\
  !*** ./src/client/components/layout/nav/loginLink/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar LoginLink = function LoginLink(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    to: \"/login\"\n  }, \"Login\"));\n};\n\nLoginLink.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginLink);\n\n//# sourceURL=webpack:///./src/client/components/layout/nav/loginLink/index.js?");

/***/ }),

/***/ "./src/client/components/layout/nav/logoutLink/index.js":
/*!**************************************************************!*\
  !*** ./src/client/components/layout/nav/logoutLink/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal-cookie */ \"universal-cookie\");\n/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_icons_feather_LogOut__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-icons/feather/LogOut */ \"styled-icons/feather/LogOut\");\n/* harmony import */ var styled_icons_feather_LogOut__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_icons_feather_LogOut__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../redux/actions */ \"./src/client/redux/actions/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nvar Logout = function Logout(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_icons_feather_LogOut__WEBPACK_IMPORTED_MODULE_3__[\"LogOut\"], {\n    style: {\n      position: 'absolute',\n      right: '0',\n      top: '0.5em'\n    },\n    onClick: function onClick() {\n      var cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_2___default.a();\n      cookies.remove(\"cookie-data\");\n      props.setUser(null);\n      props.setAuth(null);\n    },\n    size: \"30\",\n    color: \"darkred\"\n  }));\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    setUser: function setUser(user) {\n      return dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_4__[\"setUser\"])(user));\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"connect\"])(null, mapDispatchToProps)(Logout));\n\n//# sourceURL=webpack:///./src/client/components/layout/nav/logoutLink/index.js?");

/***/ }),

/***/ "./src/client/components/layout/nav/styled.js":
/*!****************************************************!*\
  !*** ./src/client/components/layout/nav/styled.js ***!
  \****************************************************/
/*! exports provided: NavStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavStyle\", function() { return NavStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  background: lightslategray;\\n  padding: 0.5em 1em 0.5em 1em;\\n  \\n  * {\\n    padding-right: 0.5em;\\n  }\\n  a {\\n    color: white;\\n    :hover{\\n      color:midnightblue;\\n    }\\n  }\\n  span {\\n    position: relative;\\n    top:2px;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar NavStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.nav(_templateObject());\n\n//# sourceURL=webpack:///./src/client/components/layout/nav/styled.js?");

/***/ }),

/***/ "./src/client/components/layout/nav/viewingsLink/index.js":
/*!****************************************************************!*\
  !*** ./src/client/components/layout/nav/viewingsLink/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar ViewingsLink = function ViewingsLink(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    to: \"/viewings\"\n  }, \"Viewings\"));\n};\n\nViewingsLink.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewingsLink);\n\n//# sourceURL=webpack:///./src/client/components/layout/nav/viewingsLink/index.js?");

/***/ }),

/***/ "./src/client/components/layout/nav/welcome/index.js":
/*!***********************************************************!*\
  !*** ./src/client/components/layout/nav/welcome/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ \"./src/client/components/layout/nav/welcome/styled.js\");\n\n\n\nvar Welcome = function Welcome(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__[\"WelcomeStyle\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", null, \"Welcome \".concat(props.user.name)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Welcome);\n\n//# sourceURL=webpack:///./src/client/components/layout/nav/welcome/index.js?");

/***/ }),

/***/ "./src/client/components/layout/nav/welcome/styled.js":
/*!************************************************************!*\
  !*** ./src/client/components/layout/nav/welcome/styled.js ***!
  \************************************************************/
/*! exports provided: WelcomeStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WelcomeStyle\", function() { return WelcomeStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  display:inline-block;\\n  color: midnightblue;\\n  margin-right: 0.2em;\\n  position:relative;\\n  top:2.2px;\\n\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar WelcomeStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject());\n\n//# sourceURL=webpack:///./src/client/components/layout/nav/welcome/styled.js?");

/***/ }),

/***/ "./src/client/components/layout/styled.js":
/*!************************************************!*\
  !*** ./src/client/components/layout/styled.js ***!
  \************************************************/
/*! exports provided: ContainerStyle, ContentWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContainerStyle\", function() { return ContainerStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContentWrap\", function() { return ContentWrap; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n    display:flex;\\n    flex-wrap:wrap;\\n    @media (min-width: 767px) {\\n        display:inline-flex;\\n        flex-wrap:nowrap;\\n    }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n padding: 1em 0em 2em 0em;\\n font-family: sans-serif;\\n font-size: 14px;\\n margin:1em;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar ContainerStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject());\nvar ContentWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject2());\n\n//# sourceURL=webpack:///./src/client/components/layout/styled.js?");

/***/ }),

/***/ "./src/client/components/login/index.js":
/*!**********************************************!*\
  !*** ./src/client/components/login/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _functions_Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../functions/Login */ \"./src/client/functions/Login.js\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ \"./src/client/components/login/styled.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions */ \"./src/client/redux/actions/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _generic_flashMessages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../generic/flashMessages */ \"./src/client/components/generic/flashMessages/index.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\nfunction Login(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      _useState2 = _slicedToArray(_useState, 2),\n      data = _useState2[0],\n      setData = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      _useState4 = _slicedToArray(_useState3, 2),\n      flash = _useState4[0],\n      setFlash = _useState4[1];\n\n  var handleSubmit = function handleSubmit(e) {\n    Object(_functions_Login__WEBPACK_IMPORTED_MODULE_1__[\"fetchLogin\"])(e, data, window, props, setFlash);\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"FormWrap\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Login\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"FormStyle\"], {\n    onSubmit: handleSubmit\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    placeholder: \"email\",\n    onChange: function onChange(e) {\n      setData(_objectSpread({}, data, {\n        email: e.target.value\n      }));\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    placeholder: \"password\",\n    onChange: function onChange(e) {\n      setData(_objectSpread({}, data, {\n        password: e.target.value\n      }));\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    id: \"submit\"\n  }, \"submit\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__[\"Link\"], {\n    to: \"/register\"\n  }, \"Register\"), flash && flash.map(function (el) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_generic_flashMessages__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      message: el.message,\n      key: el\n    });\n  })));\n}\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    setUser: function setUser(user) {\n      return dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_4__[\"setUser\"])(user));\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(null, mapDispatchToProps)(Login));\n\n//# sourceURL=webpack:///./src/client/components/login/index.js?");

/***/ }),

/***/ "./src/client/components/login/styled.js":
/*!***********************************************!*\
  !*** ./src/client/components/login/styled.js ***!
  \***********************************************/
/*! exports provided: FormStyle, FormWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FormStyle\", function() { return FormStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FormWrap\", function() { return FormWrap; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n    text-align:center;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\ninput {\\n    display:block;\\n    margin:auto auto 1em auto;\\n    width:300px;\\n}\\nbutton {\\n    width:312px;\\n    display:block;\\n    margin:auto auto 1em auto;\\n}\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar FormStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form(_templateObject());\nvar FormWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject2());\n\n//# sourceURL=webpack:///./src/client/components/login/styled.js?");

/***/ }),

/***/ "./src/client/components/property/functions/CheckProperty.js":
/*!*******************************************************************!*\
  !*** ./src/client/components/property/functions/CheckProperty.js ***!
  \*******************************************************************/
/*! exports provided: checkProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkProperty\", function() { return checkProperty; });\nfunction checkProperty(localStorage, props, setData, setFlash) {\n  var check = localStorage.getItem(\"property\");\n\n  if (props.location.state) {\n    localStorage.setItem(\"property\", JSON.stringify(props.location.state.data));\n    setData(props.location.state.data);\n  } else if (check) {\n    var parse = JSON.parse(check);\n    setData(parse);\n  } else {\n    setFlash(\"Property unavailable\");\n  }\n}\n\n//# sourceURL=webpack:///./src/client/components/property/functions/CheckProperty.js?");

/***/ }),

/***/ "./src/client/components/property/home/index.js":
/*!******************************************************!*\
  !*** ./src/client/components/property/home/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_dashboard_propertyCard_rooms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/dashboard/propertyCard/rooms */ \"./src/client/components/dashboard/propertyCard/rooms/index.js\");\n/* harmony import */ var _components_dashboard_propertyCard_guests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/dashboard/propertyCard/guests */ \"./src/client/components/dashboard/propertyCard/guests/index.js\");\n/* harmony import */ var _components_dashboard_propertyCard_price__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/dashboard/propertyCard/price */ \"./src/client/components/dashboard/propertyCard/price/index.js\");\n/* harmony import */ var _modalGallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modalGallery */ \"./src/client/components/property/modalGallery/index.js\");\n/* harmony import */ var _generic_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../generic/map */ \"./src/client/components/generic/map/index.js\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styled */ \"./src/client/components/property/home/styled.js\");\n\n\n\n\n\n\n\n\n\nvar Property = function Property(_ref) {\n  var data = _ref.data;\n  var arr;\n\n  if (data.images) {\n    arr = [];\n    var newArray = data.images.map(function (item) {\n      return arr.push({\n        gallery_image: {\n          url: \"https://s3-eu-west-1.amazonaws.com/property-app-assets/\".concat(item)\n        }\n      });\n    });\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_7__[\"PropertyWrap\"], null, data.images && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modalGallery__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    gallery: [{\n      items: arr\n    }]\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_7__[\"InfoWrap\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_generic_map__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    coords: data.coords,\n    price: data.price\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_7__[\"PropertyInfo\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, data.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_dashboard_propertyCard_rooms__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    data: data\n  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_dashboard_propertyCard_guests__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    data: data\n  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_dashboard_propertyCard_price__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    data: data\n  })))))));\n};\n\nProperty.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Property);\n\n//# sourceURL=webpack:///./src/client/components/property/home/index.js?");

/***/ }),

/***/ "./src/client/components/property/home/styled.js":
/*!*******************************************************!*\
  !*** ./src/client/components/property/home/styled.js ***!
  \*******************************************************/
/*! exports provided: PropertyWrap, InfoWrap, PropertyInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PropertyWrap\", function() { return PropertyWrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InfoWrap\", function() { return InfoWrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PropertyInfo\", function() { return PropertyInfo; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n  width: 100%;\\n  th,td{\\n    padding: 8px;\\n    text-align: left;\\n  }\\n  th {\\n    color:white;\\n    background-color: lightslategray;\\n    font-weight:500;\\n  }\\n  tr {\\n    background-color: #E9E9E9;\\n    color: midnightblue;\\n  }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n  display: block;\\n\\n  @media (min-width: 1200px) {\\n    width: 100%;\\n    margin: 0 0.5em 0 0.5em;\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  text-align: center;\\n\\n  @media (min-width: 767px) {\\n    max-width: 700px;\\n    margin: auto;\\n  }\\n\\n  @media (min-width: 1200px) {\\n    display: flex;\\n    margin: unset;\\n    max-width: unset;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar PropertyWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject());\nvar InfoWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject2());\nvar PropertyInfo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.table(_templateObject3());\n\n//# sourceURL=webpack:///./src/client/components/property/home/styled.js?");

/***/ }),

/***/ "./src/client/components/property/index.js":
/*!*************************************************!*\
  !*** ./src/client/components/property/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _functions_CheckProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/CheckProperty */ \"./src/client/components/property/functions/CheckProperty.js\");\n/* harmony import */ var _functions_VerifyToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../functions/VerifyToken */ \"./src/client/functions/VerifyToken.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home */ \"./src/client/components/property/home/index.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\nfunction Property(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      _useState2 = _slicedToArray(_useState, 2),\n      data = _useState2[0],\n      setData = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      _useState4 = _slicedToArray(_useState3, 2),\n      user = _useState4[0],\n      setUser = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      _useState6 = _slicedToArray(_useState5, 2),\n      flash = _useState6[0],\n      setFlash = _useState6[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    Object(_functions_CheckProperty__WEBPACK_IMPORTED_MODULE_2__[\"checkProperty\"])(localStorage, props, setData, setFlash);\n    Object(_functions_VerifyToken__WEBPACK_IMPORTED_MODULE_3__[\"verifyToken\"])(window, setUser);\n  }, []);\n  return flash ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, flash), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/\"\n  }, \"Home\")) : data ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_home__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    data: data\n  }) : null;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Property);\n\n//# sourceURL=webpack:///./src/client/components/property/index.js?");

/***/ }),

/***/ "./src/client/components/property/modalGallery/desktop/index.js":
/*!**********************************************************************!*\
  !*** ./src/client/components/property/modalGallery/desktop/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ \"./src/client/components/property/modalGallery/desktop/styled.js\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loadable */ \"react-loadable\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _generic_loading_placeholder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../generic/loading/placeholder */ \"./src/client/components/generic/loading/placeholder.js\");\n/* harmony import */ var styled_icons_boxicons_regular_Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-icons/boxicons-regular/Image */ \"styled-icons/boxicons-regular/Image\");\n/* harmony import */ var styled_icons_boxicons_regular_Image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_icons_boxicons_regular_Image__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar DeskImage = react_loadable__WEBPACK_IMPORTED_MODULE_3___default()({\n  loader: function loader() {\n    return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ./ImgStyle */ \"./src/client/components/property/modalGallery/desktop/ImgStyle.js\"));\n  },\n  loading: function loading() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_generic_loading_placeholder__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      width: '330px',\n      height: '220px'\n    });\n  }\n});\n\nvar DesktopImg = function DesktopImg(_ref) {\n  var gallery = _ref.gallery,\n      onOpenModalMulti = _ref.onOpenModalMulti;\n  var galleryLength = gallery[0].items.length;\n  var defaultImg = [];\n  var check = galleryLength - 4;\n\n  if (check < 0) {\n    var value = Math.abs(check);\n\n    for (var i = 0; i < value; i++) {\n      defaultImg.push(i);\n    }\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"DesktopWrap\"], {\n    length: galleryLength\n  }, gallery[0].items.map(function (item, index) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DeskImage, {\n      index: index,\n      item: item,\n      onOpenModalMulti: onOpenModalMulti,\n      gallery: gallery,\n      key: index\n    });\n  }), defaultImg.length > 0 && defaultImg.map(function (el) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_icons_boxicons_regular_Image__WEBPACK_IMPORTED_MODULE_5__[\"Image\"], {\n      size: \"200\",\n      color: \"white\",\n      style: {\n        margin: \"auto auto 0.5em auto\",\n        width: \"335px\",\n        height: \"220px\",\n        background: \"#E9E9E9\"\n      },\n      key: el\n    });\n  }));\n};\n\nDesktopImg.propTypes = {\n  gallery: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,\n  onOpenModalMulti: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (DesktopImg);\n\n//# sourceURL=webpack:///./src/client/components/property/modalGallery/desktop/index.js?");

/***/ }),

/***/ "./src/client/components/property/modalGallery/desktop/styled.js":
/*!***********************************************************************!*\
  !*** ./src/client/components/property/modalGallery/desktop/styled.js ***!
  \***********************************************************************/
/*! exports provided: DesktopWrap, ImgStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DesktopWrap\", function() { return DesktopWrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ImgStyle\", function() { return ImgStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n    width: 335px;\\n    height: 220px;\\n    margin: auto auto 0.5em auto;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-between;\\n  flex-direction: row;\\n  max-width: 700px;\\n\\n  @media (min-width: 767px) {\\n      margin: auto;\\n      margin-top:initial;\\n  }\\n\\n  @media (min-width: 1000px) {\\n        display:inline-flex;\\n        flex-wrap: wrap;\\n        width:100%;\\n  }\\n    \\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar DesktopWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject());\nvar ImgStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img(_templateObject2());\n\n//# sourceURL=webpack:///./src/client/components/property/modalGallery/desktop/styled.js?");

/***/ }),

/***/ "./src/client/components/property/modalGallery/functions/BackMethod.js":
/*!*****************************************************************************!*\
  !*** ./src/client/components/property/modalGallery/functions/BackMethod.js ***!
  \*****************************************************************************/
/*! exports provided: BackMethod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BackMethod\", function() { return BackMethod; });\nfunction BackMethod(img, imgArray) {\n  var getCurrentImg = imgArray.filter(function (el) {\n    return el.url === img;\n  });\n  var prevImg, newImg;\n\n  if (getCurrentImg[0].id === 0) {\n    prevImg = imgArray.length - 1;\n  } else {\n    prevImg = getCurrentImg[0].id - 1;\n  }\n\n  return newImg = imgArray[prevImg];\n}\n\n//# sourceURL=webpack:///./src/client/components/property/modalGallery/functions/BackMethod.js?");

/***/ }),

/***/ "./src/client/components/property/modalGallery/functions/ForwardMethod.js":
/*!********************************************************************************!*\
  !*** ./src/client/components/property/modalGallery/functions/ForwardMethod.js ***!
  \********************************************************************************/
/*! exports provided: ForwardMethod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ForwardMethod\", function() { return ForwardMethod; });\nfunction ForwardMethod(img, imgArray) {\n  var getCurrentImg = imgArray.filter(function (el) {\n    return el.url === img;\n  });\n  var nextImg, newImg;\n\n  if (getCurrentImg[0].id === imgArray.length - 1) {\n    nextImg = 0;\n  } else {\n    nextImg = getCurrentImg[0].id + 1;\n  }\n\n  return newImg = imgArray[nextImg];\n}\n\n//# sourceURL=webpack:///./src/client/components/property/modalGallery/functions/ForwardMethod.js?");

/***/ }),

/***/ "./src/client/components/property/modalGallery/icons/Arrow.js":
/*!********************************************************************!*\
  !*** ./src/client/components/property/modalGallery/icons/Arrow.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ \"./src/client/components/property/modalGallery/icons/styled.js\");\n/* harmony import */ var styled_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-icons/material/KeyboardArrowLeft */ \"styled-icons/material/KeyboardArrowLeft\");\n/* harmony import */ var styled_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-icons/material/KeyboardArrowRight */ \"styled-icons/material/KeyboardArrowRight\");\n/* harmony import */ var styled_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nvar Arrow = function Arrow(_ref) {\n  var BtnMethod = _ref.BtnMethod,\n      img = _ref.img,\n      imgArray = _ref.imgArray,\n      left = _ref.left;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"IconWrap\"], {\n    left: left,\n    onClick: function onClick() {\n      return BtnMethod(img, imgArray);\n    }\n  }, left ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_3__[\"KeyboardArrowLeft\"], {\n    onClick: function onClick() {\n      return BtnMethod(img, imgArray);\n    },\n    color: \"white\",\n    size: \"70\"\n  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_4__[\"KeyboardArrowRight\"], {\n    onClick: function onClick() {\n      return BtnMethod(img, imgArray);\n    },\n    color: \"white\",\n    size: \"70\"\n  }));\n};\n\nArrow.propTypes = {\n  BtnMethod: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  img: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  imgArray: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,\n  left: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Arrow);\n\n//# sourceURL=webpack:///./src/client/components/property/modalGallery/icons/Arrow.js?");

/***/ }),

/***/ "./src/client/components/property/modalGallery/icons/styled.js":
/*!*********************************************************************!*\
  !*** ./src/client/components/property/modalGallery/icons/styled.js ***!
  \*********************************************************************/
/*! exports provided: IconWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IconWrap\", function() { return IconWrap; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n      right: 0 !important;\\n    \"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n      left: 0 !important;\\n    \"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  height: 100%;\\n  position: absolute;\\n  bottom: 0;\\n  top:35%;\\n  cursor: pointer;\\n  \", \";\\n  \", \";\\n    @media (min-width: 767px) {\\n      top:40%;\\n    }\\n\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar IconWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject(), function (props) {\n  return props.left && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])(_templateObject2());\n}, function (props) {\n  return !props.left && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])(_templateObject3());\n});\n\n//# sourceURL=webpack:///./src/client/components/property/modalGallery/icons/styled.js?");

/***/ }),

/***/ "./src/client/components/property/modalGallery/index.js":
/*!**************************************************************!*\
  !*** ./src/client/components/property/modalGallery/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _functions_BackMethod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/BackMethod */ \"./src/client/components/property/modalGallery/functions/BackMethod.js\");\n/* harmony import */ var _functions_ForwardMethod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/ForwardMethod */ \"./src/client/components/property/modalGallery/functions/ForwardMethod.js\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loadable */ \"react-loadable\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _modal_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal/index */ \"./src/client/components/property/modalGallery/modal/index.js\");\n/* harmony import */ var _generic_loading_placeholder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../generic/loading/placeholder */ \"./src/client/components/generic/loading/placeholder.js\");\n/* harmony import */ var _desktop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./desktop */ \"./src/client/components/property/modalGallery/desktop/index.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\nvar MobileImg = react_loadable__WEBPACK_IMPORTED_MODULE_4___default()({\n  loader: function loader() {\n    return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./mobile */ \"./src/client/components/property/modalGallery/mobile/index.js\"));\n  },\n  loading: function loading() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_generic_loading_placeholder__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      width: '400px',\n      height: '270px'\n    });\n  }\n});\n\nfunction Gallery(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      modal = _useState2[0],\n      setModal = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      _useState4 = _slicedToArray(_useState3, 2),\n      img = _useState4[0],\n      setImg = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState6 = _slicedToArray(_useState5, 2),\n      imgArray = _useState6[0],\n      setImgArray = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      _useState8 = _slicedToArray(_useState7, 2),\n      desktop = _useState8[0],\n      setDesktop = _useState8[1];\n\n  var windowGlobal = typeof window !== 'undefined' && window;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    resize();\n    windowGlobal.addEventListener('resize', resize);\n    return function cleanup() {\n      windowGlobal.removeEventListener('resize', resize);\n    };\n  });\n\n  var resize = function resize() {\n    if (windowGlobal.innerWidth > 767) {\n      setDesktop(true);\n    } else {\n      setDesktop(false);\n    }\n  };\n\n  var onOpenModal = function onOpenModal(img) {\n    setModal(true);\n    setImg(img);\n  };\n\n  var onOpenModalMulti = function onOpenModalMulti(img, imgArray) {\n    var images = imgArray.map(function (item, index) {\n      return _objectSpread({\n        id: index,\n        url: item.gallery_image.url\n      }, item);\n    });\n    setModal(true);\n    setImg(img);\n    setImgArray(images);\n  };\n\n  var onCloseModal = function onCloseModal() {\n    setModal(false);\n  };\n\n  var onBackBtn = function onBackBtn(img, imgArray) {\n    var newImg = Object(_functions_BackMethod__WEBPACK_IMPORTED_MODULE_2__[\"BackMethod\"])(img, imgArray);\n    setImg(newImg.url);\n  };\n\n  var onForwardBtn = function onForwardBtn(img, imgArray) {\n    var newImg = Object(_functions_ForwardMethod__WEBPACK_IMPORTED_MODULE_3__[\"ForwardMethod\"])(img, imgArray);\n    setImg(newImg.url);\n  };\n\n  var modalSize, gallery;\n  windowGlobal.innerWidth > 767 ? modalSize = ['700px', '500px'] : modalSize = ['320px', '250px'];\n  desktop ? gallery = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_desktop__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    gallery: props.gallery,\n    onOpenModalMulti: onOpenModalMulti\n  }) : gallery = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MobileImg, {\n    gallery: props.gallery,\n    onOpenModalMulti: onOpenModalMulti\n  });\n  return props.gallery[0].items.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, gallery, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modal_index__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    open: modal,\n    onCloseModal: onCloseModal,\n    imgArray: imgArray,\n    img: img,\n    onBackBtn: onBackBtn,\n    onForwardBtn: onForwardBtn\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gallery);\nGallery.propTypes = {\n  gallery: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,\n  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object\n};\n\n//# sourceURL=webpack:///./src/client/components/property/modalGallery/index.js?");

/***/ }),

/***/ "./src/client/components/property/modalGallery/modal/index.js":
/*!********************************************************************!*\
  !*** ./src/client/components/property/modalGallery/modal/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_responsive_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive-modal */ \"react-responsive-modal\");\n/* harmony import */ var react_responsive_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive_modal__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ \"./src/client/components/property/modalGallery/modal/styled.js\");\n/* harmony import */ var _icons_Arrow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/Arrow */ \"./src/client/components/property/modalGallery/icons/Arrow.js\");\n\n\n\n\n\n\nvar GalleryModal = function GalleryModal(_ref) {\n  var open = _ref.open,\n      onCloseModal = _ref.onCloseModal,\n      imgArray = _ref.imgArray,\n      img = _ref.img,\n      onBackBtn = _ref.onBackBtn,\n      onForwardBtn = _ref.onForwardBtn;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_responsive_modal__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    open: open,\n    onClose: onCloseModal,\n    center: true,\n    showCloseIcon: false,\n    closeIconSize: 20,\n    styles: {\n      modal: {\n        padding: '0.3em'\n      }\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__[\"ModalWrap\"], null, imgArray.length > 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_Arrow__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    img: img,\n    imgArray: imgArray,\n    BtnMethod: onBackBtn,\n    left: true\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__[\"ModalImageStyle\"], {\n    src: img,\n    width: '100%',\n    height: '100%',\n    style: {\n      maxWidth: '846px',\n      maxHeight: '564px'\n    }\n  }), imgArray.length > 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_Arrow__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    img: img,\n    imgArray: imgArray,\n    BtnMethod: onForwardBtn,\n    left: false\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__[\"CloseIcon\"], {\n    onClick: onCloseModal\n  })));\n};\n\nGalleryModal.propTypes = {\n  img: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  imgArray: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,\n  onBackBtn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  onCloseModal: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  onForwardBtn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,\n  open: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (GalleryModal);\n\n//# sourceURL=webpack:///./src/client/components/property/modalGallery/modal/index.js?");

/***/ }),

/***/ "./src/client/components/property/modalGallery/modal/styled.js":
/*!*********************************************************************!*\
  !*** ./src/client/components/property/modalGallery/modal/styled.js ***!
  \*********************************************************************/
/*! exports provided: CloseIcon, ModalWrap, ModalImageStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CloseIcon\", function() { return CloseIcon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ModalWrap\", function() { return ModalWrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ModalImageStyle\", function() { return ModalImageStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_icons_material_Close__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-icons/material/Close */ \"styled-icons/material/Close\");\n/* harmony import */ var styled_icons_material_Close__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_icons_material_Close__WEBPACK_IMPORTED_MODULE_1__);\nfunction _templateObject3() {\n  var data = _taggedTemplateLiteral([\"\\n  cursor:pointer;\\n  -webkit-touch-callout: none;\\n  -webkit-user-select: none;\\n  -khtml-user-select: none;\\n  -moz-user-select: none;\\n  -ms-user-select: none;\\n  user-select: none;\\n\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n   min-width:250px;\\n   height: 240px;\\n   cursor: pointer;\\n  @media (min-width: 567px) {\\n    height:400px;\\n  }\\n  @media (min-width: 767px) {\\n    height:500px;\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\nz-index:20;\\nposition:absolute;\\ntop:10px;\\nright:10px;\\nwidth:20px;\\ncolor:white;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nvar CloseIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(styled_icons_material_Close__WEBPACK_IMPORTED_MODULE_1__[\"Close\"])(_templateObject());\nvar ModalWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject2());\nvar ModalImageStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img(_templateObject3());\n\n//# sourceURL=webpack:///./src/client/components/property/modalGallery/modal/styled.js?");

/***/ }),

/***/ "./src/client/components/register/index.js":
/*!*************************************************!*\
  !*** ./src/client/components/register/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _functions_Register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../functions/Register */ \"./src/client/functions/Register.js\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ \"./src/client/components/register/styled.js\");\n/* harmony import */ var _generic_flashMessages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generic/flashMessages */ \"./src/client/components/generic/flashMessages/index.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\nfunction SignUp(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      _useState2 = _slicedToArray(_useState, 2),\n      data = _useState2[0],\n      setData = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      _useState4 = _slicedToArray(_useState3, 2),\n      flash = _useState4[0],\n      setFlash = _useState4[1];\n\n  var handleSubmit = function handleSubmit(e) {\n    Object(_functions_Register__WEBPACK_IMPORTED_MODULE_1__[\"register\"])(e, data, setFlash, window, props);\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"FormWrap\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, \"Register\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__[\"FormStyle\"], {\n    onSubmit: handleSubmit\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    placeholder: \"name\",\n    onChange: function onChange(e) {\n      setData(_objectSpread({}, data, {\n        name: e.target.value\n      }));\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"email\",\n    placeholder: \"email\",\n    onChange: function onChange(e) {\n      setData(_objectSpread({}, data, {\n        email: e.target.value\n      }));\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    placeholder: \"password\",\n    onChange: function onChange(e) {\n      setData(_objectSpread({}, data, {\n        password: e.target.value\n      }));\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"select\", {\n    onChange: function onChange(e) {\n      if (e.target.value !== \"\") {\n        setData(_objectSpread({}, data, {\n          admin: e.target.value\n        }));\n      }\n    }\n  }, \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    value: \"\"\n  }, \"select\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    value: false\n  }, \"user\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    value: true\n  }, \"admin\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    id: \"submit\"\n  }, \"submit\"), flash && flash.map(function (el) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_generic_flashMessages__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      message: el.message\n    });\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignUp);\n\n//# sourceURL=webpack:///./src/client/components/register/index.js?");

/***/ }),

/***/ "./src/client/components/register/styled.js":
/*!**************************************************!*\
  !*** ./src/client/components/register/styled.js ***!
  \**************************************************/
/*! exports provided: FormStyle, FormWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FormStyle\", function() { return FormStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FormWrap\", function() { return FormWrap; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n    text-align:center;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\ninput {\\n    display:block;\\n    margin:auto auto 1em auto;\\n    width:300px;\\n}\\nbutton {\\n    width:312px;\\n    display:block;\\n    margin:1em auto 1em auto;\\n}\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar FormStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form(_templateObject());\nvar FormWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject2());\n\n//# sourceURL=webpack:///./src/client/components/register/styled.js?");

/***/ }),

/***/ "./src/client/components/viewings/createViewing/DatePicker.js":
/*!********************************************************************!*\
  !*** ./src/client/components/viewings/createViewing/DatePicker.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-datetime */ \"react-datetime\");\n/* harmony import */ var react_datetime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_datetime__WEBPACK_IMPORTED_MODULE_1__);\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar DatePicker = function DatePicker(_ref) {\n  var setData = _ref.setData,\n      data = _ref.data,\n      setFlash = _ref.setFlash;\n  var yesterday = react_datetime__WEBPACK_IMPORTED_MODULE_1___default.a.moment().subtract(1, 'day');\n\n  var valid = function valid(current) {\n    return current.isAfter(yesterday);\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_datetime__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    input: true,\n    isValidDate: valid,\n    onChange: function onChange(e) {\n      var check = react_datetime__WEBPACK_IMPORTED_MODULE_1___default.a.moment.isMoment(e);\n\n      if (check) {\n        setData(_objectSpread({}, data, {\n          date: e._d\n        }));\n        setFlash(null);\n      } else setFlash([{\n        message: 'Date format incorrect'\n      }]);\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DatePicker);\n\n//# sourceURL=webpack:///./src/client/components/viewings/createViewing/DatePicker.js?");

/***/ }),

/***/ "./src/client/components/viewings/createViewing/ViewingForm.js":
/*!*********************************************************************!*\
  !*** ./src/client/components/viewings/createViewing/ViewingForm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ \"./src/client/components/viewings/createViewing/styled.js\");\n/* harmony import */ var _DatePicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DatePicker */ \"./src/client/components/viewings/createViewing/DatePicker.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar ViewingForm = function ViewingForm(_ref) {\n  var handleCreateViewing = _ref.handleCreateViewing,\n      data = _ref.data,\n      setData = _ref.setData,\n      props = _ref.props,\n      reduxUser = _ref.reduxUser,\n      setFlash = _ref.setFlash;\n\n  var checkUser = function checkUser() {\n    return reduxUser ? reduxUser : props.user;\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__[\"FormStyle\"], {\n    onSubmit: handleCreateViewing\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__[\"DateWrap\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"date\"\n  }, \"date: \"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DatePicker__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    id: \"date\",\n    setData: setData,\n    data: data,\n    setFlash: setFlash\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"select\", {\n    onChange: function onChange(e) {\n      if (e.target.value !== \"\") {\n        setData(_objectSpread({}, data, {\n          property: e.target.value\n        }));\n      }\n    },\n    className: \"formselect\"\n  }, \" \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n    value: \"\"\n  }, \"property\"), checkUser() && checkUser().properties.map(function (el) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n      value: el._id,\n      key: el._id\n    }, el.title);\n  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    placeholder: \"title\",\n    className: \"forminput\",\n    onChange: function onChange(e) {\n      setData(_objectSpread({}, data, {\n        title: e.target.value\n      }));\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    placeholder: \"description\",\n    onChange: function onChange(e) {\n      setData(_objectSpread({}, data, {\n        description: e.target.value\n      }));\n    },\n    className: \"forminput\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    id: \"submit\"\n  }, \"Create Viewing\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewingForm);\n\n//# sourceURL=webpack:///./src/client/components/viewings/createViewing/ViewingForm.js?");

/***/ }),

/***/ "./src/client/components/viewings/createViewing/index.js":
/*!***************************************************************!*\
  !*** ./src/client/components/viewings/createViewing/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ViewingForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewingForm */ \"./src/client/components/viewings/createViewing/ViewingForm.js\");\n/* harmony import */ var _generic_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../generic/modal */ \"./src/client/components/generic/modal/index.js\");\n\n\n\n\nvar CreateViewing = function CreateViewing(_ref) {\n  var setModal = _ref.setModal,\n      modal = _ref.modal,\n      data = _ref.data,\n      setData = _ref.setData,\n      props = _ref.props,\n      handleCreateViewing = _ref.handleCreateViewing,\n      reduxUser = _ref.reduxUser,\n      flash = _ref.flash,\n      setFlash = _ref.setFlash;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    style: {\n      margin: \"0 0 1em 0\"\n    },\n    onClick: function onClick() {\n      setModal(true);\n    }\n  }, \"Create Viewing\"), modal && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_generic_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    trigger: modal,\n    triggerFunc: setModal,\n    content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ViewingForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      handleCreateViewing: handleCreateViewing,\n      data: data,\n      setData: setData,\n      props: props,\n      reduxUser: reduxUser,\n      setFlash: setFlash\n    }),\n    flash: flash\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateViewing);\n\n//# sourceURL=webpack:///./src/client/components/viewings/createViewing/index.js?");

/***/ }),

/***/ "./src/client/components/viewings/createViewing/styled.js":
/*!****************************************************************!*\
  !*** ./src/client/components/viewings/createViewing/styled.js ***!
  \****************************************************************/
/*! exports provided: DateWrap, FormStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DateWrap\", function() { return DateWrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FormStyle\", function() { return FormStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n width:100%;\\n.rdt {\\n    display:inline-block;\\n}\\n section {\\n     text-align:center;\\n     width:350px;\\n     margin:auto;\\n\\n }\\n .forminput, .formselect, #submit {\\n     width:330px;\\n }\\n\\nbutton {\\n    margin-top:2em;\\n}\\nmargin-top:3em;\\n\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\ntext-align:left;\\nlabel {\\n    margin-left:1em;\\n}\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar DateWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject());\nvar FormStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form(_templateObject2());\n\n//# sourceURL=webpack:///./src/client/components/viewings/createViewing/styled.js?");

/***/ }),

/***/ "./src/client/components/viewings/functions/CreateViewing.js":
/*!*******************************************************************!*\
  !*** ./src/client/components/viewings/functions/CreateViewing.js ***!
  \*******************************************************************/
/*! exports provided: createViewing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createViewing\", function() { return createViewing; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction createViewing(e, data, props, setViewings, viewings, setFlash, setModal) {\n  e.preventDefault();\n\n  if (!data) {\n    setFlash([{\n      message: \"Please enter all fields\"\n    }]);\n  } else if (Object.keys(data).length === 4) {\n    setModal(false);\n    fetch(\"/createViewing\", {\n      method: \"POST\",\n      body: JSON.stringify({\n        data: data,\n        user: props.user\n      }),\n      headers: {\n        \"Content-Type\": \"application/json\"\n      }\n    }).then(function (res) {\n      return res.json();\n    }).then(function (json) {\n      setViewings([].concat(_toConsumableArray(viewings), [json]));\n    }).catch(function (err) {\n      return console.log(err);\n    });\n  } else {\n    setFlash([{\n      message: \"Please enter all fields\"\n    }]);\n  }\n}\n\n//# sourceURL=webpack:///./src/client/components/viewings/functions/CreateViewing.js?");

/***/ }),

/***/ "./src/client/components/viewings/functions/DeleteViewing.js":
/*!*******************************************************************!*\
  !*** ./src/client/components/viewings/functions/DeleteViewing.js ***!
  \*******************************************************************/
/*! exports provided: deleteViewing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteViewing\", function() { return deleteViewing; });\nfunction deleteViewing(item, props, setViewings) {\n  fetch('/deleteViewing', {\n    method: 'DELETE',\n    body: JSON.stringify({\n      data: item,\n      user: props.user\n    }),\n    headers: {\n      'Content-Type': 'application/json'\n    }\n  }).then(function (res) {\n    return res.json();\n  }).then(function (json) {\n    setViewings(json);\n  }).catch(function (err) {\n    return console.log(err);\n  });\n}\n\n//# sourceURL=webpack:///./src/client/components/viewings/functions/DeleteViewing.js?");

/***/ }),

/***/ "./src/client/components/viewings/functions/GetViewings.js":
/*!*****************************************************************!*\
  !*** ./src/client/components/viewings/functions/GetViewings.js ***!
  \*****************************************************************/
/*! exports provided: getViewings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getViewings\", function() { return getViewings; });\nfunction getViewings(setLoading, setViewings) {\n  setLoading(true);\n  fetch('/api/viewings').then(function (res) {\n    return res.json();\n  }).then(function (json) {\n    setViewings(json);\n    setLoading(false);\n  }).catch(function (err) {\n    console.log(err);\n    setLoading(false);\n  });\n}\n\n//# sourceURL=webpack:///./src/client/components/viewings/functions/GetViewings.js?");

/***/ }),

/***/ "./src/client/components/viewings/functions/ModifyDate.js":
/*!****************************************************************!*\
  !*** ./src/client/components/viewings/functions/ModifyDate.js ***!
  \****************************************************************/
/*! exports provided: modifyDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"modifyDate\", function() { return modifyDate; });\nfunction modifyDate(item) {\n  var date = item.date.split('T')[0].replace(/-/g, '/');\n  var time = item.date.split('T')[1].slice(0, 5);\n  return {\n    date: date,\n    time: time\n  };\n}\n\n//# sourceURL=webpack:///./src/client/components/viewings/functions/ModifyDate.js?");

/***/ }),

/***/ "./src/client/components/viewings/index.js":
/*!*************************************************!*\
  !*** ./src/client/components/viewings/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _viewingsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewingsList */ \"./src/client/components/viewings/viewingsList/index.js\");\n/* harmony import */ var _functions_CreateViewing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/CreateViewing */ \"./src/client/components/viewings/functions/CreateViewing.js\");\n/* harmony import */ var _functions_DeleteViewing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/DeleteViewing */ \"./src/client/components/viewings/functions/DeleteViewing.js\");\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styled */ \"./src/client/components/viewings/styled.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _generic_loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../generic/loading */ \"./src/client/components/generic/loading/index.js\");\n/* harmony import */ var _createViewing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./createViewing */ \"./src/client/components/viewings/createViewing/index.js\");\n/* harmony import */ var _functions_GetViewings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./functions/GetViewings */ \"./src/client/components/viewings/functions/GetViewings.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Viewings(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      _useState2 = _slicedToArray(_useState, 2),\n      data = _useState2[0],\n      setData = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      _useState4 = _slicedToArray(_useState3, 2),\n      viewings = _useState4[0],\n      setViewings = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState6 = _slicedToArray(_useState5, 2),\n      loading = _useState6[0],\n      setLoading = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      _useState8 = _slicedToArray(_useState7, 2),\n      modal = _useState8[0],\n      setModal = _useState8[1];\n\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      _useState10 = _slicedToArray(_useState9, 2),\n      flash = _useState10[0],\n      setFlash = _useState10[1];\n\n  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(props.reduxUser),\n      _useState12 = _slicedToArray(_useState11, 2),\n      reduxUser = _useState12[0],\n      setReduxUser = _useState12[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    Object(_functions_GetViewings__WEBPACK_IMPORTED_MODULE_9__[\"getViewings\"])(setLoading, setViewings);\n  }, [props.user]);\n\n  var handleCreateViewing = function handleCreateViewing(e) {\n    Object(_functions_CreateViewing__WEBPACK_IMPORTED_MODULE_3__[\"createViewing\"])(e, data, props, setViewings, viewings, setFlash, setModal);\n  };\n\n  var handleDeleteViewing = function handleDeleteViewing(item) {\n    Object(_functions_DeleteViewing__WEBPACK_IMPORTED_MODULE_4__[\"deleteViewing\"])(item, props, setViewings);\n  };\n\n  return props.user ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n    style: {\n      textAlign: \"center\"\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"All Viewings: \"), props.user.admin && props.user.properties.length ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_createViewing__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    setModal: setModal,\n    modal: modal,\n    data: data,\n    setData: setData,\n    props: props,\n    handleCreateViewing: handleCreateViewing,\n    reduxUser: reduxUser,\n    flash: flash,\n    setFlash: setFlash\n  }) : props.user.admin && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Add your \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/admin\"\n  }, \"property\"), \" to create viewings\", \" \"), loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_generic_loading__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_5__[\"CardWrap\"], null, viewings && viewings.map(function (item) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_viewingsList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      item: item,\n      props: props,\n      handleDeleteViewing: handleDeleteViewing,\n      key: item._id\n    });\n  }))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: {\n      textAlign: \"center\"\n    }\n  }, \"Please \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/login\"\n  }, \"login\"), \" to see Viewings\");\n}\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    reduxUser: state.user\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"connect\"])(mapStateToProps)(Viewings));\n\n//# sourceURL=webpack:///./src/client/components/viewings/index.js?");

/***/ }),

/***/ "./src/client/components/viewings/styled.js":
/*!**************************************************!*\
  !*** ./src/client/components/viewings/styled.js ***!
  \**************************************************/
/*! exports provided: CardWrap, CardStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CardWrap\", function() { return CardWrap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CardStyle\", function() { return CardStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\nwidth:100%;\\nmax-width:340px;\\nborder-radius:5px;\\nmargin:1em;\\n  th,\\n  td {\\n    padding: 0.5em;\\n    text-align:center;\\n  }\\n  th {\\n    color: white;\\n    background-color: lightslategray;\\n    font-weight: 500;\\n  }\\n  tr {\\n    background-color: #e9e9e9;\\n    color: midnightblue;\\n  }\\n/* border-radius:5px;\\nmargin:1em;\\npadding:1em;\\nwidth:100%;\\nmax-width:300px;\\nposition:relative;\\ncolor:white; */\\nbutton {\\n    background: white;\\n    color:black;\\n}\\nopacity:1;\\n\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\ndisplay:flex;\\nflex-wrap:wrap;\\njustify-content:center;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar CardWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section(_templateObject());\nvar CardStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.table(_templateObject2());\n\n//# sourceURL=webpack:///./src/client/components/viewings/styled.js?");

/***/ }),

/***/ "./src/client/components/viewings/viewingsList/bookViewing/index.js":
/*!**************************************************************************!*\
  !*** ./src/client/components/viewings/viewingsList/bookViewing/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar BookViewing = function BookViewing(_ref) {\n  var item = _ref.item,\n      props = _ref.props,\n      setSuccess = _ref.setSuccess;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    style: {\n      background: \"darkred\",\n      color: \"white\"\n    },\n    onClick: function onClick() {\n      fetch(\"/bookViewing\", {\n        method: \"POST\",\n        body: JSON.stringify({\n          event: item,\n          user: props.user\n        }),\n        headers: {\n          \"Content-Type\": \"application/json\"\n        }\n      }).then(function (res) {\n        return res.json();\n      }).then(function (json) {\n        setSuccess(true);\n      }).catch(function (err) {\n        return console.log(err);\n      });\n    }\n  }, \"Book\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BookViewing);\n\n//# sourceURL=webpack:///./src/client/components/viewings/viewingsList/bookViewing/index.js?");

/***/ }),

/***/ "./src/client/components/viewings/viewingsList/index.js":
/*!**************************************************************!*\
  !*** ./src/client/components/viewings/viewingsList/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styled */ \"./src/client/components/viewings/styled.js\");\n/* harmony import */ var _bookViewing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bookViewing */ \"./src/client/components/viewings/viewingsList/bookViewing/index.js\");\n/* harmony import */ var _viewProp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewProp */ \"./src/client/components/viewings/viewingsList/viewProp/index.js\");\n/* harmony import */ var _viewingOwner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./viewingOwner */ \"./src/client/components/viewings/viewingsList/viewingOwner/index.js\");\n/* harmony import */ var styled_icons_material_Done__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-icons/material/Done */ \"styled-icons/material/Done\");\n/* harmony import */ var styled_icons_material_Done__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_icons_material_Done__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _functions_ModifyDate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../functions/ModifyDate */ \"./src/client/components/viewings/functions/ModifyDate.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\nfunction ViewingsList(_ref) {\n  var item = _ref.item,\n      props = _ref.props,\n      handleDeleteViewing = _ref.handleDeleteViewing;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      remove = _useState2[0],\n      setRemove = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState4 = _slicedToArray(_useState3, 2),\n      success = _useState4[0],\n      setSuccess = _useState4[1];\n\n  var date = Object(_functions_ModifyDate__WEBPACK_IMPORTED_MODULE_6__[\"modifyDate\"])(item);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__[\"CardStyle\"], {\n    className: remove && \"remove\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, item.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, date.date, \" - \", date.time)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, item.description)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_viewProp__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    item: item\n  }), item.creator !== props.user.id ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_bookViewing__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    item: item,\n    props: props,\n    setSuccess: setSuccess\n  }), success && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_icons_material_Done__WEBPACK_IMPORTED_MODULE_5__[\"Done\"], {\n    size: 20,\n    color: \"green\"\n  })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_viewingOwner__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    handleDeleteViewing: handleDeleteViewing,\n    item: item,\n    setRemove: setRemove\n  })))));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewingsList);\n\n//# sourceURL=webpack:///./src/client/components/viewings/viewingsList/index.js?");

/***/ }),

/***/ "./src/client/components/viewings/viewingsList/viewProp/index.js":
/*!***********************************************************************!*\
  !*** ./src/client/components/viewings/viewingsList/viewProp/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar ViewProp = function ViewProp(_ref) {\n  var item = _ref.item;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    to: {\n      pathname: \"/property/\".concat(item._id),\n      state: {\n        data: item.property\n      }\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", null, \"Property\"));\n};\n\nViewProp.propTypes = {\n  item: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewProp);\n\n//# sourceURL=webpack:///./src/client/components/viewings/viewingsList/viewProp/index.js?");

/***/ }),

/***/ "./src/client/components/viewings/viewingsList/viewingOwner/index.js":
/*!***************************************************************************!*\
  !*** ./src/client/components/viewings/viewingsList/viewingOwner/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ \"./src/client/components/viewings/viewingsList/viewingOwner/styled.js\");\n\n\n\nvar ViewingOwner = function ViewingOwner(_ref) {\n  var handleDeleteViewing = _ref.handleDeleteViewing,\n      item = _ref.item,\n      setRemove = _ref.setRemove;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"You are the owner of this viewing\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__[\"DeleteIcon\"], {\n    size: \"30\",\n    color: \"darkred\",\n    onClick: function onClick() {\n      handleDeleteViewing(item);\n      setRemove(true);\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewingOwner);\n\n//# sourceURL=webpack:///./src/client/components/viewings/viewingsList/viewingOwner/index.js?");

/***/ }),

/***/ "./src/client/components/viewings/viewingsList/viewingOwner/styled.js":
/*!****************************************************************************!*\
  !*** ./src/client/components/viewings/viewingsList/viewingOwner/styled.js ***!
  \****************************************************************************/
/*! exports provided: DeleteIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DeleteIcon\", function() { return DeleteIcon; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_icons_material_Delete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-icons/material/Delete */ \"styled-icons/material/Delete\");\n/* harmony import */ var styled_icons_material_Delete__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_icons_material_Delete__WEBPACK_IMPORTED_MODULE_1__);\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  :hover{\\n      color:red;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nvar DeleteIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(styled_icons_material_Delete__WEBPACK_IMPORTED_MODULE_1__[\"Delete\"])(_templateObject());\n\n//# sourceURL=webpack:///./src/client/components/viewings/viewingsList/viewingOwner/styled.js?");

/***/ }),

/***/ "./src/client/functions/Login.js":
/*!***************************************!*\
  !*** ./src/client/functions/Login.js ***!
  \***************************************/
/*! exports provided: fetchLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchLogin\", function() { return fetchLogin; });\n/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! universal-cookie */ \"universal-cookie\");\n/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction fetchLogin(e, data, window, props, setFlash) {\n  e.preventDefault();\n\n  if (data) {\n    fetch(\"/login\", {\n      method: 'POST',\n      body: JSON.stringify(data),\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    }).then(function (res) {\n      return res.json();\n    }).then(function (json) {\n      if (json.errors) {\n        setFlash(json.errors);\n      } else {\n        var cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_0___default.a();\n        cookies.set('cookie-data', json.token);\n        props.setUser(json.user);\n        props.history.push('/');\n      }\n    }).catch(function (err) {\n      return console.log(err);\n    });\n  } else {\n    setFlash([{\n      message: 'form is empty'\n    }]);\n  }\n}\n\n//# sourceURL=webpack:///./src/client/functions/Login.js?");

/***/ }),

/***/ "./src/client/functions/Register.js":
/*!******************************************!*\
  !*** ./src/client/functions/Register.js ***!
  \******************************************/
/*! exports provided: register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"register\", function() { return register; });\nfunction register(e, data, setFlash, window, props) {\n  e.preventDefault();\n\n  if (data) {\n    fetch(\"/register\", {\n      method: 'POST',\n      body: JSON.stringify(data),\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    }).then(function (res) {\n      return res.json();\n    }).then(function (json) {\n      if (json.errors) {\n        setFlash(json.errors);\n      } else {\n        props.history.push('/login');\n      }\n    }).catch(function (err) {\n      return console.log(err);\n    });\n  } else {\n    setFlash([{\n      message: 'form is empty'\n    }]);\n  }\n}\n\n//# sourceURL=webpack:///./src/client/functions/Register.js?");

/***/ }),

/***/ "./src/client/functions/VerifyToken.js":
/*!*********************************************!*\
  !*** ./src/client/functions/VerifyToken.js ***!
  \*********************************************/
/*! exports provided: verifyToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"verifyToken\", function() { return verifyToken; });\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ \"jwt-decode\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction verifyToken(window, setUser) {\n  var token = window.sessionStorage.getItem('jwtToken');\n\n  if (token) {\n    fetch(\"/verifyToken\", {\n      method: 'POST',\n      body: JSON.stringify({\n        token: token\n      }),\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    }).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      var userVal = jwt_decode__WEBPACK_IMPORTED_MODULE_0__(data.token);\n      setUser(userVal);\n    }).catch(function (err) {\n      console.log(err, 'token invalid');\n    });\n  }\n}\n\n//# sourceURL=webpack:///./src/client/functions/VerifyToken.js?");

/***/ }),

/***/ "./src/client/pages/admin/index.js":
/*!*****************************************!*\
  !*** ./src/client/pages/admin/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/admin */ \"./src/client/components/admin/index.js\");\n\n\n\nvar AdminPage = function AdminPage(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_admin__WEBPACK_IMPORTED_MODULE_1__[\"default\"], props);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AdminPage);\n\n//# sourceURL=webpack:///./src/client/pages/admin/index.js?");

/***/ }),

/***/ "./src/client/pages/bookings/index.js":
/*!********************************************!*\
  !*** ./src/client/pages/bookings/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_bookings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/bookings */ \"./src/client/components/bookings/index.js\");\n\n\n\nvar BookingPage = function BookingPage(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_bookings__WEBPACK_IMPORTED_MODULE_1__[\"default\"], props);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BookingPage);\n\n//# sourceURL=webpack:///./src/client/pages/bookings/index.js?");

/***/ }),

/***/ "./src/client/pages/dashboard/index.js":
/*!*********************************************!*\
  !*** ./src/client/pages/dashboard/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/dashboard */ \"./src/client/components/dashboard/index.js\");\n\n\n\nvar DashboardPage = function DashboardPage(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_dashboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], props);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DashboardPage);\n\n//# sourceURL=webpack:///./src/client/pages/dashboard/index.js?");

/***/ }),

/***/ "./src/client/pages/login/index.js":
/*!*****************************************!*\
  !*** ./src/client/pages/login/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/login */ \"./src/client/components/login/index.js\");\n\n\n\n\nvar LoginPage = function LoginPage(props) {\n  return !props.user && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_login__WEBPACK_IMPORTED_MODULE_2__[\"default\"], props);\n};\n\nLoginPage.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginPage);\n\n//# sourceURL=webpack:///./src/client/pages/login/index.js?");

/***/ }),

/***/ "./src/client/pages/noMatch/index.js":
/*!*******************************************!*\
  !*** ./src/client/pages/noMatch/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar NoMatch = function NoMatch() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Oops no page exists here...the sadness\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NoMatch);\n\n//# sourceURL=webpack:///./src/client/pages/noMatch/index.js?");

/***/ }),

/***/ "./src/client/pages/property/index.js":
/*!********************************************!*\
  !*** ./src/client/pages/property/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/property */ \"./src/client/components/property/index.js\");\n\n\n\nvar PropertyPage = function PropertyPage(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_property__WEBPACK_IMPORTED_MODULE_1__[\"default\"], props);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PropertyPage);\n\n//# sourceURL=webpack:///./src/client/pages/property/index.js?");

/***/ }),

/***/ "./src/client/pages/register/index.js":
/*!********************************************!*\
  !*** ./src/client/pages/register/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/register */ \"./src/client/components/register/index.js\");\n\n\n\n\nvar RegisterPage = function RegisterPage(props) {\n  return !props.user && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_register__WEBPACK_IMPORTED_MODULE_2__[\"default\"], props);\n};\n\nRegisterPage.propTypes = {};\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegisterPage);\n\n//# sourceURL=webpack:///./src/client/pages/register/index.js?");

/***/ }),

/***/ "./src/client/pages/viewings/index.js":
/*!********************************************!*\
  !*** ./src/client/pages/viewings/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_viewings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/viewings */ \"./src/client/components/viewings/index.js\");\n\n\n\nvar ViewingsPage = function ViewingsPage(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_viewings__WEBPACK_IMPORTED_MODULE_1__[\"default\"], props);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewingsPage);\n\n//# sourceURL=webpack:///./src/client/pages/viewings/index.js?");

/***/ }),

/***/ "./src/client/redux/actions/index.js":
/*!*******************************************!*\
  !*** ./src/client/redux/actions/index.js ***!
  \*******************************************/
/*! exports provided: setUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setUser\", function() { return setUser; });\nvar setUser = function setUser(user) {\n  return {\n    type: 'UPDATE_USER',\n    payload: user\n  };\n};\n\n//# sourceURL=webpack:///./src/client/redux/actions/index.js?");

/***/ }),

/***/ "./src/client/redux/hooksReducers/favourites.js":
/*!******************************************************!*\
  !*** ./src/client/redux/hooksReducers/favourites.js ***!
  \******************************************************/
/*! exports provided: favouritesReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"favouritesReducer\", function() { return favouritesReducer; });\nfunction favouritesReducer(state, action) {\n  switch (action.type) {\n    case 'favourites':\n      return {\n        fav: action.fav\n      };\n\n    default:\n      return state;\n  }\n}\n\n//# sourceURL=webpack:///./src/client/redux/hooksReducers/favourites.js?");

/***/ }),

/***/ "./src/client/redux/hooksReducers/search.js":
/*!**************************************************!*\
  !*** ./src/client/redux/hooksReducers/search.js ***!
  \**************************************************/
/*! exports provided: searchReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchReducer\", function() { return searchReducer; });\nfunction searchReducer(state, action) {\n  switch (action.type) {\n    case 'search':\n      return {\n        value: action.input\n      };\n\n    case 'guests':\n      return {\n        guests: action.count\n      };\n\n    case 'price':\n      return {\n        price: action.price\n      };\n\n    default:\n      return state;\n  }\n}\n\n//# sourceURL=webpack:///./src/client/redux/hooksReducers/search.js?");

/***/ }),

/***/ "./src/client/redux/reducers/User.js":
/*!*******************************************!*\
  !*** ./src/client/redux/reducers/User.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar initialState = null;\n\nvar user = function user() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case \"UPDATE_USER\":\n      return action.payload;\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (user);\n\n//# sourceURL=webpack:///./src/client/redux/reducers/User.js?");

/***/ }),

/***/ "./src/client/redux/reducers/index.js":
/*!********************************************!*\
  !*** ./src/client/redux/reducers/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User */ \"./src/client/redux/reducers/User.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  user: _User__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}));\n\n//# sourceURL=webpack:///./src/client/redux/reducers/index.js?");

/***/ }),

/***/ "./src/client/styled.js":
/*!******************************!*\
  !*** ./src/client/styled.js ***!
  \******************************/
/*! exports provided: GlobalStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlobalStyle\", function() { return GlobalStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  body {\\n    color:lightslategray;\\n    font-size: 16px;\\n    margin: 0 0 8px 0;\\n    line-height:1.5em;\\n  }\\n  a {\\n    text-decoration:none;\\n    color: darkred;\\n  }\\n  input, button {\\n    border-radius: 4px;\\n    border: 1px solid #d9d9d9;\\n    padding:0.5em;\\n    background-color: white;\\n    line-height:1.5;\\n    margin:0.5em;\\n  }\\n  h4, h3 {\\n    font-weight:500;\\n  }\\n  input {\\n    font-size: 14px;\\n    :hover{\\n      border-color: #7aabdb;\\n    }\\n    :focus {\\n      outline:none !important;\\n      border-color: #7aabdb;\\n    }\\n  }\\n  button {\\n    background: darkred;\\n    color: white;\\n    font-size: 14px;\\n  }\\n  button:focus {\\n    outline:none;\\n  }\\n  button:hover{\\n    border:1px solid black;\\n  }\\n\\n  select {\\n    padding:0.5em;\\n    min-width:316px;\\n  }\\n\\n  .closeButtonModal {\\n    top: 1px;\\n    right: 1px;\\n  }\\n  .closeButtonModal:hover {\\n    border:none !important;\\n  }\\n  \\n\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"createGlobalStyle\"])(_templateObject());\n\n//# sourceURL=webpack:///./src/client/styled.js?");

/***/ }),

/***/ "./src/server/config/GenToken.js":
/*!***************************************!*\
  !*** ./src/server/config/GenToken.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nfunction genToken(user) {\n  var id = {\n    id: user._id.toString(),\n    name: user.name,\n    fav: user.favourites,\n    properties: user.properties,\n    createdEvents: user.createdEvents,\n    admin: user.admin\n  };\n  return jwt.sign(id, process.env.JWT, {\n    expiresIn: 60 * 60 * 24\n  });\n}\n\nmodule.exports = genToken;\n\n//# sourceURL=webpack:///./src/server/config/GenToken.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _client_App__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../client/App */ \"./src/client/App.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _client_redux_reducers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../client/redux/reducers */ \"./src/client/redux/reducers/index.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nmongoose__WEBPACK_IMPORTED_MODULE_1___default.a.Promise = __webpack_require__(/*! bluebird */ \"bluebird\");\n\n__webpack_require__(/*! dotenv */ \"dotenv\").config({\n  path: \".env\"\n});\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static(\"build\"));\nmongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connect(process.env.DB, {\n  useNewUrlParser: true\n});\nmongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connection.once(\"open\", function () {\n  console.log(\"Connected to DB!\");\n}).on(\"error\", function (error) {\n  console.log(\"Error is: \", error);\n});\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_4___default.a.urlencoded({\n  extended: true\n}));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_4___default.a.json());\napp.use(cors__WEBPACK_IMPORTED_MODULE_3___default()());\napp.use(__webpack_require__(/*! ./routes/user/index */ \"./src/server/routes/user/index.js\"));\napp.use(__webpack_require__(/*! ./routes/property/index */ \"./src/server/routes/property/index.js\"));\napp.use(__webpack_require__(/*! ./routes/viewings/index */ \"./src/server/routes/viewings/index.js\"));\napp.use(__webpack_require__(/*! ./routes/bookings/index */ \"./src/server/routes/bookings/index.js\"));\napp.get(\"*\", __webpack_require__(/*! ./routes/auth/index.js */ \"./src/server/routes/auth/index.js\"), function (req, res, next) {\n  var sheet = new styled_components__WEBPACK_IMPORTED_MODULE_9__[\"ServerStyleSheet\"]();\n  var auth = req.jwtTest;\n  var preloadedState = {\n    user: auth.user\n  };\n  var store = Object(redux__WEBPACK_IMPORTED_MODULE_11__[\"createStore\"])(_client_redux_reducers__WEBPACK_IMPORTED_MODULE_12__[\"default\"], preloadedState);\n  var context = {};\n  var markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_5__[\"renderToString\"])(sheet.collectStyles(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_10__[\"Provider\"], {\n    store: store\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[\"StaticRouter\"], {\n    location: req.url,\n    context: context\n  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_client_App__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null)))));\n  var styles = sheet.getStyleTags();\n  res.send(\"\\n        <!DOCTYPE html>\\n        <html>\\n          <head>\\n            <title>Property App</title>\\n            \".concat(styles, \"\\n            <script src=\\\"/bundle.js\\\" defer></script>\\n            <script>window.__PRELOADED_STATE__ = \").concat(serialize_javascript__WEBPACK_IMPORTED_MODULE_7___default()(preloadedState), \"</script>\\n          </head>\\n          <body>\\n            <div id=\\\"root\\\">\").concat(markup, \"</div>\\n          </body>\\n        </html>\\n      \"));\n});\napp.listen(process.env.PORT || 3000);\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/models/Booking.js":
/*!**************************************!*\
  !*** ./src/server/models/Booking.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar Schema = mongoose.Schema;\nvar bookingSchema = new Schema({\n  event: {\n    type: Schema.Types.ObjectId,\n    ref: 'Event'\n  },\n  user: {\n    type: Schema.Types.ObjectId,\n    ref: 'user'\n  },\n  property: {\n    type: Schema.Types.ObjectId,\n    ref: 'property'\n  }\n}, {\n  timestamps: true\n});\nmodule.exports = mongoose.model('booking', bookingSchema, 'booking');\n\n//# sourceURL=webpack:///./src/server/models/Booking.js?");

/***/ }),

/***/ "./src/server/models/Property.js":
/*!***************************************!*\
  !*** ./src/server/models/Property.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar Schema = mongoose.Schema;\nvar propertySchema = new Schema({\n  title: String,\n  rooms: String,\n  guests: Number,\n  price: Number,\n  images: [{\n    type: String\n  }],\n  coords: String,\n  creator: {\n    type: Schema.Types.ObjectId,\n    ref: 'user'\n  }\n});\nmodule.exports = mongoose.model('property', propertySchema, 'property', {\n  useNewUrlParser: true\n});\n\n//# sourceURL=webpack:///./src/server/models/Property.js?");

/***/ }),

/***/ "./src/server/models/Users.js":
/*!************************************!*\
  !*** ./src/server/models/Users.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar Schema = mongoose.Schema;\nvar userSchema = new Schema({\n  name: String,\n  email: String,\n  password: String,\n  favourites: {\n    type: Map,\n    of: String\n  },\n  createdEvents: [{\n    type: Schema.Types.ObjectId,\n    ref: 'Event'\n  }],\n  properties: [{\n    type: Schema.Types.ObjectId,\n    ref: 'property'\n  }],\n  admin: {\n    type: Boolean,\n    default: false\n  }\n});\nmodule.exports = mongoose.model('user', userSchema, 'user', {\n  useNewUrlParser: true\n});\n\n//# sourceURL=webpack:///./src/server/models/Users.js?");

/***/ }),

/***/ "./src/server/models/Viewings.js":
/*!***************************************!*\
  !*** ./src/server/models/Viewings.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar Schema = mongoose.Schema;\nvar viewingSchema = new Schema({\n  title: {\n    type: String,\n    required: true\n  },\n  description: {\n    type: String,\n    required: true\n  },\n  date: {\n    type: Date,\n    required: true\n  },\n  creator: {\n    type: Schema.Types.ObjectId,\n    ref: 'user'\n  },\n  property: {\n    type: Schema.Types.ObjectId,\n    ref: 'property'\n  }\n});\nmodule.exports = mongoose.model('Event', viewingSchema);\n\n//# sourceURL=webpack:///./src/server/models/Viewings.js?");

/***/ }),

/***/ "./src/server/routes/auth/index.js":
/*!*****************************************!*\
  !*** ./src/server/routes/auth/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar User = __webpack_require__(/*! ../../models/Users */ \"./src/server/models/Users.js\");\n\nvar config = __webpack_require__(/*! ../../config/GenToken */ \"./src/server/config/GenToken.js\");\n\nvar jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nvar Cookies = __webpack_require__(/*! universal-cookie */ \"universal-cookie\");\n\nvar auth = function auth(req, res, next) {\n  var cookies = new Cookies(req.headers.cookie);\n  var checkCookie = cookies.get(\"cookie-data\");\n\n  if (!checkCookie) {\n    req.jwtTest = false;\n    next();\n  } else {\n    jwt.verify(checkCookie, process.env.JWT, function (err, user) {\n      if (err) req.jwtTest = false;\n      User.findById({\n        _id: user.id\n      }).populate({\n        path: \"properties\",\n        populate: {\n          path: \"properties\"\n        }\n      }).then(function (user) {\n        var token = config(user);\n        req.jwtTest = {\n          token: token,\n          user: {\n            id: user.id,\n            name: user.name,\n            fav: user.favourites,\n            properties: user.properties,\n            createdEvents: user.createdEvents,\n            admin: user.admin\n          }\n        };\n        next();\n      }).catch(function (err) {\n        console.log(err);\n        req.jwtTest = false;\n      });\n    });\n  }\n};\n\nmodule.exports = auth;\n\n//# sourceURL=webpack:///./src/server/routes/auth/index.js?");

/***/ }),

/***/ "./src/server/routes/bookings/CreateBooking.js":
/*!*****************************************************!*\
  !*** ./src/server/routes/bookings/CreateBooking.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar Bookings = __webpack_require__(/*! ../../models/Booking */ \"./src/server/models/Booking.js\");\n\nvar Viewing = __webpack_require__(/*! ../../models/Viewings */ \"./src/server/models/Viewings.js\");\n\nvar router = express.Router();\nrouter.post('/bookViewing',\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res) {\n    var _req$body, event, user, checkBooked, bookViewing, booking, result;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _req$body = req.body, event = _req$body.event, user = _req$body.user;\n            _context.prev = 1;\n            _context.next = 4;\n            return Bookings.findOne({\n              event: event._id,\n              user: user.id\n            });\n\n          case 4:\n            checkBooked = _context.sent;\n\n            if (!checkBooked) {\n              _context.next = 9;\n              break;\n            }\n\n            res.json({\n              error: 'already booked'\n            });\n            _context.next = 17;\n            break;\n\n          case 9:\n            _context.next = 11;\n            return Viewing.findOne({\n              _id: event._id\n            });\n\n          case 11:\n            bookViewing = _context.sent;\n            booking = new Bookings({\n              user: user.id,\n              event: bookViewing,\n              property: event.property\n            });\n            _context.next = 15;\n            return booking.save();\n\n          case 15:\n            result = _context.sent;\n            res.json([result]);\n\n          case 17:\n            _context.next = 22;\n            break;\n\n          case 19:\n            _context.prev = 19;\n            _context.t0 = _context[\"catch\"](1);\n            res.json({\n              error: _context.t0\n            });\n\n          case 22:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[1, 19]]);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/server/routes/bookings/CreateBooking.js?");

/***/ }),

/***/ "./src/server/routes/bookings/DeleteBooking.js":
/*!*****************************************************!*\
  !*** ./src/server/routes/bookings/DeleteBooking.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar Bookings = __webpack_require__(/*! ../../models/Booking */ \"./src/server/models/Booking.js\");\n\nvar router = express.Router();\nrouter.delete('/deleteBooking',\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee2(req, res) {\n    var _req$body, data, user;\n\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _req$body = req.body, data = _req$body.data, user = _req$body.user;\n\n            try {\n              Bookings.deleteOne({\n                _id: data._id\n              },\n              /*#__PURE__*/\n              function () {\n                var _ref2 = _asyncToGenerator(\n                /*#__PURE__*/\n                regeneratorRuntime.mark(function _callee(err) {\n                  var bookings;\n                  return regeneratorRuntime.wrap(function _callee$(_context) {\n                    while (1) {\n                      switch (_context.prev = _context.next) {\n                        case 0:\n                          if (!err) {\n                            _context.next = 2;\n                            break;\n                          }\n\n                          return _context.abrupt(\"return\", res.json({\n                            error: err\n                          }));\n\n                        case 2:\n                          _context.next = 4;\n                          return Bookings.find({\n                            user: user.id\n                          }).populate('event', ['title', 'description', 'date']).populate('user', ['name', 'email']).populate('property');\n\n                        case 4:\n                          bookings = _context.sent;\n                          return _context.abrupt(\"return\", res.json(bookings));\n\n                        case 6:\n                        case \"end\":\n                          return _context.stop();\n                      }\n                    }\n                  }, _callee);\n                }));\n\n                return function (_x3) {\n                  return _ref2.apply(this, arguments);\n                };\n              }());\n            } catch (err) {\n              res.json({\n                error: err\n              });\n            }\n\n          case 2:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/server/routes/bookings/DeleteBooking.js?");

/***/ }),

/***/ "./src/server/routes/bookings/GetBooking.js":
/*!**************************************************!*\
  !*** ./src/server/routes/bookings/GetBooking.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar Bookings = __webpack_require__(/*! ../../models/Booking */ \"./src/server/models/Booking.js\");\n\nvar router = express.Router();\nrouter.post('/bookings',\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res) {\n    var user, bookings;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            user = req.body.user;\n            _context.prev = 1;\n            _context.next = 4;\n            return Bookings.find({\n              user: user.id\n            }).populate('event', ['title', 'description', 'date']).populate('user', ['name', 'email']).populate('property');\n\n          case 4:\n            bookings = _context.sent;\n            res.json(bookings);\n            _context.next = 11;\n            break;\n\n          case 8:\n            _context.prev = 8;\n            _context.t0 = _context[\"catch\"](1);\n            res.json({\n              error: _context.t0\n            });\n\n          case 11:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[1, 8]]);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/server/routes/bookings/GetBooking.js?");

/***/ }),

/***/ "./src/server/routes/bookings/index.js":
/*!*********************************************!*\
  !*** ./src/server/routes/bookings/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar router = express.Router();\nrouter.use(__webpack_require__(/*! ./GetBooking */ \"./src/server/routes/bookings/GetBooking.js\"));\nrouter.use(__webpack_require__(/*! ./CreateBooking */ \"./src/server/routes/bookings/CreateBooking.js\"));\nrouter.use(__webpack_require__(/*! ./DeleteBooking */ \"./src/server/routes/bookings/DeleteBooking.js\"));\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/server/routes/bookings/index.js?");

/***/ }),

/***/ "./src/server/routes/property/AddProperty.js":
/*!***************************************************!*\
  !*** ./src/server/routes/property/AddProperty.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar Property = __webpack_require__(/*! ../../models/Property */ \"./src/server/models/Property.js\");\n\nvar User = __webpack_require__(/*! ../../models/Users */ \"./src/server/models/Users.js\");\n\nvar PostcodesIO = __webpack_require__(/*! postcodesio-client */ \"postcodesio-client\");\n\nvar router = express.Router();\nvar postcodes = new PostcodesIO();\nrouter.post('/addProperty',\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee2(req, res) {\n    var _req$body, data, user;\n\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _req$body = req.body, data = _req$body.data, user = _req$body.user;\n\n            try {\n              postcodes.lookup(data.coords).then(\n              /*#__PURE__*/\n              function () {\n                var _ref2 = _asyncToGenerator(\n                /*#__PURE__*/\n                regeneratorRuntime.mark(function _callee(postcode) {\n                  var coords, newProperty, result, creator, newProps;\n                  return regeneratorRuntime.wrap(function _callee$(_context) {\n                    while (1) {\n                      switch (_context.prev = _context.next) {\n                        case 0:\n                          coords = \"\".concat(postcode.latitude, \",\").concat(postcode.longitude);\n                          newProperty = new Property({\n                            title: data.title,\n                            rooms: data.rooms,\n                            guests: data.guests,\n                            price: data.price,\n                            coords: coords,\n                            images: [],\n                            creator: user.id\n                          });\n                          _context.next = 4;\n                          return newProperty.save();\n\n                        case 4:\n                          result = _context.sent;\n                          _context.next = 7;\n                          return User.findById(user.id);\n\n                        case 7:\n                          creator = _context.sent;\n\n                          if (creator) {\n                            _context.next = 10;\n                            break;\n                          }\n\n                          throw new Error('User not found.');\n\n                        case 10:\n                          creator.properties.push(newProperty);\n                          _context.next = 13;\n                          return creator.save();\n\n                        case 13:\n                          _context.next = 15;\n                          return User.findById(user.id).select({\n                            'password': 0,\n                            'email': 0\n                          }).populate({\n                            path: 'properties',\n                            populate: {\n                              path: 'properties'\n                            }\n                          });\n\n                        case 15:\n                          newProps = _context.sent;\n                          res.json(newProps);\n\n                        case 17:\n                        case \"end\":\n                          return _context.stop();\n                      }\n                    }\n                  }, _callee);\n                }));\n\n                return function (_x3) {\n                  return _ref2.apply(this, arguments);\n                };\n              }()).catch(function (err) {\n                res.json({\n                  error: err\n                });\n              });\n            } catch (err) {\n              res.json({\n                error: err\n              });\n            }\n\n          case 2:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/server/routes/property/AddProperty.js?");

/***/ }),

/***/ "./src/server/routes/property/AddPropertyImage.js":
/*!********************************************************!*\
  !*** ./src/server/routes/property/AddPropertyImage.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar Property = __webpack_require__(/*! ../../models/Property */ \"./src/server/models/Property.js\");\n\nvar fileType = __webpack_require__(/*! file-type */ \"file-type\");\n\nvar multiparty = __webpack_require__(/*! multiparty */ \"multiparty\");\n\nvar fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar uuidv4 = __webpack_require__(/*! uuid/v4 */ \"uuid/v4\");\n\nvar bluebird = __webpack_require__(/*! bluebird */ \"bluebird\");\n\nvar async = __webpack_require__(/*! async */ \"async\");\n\nvar AWS = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n\nvar router = express.Router();\nrouter.post('/addPropImages', function (req, res, next) {\n  var arr = [];\n  async.waterfall([processImage, uploadFile, saveToDB], function (err, result) {\n    if (err) {\n      return res.json(err);\n    }\n\n    return res.json(result);\n  });\n\n  function processImage(_x) {\n    return _processImage.apply(this, arguments);\n  }\n\n  function _processImage() {\n    _processImage = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee2(callback) {\n      var form;\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              form = new multiparty.Form();\n              form.parse(req, function (error, fields, files) {\n                if (error) return res.json({\n                  error: err\n                });\n                files.file.forEach(\n                /*#__PURE__*/\n                function () {\n                  var _ref = _asyncToGenerator(\n                  /*#__PURE__*/\n                  regeneratorRuntime.mark(function _callee(file) {\n                    var path, buffer, type, fileName;\n                    return regeneratorRuntime.wrap(function _callee$(_context) {\n                      while (1) {\n                        switch (_context.prev = _context.next) {\n                          case 0:\n                            _context.prev = 0;\n                            path = file.path;\n                            buffer = fs.readFileSync(path);\n                            type = fileType(buffer);\n\n                            if (type) {\n                              _context.next = 6;\n                              break;\n                            }\n\n                            return _context.abrupt(\"return\", res.json({\n                              error: 'Invalid format'\n                            }));\n\n                          case 6:\n                            if (!(type.ext !== 'jpg' && type.ext !== 'jpeg' && type.ext !== 'gif' && type.ext !== 'png')) {\n                              _context.next = 8;\n                              break;\n                            }\n\n                            return _context.abrupt(\"return\", res.json({\n                              error: 'Invalid format'\n                            }));\n\n                          case 8:\n                            fileName = uuidv4();\n                            arr.push({\n                              filename: fileName,\n                              buffer: buffer,\n                              type: type\n                            });\n                            return _context.abrupt(\"return\", arr);\n\n                          case 13:\n                            _context.prev = 13;\n                            _context.t0 = _context[\"catch\"](0);\n                            return _context.abrupt(\"return\", res.json({\n                              error: _context.t0\n                            }));\n\n                          case 16:\n                          case \"end\":\n                            return _context.stop();\n                        }\n                      }\n                    }, _callee, null, [[0, 13]]);\n                  }));\n\n                  return function (_x2) {\n                    return _ref.apply(this, arguments);\n                  };\n                }());\n                return callback(null, arr, req);\n              });\n\n            case 2:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n    return _processImage.apply(this, arguments);\n  }\n});\n\nfunction saveToDB(_x3, _x4, _x5) {\n  return _saveToDB.apply(this, arguments);\n}\n\nfunction _saveToDB() {\n  _saveToDB = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee3(req, arr, callback) {\n    var currentProperty;\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return Property.findById({\n              '_id': req.query.id\n            });\n\n          case 2:\n            currentProperty = _context3.sent;\n\n            if (currentProperty) {\n              _context3.next = 5;\n              break;\n            }\n\n            throw new Error('No property found');\n\n          case 5:\n            arr.forEach(function (item) {\n              currentProperty.images.push(\"\".concat(item.filename, \".\").concat(item.type.ext));\n            });\n            currentProperty.save();\n            callback(null, currentProperty);\n\n          case 8:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n  return _saveToDB.apply(this, arguments);\n}\n\nAWS.config.update({\n  accessKeyId: process.env.AWS_ACCESS_KEY_ID,\n  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY\n});\nAWS.config.setPromisesDependency(bluebird);\nvar s3 = new AWS.S3();\n\nfunction uploadFile(arr, req, callback) {\n  arr.forEach(function (el) {\n    var params = {\n      ACL: 'public-read',\n      Body: el.buffer,\n      Bucket: process.env.S3_BUCKET,\n      ContentType: el.type.mime,\n      Key: \"\".concat(el.filename, \".\").concat(el.type.ext)\n    };\n    s3.upload(params).promise();\n  });\n  callback(null, req, arr);\n}\n\n;\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/server/routes/property/AddPropertyImage.js?");

/***/ }),

/***/ "./src/server/routes/property/DeleteProperty.js":
/*!******************************************************!*\
  !*** ./src/server/routes/property/DeleteProperty.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar Property = __webpack_require__(/*! ../../models/Property */ \"./src/server/models/Property.js\");\n\nvar User = __webpack_require__(/*! ../../models/Users */ \"./src/server/models/Users.js\");\n\nvar Viewing = __webpack_require__(/*! ../../models/Viewings */ \"./src/server/models/Viewings.js\");\n\nvar router = express.Router();\nrouter.delete('/deleteProp',\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee3(req, res) {\n    var _req$body, id, user;\n\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _req$body = req.body, id = _req$body.id, user = _req$body.user;\n\n            try {\n              Property.deleteOne({\n                _id: id\n              },\n              /*#__PURE__*/\n              function () {\n                var _ref2 = _asyncToGenerator(\n                /*#__PURE__*/\n                regeneratorRuntime.mark(function _callee2(err) {\n                  var getUser, newProps;\n                  return regeneratorRuntime.wrap(function _callee2$(_context2) {\n                    while (1) {\n                      switch (_context2.prev = _context2.next) {\n                        case 0:\n                          if (!err) {\n                            _context2.next = 2;\n                            break;\n                          }\n\n                          return _context2.abrupt(\"return\", res.json({\n                            error: err\n                          }));\n\n                        case 2:\n                          _context2.next = 4;\n                          return User.findById(user.id);\n\n                        case 4:\n                          getUser = _context2.sent;\n                          _context2.next = 7;\n                          return getUser.properties.pull(id);\n\n                        case 7:\n                          _context2.next = 9;\n                          return getUser.properties.pull(id);\n\n                        case 9:\n                          _context2.next = 11;\n                          return getUser.save();\n\n                        case 11:\n                          _context2.next = 13;\n                          return Viewing.deleteMany({\n                            property: id\n                          },\n                          /*#__PURE__*/\n                          function () {\n                            var _ref3 = _asyncToGenerator(\n                            /*#__PURE__*/\n                            regeneratorRuntime.mark(function _callee(err) {\n                              return regeneratorRuntime.wrap(function _callee$(_context) {\n                                while (1) {\n                                  switch (_context.prev = _context.next) {\n                                    case 0:\n                                      if (!err) {\n                                        _context.next = 2;\n                                        break;\n                                      }\n\n                                      return _context.abrupt(\"return\", res.json(err));\n\n                                    case 2:\n                                    case \"end\":\n                                      return _context.stop();\n                                  }\n                                }\n                              }, _callee);\n                            }));\n\n                            return function (_x4) {\n                              return _ref3.apply(this, arguments);\n                            };\n                          }());\n\n                        case 13:\n                          _context2.next = 15;\n                          return User.findById(user.id).select({\n                            'password': 0,\n                            'email': 0\n                          }).populate({\n                            path: 'properties',\n                            populate: {\n                              path: 'properties'\n                            }\n                          });\n\n                        case 15:\n                          newProps = _context2.sent;\n                          return _context2.abrupt(\"return\", res.json(newProps));\n\n                        case 17:\n                        case \"end\":\n                          return _context2.stop();\n                      }\n                    }\n                  }, _callee2);\n                }));\n\n                return function (_x3) {\n                  return _ref2.apply(this, arguments);\n                };\n              }());\n            } catch (err) {\n              res.json({\n                error: err\n              });\n            }\n\n          case 2:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/server/routes/property/DeleteProperty.js?");

/***/ }),

/***/ "./src/server/routes/property/DeletePropertyImage.js":
/*!***********************************************************!*\
  !*** ./src/server/routes/property/DeletePropertyImage.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar Property = __webpack_require__(/*! ../../models/Property */ \"./src/server/models/Property.js\");\n\nvar bluebird = __webpack_require__(/*! bluebird */ \"bluebird\");\n\nvar AWS = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n\nvar router = express.Router();\nrouter.delete(\"/deletePropImage\",\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee2(req, res) {\n    var _req$body, img, property, getProperty;\n\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _req$body = req.body, img = _req$body.img, property = _req$body.property;\n            _context2.prev = 1;\n            _context2.next = 4;\n            return Property.findById({\n              _id: property._id\n            });\n\n          case 4:\n            getProperty = _context2.sent;\n            getProperty.images = getProperty.images.filter(function (val) {\n              return !img.includes(val);\n            });\n            _context2.next = 8;\n            return img.map(\n            /*#__PURE__*/\n            function () {\n              var _ref2 = _asyncToGenerator(\n              /*#__PURE__*/\n              regeneratorRuntime.mark(function _callee(el) {\n                return regeneratorRuntime.wrap(function _callee$(_context) {\n                  while (1) {\n                    switch (_context.prev = _context.next) {\n                      case 0:\n                        _context.next = 2;\n                        return deleteFile(el);\n\n                      case 2:\n                      case \"end\":\n                        return _context.stop();\n                    }\n                  }\n                }, _callee);\n              }));\n\n              return function (_x3) {\n                return _ref2.apply(this, arguments);\n              };\n            }());\n\n          case 8:\n            _context2.next = 10;\n            return getProperty.save();\n\n          case 10:\n            return _context2.abrupt(\"return\", res.json(getProperty));\n\n          case 13:\n            _context2.prev = 13;\n            _context2.t0 = _context2[\"catch\"](1);\n            return _context2.abrupt(\"return\", res.json(_context2.t0));\n\n          case 16:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[1, 13]]);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\nAWS.config.update({\n  accessKeyId: process.env.AWS_ACCESS_KEY_ID,\n  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY\n});\nAWS.config.setPromisesDependency(bluebird);\nvar s3 = new AWS.S3();\n\nvar deleteFile = function deleteFile(name) {\n  var params = {\n    Bucket: process.env.S3_BUCKET,\n    Key: name\n  };\n  return s3.deleteObject(params).promise();\n};\n\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/server/routes/property/DeletePropertyImage.js?");

/***/ }),

/***/ "./src/server/routes/property/EditProperty.js":
/*!****************************************************!*\
  !*** ./src/server/routes/property/EditProperty.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar Property = __webpack_require__(/*! ../../models/Property */ \"./src/server/models/Property.js\");\n\nvar User = __webpack_require__(/*! ../../models/Users */ \"./src/server/models/Users.js\");\n\nvar PostcodesIO = __webpack_require__(/*! postcodesio-client */ \"postcodesio-client\");\n\nvar postcodes = new PostcodesIO();\nvar router = express.Router();\nrouter.put('/editProperty',\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res) {\n    var _req$body, data, user, coords, postcode, property, newProps;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _req$body = req.body, data = _req$body.data, user = _req$body.user;\n            coords = data.coords;\n            _context.prev = 2;\n\n            if (data.coords.includes(',')) {\n              _context.next = 8;\n              break;\n            }\n\n            _context.next = 6;\n            return postcodes.lookup(data.coords);\n\n          case 6:\n            postcode = _context.sent;\n            coords = \"\".concat(postcode.latitude, \",\").concat(postcode.longitude);\n\n          case 8:\n            _context.next = 10;\n            return Property.findById({\n              '_id': data._id\n            });\n\n          case 10:\n            property = _context.sent;\n            property.title = data.title;\n            property.rooms = data.rooms;\n            property.guests = data.guests;\n            property.price = data.price;\n            property.coords = coords;\n            _context.next = 18;\n            return property.save();\n\n          case 18:\n            _context.next = 20;\n            return User.findById(user.id).select({\n              'password': 0,\n              'email': 0\n            }).populate({\n              path: 'properties',\n              populate: {\n                path: 'properties'\n              }\n            });\n\n          case 20:\n            newProps = _context.sent;\n            res.json(newProps);\n            _context.next = 27;\n            break;\n\n          case 24:\n            _context.prev = 24;\n            _context.t0 = _context[\"catch\"](2);\n            res.json(_context.t0);\n\n          case 27:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[2, 24]]);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/server/routes/property/EditProperty.js?");

/***/ }),

/***/ "./src/server/routes/property/GetProperties.js":
/*!*****************************************************!*\
  !*** ./src/server/routes/property/GetProperties.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar Property = __webpack_require__(/*! ../../models/Property */ \"./src/server/models/Property.js\");\n\nvar router = express.Router();\nrouter.get('/properties',\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res) {\n    var properties;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return Property.find({});\n\n          case 3:\n            properties = _context.sent;\n            res.json(properties);\n            _context.next = 10;\n            break;\n\n          case 7:\n            _context.prev = 7;\n            _context.t0 = _context[\"catch\"](0);\n            res.json(_context.t0);\n\n          case 10:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 7]]);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/server/routes/property/GetProperties.js?");

/***/ }),

/***/ "./src/server/routes/property/SingleProperty.js":
/*!******************************************************!*\
  !*** ./src/server/routes/property/SingleProperty.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar Property = __webpack_require__(/*! ../../models/Property */ \"./src/server/models/Property.js\");\n\nvar router = express.Router();\nrouter.get('/properties/:id',\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res) {\n    var id, property;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            id = req.query.id;\n            _context.prev = 1;\n            _context.next = 4;\n            return Property.findById({\n              '_id': id\n            });\n\n          case 4:\n            property = _context.sent;\n            res.json(property);\n            _context.next = 11;\n            break;\n\n          case 8:\n            _context.prev = 8;\n            _context.t0 = _context[\"catch\"](1);\n            res.send(_context.t0);\n\n          case 11:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[1, 8]]);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/server/routes/property/SingleProperty.js?");

/***/ }),

/***/ "./src/server/routes/property/index.js":
/*!*********************************************!*\
  !*** ./src/server/routes/property/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar router = express.Router();\nrouter.use(__webpack_require__(/*! ./GetProperties */ \"./src/server/routes/property/GetProperties.js\"));\nrouter.use(__webpack_require__(/*! ./SingleProperty */ \"./src/server/routes/property/SingleProperty.js\"));\nrouter.use(__webpack_require__(/*! ./EditProperty */ \"./src/server/routes/property/EditProperty.js\"));\nrouter.use(__webpack_require__(/*! ./DeleteProperty */ \"./src/server/routes/property/DeleteProperty.js\"));\nrouter.use(__webpack_require__(/*! ./DeletePropertyImage */ \"./src/server/routes/property/DeletePropertyImage.js\"));\nrouter.use(__webpack_require__(/*! ./AddProperty */ \"./src/server/routes/property/AddProperty.js\"));\nrouter.use(__webpack_require__(/*! ./AddPropertyImage */ \"./src/server/routes/property/AddPropertyImage.js\"));\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/server/routes/property/index.js?");

/***/ }),

/***/ "./src/server/routes/user/Favourites.js":
/*!**********************************************!*\
  !*** ./src/server/routes/user/Favourites.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar User = __webpack_require__(/*! ../../models/Users */ \"./src/server/models/Users.js\");\n\nvar router = express.Router();\nrouter.post('/favourites', function (req, res, next) {\n  var _req$body = req.body,\n      fav = _req$body.fav,\n      user = _req$body.user;\n  User.findOne({\n    _id: user.id\n  },\n  /*#__PURE__*/\n  function () {\n    var _ref = _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee(err, user) {\n      var checkFav;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (!err) {\n                _context.next = 2;\n                break;\n              }\n\n              return _context.abrupt(\"return\", err);\n\n            case 2:\n              _context.next = 4;\n              return user.favourites.get(fav.propID);\n\n            case 4:\n              checkFav = _context.sent;\n\n              if (!checkFav) {\n                _context.next = 12;\n                break;\n              }\n\n              _context.next = 8;\n              return user.favourites.set(\"\".concat(fav.propID), undefined);\n\n            case 8:\n              user.save();\n              return _context.abrupt(\"return\", res.json(user.favourites));\n\n            case 12:\n              _context.next = 14;\n              return user.favourites.set(\"\".concat(fav.propID), \"\".concat(fav.title));\n\n            case 14:\n              user.save();\n              return _context.abrupt(\"return\", res.json(user.favourites));\n\n            case 16:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x, _x2) {\n      return _ref.apply(this, arguments);\n    };\n  }()).catch(function (err) {\n    return res.json(err);\n  });\n});\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/server/routes/user/Favourites.js?");

/***/ }),

/***/ "./src/server/routes/user/Login.js":
/*!*****************************************!*\
  !*** ./src/server/routes/user/Login.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar User = __webpack_require__(/*! ../../models/Users */ \"./src/server/models/Users.js\");\n\nvar config = __webpack_require__(/*! ../../config/GenToken */ \"./src/server/config/GenToken.js\");\n\nvar bcrypt = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n\nvar router = express.Router(); // Login\n\nrouter.post('/login', function (req, res, next) {\n  var _req$body = req.body,\n      email = _req$body.email,\n      password = _req$body.password;\n  var errors = [];\n\n  if (!email || !password) {\n    errors.push({\n      message: 'Please enter all fields'\n    });\n    return res.json({\n      errors: errors\n    });\n  }\n\n  User.findOne({\n    email: email\n  }).populate({\n    path: 'properties',\n    populate: {\n      path: 'properties'\n    }\n  }).then(function (user) {\n    if (!user) {\n      errors.push({\n        message: 'That email is not registered'\n      });\n      return res.json({\n        errors: errors\n      });\n    }\n\n    bcrypt.compare(password, user.password, function (err, isMatch) {\n      if (err) {\n        errors.push({\n          message: 'Server error'\n        });\n        return res.json({\n          errors: errors\n        });\n      }\n\n      if (isMatch) {\n        var token = config(user);\n        res.json({\n          token: token,\n          user: {\n            id: user.id,\n            name: user.name,\n            fav: user.favourites,\n            properties: user.properties,\n            createdEvents: user.createdEvents,\n            admin: user.admin\n          }\n        });\n      } else {\n        errors.push({\n          message: 'Password incorrect'\n        });\n        return res.json({\n          errors: errors\n        });\n      }\n    });\n  });\n});\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/server/routes/user/Login.js?");

/***/ }),

/***/ "./src/server/routes/user/Register.js":
/*!********************************************!*\
  !*** ./src/server/routes/user/Register.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar User = __webpack_require__(/*! ../../models/Users */ \"./src/server/models/Users.js\");\n\nvar bcrypt = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n\nvar router = express.Router();\nrouter.post('/register',\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee2(req, res) {\n    var _req$body, name, email, password, admin, errors, checkExists, newUser;\n\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _req$body = req.body, name = _req$body.name, email = _req$body.email, password = _req$body.password, admin = _req$body.admin;\n            errors = [];\n\n            if (!(!name || !email || !password)) {\n              _context2.next = 5;\n              break;\n            }\n\n            errors.push({\n              message: 'Please enter all fields'\n            });\n            return _context2.abrupt(\"return\", res.json({\n              errors: errors\n            }));\n\n          case 5:\n            if (password.length < 6) {\n              errors.push({\n                message: 'Password must be at least 6 characters'\n              });\n            }\n\n            if (!(errors.length > 0)) {\n              _context2.next = 10;\n              break;\n            }\n\n            res.json({\n              errors: errors\n            });\n            _context2.next = 27;\n            break;\n\n          case 10:\n            _context2.next = 12;\n            return User.findOne({\n              email: email\n            });\n\n          case 12:\n            checkExists = _context2.sent;\n\n            if (!checkExists) {\n              _context2.next = 18;\n              break;\n            }\n\n            errors.push({\n              message: 'Email already exists'\n            });\n            return _context2.abrupt(\"return\", res.json({\n              errors: errors\n            }));\n\n          case 18:\n            _context2.prev = 18;\n            newUser = new User({\n              name: name,\n              email: email,\n              password: password,\n              favourites: {},\n              admin: admin\n            });\n            bcrypt.genSalt(10, function (err, salt) {\n              bcrypt.hash(newUser.password, salt,\n              /*#__PURE__*/\n              function () {\n                var _ref2 = _asyncToGenerator(\n                /*#__PURE__*/\n                regeneratorRuntime.mark(function _callee(err, hash) {\n                  return regeneratorRuntime.wrap(function _callee$(_context) {\n                    while (1) {\n                      switch (_context.prev = _context.next) {\n                        case 0:\n                          if (!err) {\n                            _context.next = 3;\n                            break;\n                          }\n\n                          errors.push({\n                            message: 'Server error please try again'\n                          });\n                          return _context.abrupt(\"return\", res.json({\n                            errors: errors\n                          }));\n\n                        case 3:\n                          newUser.password = hash;\n                          _context.next = 6;\n                          return newUser.save();\n\n                        case 6:\n                          res.json({\n                            message: 'Success! Now you can login..',\n                            redirectUrl: '/login'\n                          });\n\n                        case 7:\n                        case \"end\":\n                          return _context.stop();\n                      }\n                    }\n                  }, _callee);\n                }));\n\n                return function (_x3, _x4) {\n                  return _ref2.apply(this, arguments);\n                };\n              }());\n            });\n            _context2.next = 27;\n            break;\n\n          case 23:\n            _context2.prev = 23;\n            _context2.t0 = _context2[\"catch\"](18);\n            errors.push({\n              message: 'Server error please try again'\n            });\n            return _context2.abrupt(\"return\", res.json({\n              errors: errors\n            }));\n\n          case 27:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[18, 23]]);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/server/routes/user/Register.js?");

/***/ }),

/***/ "./src/server/routes/user/index.js":
/*!*****************************************!*\
  !*** ./src/server/routes/user/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar router = express.Router();\nrouter.use(__webpack_require__(/*! ./Login */ \"./src/server/routes/user/Login.js\"));\nrouter.use(__webpack_require__(/*! ./Register */ \"./src/server/routes/user/Register.js\"));\nrouter.use(__webpack_require__(/*! ./Favourites */ \"./src/server/routes/user/Favourites.js\"));\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/server/routes/user/index.js?");

/***/ }),

/***/ "./src/server/routes/viewings/CreateViewing.js":
/*!*****************************************************!*\
  !*** ./src/server/routes/viewings/CreateViewing.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar Viewing = __webpack_require__(/*! ../../models/Viewings */ \"./src/server/models/Viewings.js\");\n\nvar User = __webpack_require__(/*! ../../models/Users */ \"./src/server/models/Users.js\");\n\nvar router = express.Router();\nrouter.post('/createViewing',\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res) {\n    var _req$body, data, user, newViewing, result, creator;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _req$body = req.body, data = _req$body.data, user = _req$body.user;\n            _context.prev = 1;\n            newViewing = new Viewing({\n              title: data.title,\n              description: data.description,\n              date: data.date,\n              creator: user.id,\n              property: data.property\n            });\n            _context.next = 5;\n            return newViewing.save();\n\n          case 5:\n            result = _context.sent;\n            _context.next = 8;\n            return User.findById(user.id);\n\n          case 8:\n            creator = _context.sent;\n\n            if (creator) {\n              _context.next = 11;\n              break;\n            }\n\n            throw new Error('User not found.');\n\n          case 11:\n            creator.createdEvents.push(newViewing);\n            _context.next = 14;\n            return creator.save();\n\n          case 14:\n            Viewing.populate(result, [{\n              path: 'property'\n            }], function (err, viewing) {\n              if (err) console.log(err);\n              res.json(viewing);\n            });\n            _context.next = 20;\n            break;\n\n          case 17:\n            _context.prev = 17;\n            _context.t0 = _context[\"catch\"](1);\n            res.json({\n              error: _context.t0\n            });\n\n          case 20:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[1, 17]]);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/server/routes/viewings/CreateViewing.js?");

/***/ }),

/***/ "./src/server/routes/viewings/DeleteViewing.js":
/*!*****************************************************!*\
  !*** ./src/server/routes/viewings/DeleteViewing.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar Viewings = __webpack_require__(/*! ../../models/Viewings */ \"./src/server/models/Viewings.js\");\n\nvar User = __webpack_require__(/*! ../../models/Users */ \"./src/server/models/Users.js\");\n\nvar Booking = __webpack_require__(/*! ../../models/Booking */ \"./src/server/models/Booking.js\");\n\nvar router = express.Router();\nrouter.delete('/deleteViewing',\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee3(req, res) {\n    var _req$body, data, user;\n\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _req$body = req.body, data = _req$body.data, user = _req$body.user;\n            _context3.prev = 1;\n            Viewings.deleteOne({\n              _id: data._id\n            },\n            /*#__PURE__*/\n            function () {\n              var _ref2 = _asyncToGenerator(\n              /*#__PURE__*/\n              regeneratorRuntime.mark(function _callee2(err) {\n                var getUser, checkExists, viewings;\n                return regeneratorRuntime.wrap(function _callee2$(_context2) {\n                  while (1) {\n                    switch (_context2.prev = _context2.next) {\n                      case 0:\n                        if (!err) {\n                          _context2.next = 2;\n                          break;\n                        }\n\n                        return _context2.abrupt(\"return\", res.json({\n                          error: err\n                        }));\n\n                      case 2:\n                        _context2.next = 4;\n                        return User.findById(user.id);\n\n                      case 4:\n                        getUser = _context2.sent;\n                        _context2.next = 7;\n                        return getUser.createdEvents.pull(data._id);\n\n                      case 7:\n                        _context2.next = 9;\n                        return getUser.save();\n\n                      case 9:\n                        _context2.next = 11;\n                        return Booking.findOne({\n                          event: data._id\n                        });\n\n                      case 11:\n                        checkExists = _context2.sent;\n\n                        if (!checkExists) {\n                          _context2.next = 15;\n                          break;\n                        }\n\n                        _context2.next = 15;\n                        return Booking.deleteMany({\n                          event: data._id\n                        },\n                        /*#__PURE__*/\n                        function () {\n                          var _ref3 = _asyncToGenerator(\n                          /*#__PURE__*/\n                          regeneratorRuntime.mark(function _callee(err) {\n                            var viewings;\n                            return regeneratorRuntime.wrap(function _callee$(_context) {\n                              while (1) {\n                                switch (_context.prev = _context.next) {\n                                  case 0:\n                                    if (!err) {\n                                      _context.next = 2;\n                                      break;\n                                    }\n\n                                    return _context.abrupt(\"return\", res.json({\n                                      error: err\n                                    }));\n\n                                  case 2:\n                                    _context.next = 4;\n                                    return Viewings.find({}).populate('property');\n\n                                  case 4:\n                                    viewings = _context.sent;\n                                    return _context.abrupt(\"return\", res.json(viewings));\n\n                                  case 6:\n                                  case \"end\":\n                                    return _context.stop();\n                                }\n                              }\n                            }, _callee);\n                          }));\n\n                          return function (_x4) {\n                            return _ref3.apply(this, arguments);\n                          };\n                        }());\n\n                      case 15:\n                        _context2.next = 17;\n                        return Viewings.find({}).populate('property');\n\n                      case 17:\n                        viewings = _context2.sent;\n                        return _context2.abrupt(\"return\", res.json(viewings));\n\n                      case 19:\n                      case \"end\":\n                        return _context2.stop();\n                    }\n                  }\n                }, _callee2);\n              }));\n\n              return function (_x3) {\n                return _ref2.apply(this, arguments);\n              };\n            }());\n            _context3.next = 8;\n            break;\n\n          case 5:\n            _context3.prev = 5;\n            _context3.t0 = _context3[\"catch\"](1);\n            return _context3.abrupt(\"return\", res.json({\n              error: _context3.t0\n            }));\n\n          case 8:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3, null, [[1, 5]]);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/server/routes/viewings/DeleteViewing.js?");

/***/ }),

/***/ "./src/server/routes/viewings/GetViewings.js":
/*!***************************************************!*\
  !*** ./src/server/routes/viewings/GetViewings.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar Viewings = __webpack_require__(/*! ../../models/Viewings */ \"./src/server/models/Viewings.js\");\n\nvar User = __webpack_require__(/*! ../../models/Users */ \"./src/server/models/Users.js\");\n\nvar router = express.Router();\nrouter.get('/api/viewings',\n/*#__PURE__*/\nfunction () {\n  var _ref = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(req, res) {\n    var viewings;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return Viewings.find({}).populate('property');\n\n          case 3:\n            viewings = _context.sent;\n            res.json(viewings);\n            _context.next = 10;\n            break;\n\n          case 7:\n            _context.prev = 7;\n            _context.t0 = _context[\"catch\"](0);\n            res.json({\n              error: _context.t0\n            });\n\n          case 10:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 7]]);\n  }));\n\n  return function (_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}());\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/server/routes/viewings/GetViewings.js?");

/***/ }),

/***/ "./src/server/routes/viewings/index.js":
/*!*********************************************!*\
  !*** ./src/server/routes/viewings/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar router = express.Router();\nrouter.use(__webpack_require__(/*! ./GetViewings */ \"./src/server/routes/viewings/GetViewings.js\"));\nrouter.use(__webpack_require__(/*! ./CreateViewing */ \"./src/server/routes/viewings/CreateViewing.js\"));\nrouter.use(__webpack_require__(/*! ./DeleteViewing */ \"./src/server/routes/viewings/DeleteViewing.js\"));\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/server/routes/viewings/index.js?");

/***/ }),

/***/ "./src/shared/routes.js":
/*!******************************!*\
  !*** ./src/shared/routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _client_pages_dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../client/pages/dashboard */ \"./src/client/pages/dashboard/index.js\");\n/* harmony import */ var _client_pages_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client/pages/property */ \"./src/client/pages/property/index.js\");\n/* harmony import */ var _client_pages_register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client/pages/register */ \"./src/client/pages/register/index.js\");\n/* harmony import */ var _client_pages_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client/pages/login */ \"./src/client/pages/login/index.js\");\n/* harmony import */ var _client_pages_viewings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client/pages/viewings */ \"./src/client/pages/viewings/index.js\");\n/* harmony import */ var _client_pages_bookings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../client/pages/bookings */ \"./src/client/pages/bookings/index.js\");\n/* harmony import */ var _client_pages_admin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client/pages/admin */ \"./src/client/pages/admin/index.js\");\n\n\n\n\n\n\n\nvar routes = [{\n  path: '/',\n  exact: true,\n  component: _client_pages_dashboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n}, {\n  path: '/property/:title',\n  component: _client_pages_property__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}, {\n  path: '/register',\n  component: _client_pages_register__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}, {\n  path: '/login',\n  component: _client_pages_login__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n}, {\n  path: '/viewings',\n  component: _client_pages_viewings__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n}, {\n  path: '/bookings',\n  component: _client_pages_bookings__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n}, {\n  path: '/admin',\n  component: _client_pages_admin__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\n\n//# sourceURL=webpack:///./src/shared/routes.js?");

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

/***/ "async":
/*!************************!*\
  !*** external "async" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"async\");\n\n//# sourceURL=webpack:///external_%22async%22?");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"aws-sdk\");\n\n//# sourceURL=webpack:///external_%22aws-sdk%22?");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcryptjs\");\n\n//# sourceURL=webpack:///external_%22bcryptjs%22?");

/***/ }),

/***/ "bluebird":
/*!***************************!*\
  !*** external "bluebird" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bluebird\");\n\n//# sourceURL=webpack:///external_%22bluebird%22?");

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

/***/ "file-type":
/*!****************************!*\
  !*** external "file-type" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"file-type\");\n\n//# sourceURL=webpack:///external_%22file-type%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

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

/***/ "multiparty":
/*!*****************************!*\
  !*** external "multiparty" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"multiparty\");\n\n//# sourceURL=webpack:///external_%22multiparty%22?");

/***/ }),

/***/ "postcodesio-client":
/*!*************************************!*\
  !*** external "postcodesio-client" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"postcodesio-client\");\n\n//# sourceURL=webpack:///external_%22postcodesio-client%22?");

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

/***/ "react-datetime":
/*!*********************************!*\
  !*** external "react-datetime" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-datetime\");\n\n//# sourceURL=webpack:///external_%22react-datetime%22?");

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

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

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

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

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

/***/ "styled-icons/boxicons-regular/ErrorCircle":
/*!************************************************************!*\
  !*** external "styled-icons/boxicons-regular/ErrorCircle" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-icons/boxicons-regular/ErrorCircle\");\n\n//# sourceURL=webpack:///external_%22styled-icons/boxicons-regular/ErrorCircle%22?");

/***/ }),

/***/ "styled-icons/boxicons-regular/Image":
/*!******************************************************!*\
  !*** external "styled-icons/boxicons-regular/Image" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-icons/boxicons-regular/Image\");\n\n//# sourceURL=webpack:///external_%22styled-icons/boxicons-regular/Image%22?");

/***/ }),

/***/ "styled-icons/boxicons-regular/InfoCircle":
/*!***********************************************************!*\
  !*** external "styled-icons/boxicons-regular/InfoCircle" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-icons/boxicons-regular/InfoCircle\");\n\n//# sourceURL=webpack:///external_%22styled-icons/boxicons-regular/InfoCircle%22?");

/***/ }),

/***/ "styled-icons/boxicons-solid/Edit":
/*!***************************************************!*\
  !*** external "styled-icons/boxicons-solid/Edit" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-icons/boxicons-solid/Edit\");\n\n//# sourceURL=webpack:///external_%22styled-icons/boxicons-solid/Edit%22?");

/***/ }),

/***/ "styled-icons/boxicons-solid/Heart":
/*!****************************************************!*\
  !*** external "styled-icons/boxicons-solid/Heart" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-icons/boxicons-solid/Heart\");\n\n//# sourceURL=webpack:///external_%22styled-icons/boxicons-solid/Heart%22?");

/***/ }),

/***/ "styled-icons/feather/LogOut":
/*!**********************************************!*\
  !*** external "styled-icons/feather/LogOut" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-icons/feather/LogOut\");\n\n//# sourceURL=webpack:///external_%22styled-icons/feather/LogOut%22?");

/***/ }),

/***/ "styled-icons/material/Close":
/*!**********************************************!*\
  !*** external "styled-icons/material/Close" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-icons/material/Close\");\n\n//# sourceURL=webpack:///external_%22styled-icons/material/Close%22?");

/***/ }),

/***/ "styled-icons/material/Delete":
/*!***********************************************!*\
  !*** external "styled-icons/material/Delete" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-icons/material/Delete\");\n\n//# sourceURL=webpack:///external_%22styled-icons/material/Delete%22?");

/***/ }),

/***/ "styled-icons/material/Done":
/*!*********************************************!*\
  !*** external "styled-icons/material/Done" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-icons/material/Done\");\n\n//# sourceURL=webpack:///external_%22styled-icons/material/Done%22?");

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

/***/ "styled-icons/octicons/Home":
/*!*********************************************!*\
  !*** external "styled-icons/octicons/Home" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-icons/octicons/Home\");\n\n//# sourceURL=webpack:///external_%22styled-icons/octicons/Home%22?");

/***/ }),

/***/ "styled-spinkit":
/*!*********************************!*\
  !*** external "styled-spinkit" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-spinkit\");\n\n//# sourceURL=webpack:///external_%22styled-spinkit%22?");

/***/ }),

/***/ "universal-cookie":
/*!***********************************!*\
  !*** external "universal-cookie" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"universal-cookie\");\n\n//# sourceURL=webpack:///external_%22universal-cookie%22?");

/***/ }),

/***/ "uuid/v4":
/*!**************************!*\
  !*** external "uuid/v4" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid/v4\");\n\n//# sourceURL=webpack:///external_%22uuid/v4%22?");

/***/ })

/******/ });