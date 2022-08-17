import React, { useContext, useState } from 'react'
import Button from '@atlaskit/button';
import axios from 'axios';
import { URLLISTCART } from '../constant';
import { Mycontext } from '../App';
import { observer } from 'mobx-react';

 function ItemCart(props) {
  const [count,setCount] = useState(props.item.count)
  const value = useContext(Mycontext)
  const DeleteItemCart = () => {
    axios.delete(`${URLLISTCART}/${props.item.id}`)
    value.reRender()
  }
  const decreaseCount = () => {
    setCount(count - 1)
    axios.put(`${URLLISTCART}/${props.item.id}`,{...props.item, count : count - 1});
    value.reRender() // ReRender App
  }
  const increaseCount = () => {
    setCount(count + 1)
    axios.put(`${URLLISTCART}/${props.item.id}`,{...props.item, count : count + 1});
    value.reRender() // ReRender App
  }
  return (
    <div className='d-flex justify-content-around align-items-center bg-light m-3 text-dark'>
        <img style={{width : "20%" , borderRadius : "20px" , height : "50px", objectFit : "cover  "}} src={props.image} alt="abc"/>
        <span>{props.name}</span>
        <Button isDisabled={count === 1} onClick={decreaseCount} style={{borderRadius : "50%"}}>-</Button>
        <span>{count}</span>
        <Button  onClick={increaseCount} style={{borderRadius : "50%"}}>+</Button>
        <span>{props.price}</span>
        <Button onClick={DeleteItemCart}>X</Button>
    </div>
  )
}
export default observer(ItemCart)