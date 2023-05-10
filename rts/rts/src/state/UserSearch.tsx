import { stringify } from "querystring";
import { useState } from "react";
import { blob } from "stream/consumers";

const UserSearch:React.FC = () => {
  const users = [
    {name:'Bob', age:21},
    {name:'Lisa', age:18},
    {name:'Mike', age:24}
  ]

  const [name,setName] = useState('');
  const [user,setUser] = useState<{name:string; age:number} | undefined>()

  const searchButtonClick = () => {
    const found = users.find((user) => user.name === name);
    setUser(found);
  }

  return (
          <div>
              <h1>User Search</h1>
              <input name={name} onChange={(e) => setName(e.target.value)}></input>
              <button onClick={searchButtonClick}></button>
              <div>{user && user.name} {user && user.age}</div>
          </div>
        )
};

export default UserSearch;