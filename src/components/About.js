import React from "react";
import User from "./User";
import UserClass from "./UserClass";



class About extends React.Component{

    constructor(){
        super()
        console.log("Parent Constructore is Called");

    }
    componentDidMount() {

        console.log("Parent Component did Mount Called");
        
    }
    render() {

        console.log("Parent Render is Called");

        return (<div className="aboutPage">
         <h1>Hello From About.</h1>
          <User name={"Samar Siddiqui(functional)"}/>
          {/* <UserClass/> */}
         </div>
    )}
}



export default About;

 