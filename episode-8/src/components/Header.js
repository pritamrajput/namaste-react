import { LOGO_URL } from "./utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Header = () => {
    let btnName = "Login";
    const [btnNameReact, setBtnNameReact] = useState("Login");

    // 1. if no dependency array => useEffect is called on every render.
    // 2. if dependency array is empty [] => useEffect is called on initial render(just once).
    // 3. if dependency array is [btnNameReact] => useEffect is called everytime btnNameReact is updated.

    useEffect(()=>{
       console.log("useEffect called");
       
    },[]);

    console.log("Header");    
    return (

        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>

            <div className="nav-items">
                <ul>
                     <li>
                        <Link to="/">Home</Link>
                     </li>
                     <li> 
                        <Link to="/about">About us</Link> 
                     </li>
                     <li>
                       <Link to="/contact">Contact us</Link>
                     </li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                        btnNameReact == "Login" ? 
                        setBtnNameReact("Logout") : 
                        setBtnNameReact("Login");
                        
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    );
}

export default Header;