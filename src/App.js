import React, { lazy, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom"
import Header from "./components/Header"
import Body from "./components/Body"
import Contact from "./components/Contact"
import Error from "./components/Error"
import { lazy,Suspense } from "react"
import Shimmer from "./components/Shimmer"
import UserContext from "./utils/UserContext"

const Grocery = lazy(()=>import ("./components/Grocery"))
const ResMenu = lazy(()=>import ("./components/ResMenu"))
const About = lazy(()=>import ("./components/About"))

const AppLayout = () => {
    const [userInfo,setuserInfo] = useState("")

    useEffect(()=>{
        let data = {
            name:"Samar Siddiqui"
        }
        setuserInfo(data.name)

    },[])

  
    return ( 
        <UserContext.Provider value={{name:userInfo,setuserInfo}}>

        <div className="app">
          

            <Header/>
            
            <Outlet />
        <h1>Hello from App</h1>

        </div>
        </UserContext.Provider>
       
       
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        children: [
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<Suspense>
                    <About/>
                </Suspense>
            },
            {
                path: "/contact",
                element:<Contact/>
            },
            {
                path: "/grocery",
                element:<Suspense fallback={<h1>Loading...</h1>}>
                    <Grocery />
                </Suspense>
            },
            {
                path:"/restaurants/:resId",
                element: <Suspense fallback={<Shimmer/>}>
                    <ResMenu />
                </Suspense>


            }
        ],
        errorElement: <Error/>
    }
    
])
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)