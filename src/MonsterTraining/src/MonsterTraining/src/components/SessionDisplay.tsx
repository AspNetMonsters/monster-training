import * as React from "react";

export interface SessionProps { Name: string; Description: string; Length: number; key: string, selectItem: any }

export const SessionDisplay = (props: SessionProps) => {
    return <div>
            <input type="checkbox" onClick={props.selectItem} data-key={props.Name} />
            <label htmlFor={props.Name} onClick={props.selectItem} ><b data-key={props.Name}>{props.Name} - Duration {props.Length} hours</b></label>
            <p>{props.Description}</p>
        </div>
};
