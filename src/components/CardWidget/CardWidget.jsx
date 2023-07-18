import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai"
import { useCartContext } from '../../context/CartContext'

const CardWidget = () => {

  const {Totalproducts} = useCartContext();
  return (
    <>
    <AiOutlineShoppingCart/>
    <span>{Totalproducts() || ""}</span>
    </>
  )
}

export default CardWidget