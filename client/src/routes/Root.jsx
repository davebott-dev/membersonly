import {Link, Outlet} from 'react-router-dom';
import {useState} from 'react';
import '../App.css'

const Root = () => {
    const [count, setCount] = useState(0);

    return(
    <>
        <nav>
        <div>
            <Link to= '/'><strong>MembersOnly Messaging App</strong></Link>
        </div>

        <div>
            <Link to ='Sign-up'><button>Sign up</button></Link>
            <p>You logged in {count} times</p>
        </div>
        </nav>
       
        <Outlet context={[setCount]}/>
    </>
    )

}

export default Root;

