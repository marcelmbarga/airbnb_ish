"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 927:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: external "@badrap/bar-of-progress"
const bar_of_progress_namespaceObject = require("@badrap/bar-of-progress");
var bar_of_progress_default = /*#__PURE__*/__webpack_require__.n(bar_of_progress_namespaceObject);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
var router_default = /*#__PURE__*/__webpack_require__.n(router_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import 'tailwindcss/tailwind.css'



const progress = new (bar_of_progress_default())({
  size: 4,
  color: '#FE595E',
  className: 'z-50',
  delay: 100
});
router_default().events.on('routeChangeStart', progress.start);
router_default().events.on('routeChangeComplete', progress.finish);
router_default().events.on('routeChangeError', progress.finish);

function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps));
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(927));
module.exports = __webpack_exports__;

})();