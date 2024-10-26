import RestaurantCard from "./RestaurantCards";
// import { resList } from "./RestaurantCards";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { MainPage_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = ()=> {

    const [listofRes,setListofRes] = useState([])
    const [filteredRestro,setfilteredRestro] = useState([])
   
   
    const [searchText,setSearchText] = useState("")
    
    useEffect(()=>{
     fetchData()
    },[])
     
    const fetchData = async () => {
    
    const data = await fetch(MainPage_URL)

    const json = await data.json()     
    setListofRes(json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
    setfilteredRestro(json?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)

    // console.log(json);
    
   
}

    
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
                // filter the restaurant based on the keywords and update the UI
                // keywords will be getting from SearchText
    }}>Search</button>
             </div>
            <button className="filterBtn" 
            onClick={()=>{
            let filteResList = listofRes.filter((restarun)=>
                restarun.info.avgRating>4.6
            )
            setListofRes(filteResList)

            
            }}
            > Top Rated Restaurant</button>
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