import gql from 'graphql-tag';

export const FEED_STUDENTS = gql`{
  students{
    name
    email
    birthDate
  }
}`;

export const PERSON = gql`query FetchPerson($personId: ID!){
  person(id: $personId){
    name
    height
    mass
  }
}`;

export const INFO = gql`{
  info
}`;
