import gql from 'graphql-tag';

export const FEED_STUDENTS = gql`{
  students{
    name
    email
    birthDate
  }
}`;

export const PERSON = gql`{
  person(id: 1){
    name
    height
    mass
  }
}`;

export const INFO = gql`{
  info
}`;
