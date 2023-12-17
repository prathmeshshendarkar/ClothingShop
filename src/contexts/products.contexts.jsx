import { createContext, useState } from "react";
import ShopData from '../shop-data.json';

export const ProductsContext = createContext({
    products: [],
});

export const ProductsProvider = ({children}) => {
    const [products, setproducts] = useState(ShopData);
    const value = {products, setproducts};
    
    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}