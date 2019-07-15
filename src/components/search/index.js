import React from "react";

// SCSS 호출
import classNames from "classnames/bind";
import styles from "./index.module.scss";

// 사용자 컨테이너
import Search from "./search";
const cx = classNames.bind(styles);

const index = () => {
    return (
        <div className={cx("container")}>
            <Search />
        </div>
    );
};

export default index;
