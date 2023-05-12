import { Component, ReactNode } from "react";

interface User {
  name:string;
  age:number;
}

interface UserSearchProps {
  users:User[];
}

interface UserSearchState {
  name:string;
  user:User | undefined;
}

export default class UserSearch extends Component<UserSearchProps> {
  state:UserSearchState = {
    name:'',
    user:undefined
  }

  render(){
   
    const {user,name} = this.state;

    return <div>
            <h1>User Search</h1>
            <input name={name} onChange={(e) => this.setState({name:e.target.value})}></input>
            <button onClick={() => {this.setState({user:this.props.users.find((user) => user.name === name)})}}></button>
            <div>{user && user.name}{user && user.age}</div>
          </div>
  }
}