import '../CartItem/CartItem.css'
import { useCartContext } from '../../context/cartContext'

function CartItem({ item }) {

    const { cartList, addToCart } = useCartContext();

    return (
        <>
            <li className="cartItemList">
                <div>
                    Nombre: {item.name}
                </div>
                <div>
                    Tipo: {item.type}
                </div>
                <div>
                    Cantidad: {item.quantity}
                </div>
                <div>
                    Precio: {item.price}
                </div>
                <button>+ 1</button>
                <button>- 1 </button>
                <button>Remover Item</button>

            </li>

        </>

    )
}

export default CartItem