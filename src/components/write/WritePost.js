import React, { useState } from "react";

// Apollo
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";

/* 사용자 컴포넌트 */
import PostTitle from "./PostTitle";
import PostBody from "./PostBody";
import PostHashtag from "./PostHashtag";

const WritePost = ({ userID }) => {
    const writer = userID;
    const [mainImg, handleMainImg] = useState("");
    const [hashtag, handleHashtag] = useState([]);
    const [title, handleTitle] = useState("");
    const [content, handleContent] = useState("");
    const [html, handleHtml] = useState("");

    const handelChange = (name, val) => {
        switch (name) {
            case "title":
                handleTitle(val);
                break;
            case "html":
                handleHtml(val);
                break;
            case "content":
                handleContent(val);
                break;
            case "mainImg":
                handleMainImg(val);
                break;
            case "hashtag":
                handleHashtag(val);
                break;
        }
    };

    const test = () => {
        console.log("tset");
        console.log(content);
        console.log(html);
    };

    return (
        <div>
            <PostTitle userTitle={""} onChange={handelChange} />
            <PostBody
                userCotent={content}
                userHtml={html}
                userMainImg={mainImg}
                onChange={handelChange}
            />
            <PostHashtag userHashtag={""} onChange={handelChange} />
            <button onClick={test}>완료</button>
        </div>
    );
};

export default WritePost;
