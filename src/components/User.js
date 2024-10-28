import { useEffect, useState } from "react";

const User = (props)=> {
    const [initial,setInitial] = useState(0)
    
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("Hello useEffectTimer");
            
        },1000)
        
        console.log(" useEffect");
        return()=>{
            clearInterval(timer)
            console.log(" useEffect Return");
        }
    },[])
    return (
        <div className="userCard">
             <h1>Count = {initial}</h1>
             <button onClick={()=>{
                setInitial(initial+1)
             }}>Add</button>
            
            <h2>Name: {props.name}</h2>
            <h2>Location: Lucknow</h2>
            <h3>Contact:@samsid__</h3>
        </div>
    )
}

export default User;