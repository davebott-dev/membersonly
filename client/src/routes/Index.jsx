import { useState, useEffect } from 'react'
import '../App.css'

function Index() {
  const [backendData, setBackendData] = useState([]);

  useEffect(()=> {
    const fetchData = async () => {
      try{
        const response = await fetch('/api');
        const data = await response.json();
        console.log(data)
        setBackendData(data)
      } catch(error) {
        console.error('Error fetching data:', error);
      }
    }    
    fetchData();
  },[])

  return (
    <div>
      {backendData? (
        <div>
          {backendData.map((data)=>(
            <p key={data.id}>{data.username}: {data.password}</p>
          ))}
        </div>
      ): (
        <p>Loading...</p>
      )}
      <h1>Log-in</h1>
      <form method="POST" action="http://localhost:8080/log-in">
      <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <button>Submit</button>
      </form>
    </div>
  )
}

export default Index
