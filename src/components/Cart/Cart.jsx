import { useCartContext } from '../../context/CartContext'
import FeedBackMessage from '../FeedBackMessage/FeedBackMessage'
import CartList from '../CartList/CartList';
import LinkButton from '../LinkButton/LinkButton';

function Cart() {
    const { noItems } = useCartContext();
    return (
        <>
            {
                noItems ? <FeedBackMessage messageType='warning' messageString={message} buttonTitle='Ir de compras' buttonStyle='basic' buttonLinkTo='' /> : <CartList />
            }
        </>
    )
}

export default Cart

let message = 'Lamentablemente tu carrito se encuentra vacio en estos momentos, pasa por la tienda para ver nuestros artículos disponibles.'