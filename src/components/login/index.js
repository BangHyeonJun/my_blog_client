import React, { useState } from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";

// 해당 포스트를 가져옵니다.
const CHECK_LOGIN = gql`
    query($id: String!, $password: String!) {
        checkMember(email: $id, password: $password) {
            title
            content
        }
    }
`;

const Index = () => {
    const [id, setID] = useState("");
    const [password, setPASSWORD] = useState("");

    const handleChange = e => {
        switch (e.target.name) {
            case "id":
                setID(e.target.value);
                break;
            case "password":
                setPASSWORD(e.target.value);
                break;
            default:
                alert("알수없는 타입이 변경되었습니다.");
                break;
        }
    };

    const handleButton = async event => {
        const { data, error, loading } = useQuery(CHECK_LOGIN, {
            variables: { email: id, password }
        });

        if (loading) {
            alert("loading");
            return <div>Loading...</div>;
        }

        if (error) {
            alert("error");
            return <div>Error! {error.message}</div>;
        }
        alert("data");

        console.log(data);
    };

    return (
        <div>
            <input
                type="text"
                name="id"
                onChange={handleChange}
                placeholder="아이디"
            />
            <input
                type="text"
                name="password"
                onChange={handleChange}
                placeholder="비밀번호"
            />
            <input type="button" value="로그인" onClick={handleButton} />
        </div>
    );
};

export default Index;
