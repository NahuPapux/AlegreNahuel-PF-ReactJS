
import React, { useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import {useParams} from "react-router-dom"
import { products } from '../../productsMock';
import { CartContext } from '../../context/CartContext';

const ItemDetailContainer = () => {

    const {id} = useParams();
    const {agregarAlCarrito} = useContext (CartContext)
    const productSelected = products.find ( (element) => element.id === Number(id) );
    const onAdd = (cantidad)=>{

        agregarAlCarrito(productSelected)

    }
    
    return (     
        <div>
                <img src={productSelected.img} alt="" />
                <h1 >{productSelected.title}</h1>
                <h3 >{productSelected.description}</h3>
                <h2 ><span>$</span>{productSelected.price.toFixed(2)}</h2>
                <ItemCount stock={productSelected.stock} onAdd={onAdd}/>
        </div>
    );
};

export default ItemDetailContainer