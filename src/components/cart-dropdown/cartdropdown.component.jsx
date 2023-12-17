import './cartdropdown.component.scss';
import Button from '../button/button.component';

const CartDropDown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items' />
            <Button label='Buy' buttonType='inverted' />
        </div>
    )
}

export default CartDropDown;