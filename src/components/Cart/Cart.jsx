import '../Cart/Cart.css'
import { useCartContext } from '../../context/cartContext'
import CartItem from '../CartItem/CartItem';

function Cart() {

    const { cartList, emptyCart, totalValue } = useCartContext();
    return (
        <>
            <div className="cartBackground" >
                <ul>
                    {cartList.map((cartItem) => <CartItem item={cartItem} />)}
                </ul>
                <div className="cartButtons">
                    <button onClick={() => { emptyCart() }}>Vaciar Carrito</button>
                    <button onClick={() => { }}>Finalizar Compra</button>
                </div>
                <div className="cartPrice">
                    <div>Total compra: {totalValue()}</div>
                </div>
            </div>

        </>

    )
}

export default Cart