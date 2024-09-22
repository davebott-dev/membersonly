import {Link, Outlet} from 'react-router-dom';
import {useState} from 'react';

const Root = () => {
    const [count, setCount] = useState(0);

    return(
    <>
        <p>Hello World {count} times</p>
        <button onClick={()=>setCount((prev)=>prev+1)}>Increment</button>
        <Link to= '/'>Home</Link>
        <Link to ='Sign-up'>Sign up</Link>
        <Outlet/>
    </>
    )

}

export default Root;

