const { useState, useEffect } = require("react")
const { ResMenu_URL } = require("./constants")

const useResMenu = (resId) => {
    const [resInfo,setresInfo] = useState(null)

    useEffect(()=>{
        fetchMenu()
    },[])

    const fetchMenu = async ()=>{
     const data = await fetch(ResMenu_URL+resId)
     const response = await data.json()

     setresInfo(response)

    // console.log(response);
    
    }

    return resInfo
}

export default useResMenu