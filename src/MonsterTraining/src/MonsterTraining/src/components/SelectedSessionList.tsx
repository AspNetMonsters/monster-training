import * as React from "react";
import { SelectedSessionDisplay } from "./SelectedSessionDisplay";
import { Session } from "./SessionData";
import { SelectedSessionsListProps } from "./SessionData";

export const SelectedSessionList = (props: SelectedSessionsListProps ) => {
        var rows = [];
        for (var session of props.Sessions) {
            rows.push(<SelectedSessionDisplay Name={session.Name} Description={session.Description} Length={session.Length} key={session.Name} selectItem={this.selectItem} />);
        }
        return <div>
            <ul>
                {rows}
            </ul>
        </div>
}


