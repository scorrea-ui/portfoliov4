webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/shared/ProjectsButton.js":
/*!*************************************************!*\
  !*** ./src/components/shared/ProjectsButton.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar scrollToProject = function scrollToProject(event) {\n  var projects = Array.prototype.slice.call(document.querySelectorAll(event.target.getAttribute(\"data-scroll\")));\n\n  if (projects) {\n    // eslint-disable-next-line\n    projects.map(function (project) {\n      project.scrollIntoView({\n        behavior: \"smooth\",\n        block: \"start\",\n        inline: \"nearest\"\n      });\n    });\n  }\n};\n\nvar ProjectButton = function ProjectButton() {\n  return __jsx(\"button\", {\n    onClick: function onClick(e) {\n      return scrollToProject(e);\n    },\n    \"data-scroll\": \"#projects\"\n  });\n};\n\n_c = ProjectButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectButton);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProjectButton\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaGFyZWQvUHJvamVjdHNCdXR0b24uanM/MGYxOCJdLCJuYW1lcyI6WyJzY3JvbGxUb1Byb2plY3QiLCJldmVudCIsInByb2plY3RzIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0YXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJtYXAiLCJwcm9qZWN0Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwiaW5saW5lIiwiUHJvamVjdEJ1dHRvbiIsImUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBVztBQUNqQyxNQUFNQyxRQUFRLEdBQUdDLEtBQUssQ0FBQ0MsU0FBTixDQUFnQkMsS0FBaEIsQ0FBc0JDLElBQXRCLENBQ2ZDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEJQLEtBQUssQ0FBQ1EsTUFBTixDQUFhQyxZQUFiLENBQTBCLGFBQTFCLENBQTFCLENBRGUsQ0FBakI7O0FBSUEsTUFBSVIsUUFBSixFQUFjO0FBQ1o7QUFDQUEsWUFBUSxDQUFDUyxHQUFULENBQWEsVUFBQ0MsT0FBRCxFQUFhO0FBQ3hCQSxhQUFPLENBQUNDLGNBQVIsQ0FBdUI7QUFDckJDLGdCQUFRLEVBQUUsUUFEVztBQUVyQkMsYUFBSyxFQUFFLE9BRmM7QUFHckJDLGNBQU0sRUFBRTtBQUhhLE9BQXZCO0FBS0QsS0FORDtBQU9EO0FBQ0YsQ0FmRDs7QUFpQkEsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCLFNBQ0U7QUFDRSxXQUFPLEVBQUUsaUJBQUNDLENBQUQ7QUFBQSxhQUFPbEIsZUFBZSxDQUFDa0IsQ0FBRCxDQUF0QjtBQUFBLEtBRFg7QUFFRSxtQkFBWTtBQUZkLElBREY7QUFPRCxDQVJEOztLQUFNRCxhO0FBVVNBLDRFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvc2hhcmVkL1Byb2plY3RzQnV0dG9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBzY3JvbGxUb1Byb2plY3QgPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgcHJvamVjdHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNjcm9sbFwiKSlcbiAgKTtcblxuICBpZiAocHJvamVjdHMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBwcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IHtcbiAgICAgIHByb2plY3Quc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICAgICAgYmxvY2s6IFwic3RhcnRcIixcbiAgICAgICAgaW5saW5lOiBcIm5lYXJlc3RcIixcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59O1xuXG5jb25zdCBQcm9qZWN0QnV0dG9uID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIG9uQ2xpY2s9eyhlKSA9PiBzY3JvbGxUb1Byb2plY3QoZSl9XG4gICAgICBkYXRhLXNjcm9sbD0nI3Byb2plY3RzJ1xuICAgID5cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RCdXR0b247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/shared/ProjectsButton.js\n");

/***/ })

})