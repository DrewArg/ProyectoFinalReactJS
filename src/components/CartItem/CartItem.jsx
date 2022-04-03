import '../CartItem/CartItem.css'
import { useCartContext } from '../../context/CartContext'

function CartItem({ item }) {

    const { addOneItem, removeItem, removeOneItem } = useCartContext();

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
                    Stock: {item.stock}
                </div>
                <div>
                    Precio unitario: {item.price}
                </div>
                <button onClick={() => { addOneItem(item) }}>+ 1</button>
                <button onClick={() => { removeOneItem(item) }}>- 1 </button>
                <button onClick={() => { removeItem(item.id) }}>Remover Item</button>

            </li>

        </>

    )
}

export default CartItem