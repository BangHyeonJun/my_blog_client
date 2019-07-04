import React from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";
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
            }
            publish_date
            content
            comments {
                publish_date
            }
        }
    }
`;

const PostList = () => {
    const { data, error, loading } = useQuery(GET_POST);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error! {error.message}</div>;
    }

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
};

export default PostList;
