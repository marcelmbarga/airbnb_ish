"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_mbarga_Desktop_Training_My_Projects_airbnb_ish_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/styles.css */ \"./css/styles.css\");\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _badrap_bar_of_progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @badrap/bar-of-progress */ \"./node_modules/@badrap/bar-of-progress/dist/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/mbarga/Desktop/Training/My Projects/airbnb_ish/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_mbarga_Desktop_Training_My_Projects_airbnb_ish_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n// import 'tailwindcss/tailwind.css'\n\n\n\nvar progress = new _badrap_bar_of_progress__WEBPACK_IMPORTED_MODULE_3__.default({\n  size: 4,\n  color: '#FE595E',\n  className: 'z-50',\n  delay: 100\n});\nnext_router__WEBPACK_IMPORTED_MODULE_4___default().events.on('routeChangeStart', progress.start);\nnext_router__WEBPACK_IMPORTED_MODULE_4___default().events.on('routeChangeComplete', progress.finish);\nnext_router__WEBPACK_IMPORTED_MODULE_4___default().events.on('routeChangeError', progress.finish);\n\nfunction MyApp(_ref) {\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 10\n  }, this);\n}\n\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUUsUUFBUSxHQUFHLElBQUlGLDREQUFKLENBQWdCO0FBQy9CRyxFQUFBQSxJQUFJLEVBQUMsQ0FEMEI7QUFFL0JDLEVBQUFBLEtBQUssRUFBQyxTQUZ5QjtBQUcvQkMsRUFBQUEsU0FBUyxFQUFDLE1BSHFCO0FBSS9CQyxFQUFBQSxLQUFLLEVBQUU7QUFKd0IsQ0FBaEIsQ0FBakI7QUFPQUwsNERBQUEsQ0FBaUIsa0JBQWpCLEVBQW9DQyxRQUFRLENBQUNPLEtBQTdDO0FBQ0FSLDREQUFBLENBQWlCLHFCQUFqQixFQUF1Q0MsUUFBUSxDQUFDUSxNQUFoRDtBQUNBVCw0REFBQSxDQUFpQixrQkFBakIsRUFBb0NDLFFBQVEsQ0FBQ1EsTUFBN0M7O0FBR0EsU0FBU0MsS0FBVCxPQUF5QztBQUFBLE1BQXhCQyxTQUF3QixRQUF4QkEsU0FBd0I7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7QUFDdkMsc0JBQU8sOERBQUMsU0FBRCxvQkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDs7S0FGUUY7QUFJVCwrREFBZUEsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICd0YWlsd2luZGNzcy90YWlsd2luZC5jc3MnXG5pbXBvcnQgJy4uL2Nzcy9zdHlsZXMuY3NzJ1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJ0BiYWRyYXAvYmFyLW9mLXByb2dyZXNzJztcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IHByb2dyZXNzID0gbmV3IFByb2dyZXNzQmFyKHtcbiAgc2l6ZTo0LFxuICBjb2xvcjonI0ZFNTk1RScsXG4gIGNsYXNzTmFtZTonei01MCcsXG4gIGRlbGF5OiAxMDBcbn0pXG5cblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLHByb2dyZXNzLnN0YXJ0KTtcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLHByb2dyZXNzLmZpbmlzaCk7XG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9yJyxwcm9ncmVzcy5maW5pc2gpO1xuXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sIm5hbWVzIjpbIlByb2dyZXNzQmFyIiwiUm91dGVyIiwicHJvZ3Jlc3MiLCJzaXplIiwiY29sb3IiLCJjbGFzc05hbWUiLCJkZWxheSIsImV2ZW50cyIsIm9uIiwic3RhcnQiLCJmaW5pc2giLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/@badrap/bar-of-progress/dist/index.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/@badrap/bar-of-progress/dist/index.mjs ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(e){var t=function(e,t){Object.keys(t).forEach(function(o){e[o]=t[o]})},o={size:2,color:\"#29e\",className:\"bar-of-progress\",delay:80};e&&t(o,e);var a,i,s={position:\"fixed\",top:0,left:0,margin:0,padding:0,border:\"none\",borderRadius:0,backgroundColor:\"currentColor\",zIndex:1e4,height:\"number\"==typeof o.size?o.size+\"px\":o.size,color:o.color,opacity:0,width:\"0%\"},n={opacity:1,width:\"99%\",transition:\"width 10s cubic-bezier(0.1, 0.05, 0, 1)\"},l={opacity:0,width:\"100%\",transition:\"width 0.1s ease-out, opacity 0.5s ease 0.2s\"},c={opacity:.4,boxShadow:\"3px 0 8px\",height:\"100%\"};this.start=function(){i&&i.parentNode&&i.parentNode.removeChild(i),(i=document.body.appendChild(document.createElement(\"div\"))).className=o.className+\" stopped\",t(i.style,s);var e=i.appendChild(document.createElement(\"div\"));e.className=\"glow\",t(e.style,c),null!=a&&clearTimeout(a),a=setTimeout(function(){a=null,i.className=o.className+\" started\",t(i.style,n)},o.delay),i.scrollTop=0},this.finish=function(){null!=a&&(clearTimeout(a),a=null),i&&(i.className=o.className+\" finished\",t(i.style,l))}}\n//# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhZHJhcC9iYXItb2YtcHJvZ3Jlc3MvZGlzdC9pbmRleC5tanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDZCQUFlLG9DQUFTLEdBQUcsb0JBQW9CLG1DQUFtQyxVQUFVLEVBQUUsSUFBSSwwREFBMEQsVUFBVSxXQUFXLDZNQUE2TSxJQUFJLDJFQUEyRSxJQUFJLGdGQUFnRixJQUFJLGdEQUFnRCxzQkFBc0Isd0pBQXdKLG1EQUFtRCxpRkFBaUYsdURBQXVELHdCQUF3Qix3QkFBd0I7QUFDOStCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFkcmFwL2Jhci1vZi1wcm9ncmVzcy9kaXN0L2luZGV4Lm1qcz9lZGIyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGUpe3ZhciB0PWZ1bmN0aW9uKGUsdCl7T2JqZWN0LmtleXModCkuZm9yRWFjaChmdW5jdGlvbihvKXtlW29dPXRbb119KX0sbz17c2l6ZToyLGNvbG9yOlwiIzI5ZVwiLGNsYXNzTmFtZTpcImJhci1vZi1wcm9ncmVzc1wiLGRlbGF5OjgwfTtlJiZ0KG8sZSk7dmFyIGEsaSxzPXtwb3NpdGlvbjpcImZpeGVkXCIsdG9wOjAsbGVmdDowLG1hcmdpbjowLHBhZGRpbmc6MCxib3JkZXI6XCJub25lXCIsYm9yZGVyUmFkaXVzOjAsYmFja2dyb3VuZENvbG9yOlwiY3VycmVudENvbG9yXCIsekluZGV4OjFlNCxoZWlnaHQ6XCJudW1iZXJcIj09dHlwZW9mIG8uc2l6ZT9vLnNpemUrXCJweFwiOm8uc2l6ZSxjb2xvcjpvLmNvbG9yLG9wYWNpdHk6MCx3aWR0aDpcIjAlXCJ9LG49e29wYWNpdHk6MSx3aWR0aDpcIjk5JVwiLHRyYW5zaXRpb246XCJ3aWR0aCAxMHMgY3ViaWMtYmV6aWVyKDAuMSwgMC4wNSwgMCwgMSlcIn0sbD17b3BhY2l0eTowLHdpZHRoOlwiMTAwJVwiLHRyYW5zaXRpb246XCJ3aWR0aCAwLjFzIGVhc2Utb3V0LCBvcGFjaXR5IDAuNXMgZWFzZSAwLjJzXCJ9LGM9e29wYWNpdHk6LjQsYm94U2hhZG93OlwiM3B4IDAgOHB4XCIsaGVpZ2h0OlwiMTAwJVwifTt0aGlzLnN0YXJ0PWZ1bmN0aW9uKCl7aSYmaS5wYXJlbnROb2RlJiZpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaSksKGk9ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSkuY2xhc3NOYW1lPW8uY2xhc3NOYW1lK1wiIHN0b3BwZWRcIix0KGkuc3R5bGUscyk7dmFyIGU9aS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtlLmNsYXNzTmFtZT1cImdsb3dcIix0KGUuc3R5bGUsYyksbnVsbCE9YSYmY2xlYXJUaW1lb3V0KGEpLGE9c2V0VGltZW91dChmdW5jdGlvbigpe2E9bnVsbCxpLmNsYXNzTmFtZT1vLmNsYXNzTmFtZStcIiBzdGFydGVkXCIsdChpLnN0eWxlLG4pfSxvLmRlbGF5KSxpLnNjcm9sbFRvcD0wfSx0aGlzLmZpbmlzaD1mdW5jdGlvbigpe251bGwhPWEmJihjbGVhclRpbWVvdXQoYSksYT1udWxsKSxpJiYoaS5jbGFzc05hbWU9by5jbGFzc05hbWUrXCIgZmluaXNoZWRcIix0KGkuc3R5bGUsbCkpfX1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@badrap/bar-of-progress/dist/index.mjs\n");

/***/ })

});