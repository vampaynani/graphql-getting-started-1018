import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import { CREATE_STUDENT } from '../Mutations';
import { FEED_STUDENTS } from '../Queries';

export class Students extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      birthDate: ''
    }
  }
  render(){
    const {name, email, password, birthDate} = this.state;
    return (
      <section>
        <input type="text" placeholder="Name" value={name} onChange={e => this.setState({name: e.target.value})} />
        <input type="text" placeholder="Email" value={email} onChange={e => this.setState({email: e.target.value})} />
        <input type="text" placeholder="Password" value={password} onChange={e => this.setState({password: e.target.value})} />
        <input type="text" placeholder="Birthdate" value={birthDate} onChange={e => this.setState({birthDate: e.target.value})} />
        <Mutation mutation={CREATE_STUDENT} variables={{name, email, password, birthDate}} update={(store, { data: { createStudent } }) =>{
          const currentStoreState = store.readQuery({query: FEED_STUDENTS});
          const newStoreState = [...currentStoreState.students, createStudent];
          store.writeQuery({
            query: FEED_STUDENTS,
            data: {students: newStoreState}
          })
        }}>
          {parsedLink => <button onClick={parsedLink}>Create</button>}
        </Mutation>
        <Query query={FEED_STUDENTS}>
          {({ loading, error, data, refetch })=>{
            if(loading) return <div>Loading...</div>
            if(error) return <div>{error.message}</div>
            refetch();
            return <div>
              {data.students.map(student => <div>
                <p>{student.name}</p>
                <p>{student.email}</p>
                <p>{student.birthDate}</p>
              </div>)}
            </div>
          }}
        </Query>
      </section>
    );
  }
}