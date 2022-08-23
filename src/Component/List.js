import axios from 'axios'
import React, { useEffect, useState  } from 'react'
import {  useDispatch , useSelector } from 'react-redux';
import Item from './Item'
import {URL,URLLISTCART} from '../constant'
import { v4 } from 'uuid';
import { changeData} from '../Store/Store';
import {POST} from '../MethodAxios';
export default function List() {
  const list = useSelector(e => e.list)
  const listCart = useSelector(e => e.listCart)
  const dispatch = useDispatch()
  const [data,setData] = useState([]);
  const [dataCart , setDataCart] = useState([])
  const fecthData = async() => {
    await axios.get(URL).then(res => setData(res.data)).catch(err => console.log(err))
  } 
  const fecthDataCart = async() => {
    await axios.get(URLLISTCART).then(res => setDataCart(res.data)).catch(err => console.log(err))
  } 
  useEffect(() => {
    fecthData()
    fecthDataCart()
  },[])
  useEffect(() => {
    dispatch(changeData("CALLAPI",data))
  },[data])
  useEffect(() => {
    dispatch(changeData("CALLAPILISTCART",dataCart))
    console.log("CALL lai data Cart");
  },[dataCart])
  const addCart = (item) => {
    const flag = listCart.findIndex(e => e.id === item.id);
    if(flag === -1){
      POST(URLLISTCART,{...item,count : 1})
      dispatch(changeData("ADDCART",{...item,count : 1}))
    }
   else {
     alert("da ton tai")
   }
  }
  return (
    <div className='d-flex justify-content-around flex-wrap gap-3'>
        {
          list.map((e) => <Item addCart={() => addCart(e)} item={e} image={e.image} name={e.name} price={e.price} key={v4()}/>)
        }
    </div>
       
    
  )
}
