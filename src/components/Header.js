import { Res_Logo } from "../utils/constants";
import {  useState } from "react";
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";


export const Header = ()=> {

    const onlineStatus = useOnlineStatus()

    let [btnState,setbtnState] = useState("Log In")
   const styleLink = {
     textDecoration: "none",
     color: 'red'
   }
    
    return (
        <div className="header">
            <div className="logoContainer"> 
            <img className="logo" src={Res_Logo}/>  
            </div>
            
            <div className="nav-items">
                <ul >
                    
                    <li>
                        <Link to={"/"} style={styleLink}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"} style={styleLink}>About</Link>
                    </li>
                    <li>
                    <Link to={"/contact"} style={styleLink}>Contact</Link>
                    </li>
                    <li>
                    <Link to={"/grocery"} style={styleLink}>Grocery</Link>
                    </li>
                    
                    <li>Cart</li>
                    <li>{onlineStatus?"🟢":"🔴"}</li>
                   <li><button onClick={()=>{
                     btnState==="Log In"
                       ? setbtnState("Log Out")
                       :setbtnState("Log In")
                     
                   }}>{btnState}</button></li>
                    

                </ul>    
            </div>
        </div>
    );
}
export default Header;