"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Session_1 = require("./Session");
var Sessions = [
    { Name: "Entity Framework", Description: "If you've got data in a database and you need to get it out then Entity Framework Core is you best friend. In this session we'll cover the basics: building a data context, structuring entities and doing queries", Length: 2, Selected: false },
    { Name: "Introduction to .NET Core", Description: ".NET Core is a streamlined version of .NET which supports cross platform development and .NET Standard", Length: 1, Selected: false }
];
var SessionList = (function (_super) {
    __extends(SessionList, _super);
    function SessionList() {
        var _this = _super.call(this) || this;
        debugger;
        _this.state = { Sessions: Sessions };
        return _this;
    }
    SessionList.prototype.render = function () {
        var rows = [];
        for (var _i = 0, _a = this.state.Sessions; _i < _a.length; _i++) {
            var session = _a[_i];
            rows.push(React.createElement(Session_1.Session, { Name: session.Name, Description: session.Description, Length: session.Length, key: session.Name, selectItem: this.selectItem }));
        }
        return React.createElement("div", null, rows);
    };
    SessionList.prototype.selectItem = function (name) {
        var item = this.state.Sessions.filter(function (x) { return x.Name === name; })[0];
    };
    return SessionList;
}(React.Component));
exports.SessionList = SessionList;
//# sourceMappingURL=SessionList.js.map