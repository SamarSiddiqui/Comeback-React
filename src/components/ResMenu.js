import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useResMenu from "../utils/useResMenu";
import { ResIMG_URL } from "../utils/constants";

const ResMenu = ()=> {
   

   const {resId} = useParams()
   const resInfo = useResMenu(resId)
  
  if(resInfo===null) return <Shimmer />

  const restaurantInfo = resInfo?.data?.cards?.[2]?.card?.card?.info;
  const {name,cloudinaryImageId} = restaurantInfo 
 
  const itemCards  = resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards


  const recommendedList = itemCards[2]?.card?.card
  
   
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