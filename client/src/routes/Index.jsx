import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import "../App.css";

//make the footer stick to bottom of the page
function Index() {
  const [userData, setUserData] = useState([]);
  const [messageData, setMessageData] = useState([]);
  const [action, setAction] = useState("/api/delete/");
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0)
  const [setCount] = useOutletContext();
  const itemsPerPage =10;

  useEffect(() => {
    const endOffset = itemOffset+itemsPerPage;
    const fetchData = async () => {
      try {
        const response2 = await fetch("/api/messages");
        const data2 = await response2.json();
        setMessageData(data2);
        console.log(data2);

        const response1 = await fetch("/api");
        const data1 = await response1.json();
        setUserData(data1);
        setPageCount(pageCount);
        console.log(data1);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [itemOffset,itemsPerPage]);

  const handlePageClick = (e) => {
    const newOffset = (e.selected*itemsPerPage) % messageData.length;
    setItemOffset(newOffset);
  }

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
              <input type="text" name="comment" placeholder="type here..."></input>
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
                {userData.username == message.username ? (
                  <form className="delete" method="POST" action={action}>
                  <button onClick={handleActionChange}>Delete</button>
                </form>
                ) : ( null)}
                
              </div>
            </div>
          );
        })}
      </div>
      <ReactPaginate
        previousLabel={"< Previous"}
        nextLabel = {"Next >"}
        breakLabel = {"..."}
        breakClassName = {"break-me"}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        onPageChange ={handlePageClick}
        renderOnZeroPageCount = {null}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default Index;
