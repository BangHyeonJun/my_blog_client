import React, { Component, Fragment, useState } from "react";
import { useMutation } from "react-apollo-hooks";

// Apollo
import gql from "graphql-tag";

// 컴포넌트
import Contents from "./Contents";
import Title from "./Title";

const INSERT_POST = gql`
    mutation InsertPost($title: String!, $content: String!) {
        insertPost(title: $title, content: $content)
    }
`;

const Index = () => {
    const { data, error, loading } = useMutation(INSERT_POST);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [html, setHtml] = useState("");
    const [text, setText] = useState("");

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error! {error.message}</div>;
    }

    // 상태 변화를 감지하면 적용시켜줍니다.
    const handleChange = (name, value) => {
        if (name === "title") {
            setTitle(value);
        } else if (name === "content") {
            setContent(value);
        } else if (name === "html") {
            setHtml(value);
        } else if (name === "text") {
            setText(value);
        } else {
            alert("알수없는 타입이 들어왔습니다.");
        }
    };

    return (
        <Fragment>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    console.log(title);
                    console.log(content);
                    setTitle("");
                    setContent("");
                    setHtml("");
                    setText("");
                }}
            >
                <Title userTitle={title} onChange={handleChange} />
                <Contents userCotent={content} onChange={handleChange} />
                <button type="submit">저장</button>
            </form>
        </Fragment>
    );
};

{
    /* <form
    onSubmit={e => {
        e.preventDefault();
        insertTest({ variables: { text: input.value } });
        input.value = "";
    }}
>
    <input
        ref={node => {
            input = node;
        }}
    />
    <button type="submit">Add Todo</button>
</form>
{loading && <p>Loading...</p>}
{error && <p>Error :( Please try again</p>}  */
}

// class index extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { userTitle: "타이틀 합니다.", userCotents: "" };
//     }

//     render() {
//         const { userTitle, userCotents } = this.state;

//         return <Fragment />;
//     }
// }

export default Index;
