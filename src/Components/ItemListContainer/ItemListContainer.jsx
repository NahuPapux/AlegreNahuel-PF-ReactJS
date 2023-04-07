import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import ClipLoader from "react-spinners/ClipLoader";
import { db } from "../../firebaseConfig";
import {collection, getDocs, query, where} from "firebase/firestore"

const ItemListContainer = () => {

    const {categoryName}= useParams();

    const [items, setItems] = useState([]);

    useEffect(() => {
      const itemsCollection = collection(db, "products")

      let consulta = undefined

      if(categoryName){
        const q = query(itemsCollection, where("category", "==", categoryName))
            
        consulta= getDocs(q)

      }else{
        consulta = getDocs(itemsCollection)
      }

      consulta.then((res) =>{
        let products = res.docs.map((products)=>{
          return {
            ...products.data(),
            id: products.id
          }
        })
        setItems(products)
      })

    }, [categoryName]);

    if (items.length > 0) return <ItemList items={items}/>

    return (
      <div
        style={{
          width: "100vw",
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}>
          {items.lenght > 0 ? (<ItemList items={items} />) : ( <ClipLoader
          color={"pink"}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
          />
        )}
      </div>
    );
  };
  
  export default ItemListContainer;