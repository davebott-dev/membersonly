import {useState, useRef} from 'react'
import '../App.css'

function SignUp() {
  const [type,setType] =useState('submit');
  const passwordRef = useRef();
  const checkPasswordRef = useRef();

  const checkPassword = () => {
    if(passwordRef.current.value == checkPasswordRef.current.value ) {
      setType("submit" );
    } else {
      setType("button");
      alert('the passwords do not match!');
      passwordRef.current.value ="";
      checkPasswordRef.current.value ="";
    }   
  }


  return (
    <div>
 
      <h1>Sign up</h1>
      <form method="POST" action="/api">
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" ref={passwordRef} required />
          </div>

          <div>
            <label htmlFor="password">Re-enter Password:</label>
            <input type="password" id="match" name="match" ref={checkPasswordRef} required />
          </div>
          <button type={type} onClick ={checkPassword}>Submit</button>
      </form>
    </div>
  )
}

export default SignUp