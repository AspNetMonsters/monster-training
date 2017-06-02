import * as React from "react";

export interface SessionProps { Name: string; Description: string; Length: number; key: string, selectItem: any }

export const Session = (props: SessionProps) => {
    return <div>
        <input type="checkbox" onClick={props.selectItem} data-key={props.Name}/>
        <b>{props.Name} - Duration {props.Length} hours</b>
        <p>{props.Description}</p>
    </div>
};
