import { useState } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import '../Item/Item.css';
import '../ItemCount/ItemCount.css'
function ItemDetail({ prod }) {

    const [isCantidad, setIsCantidad] = useState(false);

    const onAdd = (cantidad) => {
        console.log(cantidad);
        //addToCart({ ...prod, cantidad: cantidad });
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
                            : <ItemCount initial={1} stock={10} onAdd={onAdd} />
                        }

                    </div>
                </div>

            </div>
        </div>
    )
}

export default ItemDetail