import { useContext } from "react"; // Importing useContext hook from React

import ShoppingCartContext from "../Context/ShoppingCartContext"; // Importing ShoppingCartContext

import { RiDeleteBinLine } from "react-icons/ri";

export default function DisplayShoppingCart({ item }) {
  const {
    addItemToCart,
    subItemFromCart,
    Products,
    delItemFromCart
  } = useContext(ShoppingCartContext);

  return (
    <div className="flex items-center justify-between border-b-2 p-4">
      <div className="flex items-center">
        <img src={Products[item.ProductId - 1].img} alt="" className="w-12 h-12 mr-4" />
        <div>
          <h3 className="text-lg font-semibold">{Products[item.ProductId - 1].title}</h3>
          <p className="text-sm text-gray-500">{Products[item.ProductId - 1].price}</p>
        </div>
      </div>
      <div className="flex items-center">
        <button className="btn-quantity" onClick={() => addItemToCart(item.ProductId)}>+</button>
        <p className="mx-3">{item.Quantity}</p>
        <button className="btn-quantity" onClick={() => subItemFromCart(item.ProductId)}>-</button>
        <button className="btn-delete" onClick={() => delItemFromCart(item.ProductId)}>
          <RiDeleteBinLine className="text-red-600 h-5 w-5 ml-3" />
        </button>
      </div>

    </div>
  )
}