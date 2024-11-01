import { useEffect,useState } from "react"
import { MainPage_URL } from "./constants"
const useResCard = ()=> {
    const [listofRes,setListofRes] = useState([])
    const [filteredRestro,setfilteredRestro] = useState([])

    useEffect(()=>{
        fetchData()
       },[])
        
       const fetchData = async () => {
       
       const data = await fetch(MainPage_URL)
   
       const json = await data.json()   
      //  console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
         
       setListofRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])
       setfilteredRestro(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])
   
}
  return [listofRes,filteredRestro,setfilteredRestro,setListofRes]
}

export default useResCard;