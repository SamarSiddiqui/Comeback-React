import { Res_Logo } from "../utils/constants";
import {  useContext, useState } from "react";
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


export const Header = ()=> {

    const onlineStatus = useOnlineStatus()
    
    const {name} = useContext(UserContext)
   
    const cartItems = useSelector((store)=>store.cart.items)
 
 

    let [btnState,setbtnState] = useState("Log In")
    const styleLink = {
    textDecoration: "none",
    color: 'red'
    }

    return (
        <div className="flex justify-between border-solid border-b border-black">
            <div className="logoContainer"> 
            <img className="logo" src={Res_Logo}/>  
            </div>
            
            <div className="nav-items">
                <ul>
                    
                    <li>
                        <Link to={"/"} style={styleLink}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"} style={styleLink}>About</Link>
                    </li>
                    <li>
                    <Link to={"/contact"} style={styleLink}>Contact</Link>
                    </li>
                    {/* <li>
                    <Link to={"/grocery"} style={styleLink}>Grocery</Link>
                    </li> */}
                    <li>
                    <Link to={"/cart"} style={styleLink} className="font-bold">Cart ({cartItems.length} Items)</Link>
                    </li>
                    
                    <li style={styleLink} className="font-bold">{name}</li>
                    <li>{onlineStatus?"🟢":"🔴"}</li>
                   <li><button className= "border border-solid border-black" onClick={()=>{
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