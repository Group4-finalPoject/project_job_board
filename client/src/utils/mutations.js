import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
  `;

export const ADD_USER = gql`
mutation AddUser( $email: String!, $password: String!) {
    addUser( email: $email, password: $password) {
      token
    }
  }
  
`;  