import React, { Component } from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";

const IS_LOGIN = gql`
    query {
        isLogin {
            _id
        }
    }
`;

const Check = () => {
    const { data, error, loading } = useQuery(IS_LOGIN);

    console.log(data);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error! {error.message}</div>;
    }

    return <div className="post-container" />;
};

export default Check;
