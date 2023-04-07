import React, { useState } from "react";
import Swal from "sweetalert2";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const FormCheckout = ({ cart, getTotalPrice, setOrderId, clearCart }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.name.length < 5) {
      Swal.fire({
      position: "center",
      icon: "error",
      title: "Datos inválidos",
      showConfirmButton: false,
      timer: 1500,
    });
      return;
    }

    if (!userData.email.includes("@")) {
      Swal.fire({
      position: "center",
      icon: "error",
      title: "Datos inválidos",
      showConfirmButton: false,
      timer: 1500,
    });
      return;
    }


    if (userData.phone.replace(/[0-9]/g,'').length != 0) {
      Swal.fire({
      position: "center",
      icon: "error",
      title: "Datos inválidos",
      showConfirmButton: false,
      timer: 1500,
    });
      return;
    }

    let total = getTotalPrice();
    let order = {
      buyer: userData,
      items: cart,
      total,
    };
    let orderCollection = collection(db, "orders");
    addDoc(orderCollection, order)
      .then((res) => {
        setOrderId(res.id);
        clearCart();
      })
      .catch((err) => console.log(err));

    cart.map((product) => {
      let refDoc = doc(db, "products", product.id);
      updateDoc(refDoc, { stock: product.stock - product.quantity });
      return product
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Telefono"
          value={userData.phone}
          onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
        />

        <button type="submit">Comprar</button>
      </form>
    </div>
  );
};

export default FormCheckout;