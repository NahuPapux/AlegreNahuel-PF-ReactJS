
import React from 'react'
import Item from "../Item/Item"

const ItemList = ({items}) => {
    return (
        <div style={ {
            backgroundColor: "beige",
            display: "flex",
            width: "100%",
            minHeight: "100vh",
            justifyContent: "space-evenly",
            alignItems: "center"
            

        } } > 


            {
               items.map( (element)=>{
                return <Item key={element.id} element={element} />
            })
            }
        </div>
    )
}

export default ItemList