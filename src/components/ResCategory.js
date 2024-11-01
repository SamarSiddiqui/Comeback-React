import MenuList from "./MenuList";



const ResCategory = ({resDetail,showItem,setshowIndex})=> {
    let {title,itemCards} = resDetail

  
  
    const handleClick = ()=> {
     setshowIndex()
    }

    return (
        <div  className="accordionMain">
            <div className="accordion" onClick={handleClick}>
                <h2>{title} ({itemCards.length})</h2>
                <span>🔽</span>
            </div>
            <></>
           { showItem && <MenuList data={itemCards}/>}
        </div>
    )
}

export default ResCategory;