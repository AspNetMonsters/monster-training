"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.Session = function (props) {
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
//# sourceMappingURL=Session.js.map