import { gql } from '@apollo/client';

export const QUERY_SINGLE_USER = gql`
    query findOneUser($userId: ID!) {
        user(userId: $userId) {
            username
        }
    }
`;