import '../App.css'

function SignUp() {

  return (
    <div>
 
      <h1>Sign up</h1>
      <form method="POST" action="/api">
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

export default SignUp