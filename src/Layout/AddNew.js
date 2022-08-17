import React, { useContext, useState } from 'react'
import Button from '@atlaskit/button';
import Textfield from '@atlaskit/textfield';
import {URL} from '../constant'
import axios from 'axios';
import {Mycontext} from '../App'
import { useNavigate } from "react-router-dom";
import {post} from '../MethodAxios'
export default function AddNew() {
    const [name,setName] = useState('')
    const [price,setPrice] = useState('')
    const [image,setImage] = useState('')
    
    let navigate = useNavigate();
    const handleSubmit  = (e) => {
        e.preventDefault();
        // axios.post(URL,{name,price,image});
      post(URL,{name,price,image})
        navigate("/");
    }
  return (
    <div className='w-50 mx-auto'>
        <h2>Add New Product</h2>
        <form onSubmit={handleSubmit}>
            <Textfield placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/> 
            <Textfield type='number' placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)}/> 
            <Textfield placeholder='Image' value={image} onChange={(e) => setImage(e.target.value)}/> 
            <Button appearance='primary' type='submit'>Save</Button>
        <Button type='reset'>Reset</Button>
        </form>
        
    </div>
  )
}
