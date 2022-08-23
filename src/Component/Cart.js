import React, { useEffect } from 'react'
import { HiShoppingCart } from "react-icons/hi";
import Button from '@atlaskit/button';
import ItemCart from './ItemCart';
import { v4 } from 'uuid';
import { useSelector ,useDispatch} from 'react-redux';
import { changeData} from '../Store/Store';
function Cart(props) {
  const listCart = useSelector(e => e.listCart)
  const subTotalBill = useSelector(e => e.subTotalBill)
  const dispatch = useDispatch()
  const PayMent = () => {
console.log("ok");
  }
  useEffect(() => {
    dispatch(changeData("SUBTOTALBILL"))
  },[listCart])

  return (
    <div style={{position : "relative"}}>
    <HiShoppingCart onClick={props.changeDisplayCart} size={40} />
    <div className=' flex-column position-absolute end-0 bg-dark text-white' style={{width : "450px",paddingRight : "25px" , display : (props.displayCart) ? "none" : "flex"}} >
    <h2>Your Shopping Cart</h2>
    <ul>
   {!listCart.length && <p>Empty</p>}
     {
      listCart.map((e,index) => <ItemCart  count = {e.count} index = {index} item={e} image={e.image} name={e.name} price = {e.price} key={v4()}/>)
     }
    </ul>
    <h5 style={{textAlign : "left"}}>Subtotal $ <span>{subTotalBill}</span></h5>
    <Button appearance='primary' onClick={PayMent} className='btn btn-primary'>PayMent</Button>
    </div>
    <span style={{position : "absolute" , color : "white" , padding : " 0px 6px" , background : "red" , borderRadius : "50%" ,left : "28px"}}>{listCart.length}</span>
    </div>
  )
}
export default Cart;
