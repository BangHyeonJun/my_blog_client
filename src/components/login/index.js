import React, { useState } from "react";
import gql from "graphql-tag";
import { useQuery, useMutation } from "react-apollo-hooks";

const CHECK_LOGIN = gql`
    mutation($email: String!, $password: String!) {
        checkMember(email: $email, password: $password) {
            userid
        }
    }
`;

const Index = () => {
    let email = "";
    let password = "";

    const CHECKLOGINQUERY = useMutation(CHECK_LOGIN);
    const handleChange = e => {
        switch (e.target.name) {
            case "id":
                email = e.target.value;
                break;
            case "password":
                password = e.target.value;
                break;
            default:
                alert("알수없는 타입이 변경되었습니다.");
                break;
        }
    };

    const handleClick = async e => {
        const {
            data: { checkMember: result }
        } = await CHECKLOGINQUERY({
            variables: { email, password }
        });

        if (result === null) {
            alert("아이디 또는 비밀번호가 일치하지 않습니다.");
        } else {
            alert("로그인 되었습니다.");
        }

        console.log(result);
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
            <button onClick={handleClick}>tset</button>
        </div>
    );
};

export default Index;
