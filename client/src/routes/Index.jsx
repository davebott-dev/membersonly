import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import "../App.css";

function Index() {
  const [userData, setUserData] = useState([]);
  const [messageData, setMessageData] = useState([]);
  const [action, setAction] = useState("/api/delete/");
  const [setCount] = useOutletContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response2 = await fetch("/api/messages");
        const data2 = await response2.json();
        setMessageData(data2);
        console.log(data2);

        const response1 = await fetch("/api");
        const data1 = await response1.json();
        setUserData(data1);
        console.log(data1);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {userData.username ? (
        <div className="login-message">
          <div>
            <h1>Welcome {userData.username}!</h1>
            <button>
              {" "}
              <a href="/api/logout">Log-out</a>
            </button>
          </div>
          <form method="POST" action="/api/messages">
            <div>
              <input type="text" name="comment"></input>
              <button>Comment</button>
            </div>
          </form>
        </div>
      ) : (
        <h1 className="warning"> Users must be logged in to send messages</h1>
      )}
      <div className="gridCont">
        {messageData.map((message, index) => {
          const handleActionChange = () => {
            setAction("/api/delete/" + message.id);
          };

          return (
            <div key={index} className="card">
              <div>{message.message}</div>
              <div>{message.date}</div>
              <hr />
              <div>
                <div>{message.username}</div>
                <form className="delete" method="POST" action={action}>
                  <button onClick={handleActionChange}>Delete</button>
                </form>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Index;
