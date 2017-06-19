import * as React from "react";
import { SelectedSessionProps } from "./SessionData"


export const SelectedSessionDisplay = (props: SelectedSessionProps) => {
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
    return <span style={style} title={props.Name}>
        
    </span>
};