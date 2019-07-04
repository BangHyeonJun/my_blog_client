import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http"; // TODO : 안쓰면 지울것
import { onError } from "apollo-link-error"; // TODO : 안쓰면 지울것
import { ApolloLink } from "apollo-link"; // TODO : 안쓰면 지울것
import { createUploadLink } from "apollo-upload-client";

// const client = new ApolloClient({
//     link: ApolloLink.from([
//         onError(({ graphQLErrors, networkError }) => {
//             if (graphQLErrors)
//                 graphQLErrors.map(({ message, locations, path }) =>
//                     console.log(
//                         `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
//                     )
//                 );
//             if (networkError) console.log(`[Network error]: ${networkError}`);
//         }),
//         new HttpLink({
//             uri: "http://localhost:4000/",
//             credentials: "same-origin"
//         }),
//         createUploadLink({
//             uri: "http://localhost:4000/"
//         })
//     ]),
//     cache: new InMemoryCache()
// });

// 아오 시바 이거떄문에 이틀을 고생했네.... react-boost가 upload를 지원안하네...
const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: createUploadLink({ uri: "http://localhost:4000/" })
});

export default client;
