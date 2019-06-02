import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./header";
import PostList from "./postList";
import Post from "./post";

export default class index extends Component {
    render() {
        return (
            <div className="center w85">
                <Header />
                <div className="ph3 pv1 background-gray">
                    <Switch>
                        <Route exact path="/" component={PostList} />
                        <Route path="/test" component={Post} />
                    </Switch>
                </div>
            </div>
        );
    }
}
