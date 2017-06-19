import * as React from "react";
import { Session, SessionListState } from "./SessionData";
import { SessionDisplay } from "./SessionDisplay";
import { SelectedSessionList } from "./SelectedSessionList";

declare var Tippy: any;

var Sessions: Session[] = [
    { Name: "Introduction to .NET Core", Description: ".NET Core is a streamlined version of .NET which supports cross platform development and .NET Standard. In this module we'll talk about how", Length: 1, Selected: true },
    { Name: "MVC... and all the other bits", Description: "There's more to MVC than just models, views and controllers. In this section of the workshop we're going to look at other aspects of the framework and tooling that help you build great software.", Length: 3, Selected: false },
    { Name: "Data Access with Entity Framework", Description: "Everyone's got to save some data, sometime. Entity Framework has proven itself over the years and the new version makes data access possible on any platform, using many different types of back-end stores. Learn how to break down your models and get the best performance out of your data layer.", Length: 3, Selected: false },
    { Name: "Data Access with Dapper", Description: "Don't like entities? Think putting them in a framework is for chumps? Dapper is a light weight object relational mapper which allows you to hand tune your queries and build fast, light-weight projects. If your project is small or you don't need navigation properties then Dapper could be the ORM of your dreams.", Length: 2, Selected: false },
    { Name: "Messaging Patterns in ASP.NET Core with MediatR", Description: "Modern applications need to survive scale, and with very little effort you can help shape your application in such a way that it can better respond to scaling needs, all the while making it easier to maintain.", Length: 3, Selected: false },
    { Name: "Distributed Messaging Patterns in ASP.NET Core with NServiceBus", Description: "MediatR is a great in process, synchronous messaging tool. If you need to go bigger and distribute your handlers to multiple machines or deal with long-running processes then NServiceBus is a tool to facilitate that. In this section we'll build simple handlers and talk about scaling them out over Azure ServiceBus", Length: 2, Selected: false },
    { Name: "Authentication and Authorization", Description: "Line-of-Business app? Consumer-facing app? Either way, you're likely going to need to know who's using your website before doing anything too terribly interesting. We'll talk about how to wire up authentication, learn to work with claims and create reusable authorization policies", Length: 2, Selected: false },
    { Name: "To the Cloud!", Description: "We want to set you up for success in how you build and deploy applications. As monsters, we believe that your success is going to largely live in or be affected by the cloud. In this module we'll be diving into aspects of software development, demonstrating some best (and not-so-best) practices so that you know what to leverage and what to avoid.", Length: 3, Selected: false },
    { Name: "Asset management", Description: "Websites have a variety of assets from JavaScript files to images to CSS. In this section we'll talk about where to keep your assets, how to build them and the best way to distribute them to clients. We'll cover HTTP2, compression and optimization.", Length: 2, Selected: false },
    { Name: "Introduction to Bootstrap 4", Description: "They say you can't pull yourself up by your own bootstraps but every time we've tried our bootstraps just snap. In this module we'll introduce Bootstrap 4 and show you how you can have a good looking website in minutes instead of weeks.", Length: 2, Selected: false },
    { Name: "TypeScript", Description: "TypeScript is a superset of JavaScript which introduces type checking and can transpile to legacy versions of JavaScript for older brower support.", Length: 2, Selected: false },
    { Name: "Structured logging + Log aggregators", Description: "If logging is awesome, structured logging is a bear with a handlebar mustache. This module will cover logging to local files and to a log aggregator. We'll also look at what structured logging with Serilog can bring you.", Length: 2, Selected: false },
    { Name: "Microservice architecture in PaaS", Description: "Monolith are old news, microservices are the new cool. But beyond being cool microservices provide for well segregated code, flexibility of scaling and rapid deployment.", Length: 2, Selected: false },
    { Name: "Authenticating with a Social Media Provider", Description: "Why take on the responsibility of keeping usernames and passwords in your database when you can have Facebook, Twitter or Microsoft do it for you? In this module we'll set up our application to authenticate against a social media provider.", Length: 2, Selected: false }
];


export class SessionList extends React.Component<undefined, SessionListState>
{
    constructor() {
        super();
        this.state = { Sessions: Sessions, SelectedSessions: Sessions.filter((x) => x.Selected) };
        this.selectItem = this.selectItem.bind(this);
    }

    render() {
        var rows = [];
        for (var session of this.state.Sessions) {
            rows.push(<SessionDisplay Name={session.Name} Description={session.Description} Length={session.Length} key={session.Name} Selected={session.Selected} selectItem={this.selectItem} />);
        }
        return <div>
            <SelectedSessionList Sessions={this.state.SelectedSessions} />
            {rows}
        </div>
    }

    componentDidUpdate() {
        new Tippy("span");
    }

    selectItem(name: any) {
        var sessions = this.state.Sessions;

        var item = sessions.filter((x) => x.Name === name.target.attributes["data-key"].value)[0];
        item.Selected = name.target.checked;
        var selectedSessions = sessions.filter((x) => x.Selected);
        this.setState({ Sessions: sessions, SelectedSessions: selectedSessions });
    }
}
