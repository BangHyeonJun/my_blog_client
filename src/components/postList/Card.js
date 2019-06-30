import React from "react";
import noImg from "../../statics/images/no_image.png";
import {Link } from "react-router-dom"
import "./Card.scss";

function Card({ id, img, title, publish_date, category, commentCount }) {
    return (
        <Link to={`details/${id}`}>
            <div>
                {img.path ? (
                    <img src={`http://localhost:4000${img.path}`} />
                ) : (
                    <img src={noImg} />
                )}
                <div>test</div>
            </div>
            <div>{title}</div>
            <div>{publish_date}</div>
            <div>
                <div>{category}</div>
                <div>{commentCount}</div>
            </div>
        </Link>
    );
}

export default Card;
