webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/global/Header.js":
/*!*****************************************!*\
  !*** ./src/components/global/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _shared_ProjectsButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/ProjectsButton */ \"./src/components/shared/ProjectsButton.js\");\n\n\n\n\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar Header = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Header, _Component);\n\n  var _super = _createSuper(Header);\n\n  function Header(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Header);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"openMenu\", function () {\n      _this.setState({\n        active: !_this.state.active\n      });\n    });\n\n    _this.state = {\n      active: false\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Header, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var active = this.state.active;\n      return __jsx(\"header\", {\n        className: \"c-header\"\n      }, __jsx(\"div\", {\n        className: \"o-container\"\n      }, __jsx(\"div\", {\n        className: \"o-grid o-grid--between\"\n      }, __jsx(\"div\", {\n        className: \"o-grid__col u-3/12@md\"\n      }, __jsx(\"div\", {\n        className: \"c-header__logo\"\n      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        href: \"/\",\n        className: \"c-header__link\",\n        \"aria-label\": \"Home\"\n      }, \"Santiago Correa\"), __jsx(\"button\", {\n        className: \"c-header__hamburger\",\n        onClick: function onClick(e) {\n          return _this2.openMenu();\n        }\n      }, __jsx(\"img\", {\n        src: \"/images/icons/hamburger.png\",\n        alt: \"Open menu\"\n      })))), __jsx(\"div\", {\n        className: \"o-grid__col u-9/12@md\"\n      }, __jsx(\"nav\", {\n        className: \"c-header__nav \".concat(active ? \"active\" : \"\")\n      }, __jsx(\"ul\", {\n        className: \"c-header__list \".concat(active ? \"active\" : \"\")\n      }, __jsx(\"li\", {\n        className: \"c-header__item\"\n      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        href: \"/\",\n        className: \"c-header__link\",\n        \"aria-label\": \"Home\"\n      }, \"Home\")), __jsx(\"li\", {\n        className: \"c-header__item\"\n      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {\n        href: \"/about\",\n        className: \"c-header__link\",\n        \"aria-label\": \"About Me Page\"\n      }, \"About\")), __jsx(\"li\", {\n        className: \"c-header__item\"\n      }, __jsx(_shared_ProjectsButton__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        className: \"c-header__link\",\n        content: \"Projects\"\n      })), __jsx(\"li\", {\n        className: \"c-header__item\"\n      }, __jsx(\"a\", {\n        href: \"mailhref:scorrea.dev@gmail.com\",\n        className: \"c-header__link\"\n      }, \"Contact\"))))))));\n    }\n  }]);\n\n  return Header;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9nbG9iYWwvSGVhZGVyLmpzPzBmMDYiXSwibmFtZXMiOlsiSGVhZGVyIiwicHJvcHMiLCJzZXRTdGF0ZSIsImFjdGl2ZSIsInN0YXRlIiwiZSIsIm9wZW5NZW51IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFFTUEsTTs7Ozs7QUFDSixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjs7QUFEaUIsbU5BT1IsWUFBTTtBQUNmLFlBQUtDLFFBQUwsQ0FBYztBQUFFQyxjQUFNLEVBQUUsQ0FBQyxNQUFLQyxLQUFMLENBQVdEO0FBQXRCLE9BQWQ7QUFDRCxLQVRrQjs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hELFlBQU0sRUFBRTtBQURHLEtBQWI7QUFGaUI7QUFLbEI7Ozs7NkJBTVE7QUFBQTs7QUFBQSxVQUNDQSxNQURELEdBQ1ksS0FBS0MsS0FEakIsQ0FDQ0QsTUFERDtBQUVQLGFBQ0U7QUFBUSxpQkFBUyxFQUFDO0FBQWxCLFNBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRSxNQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBZSxpQkFBUyxFQUFDLGdCQUF6QjtBQUEwQyxzQkFBVztBQUFyRCwyQkFERixFQUlFO0FBQ0UsaUJBQVMsRUFBQyxxQkFEWjtBQUVFLGVBQU8sRUFBRSxpQkFBQ0UsQ0FBRDtBQUFBLGlCQUFPLE1BQUksQ0FBQ0MsUUFBTCxFQUFQO0FBQUE7QUFGWCxTQUlFO0FBQUssV0FBRyxFQUFDLDZCQUFUO0FBQXVDLFdBQUcsRUFBQztBQUEzQyxRQUpGLENBSkYsQ0FERixDQURGLEVBY0U7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLGlCQUFTLDBCQUFtQkgsTUFBTSxHQUFHLFFBQUgsR0FBYyxFQUF2QztBQUFkLFNBQ0U7QUFBSSxpQkFBUywyQkFBb0JBLE1BQU0sR0FBRyxRQUFILEdBQWMsRUFBeEM7QUFBYixTQUNFO0FBQUksaUJBQVMsRUFBQztBQUFkLFNBQ0UsTUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxHQUFYO0FBQWUsaUJBQVMsRUFBQyxnQkFBekI7QUFBMEMsc0JBQVc7QUFBckQsZ0JBREYsQ0FERixFQU1FO0FBQUksaUJBQVMsRUFBQztBQUFkLFNBQ0UsTUFBQyxnREFBRDtBQUNFLFlBQUksRUFBQyxRQURQO0FBRUUsaUJBQVMsRUFBQyxnQkFGWjtBQUdFLHNCQUFXO0FBSGIsaUJBREYsQ0FORixFQWVFO0FBQUksaUJBQVMsRUFBQztBQUFkLFNBQ0UsTUFBQyw4REFBRDtBQUNFLGlCQUFTLEVBQUMsZ0JBRFo7QUFFRSxlQUFPLEVBQUM7QUFGVixRQURGLENBZkYsRUFxQkU7QUFBSSxpQkFBUyxFQUFDO0FBQWQsU0FDRTtBQUNFLFlBQUksRUFBQyxnQ0FEUDtBQUVFLGlCQUFTLEVBQUM7QUFGWixtQkFERixDQXJCRixDQURGLENBREYsQ0FkRixDQURGLENBREYsQ0FERjtBQXVERDs7OztFQXJFa0JJLCtDOztBQXdFTlAscUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9nbG9iYWwvSGVhZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFByb2plY3RCdXR0b24gZnJvbSBcIi4uL3NoYXJlZC9Qcm9qZWN0c0J1dHRvblwiO1xuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgb3Blbk1lbnUgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZTogIXRoaXMuc3RhdGUuYWN0aXZlIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFjdGl2ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9J2MtaGVhZGVyJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J28tY29udGFpbmVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nby1ncmlkIG8tZ3JpZC0tYmV0d2Vlbic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nby1ncmlkX19jb2wgdS0zLzEyQG1kJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtaGVhZGVyX19sb2dvJz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJyBjbGFzc05hbWU9J2MtaGVhZGVyX19saW5rJyBhcmlhLWxhYmVsPSdIb21lJz5cbiAgICAgICAgICAgICAgICAgIFNhbnRpYWdvIENvcnJlYVxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2MtaGVhZGVyX19oYW1idXJnZXInXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gdGhpcy5vcGVuTWVudSgpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScvaW1hZ2VzL2ljb25zL2hhbWJ1cmdlci5wbmcnIGFsdD0nT3BlbiBtZW51JyAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J28tZ3JpZF9fY29sIHUtOS8xMkBtZCc+XG4gICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtgYy1oZWFkZXJfX25hdiAke2FjdGl2ZSA/IFwiYWN0aXZlXCIgOiBcIlwifWB9PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2BjLWhlYWRlcl9fbGlzdCAke2FjdGl2ZSA/IFwiYWN0aXZlXCIgOiBcIlwifWB9PlxuICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nYy1oZWFkZXJfX2l0ZW0nPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvJyBjbGFzc05hbWU9J2MtaGVhZGVyX19saW5rJyBhcmlhLWxhYmVsPSdIb21lJz5cbiAgICAgICAgICAgICAgICAgICAgICBIb21lXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdjLWhlYWRlcl9faXRlbSc+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj0nL2Fib3V0J1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYy1oZWFkZXJfX2xpbmsnXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD0nQWJvdXQgTWUgUGFnZSdcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdjLWhlYWRlcl9faXRlbSc+XG4gICAgICAgICAgICAgICAgICAgIDxQcm9qZWN0QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjLWhlYWRlcl9fbGluaydcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PSdQcm9qZWN0cydcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdjLWhlYWRlcl9faXRlbSc+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj0nbWFpbGhyZWY6c2NvcnJlYS5kZXZAZ21haWwuY29tJ1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYy1oZWFkZXJfX2xpbmsnXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBDb250YWN0XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/global/Header.js\n");

/***/ })

})