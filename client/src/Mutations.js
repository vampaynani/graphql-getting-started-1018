import gql from 'graphql-tag';

export const CREATE_STUDENT = gql`
mutation CreateStudentMutation($name: String!, 
	$email: String!, 
	$password: String!, 
	$birthDate: Date!){
    createStudent(student: {
      name: $name, email: $email, password: $password, birthDate: $birthDate
    }){
      name
      email
      birthDate
    }
  }
`

export const CREATE_USER = gql`
mutation CreateUserMutation($email: String!, $password: String!){
  signup(email: $email,password: $password)
}`;
