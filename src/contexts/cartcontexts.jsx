import { createContext, useState } from "react";

export const CartContext = createContext({
    cartOpen: false,
    setcartOpen: () => {}
});

export const CartProvider = ({children}) => {
    const [cartOpen, setcartOpen] = useState(false);
    const value = {cartOpen, setcartOpen};

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}