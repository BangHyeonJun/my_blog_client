import React from "react";

// Apollo
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";

const GET_POST = gql`
    query GETPOST($postID: Upload!) {
        getPost(id: $postID) {
            _id
        }
    }
`;

const UpdatePost = ({ postID, userID }) => {
    const { data, error, loading } = useQuery(GET_POST, {
        variables: { postID }
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error! {error.message}</div>;
    }

    if (data.getPost.writer == userID) {
    }

    return <div>테스트</div>;
};
export default UpdatePost;
