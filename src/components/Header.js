import { Res_Logo } from "../utils/constants";
import { useState } from "react";
export const Header = ()=> {

    let [btnState,setbtnState] = useState("Log In")
    
    console.log(btnState);
    
    return (
        <div className="header">
            <div className="logoContainer"> 
            <img className="logo" src={Res_Logo}/>  
            </div>
            
            <div className="nav-items">
                <ul >
                    <li>Home</li>
                    <li>About</li>
                    <li>Cotacts</li>
                    <li>Profile</li>
                    <li>Know More</li>
                    <li>Cart</li>
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