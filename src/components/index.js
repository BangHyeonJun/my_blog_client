import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import TestHeader from "./test_header";
import PostList from "./postList";
import Post from "./post";
import Write from "./write";
import Login from "./login";
import Test from "./test"; // TODO : 이 부분은 테스트 부분이므로 배포시 삭제해야합니다.
import Search from "./search";

export default class index extends Component {
    render() {
        return (
            <div className="center w85">
                {/* <TestHeader /> */}
                {/* 이 부분은 테스트를 위한 부분 입니다.*/}
                <Search />
                <div className="ph3 pv1 background-gray">
                    <Switch>
                        <Route exact path="/" component={PostList} />
                        <Route path="/post/:id" component={Post} />
                        <Route path="/write" component={Write} />
                        <Route path="/test" component={Test} />
                        <Route path="/login" component={Login} />
                    </Switch>
                </div>
            </div>
        );
    }
}
