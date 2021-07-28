import React,{createContext,Provider, useEffect, useState} from 'react'
import './App.css';
import Number from './Number';
export const NumberContext = createContext()
function App() {

  const [users,setUsers] = useState('')

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])
  
  return (
    <NumberContext.Provider value={users}>
    <div className="App">
      <Number  />
    </div>
    </NumberContext.Provider>
  );
}

export default App;
