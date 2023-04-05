import React from "react";
import styles from "./Item.module.css"
import { Link } from "react-router-dom";

const Item = ({element}) => {
    return (
        <div key={element.id}>
            <img src={element.img} alt=""/>
            <h2>{element.title}</h2>
            <h3>{element.description}</h3>
            <h3>{element.price}</h3>
            <Link to={`/itemDetail/${element.id}`}>Ver detalle</Link>
        </div>
    );
};

export default Item;