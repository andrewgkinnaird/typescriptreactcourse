import ReactDOM from "react-dom/client";

import UserSearch from "./refs/UserSearch";

const App = () => {
  const users = [
    {name:'Bob', age:21},
    {name:'Lisa', age:18},
    {name:'Mike', age:24}
  ]

  return (
    <div>
      <UserSearch/>
    </div>
    
  )
}

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el!);

root.render(<App></App>)