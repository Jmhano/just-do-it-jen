import { gql } from "@apollo/client";

export const SIGNUP = gql`
  mutation signup($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      user {
        _id
      }
      token
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

export const QUERY_WORKOUT = gql`
  query workout($username: String) {
    workout(username: $username) {
      _id
      createdAt
      workoutName
      username
      workoutType
      calsBurned
      time
      notes


    }
  }
`;

