import React from "react";
import noImg from "../../static/images/no_image.png";

const Writer = () => {
    return (
        <div>
            <div>
                <img src={noImg} />
            </div>
            <div>
                <h3>사용자 이름</h3>
                <h4>(@test)</h4>
            </div>
            <div>이메일</div>
            <div>
                <p>내용</p>
                <p>내용</p>
                <p>내용</p>
            </div>
            <div>SNS</div>
        </div>
    );
};

export default Writer;
