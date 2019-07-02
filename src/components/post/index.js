import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

// 사용자 컴포넌트
import Writer from "./Writer";
import Contents from "./Contents";
import Right from "./Right";

const GET_POST = gql`
    query GETPOST($id: String!) {
        getPost(id: $id) {
            title
            content
            comments {
                publish_date
            }
        }
    }
`;

const Post = ({
    match: {
        params: { id }
    }
}) => {
    return (
        <Query query={GET_POST} variables={{ id }}>
            {({ loading, error, data }) => {
                if (loading) return null;
                if (error) return `Error! ${error}`;

                let { comments, content, title } = data.getPost;

                return (
                    <div>
                        <Writer />
                        <Contents />
                        <Right />
                        <div>{title}</div>
                        <div>{content}</div>
                        <div>댓글</div>
                    </div>
                );
            }}
        </Query>
    );
};

export default Post;
