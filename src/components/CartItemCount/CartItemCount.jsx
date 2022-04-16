import { useCartContext } from '../../context/cartContext'
import '../CartItemCount/CartItemCount.css'
function CartItemCount() {

    const { itemsInCart, noItems } = useCartContext();

    return (
        <>
            {noItems ? <></> : <div className="cartCount">{itemsInCart()}</div>}

        </>
    )
}

export default CartItemCount