import React, {  useState } from 'react'
import Button from '@atlaskit/button';
import Textfield from '@atlaskit/textfield';
import {URL} from '../constant'
import { Link } from "react-router-dom";
import {POST} from '../MethodAxios';
import store, { changeData } from '../Store/Store';
import {  useSelector } from 'react-redux';
export default function AddNew() {
  const todosList = useSelector((ee)=> ee.create)
    const handleSubmit  = (e) => {
        e.preventDefault();
     POST(URL,{name :todosList.name,price :todosList.price,image : todosList.image});
    }
  return (
    <div className='w-50 mx-auto'>
        <h2>Add New Product</h2>
        <form onSubmit={handleSubmit}>
            <Textfield placeholder='Name' value={todosList.name } onChange={(e) => 
              store.dispatch(changeData("CHANGENAME", e.target.value ) )
            }/> 
            <Textfield type='number' placeholder='Price' value={todosList.price} onChange={(e) =>
              store.dispatch(changeData("CHANGEPRICE", e.target.value ) )
            }/> 
            <Textfield placeholder='Image' value={todosList.image} onChange={(e) => 
                store.dispatch(changeData("CHANGEIMAGE", e.target.value ) )
              
              }/> 
            <Button appearance='primary' type='submit'>Save</Button>
        <Button type='reset'>Reset</Button>
       <Link to="/"> <Button >BACK</Button></Link>
        </form>
        
    </div>
  )
}
