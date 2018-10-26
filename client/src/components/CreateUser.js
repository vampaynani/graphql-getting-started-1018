import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { CREATE_USER } from '../Mutations';

export class CreateUser extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }
  render(){
    const {email, password} = this.state;
    return (
      <section>
        <input type="text" placeholder="Email" value={email} onChange={e => this.setState({email: e.target.value})} />
        <input type="text" placeholder="Password" value={password} onChange={e => this.setState({password: e.target.value})} />
        <Mutation mutation={CREATE_USER} variables={{email, password}} update={(store, { data: { signup } }) =>{
          console.log('Access Token:', signup);
        }}>
          {parsedLink => <button onClick={parsedLink}>Create</button>}
        </Mutation>
      </section>
    )
  }
}