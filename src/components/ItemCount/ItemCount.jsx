import { useState } from 'react'
import styles from '../ItemCount/ItemCount.css'
const ItemCount = ({ initial, stock, onAdd }) => {
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
    }

    return (
        <div>
            <button className="btnRestar" onClick={restar}> - </button>
            <span> {count} </span>
            <button className="btnSumar" onClick={sumar}> + </button>
            <button className="btnAgregar" onClick={agregar}>Add to Cart</button>
        </div>
    )
}

export default ItemCount

