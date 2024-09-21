import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [backendData, setBackendData] = useState([{}]);

  const fetchData = async () => {
    const response = await fetch('/api');
    const data = await response.json();
    setBackendData(data);    
  }

  useEffect(()=> {
    fetchData();
  },[])




  return (
    <div>
      <p>Hello World {count} times</p>
      <button onClick={()=>setCount((prev)=>prev+1)}>Increment</button>
      <ul>
      {backendData.users.map((user,index)=> (
        <li key={index}>My name is {user}</li>
      ))}
      </ul>
    </div>
  )
}

export default App
