import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import "./index.scss";

// 사용자 컴포넌트
import Card from "./Card";

const GET_POST = gql`
    query {
        post {
            _id
            title
            category
            mainImg {
                path
                width
                height
            }
            publish_date
            content
            comments {
                publish_date
            }
        }
    }
`;

const PostList = () => (
    <Query query={GET_POST}>
        {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
            console.log(data);
            return (
                <div className="postlist-container">
                    <div className="postlist-box">
                        {data.post.map(post => (
                            <Card
                                key={post._id}
                                id={post._id}
                                img={post.mainImg}
                                title={post.title}
                                category={post.category}
                                publish_date={post.publish_date}
                                commentCount={post.comments.lenght}
                            />
                        ))}
                    </div>
                </div>
            );
        }}
    </Query>
);

export default PostList;
