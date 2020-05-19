webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-helmet */ \"./node_modules/react-helmet/es/Helmet.js\");\n/* harmony import */ var _src_components_global_Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/components/global/Header */ \"./src/components/global/Header.js\");\n/* harmony import */ var _src_components_global_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/components/global/Footer */ \"./src/components/global/Footer.js\");\n/* harmony import */ var _src_components_Hero__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/components/Hero */ \"./src/components/Hero.js\");\n/* harmony import */ var _src_components_Skills__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/components/Skills */ \"./src/components/Skills.js\");\n/* harmony import */ var _src_components_Testimonials__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/components/Testimonials */ \"./src/components/Testimonials.js\");\n/* harmony import */ var _src_components_Projects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../src/components/Projects */ \"./src/components/Projects.js\");\n\n\n\n\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\n\nvar Home = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Home, _Component);\n\n  var _super = _createSuper(Home);\n\n  function Home() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Home);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"state\", {\n      classes: \"c-hero c-hero--home\",\n      title: \"Santiago Correa\",\n      copy: \"A showcase of the websites I've worked on and skills acquired. Ranging from small to big projects.\",\n      buttons: true,\n      titleClass: \"c-hero__title c-hero__title--home\"\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Home, [{\n    key: \"render\",\n    value: function render() {\n      var _this$state = this.state,\n          classes = _this$state.classes,\n          title = _this$state.title,\n          copy = _this$state.copy,\n          buttons = _this$state.buttons,\n          titleClass = _this$state.titleClass;\n      return __jsx(\"div\", null, __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_8__[\"Helmet\"], null, __jsx(\"title\", null, \"Santiago Correa | Front End Developer | Portfolio\"), __jsx(\"meta\", {\n        name: \"title\",\n        content: \"Santiago Correa | Front End Developer | Portfolio\"\n      }), __jsx(\"meta\", {\n        name: \"description\",\n        content: \"Santiago Correa | Front End Developer | Here's a couple projects that I've worked on and what I find super important.\"\n      }), __jsx(\"meta\", {\n        property: \"og:type\",\n        content: \"website\"\n      }), __jsx(\"meta\", {\n        property: \"og:url\",\n        content: \"https://santiagocorrea.netlify.com\"\n      }), __jsx(\"meta\", {\n        property: \"og:title\",\n        content: \"Santiago Correa | Portfolio\"\n      }), __jsx(\"meta\", {\n        property: \"og:description\",\n        content: \"Santiago Correa | Front End Developer | Here's a couple projects that I've worked on and what I find super important.\"\n      }), __jsx(\"meta\", {\n        property: \"og:image\",\n        content: \"https://cdn2.hubspot.net/hubfs/7562645/Portfolio/projects/portfolio.png\"\n      }), __jsx(\"meta\", {\n        property: \"twitter:card\",\n        content: \"summary_large_image\"\n      }), __jsx(\"meta\", {\n        property: \"twitter:url\",\n        content: \"https://santiagocorrea.netlify.app/\"\n      }), __jsx(\"meta\", {\n        property: \"twitter:title\",\n        content: \"Santiago Correa | Front End Developer | Portfolio\"\n      }), __jsx(\"meta\", {\n        property: \"twitter:description\",\n        content: \"Santiago Correa | Front End Developer | Here's a couple projects that I've worked on and what I find super important.\"\n      }), __jsx(\"meta\", {\n        property: \"twitter:image\",\n        content: \"https://cdn2.hubspot.net/hubfs/7562645/Portfolio/projects/portfolio.png\"\n      })), __jsx(_src_components_global_Header__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null), __jsx(_src_components_Hero__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        className: classes,\n        title: title,\n        copy: copy,\n        buttons: buttons,\n        titleClass: titleClass\n      }), __jsx(_src_components_Skills__WEBPACK_IMPORTED_MODULE_12__[\"default\"], null), __jsx(_src_components_Projects__WEBPACK_IMPORTED_MODULE_14__[\"default\"], null), __jsx(_src_components_Testimonials__WEBPACK_IMPORTED_MODULE_13__[\"default\"], null), __jsx(_src_components_global_Footer__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null));\n    }\n  }]);\n\n  return Home;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJjbGFzc2VzIiwidGl0bGUiLCJjb3B5IiwiYnV0dG9ucyIsInRpdGxlQ2xhc3MiLCJzdGF0ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsSTs7Ozs7Ozs7Ozs7Ozs7OztnTkFDSTtBQUNOQyxhQUFPLEVBQUUscUJBREg7QUFFTkMsV0FBSyxFQUFFLGlCQUZEO0FBR05DLFVBQUksRUFDRixvR0FKSTtBQUtOQyxhQUFPLEVBQUUsSUFMSDtBQU1OQyxnQkFBVSxFQUFFO0FBTk4sSzs7Ozs7Ozs2QkFTQztBQUFBLHdCQUMrQyxLQUFLQyxLQURwRDtBQUFBLFVBQ0NMLE9BREQsZUFDQ0EsT0FERDtBQUFBLFVBQ1VDLEtBRFYsZUFDVUEsS0FEVjtBQUFBLFVBQ2lCQyxJQURqQixlQUNpQkEsSUFEakI7QUFBQSxVQUN1QkMsT0FEdkIsZUFDdUJBLE9BRHZCO0FBQUEsVUFDZ0NDLFVBRGhDLGVBQ2dDQSxVQURoQztBQUVQLGFBQ0UsbUJBQ0UsTUFBQyxtREFBRCxRQUNFLHlFQURGLEVBRUU7QUFDRSxZQUFJLEVBQUMsT0FEUDtBQUVFLGVBQU8sRUFBQztBQUZWLFFBRkYsRUFNRTtBQUNFLFlBQUksRUFBQyxhQURQO0FBRUUsZUFBTyxFQUFDO0FBRlYsUUFORixFQVVFO0FBQU0sZ0JBQVEsRUFBQyxTQUFmO0FBQXlCLGVBQU8sRUFBQztBQUFqQyxRQVZGLEVBV0U7QUFDRSxnQkFBUSxFQUFDLFFBRFg7QUFFRSxlQUFPLEVBQUM7QUFGVixRQVhGLEVBZUU7QUFBTSxnQkFBUSxFQUFDLFVBQWY7QUFBMEIsZUFBTyxFQUFDO0FBQWxDLFFBZkYsRUFnQkU7QUFDRSxnQkFBUSxFQUFDLGdCQURYO0FBRUUsZUFBTyxFQUFDO0FBRlYsUUFoQkYsRUFvQkU7QUFDRSxnQkFBUSxFQUFDLFVBRFg7QUFFRSxlQUFPLEVBQUM7QUFGVixRQXBCRixFQXdCRTtBQUFNLGdCQUFRLEVBQUMsY0FBZjtBQUE4QixlQUFPLEVBQUM7QUFBdEMsUUF4QkYsRUF5QkU7QUFDRSxnQkFBUSxFQUFDLGFBRFg7QUFFRSxlQUFPLEVBQUM7QUFGVixRQXpCRixFQTZCRTtBQUNFLGdCQUFRLEVBQUMsZUFEWDtBQUVFLGVBQU8sRUFBQztBQUZWLFFBN0JGLEVBaUNFO0FBQ0UsZ0JBQVEsRUFBQyxxQkFEWDtBQUVFLGVBQU8sRUFBQztBQUZWLFFBakNGLEVBcUNFO0FBQ0UsZ0JBQVEsRUFBQyxlQURYO0FBRUUsZUFBTyxFQUFDO0FBRlYsUUFyQ0YsQ0FERixFQTJDRSxNQUFDLHFFQUFELE9BM0NGLEVBNENFLE1BQUMsNkRBQUQ7QUFDRSxpQkFBUyxFQUFFSixPQURiO0FBRUUsYUFBSyxFQUFFQyxLQUZUO0FBR0UsWUFBSSxFQUFFQyxJQUhSO0FBSUUsZUFBTyxFQUFFQyxPQUpYO0FBS0Usa0JBQVUsRUFBRUM7QUFMZCxRQTVDRixFQW1ERSxNQUFDLCtEQUFELE9BbkRGLEVBb0RFLE1BQUMsaUVBQUQsT0FwREYsRUFxREUsTUFBQyxxRUFBRCxPQXJERixFQXNERSxNQUFDLHNFQUFELE9BdERGLENBREY7QUEwREQ7Ozs7RUF0RWdCRSwrQzs7QUF5RUpQLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tIFwicmVhY3QtaGVsbWV0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9nbG9iYWwvSGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9nbG9iYWwvRm9vdGVyXCI7XG5pbXBvcnQgSGVybyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvSGVyb1wiO1xuaW1wb3J0IFNraWxscyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvU2tpbGxzXCI7XG5pbXBvcnQgVGVzdGltb25pYWxzIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9UZXN0aW1vbmlhbHNcIjtcbmltcG9ydCBQcm9qZWN0cyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHNcIjtcblxuY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGNsYXNzZXM6IFwiYy1oZXJvIGMtaGVyby0taG9tZVwiLFxuICAgIHRpdGxlOiBcIlNhbnRpYWdvIENvcnJlYVwiLFxuICAgIGNvcHk6XG4gICAgICBcIkEgc2hvd2Nhc2Ugb2YgdGhlIHdlYnNpdGVzIEkndmUgd29ya2VkIG9uIGFuZCBza2lsbHMgYWNxdWlyZWQuIFJhbmdpbmcgZnJvbSBzbWFsbCB0byBiaWcgcHJvamVjdHMuXCIsXG4gICAgYnV0dG9uczogdHJ1ZSxcbiAgICB0aXRsZUNsYXNzOiBcImMtaGVyb19fdGl0bGUgYy1oZXJvX190aXRsZS0taG9tZVwiLFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNsYXNzZXMsIHRpdGxlLCBjb3B5LCBidXR0b25zLCB0aXRsZUNsYXNzIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVsbWV0PlxuICAgICAgICAgIDx0aXRsZT5TYW50aWFnbyBDb3JyZWEgfCBGcm9udCBFbmQgRGV2ZWxvcGVyIHwgUG9ydGZvbGlvPC90aXRsZT5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgbmFtZT0ndGl0bGUnXG4gICAgICAgICAgICBjb250ZW50PSdTYW50aWFnbyBDb3JyZWEgfCBGcm9udCBFbmQgRGV2ZWxvcGVyIHwgUG9ydGZvbGlvJ1xuICAgICAgICAgIC8+XG4gICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgIG5hbWU9J2Rlc2NyaXB0aW9uJ1xuICAgICAgICAgICAgY29udGVudD1cIlNhbnRpYWdvIENvcnJlYSB8IEZyb250IEVuZCBEZXZlbG9wZXIgfCBIZXJlJ3MgYSBjb3VwbGUgcHJvamVjdHMgdGhhdCBJJ3ZlIHdvcmtlZCBvbiBhbmQgd2hhdCBJIGZpbmQgc3VwZXIgaW1wb3J0YW50LlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT0nb2c6dHlwZScgY29udGVudD0nd2Vic2l0ZScgLz5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgcHJvcGVydHk9J29nOnVybCdcbiAgICAgICAgICAgIGNvbnRlbnQ9J2h0dHBzOi8vc2FudGlhZ29jb3JyZWEubmV0bGlmeS5jb20nXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT0nb2c6dGl0bGUnIGNvbnRlbnQ9J1NhbnRpYWdvIENvcnJlYSB8IFBvcnRmb2xpbycgLz5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgcHJvcGVydHk9J29nOmRlc2NyaXB0aW9uJ1xuICAgICAgICAgICAgY29udGVudD1cIlNhbnRpYWdvIENvcnJlYSB8IEZyb250IEVuZCBEZXZlbG9wZXIgfCBIZXJlJ3MgYSBjb3VwbGUgcHJvamVjdHMgdGhhdCBJJ3ZlIHdvcmtlZCBvbiBhbmQgd2hhdCBJIGZpbmQgc3VwZXIgaW1wb3J0YW50LlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgcHJvcGVydHk9J29nOmltYWdlJ1xuICAgICAgICAgICAgY29udGVudD0naHR0cHM6Ly9jZG4yLmh1YnNwb3QubmV0L2h1YmZzLzc1NjI2NDUvUG9ydGZvbGlvL3Byb2plY3RzL3BvcnRmb2xpby5wbmcnXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT0ndHdpdHRlcjpjYXJkJyBjb250ZW50PSdzdW1tYXJ5X2xhcmdlX2ltYWdlJyAvPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBwcm9wZXJ0eT0ndHdpdHRlcjp1cmwnXG4gICAgICAgICAgICBjb250ZW50PSdodHRwczovL3NhbnRpYWdvY29ycmVhLm5ldGxpZnkuYXBwLydcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBwcm9wZXJ0eT0ndHdpdHRlcjp0aXRsZSdcbiAgICAgICAgICAgIGNvbnRlbnQ9J1NhbnRpYWdvIENvcnJlYSB8IEZyb250IEVuZCBEZXZlbG9wZXIgfCBQb3J0Zm9saW8nXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgcHJvcGVydHk9J3R3aXR0ZXI6ZGVzY3JpcHRpb24nXG4gICAgICAgICAgICBjb250ZW50PVwiU2FudGlhZ28gQ29ycmVhIHwgRnJvbnQgRW5kIERldmVsb3BlciB8IEhlcmUncyBhIGNvdXBsZSBwcm9qZWN0cyB0aGF0IEkndmUgd29ya2VkIG9uIGFuZCB3aGF0IEkgZmluZCBzdXBlciBpbXBvcnRhbnQuXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBwcm9wZXJ0eT0ndHdpdHRlcjppbWFnZSdcbiAgICAgICAgICAgIGNvbnRlbnQ9J2h0dHBzOi8vY2RuMi5odWJzcG90Lm5ldC9odWJmcy83NTYyNjQ1L1BvcnRmb2xpby9wcm9qZWN0cy9wb3J0Zm9saW8ucG5nJ1xuICAgICAgICAgIC8+XG4gICAgICAgIDwvSGVsbWV0PlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxIZXJvXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzfVxuICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICBjb3B5PXtjb3B5fVxuICAgICAgICAgIGJ1dHRvbnM9e2J1dHRvbnN9XG4gICAgICAgICAgdGl0bGVDbGFzcz17dGl0bGVDbGFzc31cbiAgICAgICAgLz5cbiAgICAgICAgPFNraWxscyAvPlxuICAgICAgICA8UHJvamVjdHMgLz5cbiAgICAgICAgPFRlc3RpbW9uaWFscyAvPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./src/components/global/Header.js":
/*!*****************************************!*\
  !*** ./src/components/global/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _shared_ProjectsButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/ProjectsButton */ \"./src/components/shared/ProjectsButton.js\");\n\n\n\n\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar Header = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Header, _Component);\n\n  var _super = _createSuper(Header);\n\n  function Header(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Header);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"openMenu\", function () {\n      _this.setState({\n        active: !_this.state.active\n      });\n    });\n\n    _this.state = {\n      active: false\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Header, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var active = this.state.active;\n      return __jsx(\"header\", {\n        className: \"c-header\"\n      }, __jsx(\"div\", {\n        className: \"o-container\"\n      }, __jsx(\"div\", {\n        className: \"o-grid o-grid--between\"\n      }, __jsx(\"div\", {\n        className: \"o-grid__col u-3/12@md\"\n      }, __jsx(\"div\", {\n        className: \"c-header__logo\"\n      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        href: \"/\",\n        className: \"c-header__link\",\n        \"aria-label\": \"Home\"\n      }, \"Santiago Correa\"), __jsx(\"button\", {\n        className: \"c-header__hamburger\",\n        onClick: function onClick(e) {\n          return _this2.openMenu();\n        }\n      }, __jsx(\"img\", {\n        src: process.env.PUBLIC_URL + \"/images/icons/hamburger.png\",\n        alt: \"Open menu\"\n      })))), __jsx(\"div\", {\n        className: \"o-grid__col u-9/12@md\"\n      }, __jsx(\"nav\", {\n        className: \"c-header__nav \".concat(active ? \"active\" : \"\")\n      }, __jsx(\"ul\", {\n        className: \"c-header__list \".concat(active ? \"active\" : \"\")\n      }, __jsx(\"li\", {\n        className: \"c-header__item\"\n      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        href: \"/\",\n        className: \"c-header__link\",\n        \"aria-label\": \"Home\"\n      }, \"Home\")), __jsx(\"li\", {\n        className: \"c-header__item\"\n      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        href: \"/about\",\n        className: \"c-header__link\",\n        \"aria-label\": \"About Me Page\"\n      }, \"About\")), __jsx(\"li\", {\n        className: \"c-header__item\"\n      }, __jsx(_shared_ProjectsButton__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        className: \"c-header__link\",\n        content: \"Projects\"\n      })), __jsx(\"li\", {\n        className: \"c-header__item\"\n      }, __jsx(\"a\", {\n        href: \"mailhref:scorrea.dev@gmail.com\",\n        className: \"c-header__link\"\n      }, \"Contact\"))))))));\n    }\n  }]);\n\n  return Header;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9nbG9iYWwvSGVhZGVyLmpzPzBmMDYiXSwibmFtZXMiOlsiSGVhZGVyIiwicHJvcHMiLCJzZXRTdGF0ZSIsImFjdGl2ZSIsInN0YXRlIiwiZSIsIm9wZW5NZW51IiwicHJvY2VzcyIsImVudiIsIlBVQkxJQ19VUkwiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVNQSxNOzs7OztBQUNKLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQixtTkFPUixZQUFNO0FBQ2YsWUFBS0MsUUFBTCxDQUFjO0FBQUVDLGNBQU0sRUFBRSxDQUFDLE1BQUtDLEtBQUwsQ0FBV0Q7QUFBdEIsT0FBZDtBQUNELEtBVGtCOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEQsWUFBTSxFQUFFO0FBREcsS0FBYjtBQUZpQjtBQUtsQjs7Ozs2QkFNUTtBQUFBOztBQUFBLFVBQ0NBLE1BREQsR0FDWSxLQUFLQyxLQURqQixDQUNDRCxNQUREO0FBRVAsYUFDRTtBQUFRLGlCQUFTLEVBQUM7QUFBbEIsU0FDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFlLGlCQUFTLEVBQUMsZ0JBQXpCO0FBQTBDLHNCQUFXO0FBQXJELDJCQURGLEVBSUU7QUFDRSxpQkFBUyxFQUFDLHFCQURaO0FBRUUsZUFBTyxFQUFFLGlCQUFDRSxDQUFEO0FBQUEsaUJBQU8sTUFBSSxDQUFDQyxRQUFMLEVBQVA7QUFBQTtBQUZYLFNBSUU7QUFDRSxXQUFHLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxVQUFaLEdBQXlCLDZCQURoQztBQUVFLFdBQUcsRUFBQztBQUZOLFFBSkYsQ0FKRixDQURGLENBREYsRUFpQkU7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLGlCQUFTLDBCQUFtQk4sTUFBTSxHQUFHLFFBQUgsR0FBYyxFQUF2QztBQUFkLFNBQ0U7QUFBSSxpQkFBUywyQkFBb0JBLE1BQU0sR0FBRyxRQUFILEdBQWMsRUFBeEM7QUFBYixTQUNFO0FBQUksaUJBQVMsRUFBQztBQUFkLFNBQ0UsTUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxHQUFYO0FBQWUsaUJBQVMsRUFBQyxnQkFBekI7QUFBMEMsc0JBQVc7QUFBckQsZ0JBREYsQ0FERixFQU1FO0FBQUksaUJBQVMsRUFBQztBQUFkLFNBQ0UsTUFBQyxnREFBRDtBQUNFLFlBQUksRUFBQyxRQURQO0FBRUUsaUJBQVMsRUFBQyxnQkFGWjtBQUdFLHNCQUFXO0FBSGIsaUJBREYsQ0FORixFQWVFO0FBQUksaUJBQVMsRUFBQztBQUFkLFNBQ0UsTUFBQyw4REFBRDtBQUNFLGlCQUFTLEVBQUMsZ0JBRFo7QUFFRSxlQUFPLEVBQUM7QUFGVixRQURGLENBZkYsRUFxQkU7QUFBSSxpQkFBUyxFQUFDO0FBQWQsU0FDRTtBQUNFLFlBQUksRUFBQyxnQ0FEUDtBQUVFLGlCQUFTLEVBQUM7QUFGWixtQkFERixDQXJCRixDQURGLENBREYsQ0FqQkYsQ0FERixDQURGLENBREY7QUEwREQ7Ozs7RUF4RWtCTywrQzs7QUEyRU5WLHFFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvZ2xvYmFsL0hlYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBQcm9qZWN0QnV0dG9uIGZyb20gXCIuLi9zaGFyZWQvUHJvamVjdHNCdXR0b25cIjtcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIG9wZW5NZW51ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmU6ICF0aGlzLnN0YXRlLmFjdGl2ZSB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBhY3RpdmUgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPSdjLWhlYWRlcic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvLWNvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J28tZ3JpZCBvLWdyaWQtLWJldHdlZW4nPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J28tZ3JpZF9fY29sIHUtMy8xMkBtZCc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLWhlYWRlcl9fbG9nbyc+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLycgY2xhc3NOYW1lPSdjLWhlYWRlcl9fbGluaycgYXJpYS1sYWJlbD0nSG9tZSc+XG4gICAgICAgICAgICAgICAgICBTYW50aWFnbyBDb3JyZWFcbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjLWhlYWRlcl9faGFtYnVyZ2VyJ1xuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHRoaXMub3Blbk1lbnUoKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL2ltYWdlcy9pY29ucy9oYW1idXJnZXIucG5nXCJ9XG4gICAgICAgICAgICAgICAgICAgIGFsdD0nT3BlbiBtZW51J1xuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvLWdyaWRfX2NvbCB1LTkvMTJAbWQnPlxuICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17YGMtaGVhZGVyX19uYXYgJHthY3RpdmUgPyBcImFjdGl2ZVwiIDogXCJcIn1gfT5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtgYy1oZWFkZXJfX2xpc3QgJHthY3RpdmUgPyBcImFjdGl2ZVwiIDogXCJcIn1gfT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2MtaGVhZGVyX19pdGVtJz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLycgY2xhc3NOYW1lPSdjLWhlYWRlcl9fbGluaycgYXJpYS1sYWJlbD0nSG9tZSc+XG4gICAgICAgICAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nYy1oZWFkZXJfX2l0ZW0nPlxuICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9Jy9hYm91dCdcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2MtaGVhZGVyX19saW5rJ1xuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9J0Fib3V0IE1lIFBhZ2UnXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBBYm91dFxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nYy1oZWFkZXJfX2l0ZW0nPlxuICAgICAgICAgICAgICAgICAgICA8UHJvamVjdEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYy1oZWFkZXJfX2xpbmsnXG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudD0nUHJvamVjdHMnXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nYy1oZWFkZXJfX2l0ZW0nPlxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J21haWxocmVmOnNjb3JyZWEuZGV2QGdtYWlsLmNvbSdcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2MtaGVhZGVyX19saW5rJ1xuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgQ29udGFjdFxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/global/Header.js\n");

/***/ })

})