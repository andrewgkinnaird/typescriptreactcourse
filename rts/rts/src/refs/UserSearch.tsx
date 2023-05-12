
import { useState,useRef, useEffect } from "react";


const UserSearch:React.FC = () => {
  const users = [
    {name:'Bob', age:21},
    {name:'Lisa', age:18},
    {name:'Mike', age:24}
  ]

  const [name,setName] = useState('');
  const [user,setUser] = useState<{name:string; age:number} | undefined>()
  const inputRef = useRef<HTMLInputElement | null>(null);
  const searchButtonClick = () => {
    const found = users.find((user) => user.name === name);
    setUser(found);
  }

  useEffect(() => {
    if(!inputRef.current)
      return;
      alert(inputRef.current.focus)
    inputRef.current.focus();
  },[user]);

  return (
          <div>
              <h1>User Search</h1>
              <input ref={inputRef} name={name} onChange={(e) => setName(e.target.value)}></input>
              <button onClick={searchButtonClick}></button>
              <div>{user && user.name} {user && user.age}</div>
          </div>
        )
};

export default UserSearch;