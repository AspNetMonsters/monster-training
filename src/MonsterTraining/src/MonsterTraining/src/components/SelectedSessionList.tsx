import * as React from "react";
import { SelectedSessionDisplay } from "./SelectedSessionDisplay";
import { Session } from "./SessionData";
import { SelectedSessionsListProps } from "./SessionData";

export const SelectedSessionList = (props: SelectedSessionsListProps) => {
    var rows = [];
    var i = 0;
    for (var session of props.Sessions) {
        rows.push(<SelectedSessionDisplay Name={session.Name} Description={session.Description} Length={session.Length} key={session.Name} Index={i} />);
        i++;
    }
    var style = { minHeight: "55px" };
    var dayStyle = { width: "33%", display: "inline-block", "borderRight": "white solid 4px", "backgroundColor": "aliceblue" };
    return <div style={style}>
        <div>
            <span style={dayStyle}>Day 1</span>
            <span style={dayStyle}>Day 2</span>
            <span style={dayStyle}>Day 3</span>
            </div>
        {rows}

    </div>
}


