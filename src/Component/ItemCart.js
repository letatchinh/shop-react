import React, {  useState } from 'react'
import Button from '@atlaskit/button';
import axios from 'axios';
import { URLLISTCART } from '../constant';
import { useDispatch } from 'react-redux';
import { changeData } from '../Store/Store';
 function ItemCart(props) {
 const dispatch = useDispatch()
  const DeleteItemCart = () => {
    axios.delete(`${URLLISTCART}/${props.item.id}`)
    dispatch(changeData("DELETECART",props.item.id))
  }
  const decreaseCount = () => {
    axios.put(`${URLLISTCART}/${props.item.id}`,{...props.item, count : props.item.count - 1});
    dispatch(changeData("DECREASECOUNT",props.index))
  }
  const increaseCount = () => {
    axios.put(`${URLLISTCART}/${props.item.id}`,{...props.item, count : props.item.count + 1});
    dispatch(changeData("INCREASECOUNT",props.index))
  }
  return (
    <div className='d-flex justify-content-around align-items-center bg-light m-3 text-dark'>
        <img style={{width : "20%" , borderRadius : "20px" , height : "50px", objectFit : "cover  "}} src={props.image} alt="abc"/>
        <span>{props.name}</span>
        <Button isDisabled={props.item.count === 1} onClick={decreaseCount} style={{borderRadius : "50%"}}>-</Button>
        <span>{props.count}</span>
        <Button  onClick={increaseCount} style={{borderRadius : "50%"}}>+</Button>
        <span>{props.price}</span>
        <Button onClick={DeleteItemCart}>X</Button>
    </div>
  )
}
export default ItemCart