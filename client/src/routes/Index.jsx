import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import "../App.css";

function Index() {
  const [userData, setUserData] = useState([]);
  const [messageData, setMessageData] = useState([]);
  const [action, setAction] = useState("/api/delete/");
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0)
  const [isLoading, setIsLoading]= useState(false);
  const [setUserCount,setTotalCount] = useOutletContext();
  const itemsPerPage =5;
  

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response2 = await fetch("/api/messages");
        const data2 = await response2.json();
        console.log(data2);
        setTotalPages(Math.ceil(data2.length/itemsPerPage));

        const startIndex = currentPage*itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const subset = data2.slice(startIndex,endIndex);
        setMessageData(subset);

        const response1 = await fetch("/api");
        const data1 = await response1.json();
        setUserData(data1);
        console.log(data1);

        let filter = data2.filter((element)=>element.username==data1.username);
        setUserCount(filter.length)
        setTotalCount(data2.length)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
      fetchData();
      
      setIsLoading(false);
  },  [currentPage]);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
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
      {isLoading? (<p>loading...please wait</p>):(null)}

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
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange ={handlePageClick}
        forcePage={currentPage}
        renderOnZeroPageCount = {null}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default Index;
