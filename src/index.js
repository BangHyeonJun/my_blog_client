import React from "react";
import ReactDOM from "react-dom";
import App from "./components";
import client from "./apolloClient";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import "./index.scss";

ReactDOM.render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </BrowserRouter>,
    document.getElementById("root")
);
