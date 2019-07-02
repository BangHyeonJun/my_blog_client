import React from "react";
import noImg from "../../static/images/no_image.png";
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Card.scss";

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
        <Link to={`post/${id}/`} className="a-Lnik">
            <div className="card-container">
                <div className="card">
                    <div className="front">
                        <div className="img-container">
                            {img.path ? (
                                <img src={`http://localhost:4000${img.path}`} />
                            ) : (
                                <img src={noImg} />
                            )}
                        </div>
                        <div className="publish-date-container">
                            <h5>{pub_date}</h5>
                        </div>
                        <div className="title-container">
                            <h3>{title}</h3>
                        </div>
                        <div className="detail-info-container">
                            <h5>자세히 보기</h5>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                    </div>
                    <div className="back">
                        <div>{category}</div>
                        <div className="detail-info-container">
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
