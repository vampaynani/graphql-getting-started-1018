import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { PERSON } from '../Queries';

export class Person extends Component{
  constructor(props){
    super(props);
    this.state = {
      personId: 1
    }
  }
  render(){
    const { personId } = this.state;
    return (
      <section>
      <input type="text" value={personId} onChange={e => this.setState({personId: e.target.value})}/>
        <Query query={PERSON} variables={{personId}}>
          {({ loading, error, data })=>{
            if(loading) return <div>Loading...</div>
            if(error) return <div>Error {error.message}</div>
            return <div>
              <p>{data.person.name}</p>
              <p>{data.person.height}</p>
              <p>{data.person.mass}</p>
            </div>
          }}
        </Query>
      </section>
    );
  }
}