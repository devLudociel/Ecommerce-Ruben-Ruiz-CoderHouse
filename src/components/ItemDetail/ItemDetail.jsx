import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';
import {useCartContext} from "../../context/CartContext"
import "./ItemDetail.css"

const ItemDetail = ({ data }) => {

    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();


    const onAdd = (quantity) => {
        setGoToCart(true)
        addProduct(data,quantity)
    }

    return (
        <>
            <div className="containerDetail">
                <div className='detailInfo'>
                    <img src={data.img} alt="" className="detailImg"/>
                    <div className="addItem">
                        {
                            goToCart ? 
                            <Link to="/cart">
                                <button className="btnGoToCart">Terminar Compra</button>
                            </Link> 
                            : <ItemCount initial={1} stock={9} onAdd={onAdd} />
                        }
                    </div>
                </div>

                <div className="infoProduct">
                    <h1 className='infoName'>{data.name}</h1>
                    <p className='infoDescription'>{data.metaDescription}</p>
                    <p className='infoPrice'>${data.price}</p>

                </div>
            </div>
        </>
    )
}

export default ItemDetail