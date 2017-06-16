import * as React from "react";
import { SelectedSessionProps } from "./SessionData"

export const SelectedSessionDisplay = (props: SelectedSessionProps) => {
    return <li>
        <label htmlFor={props.Name} onClick={props.selectItem} ><b data-key={props.Name}>{props.Name} - Duration {props.Length} hours</b></label>
    </li>
};