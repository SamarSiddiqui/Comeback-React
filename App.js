import React from "react"
import ReactDOM from "react-dom/client"

const jsxHeading =  <h1 className="heading">Hello From Jsx.🚀💕</h1>

let Footer =  () =>{
    return  <h3>Hello From Footer.</h3>
}

let Heading = ()=>(
        <div id="parent">
            <h1>Hello From Functional Component. </h1>
            {Footer()}
            {console.log(3+3)
            }
            <Footer />
        </div> 
   )
    

  
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Heading />)
