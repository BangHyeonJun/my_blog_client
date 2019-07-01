import React from "react";
import noImg from "../common/images/no_image.png";
import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ id, img, title, publish_date, category, commentCount }) => {
    return (
        <Link to={`post/${id}/`} className="a-Lnik">
            <div className="card-container">
                <div className="img-container">
                    {img.path ? (
                        <img src={`http://localhost:4000${img.path}`} />
                    ) : (
                        <img src={noImg} />
                    )}
                </div>
                <div>
                    <h5>{publish_date}</h5>
                </div>
                <div>
                    <h3>{title}</h3>
                </div>
            </div>
        </Link>
    );
};

export default Card;
