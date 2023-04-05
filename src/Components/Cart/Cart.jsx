
import React, {useContext} from 'react'
import {CartContext} from ''

const Cart = () => {
    const {cart, clearCart, getTotalPrice, deleteProductById}= useContext(CartContext);

    const precioTotal= getTotalPrice()

    return (
        <div style={{width: "100%", display: "flex", justifyContent: "space-evenly"}}
        >
        <div className="cart-container"></div>
            <div className="container-items"></div>
                {cart.map((item)=>{
                    return (
                        <div key={item.id} className="cart-item">
                            <div style={{border: "2px solid black"}} key={elemento.id}>
                                <h2>{item.name}</h2>
                                <img src={item.img} alt="" style={{width:"200px"}}/>
                                <h3>Unidades: {item.quantity}</h3>
                                <h3>{item.price}</h3>
                                <button color="secondary" vatiant="contained" onClick={()=>deleteProductById(item.id)}>Eliminar</button>
                            </div>
                        </div>
                    );
                })};

<h1>El total del carrito es {precioTotal}</h1>
            <button onClick={clearCart}>Limpiar Carrito</button>
        </div>
    )
}

export default Cart;