/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var SessionDisplay_1 = __webpack_require__(5);
var SelectedSessionList_1 = __webpack_require__(7);
var Sessions = [
    { Name: "Entity Framework", Description: "If you've got data in a database and you need to get it out then Entity Framework Core is you best friend. In this session we'll cover the basics: building a data context, structuring entities and doing queries", Length: 2, Selected: false },
    { Name: "Introduction to .NET Core", Description: ".NET Core is a streamlined version of .NET which supports cross platform development and .NET Standard", Length: 1, Selected: false }
];
var SessionList = (function (_super) {
    __extends(SessionList, _super);
    function SessionList() {
        var _this = _super.call(this) || this;
        _this.state = { Sessions: Sessions, SelectedSessions: [] };
        _this.selectItem = _this.selectItem.bind(_this);
        return _this;
    }
    SessionList.prototype.render = function () {
        var rows = [];
        for (var _i = 0, _a = this.state.Sessions; _i < _a.length; _i++) {
            var session = _a[_i];
            rows.push(React.createElement(SessionDisplay_1.SessionDisplay, { Name: session.Name, Description: session.Description, Length: session.Length, key: session.Name, selectItem: this.selectItem }));
        }
        return React.createElement("div", null,
            React.createElement(SelectedSessionList_1.SelectedSessionList, { Sessions: this.state.SelectedSessions }),
            rows);
    };
    SessionList.prototype.selectItem = function (name) {
        var sessions = this.state.Sessions;
        var item = sessions.filter(function (x) { return x.Name === name.target.attributes["data-key"].value; })[0];
        item.Selected = name.target.checked;
        var selectedSessions = sessions.filter(function (x) { return x.Selected; });
        this.setState({ Sessions: sessions, SelectedSessions: selectedSessions });
    };
    return SessionList;
}(React.Component));
exports.SessionList = SessionList;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(2);
var SessionList_1 = __webpack_require__(1);
ReactDOM.render(React.createElement(SessionList_1.SessionList, null), document.getElementById("root"));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
exports.SessionDisplay = function (props) {
    return React.createElement("div", null,
        React.createElement("input", { type: "checkbox", onClick: props.selectItem, "data-key": props.Name }),
        React.createElement("label", { htmlFor: props.Name, onClick: props.selectItem },
            React.createElement("b", { "data-key": props.Name },
                props.Name,
                " - Duration ",
                props.Length,
                " hours")),
        React.createElement("p", null, props.Description));
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
exports.SelectedSessionDisplay = function (props) {
    return React.createElement("li", null,
        React.createElement("label", { htmlFor: props.Name, onClick: props.selectItem },
            React.createElement("b", { "data-key": props.Name },
                props.Name,
                " - Duration ",
                props.Length,
                " hours")));
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var SelectedSessionDisplay_1 = __webpack_require__(6);
exports.SelectedSessionList = function (props) {
    var rows = [];
    for (var _i = 0, _a = props.Sessions; _i < _a.length; _i++) {
        var session = _a[_i];
        rows.push(React.createElement(SelectedSessionDisplay_1.SelectedSessionDisplay, { Name: session.Name, Description: session.Description, Length: session.Length, key: session.Name, selectItem: _this.selectItem }));
    }
    return React.createElement("div", null,
        React.createElement("ul", null, rows));
};


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map