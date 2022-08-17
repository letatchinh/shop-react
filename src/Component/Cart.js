import React, { useContext, useState } from 'react'
import { HiShoppingCart } from "react-icons/hi";
import Button from '@atlaskit/button';
import ItemCart from './ItemCart';
import { v4 } from 'uuid';
import { Mycontext } from '../App';
import { observer } from 'mobx-react';
import storeState from '../Store/StoreList';

function Cart(props) {
  const value = useContext(Mycontext)
  storeState.setListProduct(value.dataListCart);
  storeState.total()
  const PayMent = () => {
console.log("ok");
  }
  return (
    <div style={{position : "relative"}}>
    <HiShoppingCart onClick={props.changeDisplayCart} size={40} />
    <div className=' flex-column position-absolute end-0 bg-dark text-white' style={{width : "450px",paddingRight : "25px" , display : (props.displayCart) ? "none" : "flex"}} >
    <h2>Your Shopping Cart</h2>
    <ul>
   {!value.dataListCart.length && <p>Empty</p>}
     {
      value.dataListCart.map((e) => <ItemCart item={e} image={e.image} name={e.name} price = {e.price} key={v4()}/>)
     }
    </ul>
    <h5 style={{textAlign : "left"}}>Subtotal $ <span>{storeState.totalPrice}</span></h5>
    <Button appearance='primary' onClick={PayMent} className='btn btn-primary'>PayMent</Button>
    </div>
    <span style={{position : "absolute" , color : "white" , padding : " 0px 6px" , background : "red" , borderRadius : "50%" ,left : "28px"}}>{value.dataListCart.length}</span>
    </div>
  )
}
export default observer(Cart);
