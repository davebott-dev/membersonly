import '../App.css'

function SignUp() {

  return (
    <div>
 
      <h1>sign up</h1>
      <form method="POST" action="/api">
      <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <button>Submit</button>
      </form>
    </div>
  )
}

export default SignUp