import RestaurantCard, {IsRestaurantOpen} from "./RestaurantCards";
import { useContext, useState} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useResCard from "../utils/useResCard";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = ()=> {
    
    const {setuserInfo} = useContext(UserContext)
    // console.log(data);
    
    const [listofRes,filteredRestro,setfilteredRestro,setListofRes] = useResCard()
    const [searchText,setSearchText] = useState("")    
    const onlineStatus = useOnlineStatus()

    const OpenedRestro = IsRestaurantOpen(RestaurantCard)
    
    if(onlineStatus === false){ return   <h1>Oops!Check your Internet Connection..</h1>}
    
    
    return listofRes?.length===0 ?  <Shimmer /> :(
        <div className="body">
        <div className="filter">
            <div className="search ">
               <input type="text" className="search-box border border-solid border-black p-1" value={searchText} onChange={(e)=> {
                    setSearchText(e.target.value)
               }}/> 
               <input type="text" className="search-box border border-solid border-black p-1" onChange={(e)=>{
                setuserInfo(e.target.value)
               }}/>

    <button className="bg-green-300 rounded-lg  " onClick={()=> {
    const filteredRestro = listofRes.filter((restro)=>(
    restro.info.name.toLowerCase().includes(searchText.toLowerCase())
                
    ))
    setfilteredRestro(filteredRestro)
                
    }}>Search</button>
             </div>
             
     <button className=" border border-solid border-black bg-pink-500 rounded-lg px-3 mx-6" 
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
               
               {
                restaurant.info.isOpen 
                ?<OpenedRestro resList={restaurant}/>
                :<RestaurantCard resList={restaurant}/>
               }
               

                </Link>
                
            )) 
           }
      
       
           
        </div>
        </div>
    )
}



export default Body;