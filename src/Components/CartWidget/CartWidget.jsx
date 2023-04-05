import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from "@mui/material";
import {useContext} from "react"
import {Link} from "react-router-dom"
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {

  const {cart, getTotalQuantity}=useContext(CartContext)

  const total= getTotalQuantity()

  return (
    <Link to="/cart">
      <div className="container-cart">
        <BsFillCartCheckFill
          style={{
            fontSize: "2rem",
            color: "#e1d4c7",
        }}
      />
      <div className="bubble-counter">
        <Button>0</Button>
      </div>

      </div>
    </Link>
  );
};

export default CartWidget;