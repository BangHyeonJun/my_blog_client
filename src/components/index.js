import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import TestHeader from "./test_header";
import PostList from "./postList";
import Post from "./post";
import Write from "./write";
import Test from "./test"; // TODO : 이 부분은 테스트 부분이므로 배포시 삭제해야합니다.

import Join from "./member/join";
import Login from "./member/login";
import Logout from "./member/logout";
import Admin from "./member/admin";
import Check from "./member/check";

import classNames from "classnames/bind";
import styles from "./index.module.scss";
const cx = classNames.bind(styles);

export default class index extends Component {
    render() {
        return (
            <div className={cx("container")}>
                {/* <TestHeader /> */}
                {/* 이 부분은 테스트를 위한 부분 입니다.*/}
                <div className={cx("router-box")}>
                    <Switch>
                        {/* 포스트 관련 */}
                        <Route exact path="/" component={PostList} />
                        <Route path="/post/:id" component={Post} />

                        {/* 사용자 관련 */}
                        <Route path="/write" component={Write} />

                        {/* 유저 관련 */}
                        <Route path="/member/login" component={Login} />
                        <Route path="/member/logout" component={Logout} />
                        <Route path="/member/join" component={Join} />
                        <Route
                            path="/member/admin/management"
                            component={Admin}
                        />
                        <Route path="/member/check" component={Check} />

                        {/* 테스트 */}
                        <Route path="/test" component={Test} />
                    </Switch>
                </div>
            </div>
        );
    }
}
