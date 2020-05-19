webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/global/Header.js":
/*!*****************************************!*\
  !*** ./src/components/global/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _shared_ProjectsButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/ProjectsButton */ \"./src/components/shared/ProjectsButton.js\");\n\n\n\n\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar Header = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Header, _Component);\n\n  var _super = _createSuper(Header);\n\n  function Header(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Header);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"openMenu\", function () {\n      _this.setState({\n        active: !_this.state.active\n      });\n    });\n\n    _this.state = {\n      active: false\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Header, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var active = this.state.active;\n      return __jsx(\"header\", {\n        className: \"c-header\"\n      }, __jsx(\"div\", {\n        className: \"o-container\"\n      }, __jsx(\"div\", {\n        className: \"o-grid o-grid--between\"\n      }, __jsx(\"div\", {\n        className: \"o-grid__col u-3/12@md\"\n      }, __jsx(\"div\", {\n        className: \"c-header__logo\"\n      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8__[\"Link\"], {\n        href: \"/\",\n        className: \"c-header__link\",\n        \"aria-label\": \"Home\"\n      }, \"Santiago Correa\"), __jsx(\"button\", {\n        className: \"c-header__hamburger\",\n        onClick: function onClick(e) {\n          return _this2.openMenu();\n        }\n      }, __jsx(\"img\", {\n        src: process.env.PUBLIC_URL + \"/images/icons/hamburger.png\",\n        alt: \"Open menu\"\n      })))), __jsx(\"div\", {\n        className: \"o-grid__col u-9/12@md\"\n      }, __jsx(\"nav\", {\n        className: \"c-header__nav \".concat(active ? \"active\" : \"\")\n      }, __jsx(\"ul\", {\n        className: \"c-header__list \".concat(active ? \"active\" : \"\")\n      }, __jsx(\"li\", {\n        className: \"c-header__item\"\n      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8__[\"Link\"], {\n        href: \"/\",\n        className: \"c-header__link\",\n        \"aria-label\": \"Home\"\n      }, \"Home\")), __jsx(\"li\", {\n        className: \"c-header__item\"\n      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8__[\"Link\"], {\n        href: \"/about\",\n        className: \"c-header__link\",\n        \"aria-label\": \"About Me Page\"\n      }, \"About\")), __jsx(\"li\", {\n        className: \"c-header__item\"\n      }, __jsx(_shared_ProjectsButton__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        className: \"c-header__link\",\n        content: \"Projects\"\n      })), __jsx(\"li\", {\n        className: \"c-header__item\"\n      }, __jsx(\"a\", {\n        href: \"mailhref:scorrea.dev@gmail.com\",\n        className: \"c-header__link\"\n      }, \"Contact\"))))))));\n    }\n  }]);\n\n  return Header;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9nbG9iYWwvSGVhZGVyLmpzPzBmMDYiXSwibmFtZXMiOlsiSGVhZGVyIiwicHJvcHMiLCJzZXRTdGF0ZSIsImFjdGl2ZSIsInN0YXRlIiwiZSIsIm9wZW5NZW51IiwicHJvY2VzcyIsImVudiIsIlBVQkxJQ19VUkwiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVNQSxNOzs7OztBQUNKLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQixtTkFPUixZQUFNO0FBQ2YsWUFBS0MsUUFBTCxDQUFjO0FBQUVDLGNBQU0sRUFBRSxDQUFDLE1BQUtDLEtBQUwsQ0FBV0Q7QUFBdEIsT0FBZDtBQUNELEtBVGtCOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEQsWUFBTSxFQUFFO0FBREcsS0FBYjtBQUZpQjtBQUtsQjs7Ozs2QkFNUTtBQUFBOztBQUFBLFVBQ0NBLE1BREQsR0FDWSxLQUFLQyxLQURqQixDQUNDRCxNQUREO0FBRVAsYUFDRTtBQUFRLGlCQUFTLEVBQUM7QUFBbEIsU0FDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFLE1BQUMsOENBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFlLGlCQUFTLEVBQUMsZ0JBQXpCO0FBQTBDLHNCQUFXO0FBQXJELDJCQURGLEVBSUU7QUFDRSxpQkFBUyxFQUFDLHFCQURaO0FBRUUsZUFBTyxFQUFFLGlCQUFDRSxDQUFEO0FBQUEsaUJBQU8sTUFBSSxDQUFDQyxRQUFMLEVBQVA7QUFBQTtBQUZYLFNBSUU7QUFDRSxXQUFHLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxVQUFaLEdBQXlCLDZCQURoQztBQUVFLFdBQUcsRUFBQztBQUZOLFFBSkYsQ0FKRixDQURGLENBREYsRUFpQkU7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLGlCQUFTLDBCQUFtQk4sTUFBTSxHQUFHLFFBQUgsR0FBYyxFQUF2QztBQUFkLFNBQ0U7QUFBSSxpQkFBUywyQkFBb0JBLE1BQU0sR0FBRyxRQUFILEdBQWMsRUFBeEM7QUFBYixTQUNFO0FBQUksaUJBQVMsRUFBQztBQUFkLFNBQ0UsTUFBQyw4Q0FBRDtBQUFNLFlBQUksRUFBQyxHQUFYO0FBQWUsaUJBQVMsRUFBQyxnQkFBekI7QUFBMEMsc0JBQVc7QUFBckQsZ0JBREYsQ0FERixFQU1FO0FBQUksaUJBQVMsRUFBQztBQUFkLFNBQ0UsTUFBQyw4Q0FBRDtBQUNFLFlBQUksRUFBQyxRQURQO0FBRUUsaUJBQVMsRUFBQyxnQkFGWjtBQUdFLHNCQUFXO0FBSGIsaUJBREYsQ0FORixFQWVFO0FBQUksaUJBQVMsRUFBQztBQUFkLFNBQ0UsTUFBQyw4REFBRDtBQUNFLGlCQUFTLEVBQUMsZ0JBRFo7QUFFRSxlQUFPLEVBQUM7QUFGVixRQURGLENBZkYsRUFxQkU7QUFBSSxpQkFBUyxFQUFDO0FBQWQsU0FDRTtBQUNFLFlBQUksRUFBQyxnQ0FEUDtBQUVFLGlCQUFTLEVBQUM7QUFGWixtQkFERixDQXJCRixDQURGLENBREYsQ0FqQkYsQ0FERixDQURGLENBREY7QUEwREQ7Ozs7RUF4RWtCTywrQzs7QUEyRU5WLHFFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvZ2xvYmFsL0hlYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUHJvamVjdEJ1dHRvbiBmcm9tIFwiLi4vc2hhcmVkL1Byb2plY3RzQnV0dG9uXCI7XG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhY3RpdmU6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBvcGVuTWVudSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlOiAhdGhpcy5zdGF0ZS5hY3RpdmUgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYWN0aXZlIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT0nYy1oZWFkZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nby1jb250YWluZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvLWdyaWQgby1ncmlkLS1iZXR3ZWVuJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdvLWdyaWRfX2NvbCB1LTMvMTJAbWQnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1oZWFkZXJfX2xvZ28nPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nIGNsYXNzTmFtZT0nYy1oZWFkZXJfX2xpbmsnIGFyaWEtbGFiZWw9J0hvbWUnPlxuICAgICAgICAgICAgICAgICAgU2FudGlhZ28gQ29ycmVhXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYy1oZWFkZXJfX2hhbWJ1cmdlcidcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLm9wZW5NZW51KCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9pbWFnZXMvaWNvbnMvaGFtYnVyZ2VyLnBuZ1wifVxuICAgICAgICAgICAgICAgICAgICBhbHQ9J09wZW4gbWVudSdcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nby1ncmlkX19jb2wgdS05LzEyQG1kJz5cbiAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9e2BjLWhlYWRlcl9fbmF2ICR7YWN0aXZlID8gXCJhY3RpdmVcIiA6IFwiXCJ9YH0+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17YGMtaGVhZGVyX19saXN0ICR7YWN0aXZlID8gXCJhY3RpdmVcIiA6IFwiXCJ9YH0+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdjLWhlYWRlcl9faXRlbSc+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nIGNsYXNzTmFtZT0nYy1oZWFkZXJfX2xpbmsnIGFyaWEtbGFiZWw9J0hvbWUnPlxuICAgICAgICAgICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2MtaGVhZGVyX19pdGVtJz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPScvYWJvdXQnXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjLWhlYWRlcl9fbGluaydcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPSdBYm91dCBNZSBQYWdlJ1xuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgQWJvdXRcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2MtaGVhZGVyX19pdGVtJz5cbiAgICAgICAgICAgICAgICAgICAgPFByb2plY3RCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2MtaGVhZGVyX19saW5rJ1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9J1Byb2plY3RzJ1xuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2MtaGVhZGVyX19pdGVtJz5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPSdtYWlsaHJlZjpzY29ycmVhLmRldkBnbWFpbC5jb20nXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjLWhlYWRlcl9fbGluaydcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIENvbnRhY3RcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/global/Header.js\n");

/***/ })

})