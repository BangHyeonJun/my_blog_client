import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class index extends Component {
    render() {
        return (
            <div className="flex pa1 justify-between nowrap orange">
                <div className="flex flex-fixed black">
                    <Link to="/test" className="ml1 no-underline black">
                        포스트
                    </Link>
                    |
                    <Link to="/" className="ml1 no-underline black">
                        포스트 리스트
                    </Link>
                    |
                    <Link to="/Write" className="ml1 no-underline black">
                        글쓰기
                    </Link>
                </div>
            </div>
        );
    }
}

export default withRouter(index);
