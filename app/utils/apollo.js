import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: process.env.GRAPHQL_ENDPOINT,
});

export default client;
