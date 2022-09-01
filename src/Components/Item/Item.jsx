import './Item.css';
import React from 'react';

const Item = ({info}) =>{
    
return (
        <div className='cakes'>
            <img src={info.img}  alt="" />
            <p>{info.title}</p>
            <p>{info.description}</p>
            <p>$ {info.price}</p>
        </div>
    );
}
export default Item;