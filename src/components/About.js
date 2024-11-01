import React from "react";
import User from "./User";
import UserContext from "../utils/UserContext";
class About extends React.Component{

    constructor(){
        super()
        // console.log("Parent Constructore is Called");

    }
    componentDidMount() {
        // console.log("Parent Component did Mount Called");
    }
    render() {


        return (
        
        <div className="aboutPage">   
            
         <h1>Hello From About.</h1>
             <UserContext.Consumer>
                {(data)=><h1 className="font-bold">{data.name}</h1>}
             </UserContext.Consumer>

          <User name={"Samar Siddiqui(functional)"}/>
         </div>
    )}
}
 


export default About;

 