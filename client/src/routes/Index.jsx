import { useState, useEffect } from 'react'
import '../App.css'

function Index() {
  const [userData, setUserData] = useState([]);
  const [messageData, setMessageData] = useState([]);
  


  useEffect(()=> {
    const fetchData = async () => {
      try{
        const response2 = await fetch('/api/messages');
        const data2 = await response2.json();
        setMessageData(data2);
        console.log(data2)

        const response1 = await fetch('/api');
        const data1 = await response1.json();
        setUserData(data1);
        console.log(data1)

      } catch(error) {
        console.error('Error fetching data:', error);
      }
    }      
    fetchData();
   
  },[])

  return (
    <div>
      {userData.username? (
        <div>
          Welcome {userData.username}!
          <button> <a href="/api/logout">Log-out</a></button>
          <form method="POST" action = "/api/messages">
            <input type="text" name="comment"></input>
            <button>Comment</button>
          </form>
        </div>
      ): (
        <h1> please log-in to send messages</h1>
      )}
        <div>
          {messageData.map((message,index)=> (
            <div key = {index}>
              <div>{message.message}</div>
              <div>{message.date}</div>
              <div>{message.username}</div>
            </div>
          ))}
        </div>


    </div>
  )
}

export default Index
