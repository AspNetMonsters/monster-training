"use strict";
var React = require("react");
exports.Session = function (props) {
    return React.createElement("div", null,
        React.createElement("input", { type: "checkbox", onClick: props.selectItem }),
        React.createElement("b", null,
            props.Name,
            " - Duration ",
            props.Length,
            " hours"),
        React.createElement("p", null, props.Description));
};
//# sourceMappingURL=Session.js.map