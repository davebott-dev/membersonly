import { useState, useEffect } from 'react'
import {useOutletContext} from 'react-router-dom'
import '../App.css'

function Index() {
  const [backendData, setBackendData] = useState([]);
  const [setCount] =useOutletContext();

  useEffect(()=> {
    const fetchData = async () => {
      try{
        const response = await fetch('/api', {
          credentials: 'same-origin'
        });
        const data = await response.json();
        setBackendData(data)
      } catch(error) {
        console.error('Error fetching data:', error);
      }
    }    
    fetchData();
  },[])

  return (
    <div>
      {backendData.username? (
        <div>
          Welcome {backendData.username}!
          <button> <a href="/api/logout">Log-out</a></button>
        </div>
      ): (
        <h1> Please Log-in</h1>
      )}

      <form method="POST" action="/api/user/log-in">
      <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <button onClick ={()=> setCount((prev)=> prev+1)}>Submit</button>
      </form>
    </div>
  )
}

export default Index
