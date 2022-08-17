import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Cart from '../Component/Cart'
import List from '../Component/List'
import Button from '@atlaskit/button';
import axios from 'axios';
import {URL} from '../constant'
export default function Body() {
    const [data,setData] = useState([]);
    const [display,setDisplay] = useState(true);
    
    const fecthData = () => {
        axios.get(URL).then(res => setData(res.data))
    }
    useEffect(() => fecthData(), []);
    const changeDisplayCart = () => {
        setDisplay(!display);
    }
  return (
    <div className=''>
        <div className='d-flex justify-content-between'>
    <p>Total <span> {data.length} Pruduct</span></p> 
    
    <Link to="/new"><Button appearance='primary'> Create New</Button></Link>
    <Cart changeDisplayCart={changeDisplayCart}  displayCart={display}/>
        </div>
        
        <div>
    <List />
        </div>
    </div>
  )
}
