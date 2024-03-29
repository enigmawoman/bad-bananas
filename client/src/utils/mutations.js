import { gql } from '@apollo/client';

// defining the frontend gql mutations for data requests
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_MOVIE = gql`
  mutation saveMovie($movieData: MovieInput!) {
    saveMovie(movieData: $movieData) {
      _id
      username
      email
      savedMovies {
        movieId
        rating
        voteCount
        description
        title
        image
        link
        providers
      }
    }
  }
`;

export const REMOVE_MOVIE = gql`
  mutation removeMovie($movieId: ID!) {
    removeMovie(movieId: $movieId) {
      _id
      username
      email
      savedMovies {
        rating
        voteCount
        description
        title
        movieId
        image
        link
        providers
      }
    }
  }
`;
