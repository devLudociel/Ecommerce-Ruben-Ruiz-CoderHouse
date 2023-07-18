import {React, useState, useEffect} from 'react'
import "./ItemCount.css"

const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(parseInt(initial));

    const decrease=()=>{
        setCount(count-1)
    }
    const increase=()=>setCount(prevState => prevState + 1 );

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial])

  return (
    <div className="counter">   
        <button disabled={count <= 1} onClick={decrease} className='btnDecrease'>-</button>
        <span className='number'>{count}</span>
        <button disabled={count >= stock} onClick={increase} className='btnIncrease'>+</button>
        <div className='btnBuy'>
            <button disabled={stock <= 0} onClick={()=>onAdd(count)}>
            <span>Añadir Al Carrito</span>
            </button>
        </div>
    </div>
  )
}

export default ItemCount