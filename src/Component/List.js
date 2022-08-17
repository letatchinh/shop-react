import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Item from './Item'
import {URL} from '../constant'
import { v4 } from 'uuid';

export default function List() {
    const [data,setData] = useState([])
    const fecthData = async() => {
       await axios.get(URL).then(res => setData(res.data)).catch(err => console.log(err))
    } 
    useEffect(() => {
fecthData()
    },[])

  return (
    <div className='d-flex justify-content-around flex-wrap gap-3'>
        {
            data.map((e) => <Item item={e} src={e.image} name={e.name} price={e.price} key={v4()}/>)
        }
    </div>
       
    
  )
}
