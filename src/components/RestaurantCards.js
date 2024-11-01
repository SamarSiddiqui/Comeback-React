import { ResIMG_URL } from "../utils/constants"

import { resApi } from "../utils/mock"


export const resList = resApi.data.success.cards[3].gridWidget.gridElements.infoWithStyle.restaurants



   
const RestaurantCard = (props)=> {
    const {resList} = props

    
    return (
        <div className="res-cards">
            <img className="res-logo" alt="resPhoto" src={ResIMG_URL + resList?.info?.cloudinaryImageId}/>
           
            <h4 className="font-medium">{resList?.info?.name}</h4>
            <h4>{resList?.info?.cuisines.slice(0,2).join(", ")}</h4>
            <h4 >{resList?.info?.avgRating}</h4>
            <h4 >{resList?.info?.locality}</h4>
            
        </div>
    )
}

export const IsRestaurantOpen = (RestaurantCard)=> {
 return (props)=> {
    return (
        <div>
            <label className="m1">Opened</label>
            <RestaurantCard {...props}/>
        </div>
    )
 }
}

export default RestaurantCard;