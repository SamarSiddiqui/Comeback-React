import RestaurantCard from "./RestaurantCards";
// import { resList } from "./RestaurantCards";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = ()=> {

    const [listofRes,setListofRes] = useState([])
    const [filteredRestro,setfilteredRestro] = useState([])
   
   
    const [searchText,setSearchText] = useState("")
    
    useEffect(()=>{
     fetchData()
    },[])
     
    const fetchData = async () => {
    
    const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=26.8541536&lng=80.94478269999999")

    const json = await data.json()     
    setListofRes(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
    setfilteredRestro(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
    console.log(json);
    
   
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
                <RestaurantCard resList={restaurant} key={restaurant?.info?.id}/>  
            )) 
           }
      
       
           
        </div>
        </div>
    )
}


export default Body;