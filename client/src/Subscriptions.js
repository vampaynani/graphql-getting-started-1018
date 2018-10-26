import gql from 'graphql-tag';

export const NEW_STUDENT_SUBSCRIPTION = gql`
  subscription {
    newStudent {
      name
      email
      birthDate
    }
  }`;