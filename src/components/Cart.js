import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MenuList from './MenuList';
import {clearCart,removeItems} from "../utils/cartSlice";

function Cart() {
  const cartItems = useSelector(
    (store)=>{return store.cart.items}
  )

  const dispatch = useDispatch()

  const handleClearCart = ()=>{
    dispatch(clearCart())
  }
  return (
    <div className=' text-center m-4 p-4'>
      <h1 className='text-xl font-bold'>HEllo from Cart</h1>
      <button className='clearBtn' onClick={handleClearCart}>Clear Cart</button>
      {}
        <div className='w-10/12 m-auto' >
          <MenuList data={cartItems}/>
          {cartItems.length===0?<h1>Cart IS Empty.Add Items.</h1>:""} 
         
        </div>
    </div>
  )
}

export default Cart;
