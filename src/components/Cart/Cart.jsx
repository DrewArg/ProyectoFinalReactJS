import '../Cart/Cart.css'
import { useCartContext } from '../../context/cartContext'
import CartItem from '../CartItem/CartItem';

function Cart() {

    const { cartList, emptyCart } = useCartContext();
    return (
        <>
            <div className="detailBackground" >
                <button>Vaciar Carrito</button>
                <button>Finalizar Compra</button>
                <ul>
                    {cartList.map((cartItem) => <CartItem item={cartItem} />)}
                </ul>
            </div>

        </>

    )
}

export default Cart