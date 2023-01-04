const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        password: String
    }

    type Algo {
        _id: ID
        compound: String
        concentration: Int
        volume: Int
    }

    type Auth {
        token: ID!
        user: User
    }
    
    type Query {
        user(userId: ID!): User
        algos: [Algo]!
        instance(instanceId: ID!): Algo
    }

    type Mutation {
        login(username: String!, password: String!): Auth
        createUser(username: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;