import React from 'react'
export default function Item(props) {
  return (
    <div style={{width : "20%"}} className='d-flex flex-column'>
    <img style={{height : "350px" , objectFit : "cover"}}  src={props.image} alt='abc'/>
    <h3>{props.name}</h3>
    <p>{props.price}</p>
    <button onClick={props.addCart} className='btn btn-primary'>Add to cart</button>
    </div>
  )
}
