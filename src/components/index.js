import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./header";
import PostList from "./postList";
import Post from "./post";
import Write from "./write";
import Test from "./test"; // TODO : 이 부분은 테스트 부분이므로 배포시 삭제해야합니다.

export default class index extends Component {
    render() {
        return (
            <div className="center w85">
                <Header />
                <div className="ph3 pv1 background-gray">
                    <Switch>
                        <Route exact path="/" component={PostList} />
                        <Route path="/post/:id" component={Post} />
                        <Route path="/write" component={Write} />
                        <Route path="/test" component={Test} />
                    </Switch>
                </div>
            </div>
        );
    }
}
