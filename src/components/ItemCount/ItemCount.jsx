import '../ItemCount/ItemCount.css'
import { useState } from 'react'
import FloatingFeedbackMessage from '../FloatingFeedbackMessage/FloatingFeedbackMessage'

const ItemCount = ({ initial, stock, onAdd, product }) => {
    const [count, setCount] = useState(initial)
    const [show, setShow] = useState(false)

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
        setShow(true);
        // setCount(1);
    }

    return (
        <div>
            <div className="tarjeta__precio">
                <button className="btnRestar" onClick={restar}> - </button>
                <span> {count} </span>
                <button className="btnSumar" onClick={sumar}> + </button>
                <button className="btnAgregar" onClick={agregar}>Add to Cart</button>
                {/* <FloatingFeedbackMessage typeOfMessage="confirmation" show={show} message={"¡" + count + " copias de " + product.name + " fueron agregadas al carrito!"} /> */}
            </div>
        </div>
    )
}

export default ItemCount;

