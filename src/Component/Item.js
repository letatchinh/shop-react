import axios from 'axios'
import React, { useContext } from 'react'
import { Mycontext } from '../App'
import {URLLISTCART} from '../constant'

export default function Item(props) {
  const value = useContext(Mycontext)
  const AddCart = () => {
    let flag = true
    value.dataListCart.map((e) => (props.item.id === e.id) ? flag = false : console.log("ok"))
   if(flag){
    axios.post(URLLISTCART,{...props.item , count : 1});
    value.reRender()
   }
   else {
     alert("Đã tồn tại sản phẩm")
   }
  }
  return (
    <div style={{width : "20%"}} className='d-flex flex-column'>
    <img style={{height : "350px" , objectFit : "cover"}}  src={props.src} alt='abc'/>
    <h3>{props.name}</h3>
    <p>{props.price}</p>
    <button onClick={AddCart} className='btn btn-primary'>Add to cart</button>
    </div>
  )
}
