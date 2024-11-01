import { MenuList_URL } from "../utils/constants";

const MenuList = ({data})=> {
       
    // let list = data
    // console.log(childProp);
    

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
                        <button>Add+</button>
                    </div>
                    </div>
                </div>
            ))
        }
            </div>
        </div>
    )
}

export default MenuList