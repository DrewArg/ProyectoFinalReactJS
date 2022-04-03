import CartItem from '../CartItem/CartItem';
import { useCartContext } from '../../context/CartContext'
import '../CartList/CartList.css'

function CartList() {
    const { cartList, emptyCart, totalValue } = useCartContext();

    return (
        <>
            <div className="detailBackground">
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
            </div>
        </>

    )
}

export default CartList