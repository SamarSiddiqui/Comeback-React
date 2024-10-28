import React, { lazy } from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom"
import Header from "./components/Header"
import Body from "./components/Body"
// import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
// import ResMenu from "./components/ResMenu"
import { lazy,Suspense } from "react"
import Shimmer from "./components/Shimmer"

const Grocery = lazy(()=>import ("./components/Grocery"))
const ResMenu = lazy(()=>import ("./components/ResMenu"))
const About = lazy(()=>import ("./components/About"))

const AppLayout = () => {
    return ( 
        <div className="app">
            <Header/>
            <Outlet />
        <h1>Hello from App</h1>

        </div>
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