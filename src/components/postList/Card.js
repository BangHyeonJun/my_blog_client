import React from "react";

function Card({ img, title, publish_date, category, commentCount }) {
    console.log("http://localhost:4000" + img.path);
    return (
        <div>
            <div>
                <img src={`http://localhost:4000${img.path}`} />
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
