import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

// 사용자 컴포넌트
import Card from "./Card";

const GET_POST = gql`
    query {
        post {
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
                <div>
                    {data.post.map(post => (
                        <Card
                            img={post.mainImg}
                            title={post.title}
                            category={post.category}
                            publish_date={post.publish_date}
                            commentCount={post.comments.lenght}
                        />
                    ))}
                </div>
            );
        }}
    </Query>
);

export default PostList;
