import React, { useState,createContext, useContext } from 'react'

const CartContext = createContext([])

export const useCartContext =()=> useContext(CartContext);
const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])


    const addProduct = (item, quantity) =>{
        if(isInCart(item.id)){
            setCart(cart.map(product=>{
                return product.id === item.id ? {...product, quantity: product.quantity+quantity}:product
            }));
        } else{
            setCart([...cart, {...item, quantity}])
        }
    }
console.log("carrito", cart)
    const removeProduct =(id)=>setCart(cart.filter(product=>product.id !==id))
    
    const isInCart = (id) =>{
        return cart.find(product => product.id === id)
    }

    const clearCart = () =>{
        setCart([])
    }
    
    const TotalPrice =()=>{
        return cart.reduce((acc, product)=> (acc + product.price * product.quantity.toFixed(2)), 0)
    }

    const Totalproducts =()=>{
        return cart.reduce((acc, product)=> acc + product.quantity, 0)
    }

  return (
    <CartContext.Provider value={{clearCart, isInCart, removeProduct, addProduct, TotalPrice, Totalproducts, cart}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider