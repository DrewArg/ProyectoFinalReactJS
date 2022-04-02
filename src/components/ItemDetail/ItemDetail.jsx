import '../Item/Item.css';
import '../ItemCount/ItemCount.css'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext'
import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail({ prod }) {

    const [isCantidad, setIsCantidad] = useState(false);
    const { addToCart } = useCartContext();
   

    const onAdd = (cantidad) => {
        addToCart({ ...prod, quantity: cantidad });
        setIsCantidad(true);
    }
    
    return (
        <div>
            <div className="tarjeta" key={prod.id}>
                <div className={`tarjeta__contorno--${prod.type}`}>
                    <div className="tarjeta__superior">
                        <div className="tarjeta__superior--tipo" id="tipoTarjeta">{prod.type}</div>
                    </div>
                    <div className="tarjeta__tarjetaReal">
                        <div className="tarjeta__medio">
                            <div className="tarjeta__medio--nombre" id="nombreTarjeta">{prod.name}</div>
                            <div className="tarjeta__medio--image">
                                <img src={prod.img} alt={prod.alt} />
                            </div>
                        </div>
                    </div>
                    <div className="tarjeta__inferior">
                        {isCantidad ?
                            <>
                                <Link to='/'>
                                    <button className="btnAgregar">Seguir comprando</button>
                                </Link>
                                <Link to='/cart'>
                                    <button className="btnAgregar">Ir a Cart</button>
                                </Link>
                            </>
                            : <ItemCount initial={1} stock={prod.stock} onAdd={onAdd} />
                        }

                    </div>
                </div>

            </div>
        </div>
    )
}

export default ItemDetail