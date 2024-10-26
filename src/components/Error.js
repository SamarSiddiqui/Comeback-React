import { useRouteError } from "react-router-dom";

const Error = () =>{
    const err = useRouteError()
    console.log(err);
    
return (
    <div>
        <h1>Oopps! Something went Wrong.</h1>
        <h1>{err.status} {err.statusText} </h1>
        <h2>{err.data}</h2>
    </div>
)
}

export default Error;