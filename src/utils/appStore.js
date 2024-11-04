import { configureStore } from "@reduxjs/toolkit";  
import reducer from "./cartSlice";


const appStore = configureStore({
    //big reducer
 reducer : {
    cart:reducer, //small reducer
 }
})


export default appStore;

