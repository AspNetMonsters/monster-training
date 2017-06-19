import * as React from "react";

export interface SessionProps { Name: string; Description: string; Length: number; Selected: boolean;  key: string, selectItem: any }

export const SessionDisplay = (props: SessionProps) => {
    return <div>
        <input type="checkbox" onClick={props.selectItem} data-key={props.Name} defaultChecked={props.Selected} />
            <label htmlFor={props.Name} onClick={props.selectItem} ><b data-key={props.Name}>{props.Name} - Duration {props.Length} hour{props.Length >1 ? "s":""}</b></label>
            <p>{props.Description}</p>
        </div>
};
