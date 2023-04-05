import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import { products } from "../../productsMock";
import ItemList from "../ItemList/ItemList";
import ClipLoader from "react-spinners/ClipLoader";

const ItemListContainer = () => {

    const {categoryName}= useParams();

    const [items, setItems] = useState([]);

    const productosFiltrados = products.filter((elemento) => elemento.category === categoryName)

    useEffect(() => {
      const productList = new Promise((resolve,reject) => {
        setTimeout(()=>{
          resolve( categoryName ? productosFiltrados : products);
        }, 4000)  
      });

      productList
        .then((res) => {
          setItems(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [categoryName]);

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
         /*  loading={loading}
          cssOverride={override} */
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
          />
        )}
      </div>
    );
  };
  
  export default ItemListContainer;