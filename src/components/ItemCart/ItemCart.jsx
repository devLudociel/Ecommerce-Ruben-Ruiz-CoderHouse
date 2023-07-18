import React from "react";
import { useCartContext } from "../../context/CartContext";
import { BsTrash } from "react-icons/bs";
import "./ItemCart.css"

const ItemCart = ({ product }) => {
    const {removeProduct}= useCartContext();

        let price = product.price
        let quantity = product.quantity
        let subTotal = (price*quantity.toFixed(2))
    return (
        <>
            <div className="itemCart">
                <img src={product.img} alt="" className="imgCheckOut"/>
                <div className="infoCheckOut">
                    <h1 className="titleCheckOut">{product.name}</h1>
                    <p className="priceCheckOut">Precio: {product.price}</p>
                    <p className="quantityCheckOut">Cantidad:{product.quantity}</p>
                    <p className="subTotalCheckOut">Subtotal: ${subTotal}</p>
                </div>
                    <button onClick={()=>removeProduct(product.id)} className="btnRemoveCheckOut"><BsTrash/></button>
            </div>
        </>
    )
}

export default ItemCart