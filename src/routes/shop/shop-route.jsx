import { useContext } from 'react';
import Products from '../../components/products/products.component';
import { ProductsContext } from '../../contexts/products.contexts';
import './shop-route.scss'

const Shop = () => {
    const {products} = useContext(ProductsContext);

    return (
        <div className='products-container'>
            {
                products.map((product) => {
                    return (
                        <Products key={product.id} products={product}/>
                    )
                })
            }
        </div>
    )
}

export default Shop;