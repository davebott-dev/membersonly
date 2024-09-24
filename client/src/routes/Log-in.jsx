import '../App.css'
import {useOutletContext} from 'react-router-dom'


function Login() {

const [setCount] = useOutletContext();

    
  return (
    <div>
 
      <h1>Log in</h1>
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

export default Login;