import '../ItemCount/ItemCount.css'
import { useState } from 'react'
import { useFeedbackMessageContext } from '../../context/FeedbackMessageContext/FeedbackMessageContext'

const ItemCount = ({ initial, stock, onAdd, product }) => {

    const { addMessage } = useFeedbackMessageContext()
    const [count, setCount] = useState(initial)

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }

    }
    const restar = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }

    const agregar = () => {
        onAdd(count)
        setCount(1);
        addMessage({ caption: 'Haz agregado ' + count + ' ' + product.name + ' a tu carrito.', type: 'fmSuccess' })
    }

    return (
        <div>
            <div className="tarjeta__precio">
                <button className="btnRestar" onClick={restar}> - </button>
                <span> {count} </span>
                <button className="btnSumar" onClick={sumar}> + </button>
                <button className="btnAgregar" onClick={agregar}>Add to Cart</button>
            </div>
        </div>
    )
}

export default ItemCount;