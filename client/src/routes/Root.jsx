import {Link, Outlet} from 'react-router-dom';
import {useState} from 'react';
import {Github} from 'lucide-react'
import '../App.css'

const Root = () => {
    const [count, setCount] = useState(0);

    return(
    <>
        <nav>
        <div>
            <Link to= '/'>MembersOnly Messaging App</Link>
        </div>

        <div>
            <Link to ='Sign-up'><button>Sign up</button></Link>
            <Link to ='Log-in'><button>Log in</button></Link>
            <p>You logged in {count} times</p>
        </div>
        </nav>
       
        <Outlet context={[setCount]}/>


        <footer>
            <a href="https://github.com/davebott-dev">
                <Github className= "githubIcon"/>
            </a>
        </footer>
    </>
    )

}

export default Root;

