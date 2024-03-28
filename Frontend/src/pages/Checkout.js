import ShoppingCartContext from "../Context/ShoppingCartContext"; // Importing ShoppingCartContext
import { useContext } from "react"; // Importing useContext hook from React

export default function Checkout(){
    const { 
        cartItems, 
        Price
      } = useContext(ShoppingCartContext);

    return (
        <div>

        </div>
    )
}