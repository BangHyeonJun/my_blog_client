import React from "react";
import noImg from "../../statics/no_image.png";
import "./Card.scss"


function Card({ img, title, publish_date, category, commentCount }) {
    return (
        <div>
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
        </div>
    );
}

export default Card;
