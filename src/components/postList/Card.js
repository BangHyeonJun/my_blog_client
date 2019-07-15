import React from "react";
import noImg from "../../static/images/no_image.png";
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Card.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Card = ({ id, img, title, publish_date, category, commentCount }) => {
    let pub_date = (() => {
        let d = new Date(publish_date * 1);
        let year = d.getFullYear() + "";
        let month =
            d.getMonth() + 1 < 10
                ? "0" + (d.getMonth() + 1)
                : d.getMonth() + 1 + "";
        let day = d.getDate() < 10 ? "0" + d.getDate() : d.getDate() + "";

        return year + "." + month + "." + day;
    })();

    return (
        <Link to={`post/${id}/`} className={cx("a-Lnik")}>
            <div className={cx("post-list-card-container")}>
                <div className={cx("post-list-card")}>
                    <div className={cx("post-list-front")}>
                        <div className={cx("post-list-img-container")}>
                            {img.path ? (
                                <img src={`http://localhost:4000${img.path}`} />
                            ) : (
                                <img src={noImg} />
                            )}
                        </div>
                        <div className={cx("post-list-main-container")}>
                            <div
                                className={cx(
                                    "post-list-publish-date-container"
                                )}
                            >
                                <h5>{pub_date}</h5>
                            </div>
                            <div className={cx("post-list-title-container")}>
                                <h3>{title}</h3>
                            </div>
                            <div
                                className={cx(
                                    "post-list-detail-info-container"
                                )}
                            >
                                <h5>자세히 보기</h5>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </div>
                        </div>
                    </div>
                    <div className={cx("post-list-back")}>
                        <div>{category}</div>
                        <div className={cx("post-list-detail-info-container")}>
                            <h5>자세히 보기</h5>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card;
