import {Link, Outlet} from 'react-router-dom';
import {useState} from 'react';
import {Github} from 'lucide-react'
import '../App.css'

const Root = () => {
    const [userCount, setUserCount] = useState(0);
    const [totalCount, setTotalCount] = useState(0);




    return(
    <div className="container">
        <div>
            <nav>
            <div>
                <Link to= '/'>MembersOnly Messaging App</Link>
            </div>
            <div>
                <Link to ='Sign-up'><button>Sign up</button></Link>
                <Link to ='Log-in'><button>Log in</button></Link>
                <p>You commented {userCount}/{totalCount} times</p>
            </div>
            </nav>
            <Outlet context={[setUserCount,setTotalCount]}/>
        </div>


        <footer>
            <div>Made with ❤️ by David Bottenberg </div>
            <a href="https://github.com/davebott-dev">
                <Github className= "githubIcon"/>
            </a>
        </footer>
    </div>
    )

}

export default Root;

