import ShoppingCartContext from "../Context/ShoppingCartContext"; // Importing ShoppingCartContext
import { useContext } from "react"; // Importing useContext hook from React
import DisplayProduct from "../components/DisplayProduct";

export default function Products(){
    const { Products } = useContext(ShoppingCartContext);
    return(
        <div className="flex flex-wrap w-[70%] mx-auto justify-center py-20">
            {Products.map((product, index) => (
            <DisplayProduct key={index} product={product} />
            ))}
      </div>
    )
}