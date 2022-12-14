import './ItemCount.css';
import React,{useState}  from 'react';

export const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial);

    const increase = () => {
        setCount(count + 1);
    }

    const decrease = () => {
        setCount(count - 1);
    }

return (
    <div className='counter'>
        <button disabled={ count <=0 } onClick={decrease}>-</button>
            <span className='margpad'>{count}</span>
                <button disabled={count >= stock} onClick={increase}>+</button>
                    <div>
                        <button disabled={stock <= 0 || count < 1 } onClick={()=> onAdd(count)} className= 'margpad'> Agregar al carrito </button>
                    </div>
    </div>
);
}

export default ItemCount;