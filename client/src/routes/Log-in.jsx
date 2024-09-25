import '../App.css'

function Login() {

  return (
    <div>
 
      <h1>Log in</h1>
      <form method="POST" action="/api/user/log-in">
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <button>Submit</button>
      </form>
    </div>
  )
}

export default Login;