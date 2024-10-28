import RestaurantCard from "./RestaurantCards";
import { useState} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useResCard from "../utils/useResCard";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = ()=> {
    
    const [listofRes,filteredRestro,setfilteredRestro,setListofRes] = useResCard()
    const [searchText,setSearchText] = useState("")
    
    
    const onlineStatus = useOnlineStatus()
    
    if(onlineStatus === false){return   <h1>Oops!Check your Internet Connection..</h1>}
    
    
    return listofRes?.length===0 ?  <Shimmer /> :(
        <div className="body">
        <div className="filter">
            <div className="search">
               <input type="text" className="search-box" value={searchText} onChange={(e)=> {
                    setSearchText(e.target.value)
               }}/> 

    <button onClick={()=> {
    const filteredRestro = listofRes.filter((restro)=>(
    restro.info.name.toLowerCase().includes(searchText.toLowerCase())
                
    ))
    setfilteredRestro(filteredRestro)
                
    }}>Search</button>
             </div>
             
     <button className="filterBtn" 
            onClick={()=>{
            let filteResList = listofRes.filter((restarun)=>
                restarun.info.avgRating>4.4)    

           console.log(filteResList);
            setfilteredRestro(filteResList)

            }}
            > Top Rated Restaurant
            
            </button>

            </div>
        
        <div className="resContainer">
           { 
            filteredRestro?.map((restaurant)=> (
               
                <Link to={"/restaurants/"+restaurant.info.id} key={restaurant?.info?.id}>
                <RestaurantCard resList={restaurant}/>  
                </Link>
                
            )) 
           }
      
       
           
        </div>
        </div>
    )
}


export default Body;