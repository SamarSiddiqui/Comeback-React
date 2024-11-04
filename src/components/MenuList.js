import { useDispatch } from "react-redux";
import { MenuList_URL } from "../utils/constants";
import {addItems} from "../utils/cartSlice";



const MenuList = ({data})=> {
    
    const dispatch = useDispatch()
     
    const handleAddItem = (item)=>{
        //dispatchAnAction
        dispatch(addItems(item))
    }
    
    
    return (
        <div className="menuList">
            <div>
                {
            data.map((item)=>(
            <div key={item.card.info.id}>
                <div className="mainItemBox">
                    <div className="itemDescription" >

                        <h2>{item.card.info.name}</h2> 
                        <span>{item.card.info.itemAttribute.vegClassifier === "VEG"? "🟢":"🔴"}</span>
                        
                        <span> ₹ {item.card.info.defaultPrice/100 || item.card.info.price/100}</span> 
                        <p>{item.card.info.description}</p>
            </div>

            <div className="itemsPhoto">
                <img src={MenuList_URL + item.card.info.imageId } alt={item.card.info.name}/>
                 
            <button onClick={()=>(handleAddItem(item))}  
                >Add+</button>
            
            </div>
        </div>
    </div>
            ))
        }
            </div>
        </div>
    )
}

export default MenuList;