import { useEffect, useState } from "react";

const useOnlineStatus = () => {
     
    const [onlineStatus,setonlineStatus] = useState(true)

    useEffect(()=>{
     
    window.addEventListener("online", ()=>{
     setonlineStatus(true)
    })
    window.addEventListener("offline", ()=>{
     setonlineStatus(false)
    })
    },[])


    return onlineStatus;
}


export default useOnlineStatus;