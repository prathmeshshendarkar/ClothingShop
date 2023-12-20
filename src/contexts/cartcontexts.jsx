import { createContext, useEffect, useState } from "react";

// Now, we no that additemstocart will add any item to the cart, but what if the product is already in the cart
export const ItemCheckandAdd = (cartItems, productToAdd) => {
    // console.log(productToAdd.id)
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
    );
  
    if (existingCartItem) {
      return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  };

export const CartContext = createContext({
    cartOpen: false,
    setcartOpen: () => {},
    cartItems: [],
    AddItemstoCart: () => {}, // Why do we want this function to be global, because the cart-items component is going to access the component when someone click on add to cart button.
    cartCount: 0
});

export const CartProvider = ({children}) => {
    const [cartOpen, setcartOpen] = useState(false);
    const [cartItems, setcartItems] = useState([]);
    const [cartCount, setcartCount] = useState(0);

    const AddItemstoCart = (productToAdd) => {
        setcartItems(ItemCheckandAdd(cartItems, productToAdd));
        // console.log(cartItems);
    }

    useEffect(() => {
      const TotalCartItems = cartItems.reduce((ac, cv) => {
        return ac + cv.quantity;
      }, 0)
      setcartCount(TotalCartItems);
    }, [cartItems])

    const value = {cartOpen, setcartOpen, cartItems, AddItemstoCart, cartCount, setcartCount};

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}