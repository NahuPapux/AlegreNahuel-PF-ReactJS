
import React, { useContext, useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import Swal from "sweetalert2"
import { products } from '../../productsMock';
import { CartContext } from '../../context/CartContext';
import { getDoc, collection, doc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import ItemDetail from "../ItemDetail/ItemDetail"
import ItemCount from   "../ItemCount/ItemCount"

const ItemDetailContainer = () => {

    const {id} = useParams();
    const {agregarAlCarrito, getQuantityById} = useContext (CartContext)
    const [productSelected, setProductSelected] = useState ({})

    useEffect(()=>{

        const ItemCollection = collection(db, "products")
        const ref = doc(ItemCollection, id )
        getDoc(ref)
            .then(res => {
                setProductSelected({
                    ...res.data(),
                    id: res.id,
                })
            })
    },[id])

    /* const productSelected = products.find ( (element) => element.id === Number(id) ); */
    const onAdd = (cantidad)=>{
        let producto = {
            ...productSelected,
            quantity: cantidad,
        }

        agregarAlCarrito(producto);
        Swal.fire({
            position: 'center',
            icon: 'succes',
            title: 'Producto agregado exitosamente',
            showConfirmButton: false,
            timer: 1500
        });

    };
    let quantity = getQuantityById(Number(id));
    
    return (
        <ItemDetail
          productSelected={productSelected}
          onAdd={onAdd}
          quantity={quantity}
        />
      );
    };

export default ItemDetailContainer