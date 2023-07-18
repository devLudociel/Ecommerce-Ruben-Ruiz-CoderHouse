import React from 'react'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart';
import "./Cart.css"

const Cart = () => {

  const { cart, TotalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <div className="containerGoToShop">
          <h1 className='buyItem'>No hay productos en el carrito</h1>
          <Link to="/">
            <button className="btnGoToShop">Ir de Compras</button>
          </Link>
        </div>
      </>
    )
  }

  return (
    <>
      {
        cart.map(product => <ItemCart key={product.id} product={product} />)
      }
      <div className='containerCartFooter'>
        <Link to="/CheckOut">
          <button className='btnPago'>
            <span>Proceder Al Pago</span>
          </button>
        </Link>
        <h2 className='totalPrice'>Total: $ {TotalPrice()}</h2>
      </div>
    </>
  );
}


export default Cart