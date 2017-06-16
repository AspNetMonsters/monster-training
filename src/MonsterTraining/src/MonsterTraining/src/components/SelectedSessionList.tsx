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
    var style = { minHeight: "25px" };
    return <div style={style}>

        {rows}

    </div>
}


