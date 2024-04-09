import { createContext, useEffect, useState, } from "react";

//Createing context
const ShoppingCartContext = createContext({});

// const Products = [
//   { id:1, Title:"hej1", Description:"bla blabla bla blabla", img:"", Price:1 },
//   { id:2, Title:"hej2", Description:"bla blabla bla blabla", img:"", Price:10 },
//   { id:3, Title:"hej3", Description:"bla blabla bla blabla", img:"", Price:100 },
//   { id:4, Title:"hej4", Description:"bla blabla bla blabla", img:"", Price:1000 },
// ]

// const Cart = [
//   { id:1, ProductId:1, Quantity:2 },
//   { id:2, ProductId:3, Quantity:4 },
//   { id:3, ProductId:5, Quantity:3 },
//   { id:4, ProductId:6, Quantity:1 }
// ]

//creating provider component
export function ShoppingCartProvider({ children }) {
  const [ Cart, setCart ] = useState([])
  const [ Products, setProducts ] = useState([])
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  // When loading Webb fetch products from server
  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error:', error));
  }, []);

  // When Cart is uppdating items, call these funtions so the numbers are up to date
  useEffect(() => {
    updateTotalQuantity();
    updateTotalPrice();
  }, [Cart]);

  // Calculating total Price of al items in Cart depending on Quantity and number of items
  const updateTotalPrice = () => {
    // Calculate the total price based on all items in the cart
    const newTotalPrice = Cart.reduce((total, item) => {
      const product = Products.find(product => product.id === item.ProductId);
      if (product) {
        return total + parseFloat(product.price) * item.Quantity;
      }
      return total.toFixed(2);
    }, 0);
    setTotalCost(newTotalPrice);
  };

  // Calculating total Quantity of al items in Cart
  const updateTotalQuantity = () => {
    // Calculate the total quantity based on all items in the cart
    const newTotalQuantity = Cart.reduce((total, item) => total + item.Quantity, 0);

    setTotalQuantity(newTotalQuantity);
  };
  
  // Add item to Cart deppending on id of Product, and can add custom numer of items
  const addItemToCart = (idOfProduct, quantityFromProductPage) => {
    // Default quantity to 1 if not defined or falsy
    const quantityToAdd = quantityFromProductPage || 1;
  
    // Check if the cart is empty
    if (Cart.length === 0) {
      // If empty, add the first item to the cart
      setCart([{ id: 1, ProductId: idOfProduct, Quantity: quantityToAdd }]);
    } else {
      // If not empty, check if the product is already in the cart
      const updatedCart = Cart.map((item) => {
        if (item.ProductId === idOfProduct) {
          // If the product exists, increment the quantity by the quantity from product page
          return { ...item, Quantity: item.Quantity + quantityToAdd };
        }
        return item;
      });
  
      // If the product is not in the cart, add it with the quantity from product page
      if (!updatedCart.some((item) => item.ProductId === idOfProduct)) {
        updatedCart.push({ id: Cart.length + 1, ProductId: idOfProduct, Quantity: quantityToAdd });
      }
  
      // Update the cart state
      setCart(updatedCart);
    }
  };
  
  // Subtract item from Cart deppending on id of Product
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
  
  // Deleting all quantity of item from Cart deppending on id of Product
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
        totalCost,
        totalQuantity,
        Cart
        }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
export default ShoppingCartContext;