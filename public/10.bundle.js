(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./client/components/JobList.jsx":
/*!***************************************!*\
  !*** ./client/components/JobList.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Loading_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Loading.jsx */ \"./client/components/Loading.jsx\");\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n    background-color: white;          \\n    margin: 32px auto 0;\\n    padding: 16px;\\n    max-width: 750px;\\n    width: 100%;\\n    border: 1px solid lightgray;\\n    font-family: Avenir, sans-serif;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\nvar Job = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {\n  return __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! ./Job.jsx */ \"./client/components/Job.jsx\"));\n});\n\nvar Pre = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\n\nvar JobList = function JobList(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, props.jobs.map(function (job) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Pre, {\n      key: job.id\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"BrowserRouter\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      to: \"/\".concat(job.id)\n    }, job.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n      exact: true,\n      path: \"/\".concat(job.id)\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Suspense\"], {\n      fallback: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loading_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Job, {\n      job: job,\n      showForm: props.showForm,\n      updateJobId: props.updateJobId,\n      employees: props.employees.filter(function (employee) {\n        return employee.company === job.company;\n      })\n    }))))));\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (JobList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvY29tcG9uZW50cy9Kb2JMaXN0LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9jb21wb25lbnRzL0pvYkxpc3QuanN4PzIzZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIFN1c3BlbnNlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgU3dpdGNoLCBSb3V0ZSwgTGlua30gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbnZhciBKb2IgPSBSZWFjdC5sYXp5KCgpPT4gaW1wb3J0KCcuL0pvYi5qc3gnKSk7XG5pbXBvcnQgTG9hZGluZyBmcm9tICcuL0xvYWRpbmcuanN4JztcblxudmFyIFByZSA9IHN0eWxlZC5kaXYgYFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAgICAgICAgICBcbiAgICBtYXJnaW46IDMycHggYXV0byAwO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgbWF4LXdpZHRoOiA3NTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgZm9udC1mYW1pbHk6IEF2ZW5pciwgc2Fucy1zZXJpZjtcbmBcblxudmFyIEpvYkxpc3QgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3Byb3BzLmpvYnMubWFwKGpvYiA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPFByZSBrZXkgPSB7am9iLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um91dGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17YC8ke2pvYi5pZH1gfT57am9iLnRpdGxlfTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9e2AvJHtqb2IuaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PExvYWRpbmcgLz59PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEpvYiBqb2I9e2pvYn0gc2hvd0Zvcm09e3Byb3BzLnNob3dGb3JtfSB1cGRhdGVKb2JJZD17cHJvcHMudXBkYXRlSm9iSWR9IGVtcGxveWVlcz17cHJvcHMuZW1wbG95ZWVzLmZpbHRlcihlbXBsb3llZSA9PiBlbXBsb3llZS5jb21wYW55ID09PSBqb2IuY29tcGFueSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3VzcGVuc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUm91dGVyPlxuICAgICAgICAgICAgICAgICAgICA8L1ByZT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+ICAgIFxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSm9iTGlzdDsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQVNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFHQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/components/JobList.jsx\n");

/***/ })

}]);