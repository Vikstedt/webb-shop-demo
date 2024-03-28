import { createContext, useEffect, useState, } from "react";

//Createing context
const ShoppingCartContext = createContext({});

// const Products = [
//   { id:1, Title:"hej1", Description:"bla blabla bla blabla", img:"", Price:1 },
//   { id:2, Title:"hej2", Description:"bla blabla bla blabla", img:"", Price:10 },
//   { id:3, Title:"hej3", Description:"bla blabla bla blabla", img:"", Price:100 },
//   { id:4, Title:"hej4", Description:"bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla ", img:"", Price:1000 },
//   { id:5, Title:"hej5", Description:"bla blabla bla blabla", img:"", Price:10000 },
//   { id:6, Title:"hej6", Description:"bla blabla bla blabla", img:"", Price:100000 },
//   { id:8, Title:"hej7", Description:"bla blabla bla blabla", img:"", Price:1000000 },
//   { id:9, Title:"hej7", Description:"bla blabla bla blabla", img:"", Price:100000 },
//   { id:10, Title:"hej7", Description:"bla blabla bla blabla", img:"", Price:1000 },
//   { id:11, Title:"hej7", Description:"bla blabla bla blabla", img:"", Price:100 },
//   { id:12, Title:"hej7", Description:"bla blabla bla blabla", img:"", Price:10 },
//   { id:13, Title:"hej7", Description:"bla blabla bla blabla", img:"", Price:1 },
// ]

// const CartEX = [
//   { id:1, ProductId:1, Quantity:2 },
//   { id:2, ProductId:3, Quantity:4 },
//   { id:3, ProductId:5, Quantity:3 },
//   { id:4, ProductId:6, Quantity:1 }
// ]

//creating provider component
export function ShoppingCartProvider({ children }) {
  const [ Cart, setCart ] = useState([])
  const [ Products, setProducts ] = useState([])
  
  useEffect(() => {
    // Fetch data from your Express server
    fetch('http://localhost:5000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error:', error));
  }, []); 

  const calculateTotalCost = () => {
    return Cart.reduce((total, cartItem) => {
      const product = Products.find(product => product.id === cartItem.ProductId);
      if (product) {
        return total + (parseFloat(product.price) * cartItem.Quantity);
      }
      return total;
    }, 0);
  };
 
  const addItemToCart = (idOfProduct) => {
    // Check if the cart is empty
    if (Cart.length === 0) {
      // If empty, add the first item to the cart
      setCart([{ id: 1, ProductId: idOfProduct, Quantity: 1 }]);
    } else {
      // If not empty, check if the product is already in the cart
      const updatedCart = Cart.map((item) => {
        if (item.ProductId === idOfProduct) {
          // If the product exists, increment the quantity
          return { ...item, Quantity: item.Quantity + 1 };
        }
        return item;
      });
  
      // If the product is not in the cart, add it with Quantity 1
      if (!updatedCart.some((item) => item.ProductId === idOfProduct)) {
        updatedCart.push({ id: Cart.length + 1, ProductId: idOfProduct, Quantity: 1 });
      }
  
      // Update the cart state
      setCart(updatedCart);
    }
  };

  const subItemFromCart = (idOfProduct) => {
    // Check if the cart is empty
    if (Cart.length === 0) {
      // Cart is empty, do nothing
      return;
    }
  
    // Update the cart state
    setCart((prevCart) =>
      prevCart.map((item) => {
        const newQuantity =
          item.ProductId === idOfProduct ? (item.Quantity - 1 >= 0 ? item.Quantity - 1 : 0) : item.Quantity;
  
        // If the new quantity is 0, remove the item from the cart
        if (item.ProductId === idOfProduct && newQuantity === 0) {
          // Call the specific function when quantity is 1
          if (item.Quantity === 1) {
            delItemFromCart(idOfProduct);
          }
          return null; // Skip this item in the new array
        }
  
        return { ...item, Quantity: newQuantity };
      }).filter(Boolean) // Remove null entries from the array
    );
  };
  
  const delItemFromCart = (idOfProduct) => {
    // Check if the cart is empty
    if (Cart.length === 0) {
      // Cart is empty, do nothing
      return;
    }
  
    // Check if the item with the specified product ID is in the cart
    if (Cart.some((item) => item.ProductId === idOfProduct)) {
      // If the item is in the cart, filter it out
      const updatedCart = Cart.filter((item) => item.ProductId !== idOfProduct);
  
      // Update the cart state
      setCart(updatedCart);
    }
  };
  

  return (
    <ShoppingCartContext.Provider
      value={{
        addItemToCart,
        subItemFromCart,
        delItemFromCart,
        Products,
        calculateTotalCost,
        Cart
        }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
export default ShoppingCartContext;