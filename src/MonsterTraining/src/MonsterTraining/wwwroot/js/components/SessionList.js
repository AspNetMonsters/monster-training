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
var React = require("react");
var SessionDisplay_1 = require("./SessionDisplay");
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
        return React.createElement("div", null, rows);
    };
    SessionList.prototype.selectItem = function (name) {
        debugger;
        var sessions = this.state.Sessions;
        var item = sessions.filter(function (x) { return x.Name === name.target.attributes["data-key"].value; })[0];
        item.Selected = name.target.checked;
        var selectedSessions = sessions.filter(function (x) { return x.Selected; });
        this.setState({ Sessions: sessions, SelectedSessions: selectedSessions });
    };
    return SessionList;
}(React.Component));
exports.SessionList = SessionList;
//# sourceMappingURL=SessionList.js.map