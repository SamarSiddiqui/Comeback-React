import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter,RouterProvider, Outlet } from "react-router-dom"
import Header from "./components/Header"
import Body from "./components/Body"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import ResMenu from "./components/ResMenu"

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
                element:<About/>
            },
            {
                path: "/contact",
                element:<Contact/>
            },
            {
                path:"/restaurants/:resId",
                element: <ResMenu />


            }
        ],
        errorElement: <Error/>
    }
    
])
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)