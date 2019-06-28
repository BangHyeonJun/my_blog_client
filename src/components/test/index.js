import React, { Component } from "react";

import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const ADD_TEST = gql`
    mutation InsertTest($text: String) {
        insertTest(text: $text)
    }
`;

const AddTest = () => {
    let input;

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
