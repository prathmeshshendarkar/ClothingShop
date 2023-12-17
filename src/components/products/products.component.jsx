import Button from '../../components/button/button.component';
import './products.component.scss';

const Products = ({products}) => {
    const {name, price, imageUrl} = products;
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={name}/>

            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>

            <Button label='Add to Cart' buttonType='inverted'/>
        </div>
    )
}

export default Products;