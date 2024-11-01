import { useState } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useResMenu from "../utils/useResMenu";
import ResCategory from "./ResCategory";

const ResMenu = ()=> {
   
  // let [showItem,setshowItem]= useState(false)

  let [showIndex,setshowIndex] = useState(null)

   const {resId} = useParams()  
   const resInfo = useResMenu(resId)
   
  if(resInfo===null) return <Shimmer />

  const restaurantInfo = resInfo?.data?.cards?.[2]?.card?.card?.info;
 
  const itemCards  = resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards

   const filteredCards = itemCards.filter((category)=>category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
   
    return resInfo===null ? (
        <Shimmer/>
    ):(
        <div className="menuPage">
            <div className="hotelBox">
           <h1>{restaurantInfo?.name}</h1>
           <div className="descriptionBox">             
             <h2>⭐ {restaurantInfo?.avgRating}</h2>
             <h2>{restaurantInfo?.totalRatingsString}</h2>
             <h2>▪️ {restaurantInfo?.costForTwoMessage}</h2>
           </div>
             <h2>Outlet- {restaurantInfo?.areaName}</h2>
             <h2>{restaurantInfo?.sla?.slaString.toLowerCase()}</h2>
            </div>
            
             {
              filteredCards.map((heading,index)=>(
                <ResCategory key={heading.card.card.title} resDetail={heading.card.card} 
                showItem={index===showIndex ? true:false}
                setshowIndex = {()=>setshowIndex(index)}
                
                />
              ))
             }    
        </div>
    )
}

export default ResMenu;