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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
var SelectedSessionList_1 = __webpack_require__(4);
var Sessions = [
    { Name: "Introduction to .NET Core", Description: ".NET Core is a streamlined version of .NET which supports cross platform development and .NET Standard. In this module we'll talk about how", Length: 1, Selected: true },
    { Name: "MVC... and all the other bits", Description: "There's more to MVC than just models, views and controllers. In this section of the workshop we're going to look at other aspects of the framework and tooling that help you build great software.", Length: 3, Selected: false },
    { Name: "Data Access with Entity Framework", Description: "Everyone's got to save some data, sometime. Entity Framework has proven itself over the years and the new version makes data access possible on any platform, using many different types of back-end stores. Learn how to break down your models and get the best performance out of your data layer.", Length: 3, Selected: false },
    { Name: "Data Access with Dapper", Description: "Don't like entities? Think putting them in a framework is for chumps? Dapper is a light weight object relational mapper which allows you to hand tune your queries and build fast, light-weight projects. If your project is small or you don't need navigation properties then Dapper could be the ORM of your dreams.", Length: 2, Selected: false },
    { Name: "Messaging Patterns in ASP.NET Core with MediatR", Description: "Modern applications need to survive scale, and with very little effort you can help shape your application in such a way that it can better respond to scaling needs, all the while making it easier to maintain.", Length: 3, Selected: false },
    { Name: "Distributed Messaging Patterns in ASP.NET Core with NServiceBus", Description: "MediatR is a great in process, synchronous messaging tool. If you need to go bigger and distribute your handlers to multiple machines or deal with long-running processes then NServiceBus is a tool to facilitate that. In this section we'll build simple handlers and talk about scaling them out over Azure ServiceBus", Length: 2, Selected: false },
    { Name: "Authentication and Authorization", Description: "Line-of-Business app? Consumer-facing app? Either way, you're likely going to need to know who's using your website before doing anything too terribly interesting. We'll talk about how to wire up authentication, learn to work with claims and create reusable authorization policies", Length: 2, Selected: false },
    { Name: "To the Cloud!", Description: "We want to set you up for success in how you build and deploy applications. As monsters, we believe that your success is going to largely live in or be affected by the cloud. In this module we'll be diving into aspects of software development, demonstrating some best (and not-so-best) practices so that you know what to leverage and what to avoid.", Length: 3, Selected: false },
    { Name: "Asset management", Description: "Websites have a variety of assets from JavaScript files to images to CSS. In this section we'll talk about where to keep your assets, how to build them and the best way to distribute them to clients. We'll cover HTTP2, compression and optimization.", Length: 2, Selected: false },
    { Name: "Introduction to Bootstrap 4", Description: "They say you can't pull yourself up by your own bootstraps but every time we've tried our bootstraps just snap. In this module we'll introduce Bootstrap 4 and show you how you can have a good looking website in minutes instead of weeks.", Length: 2, Selected: false },
    { Name: "TypeScript", Description: "TypeScript is a superset of JavaScript which introduces type checking and can transpile to legacy versions of JavaScript for older brower support.", Length: 2, Selected: false },
    { Name: "Structured logging + Log aggregators", Description: "If logging is awesome, structured logging is a bear with a handlebar mustache. This module will cover logging to local files and to a log aggregator. We'll also look at what structured logging with Serilog can bring you.", Length: 2, Selected: false },
    { Name: "Microservice architecture in PaaS", Description: "Monolith are old news, microservices are the new cool. But beyond being cool microservices provide for well segregated code, flexibility of scaling and rapid deployment.", Length: 2, Selected: false },
    { Name: "Authenticating with a Social Media Provider", Description: "Why take on the responsibility of keeping usernames and passwords in your database when you can have Facebook, Twitter or Microsoft do it for you? In this module we'll set up our application to authenticate against a social media provider.", Length: 2, Selected: false }
];
var SessionList = (function (_super) {
    __extends(SessionList, _super);
    function SessionList() {
        var _this = _super.call(this) || this;
        _this.state = { Sessions: Sessions, SelectedSessions: Sessions.filter(function (x) { return x.Selected; }) };
        _this.selectItem = _this.selectItem.bind(_this);
        return _this;
    }
    SessionList.prototype.render = function () {
        var rows = [];
        for (var _i = 0, _a = this.state.Sessions; _i < _a.length; _i++) {
            var session = _a[_i];
            rows.push(React.createElement(SessionDisplay_1.SessionDisplay, { Name: session.Name, Description: session.Description, Length: session.Length, key: session.Name, Selected: session.Selected, selectItem: this.selectItem }));
        }
        return React.createElement("div", null,
            React.createElement(SelectedSessionList_1.SelectedSessionList, { Sessions: this.state.SelectedSessions }),
            rows);
    };
    SessionList.prototype.componentDidUpdate = function () {
        new Tippy("span");
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
exports.SelectedSessionDisplay = function (props) {
    var hoursADay = 8;
    var days = 3;
    var hourWidth = 100 / (hoursADay * days);
    var colours = ["1f77b4", "ff7f0e", "2ca02c", "d62728", "9467bd", "8c564b", "e377c2", "7f7f7f", "bcbd22", "17becf"];
    var style = {
        "backgroundColor": "#" + colours[props.Index % 10],
        "height": "20px",
        "width": (hourWidth * props.Length) + "%",
        "display": "inline-block"
    };
    return React.createElement("span", { style: style, title: props.Name });
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var SelectedSessionDisplay_1 = __webpack_require__(3);
exports.SelectedSessionList = function (props) {
    var rows = [];
    var i = 0;
    for (var _i = 0, _a = props.Sessions; _i < _a.length; _i++) {
        var session = _a[_i];
        rows.push(React.createElement(SelectedSessionDisplay_1.SelectedSessionDisplay, { Name: session.Name, Description: session.Description, Length: session.Length, key: session.Name, Index: i }));
        i++;
    }
    var style = { minHeight: "55px" };
    var dayStyle = { width: "33%", display: "inline-block", "borderRight": "white solid 4px", "backgroundColor": "aliceblue" };
    return React.createElement("div", { style: style },
        React.createElement("div", null,
            React.createElement("span", { style: dayStyle }, "Day 1"),
            React.createElement("span", { style: dayStyle }, "Day 2"),
            React.createElement("span", { style: dayStyle }, "Day 3")),
        rows);
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
exports.SessionDisplay = function (props) {
    return React.createElement("div", null,
        React.createElement("input", { type: "checkbox", onClick: props.selectItem, "data-key": props.Name, defaultChecked: props.Selected }),
        React.createElement("label", { htmlFor: props.Name, onClick: props.selectItem },
            React.createElement("b", { "data-key": props.Name },
                props.Name,
                " - Duration ",
                props.Length,
                " hour",
                props.Length > 1 ? "s" : "")),
        React.createElement("p", null, props.Description));
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(2);
var SessionList_1 = __webpack_require__(1);
ReactDOM.render(React.createElement(SessionList_1.SessionList, null), document.getElementById("root"));


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map