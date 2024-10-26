import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { ResIMG_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { ResMenu_URL } from "../utils/constants";

const ResMenu = ()=> {
   
    const [resInfo,setresInfo] = useState(null)

    const {resId} = useParams()
    // console.log(resId);
   console.log(resId);
   
    useEffect(()=>{
    fetchMenu()
    },[])
//  console.log(resId);
 
 let slash = "/"
  const fetchMenu =  async ()=> {
    const data = await fetch(ResMenu_URL+resId)
    const response = await data.json()     
    setresInfo(response)

    // console.log(response);
    // setresInfo(response?.data?.cards[2]?.card?.card?.info)
    // console.log(resInfo); 
    
  }
  
  if(resInfo===null) return <Shimmer />

  const restaurantInfo = resInfo?.data?.cards?.[2]?.card?.card?.info;
  const {name,cuisines,areaName,costForTwoMessage,cloudinaryImageId} = restaurantInfo || {}
 
  const itemCards  = resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards


  const recommendedList = itemCards[2]?.card?.card
  console.log(recommendedList);
  
   
    return resInfo===null ? (
        <Shimmer/>
    ):(
        <div className="menuPage">
            <img className="menuImage" src= {ResIMG_URL+cloudinaryImageId}/>
                <h2>{name}</h2>
                <h2>Menu List</h2>
                <ul className="resMenuList"> 
            {
                recommendedList?.itemCards.map((item)=>(

                                       
                <li key={item?.card?.info?.id}>
                    {item?.card?.info?.name} - Rs 
                     {item?.card?.info?.defaultPrice/100 || item?.card?.info?.price/100}
                </li>
                    
                ))
            }
                </ul>
        </div>
    )
}

export default ResMenu;