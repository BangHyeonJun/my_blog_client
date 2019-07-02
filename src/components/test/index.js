import React, { Component } from "react";

import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const ADD_TEST = gql`
    mutation uploadFile($file: Upload!) {
        uploadFile(file: $file)
    }
`;

/*
    https://velog.io/@jerrynim_/Graphql-%ED%8C%8C%EC%9D%BC-%EC%97%85%EB%A1%9C%EB%93%9C-tsjxekc19r
    https://github.com/benawad/graphql-yoga-upload-example/blob/master/index.js
*/
const AddTest = () => {
    let input;

    const onChange = () => {
        const singleUploadMutation = useCallback(useMutation, []);
    };

    return (
        <Mutation mutation={ADD_TEST}>
            {(insertTest, { loading, error, data }) => (
                <div>
                    <form
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
                    {error && <p>Error :( Please try again</p>}
                </div>
            )}
        </Mutation>
    );
};

export default AddTest;
