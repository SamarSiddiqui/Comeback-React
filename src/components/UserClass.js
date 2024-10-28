import React from "react"
class UserClass extends React.Component {
  
    
    constructor(props){
        super(props)
        
        this.state = {
            count: 0,
            userInfo: {
                name: "Default Value"
            }
        }

    
        console.log("Child Constructore is Called");
    }
    
    componentDidMount() {
      this.timer =   setInterval(()=>{

        console.log("Hello");

       },1000)
        console.log("Child Component did Mount Called");
        
    }
    componentWillUnmount () {
        clearInterval(this.timer)
        console.log("Child Component did unMount Called");
    }
    componentDidUpdate() {
        console.log("Child Component did Update Called");
    }
    
    render(){
        console.log(" Child Rendered is Called");

        
        let {count} = this.state
        let {login,avatar_url} = this.state.userInfo
        
    return (
            <div className="userCard">
                <h1>{count}</h1>

                <button onClick={()=>{
                    this.setState ({
                        count: count+1
                    })
                }}>Add</button>
            <h2>Name:{login}</h2>
            <img src={avatar_url}/>
            <h2>Location: Lucknow</h2>
            <h3>Contact:@samsid__</h3>
    </div>
        )
    }
}

export default UserClass; 