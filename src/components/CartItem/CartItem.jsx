import '../CartItem/CartItem.css'
import { useCartContext } from '../../context/CartContext/CartContext'

function CartItem({ item }) {

    const { addOneItem, removeItem, removeOneItem } = useCartContext();

    return (
        <>
            <li className="cartItemList">
                <button onClick={() => { removeItem(item.id) }}>X</button>
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
                    Stock: {item.stock}
                </div>
                <div>
                    Precio unitario: {item.price}
                </div>
                <button onClick={() => { removeOneItem(item) }}>-</button>
                <button onClick={() => { addOneItem(item) }}>+</button>


            </li>

        </>

    )
}

export default CartItem