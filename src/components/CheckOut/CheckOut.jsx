import { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useCartContext } from "../../context/CartContext";
import MessageSuccess from "../MessageSucess/MessageSucess";
import "./CheckOut.css"


const CheckOut = () => {
    const { cart, TotalPrice } = useCartContext()
    
    const initialState = {
        name: "",
        lastName: "",
        phone: "",
        email: "",
        items: cart.map(product => ({ id: product.id, product: product.name, price: product.price, quantity: product.quantity })),
        total: TotalPrice(),
    };
    
    const [values, setValues] = useState({initialState});
    const [purchaseID, setPurchaseID] = useState(null);

    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setValues({ ...values, [name]: value });
      };

    const onSubmit = async (e) => {
        e.preventDefault();
        const db = getFirestore();
        const orderCollection = collection(db, "order");
        addDoc(orderCollection, initialState)
        .then(({ id }) => setPurchaseID(id)); 
        setValues(initialState);
    };

    return (
        <>
            <div className="containerForm">
                <h1>CHECKOUT PAGE</h1>
                <form className="Form" onSubmit={onSubmit}>
                    <h2>Completa tus datos</h2>
                    <input type="text" name="name" placeholder="Nombre" value={values.name}  onChange={handleOnChange}/>
                    
                    <input type="text" name="lastName" placeholder="Apellido" value={values.lastName} onChange={handleOnChange} />
                    
                    <input type="number" name="phone" placeholder="Nro de Telefono" value={values.phone} onChange={handleOnChange}/>
        
                    <input type="email" name="email" placeholder="Email" value={values.email} onChange={handleOnChange}/>



                    <button className="btnSend">Pagar Ahora</button>
                </form>

                {purchaseID ? <MessageSuccess purchaseID={purchaseID} /> : null}
            </div>
        </>
    )
}
export default CheckOut