import { useState } from "react";

const GuestList:React.FC = () => {
  const [name,setName] = useState('hi');
  const [guests,setGuests] = useState<string[]>([]);

  const onAddBtnClick = () => {
    setName('');
    setGuests([...guests,name]);
  }

  return (<div>
            <h3>Guest List</h3>
            <ul>
              {guests.map(guest => <li key={guest}>{guest}</li>)}
            </ul>
            <input value={name} onChange={(e) => setName(e.target.value)}></input>
            <button onClick={onAddBtnClick}>Add Guest</button>
          </div>
          )
}

export default GuestList;