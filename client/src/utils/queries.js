import { gql } from '@apollo/client';

export const SIGNUP = gql`
  mutation signup($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        user {
        _id
      }
    }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    userLogin(email: $email, password: $password) {
      token
    }
  }
`;