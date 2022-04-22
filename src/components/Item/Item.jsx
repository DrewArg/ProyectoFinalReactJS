import './Item.css';
import { Link } from 'react-router-dom'
import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useCartContext } from '../../context/CartContext'

function Item({ prod: product }) {

    const [itemQuantity, setItemQuantity] = useState(false);
    const { addToCart } = useCartContext();

    const onAdd = (quantity) => {
        addToCart({ ...product, quantity: quantity });
        setItemQuantity(true);
    }

    return (

        <>

            <div>

                <div className={`tarjeta__contorno--${product.type}`}>
                    <div className="tarjeta__superior">
                        <div className="tarjeta__superior--tipo" id="tipoTarjeta">
                            {product.type}
                        </div>
                    </div>

                    <div className="tarjeta__tarjetaReal">
                        <div className="tarjeta__medio">
                            <div className="tarjeta__medio--nombre" id="nombreTarjeta">{product.name}</div>
                            <Link to={`detail/${product.id}`}>
                                <div className="tarjeta__medio--imagen" id="imagenTarjeta">
                                    <img src={product.img} alt={product.alt} />
                                </div>
                            </Link>
                        </div>
                        <div className="tarjeta__inferior">
                            <div className="tarjeta__inferior--descripcion">
                                {product.description}
                            </div>
                        </div>

                        <ItemCount initial={1} stock={product.stock} onAdd={onAdd} product={product} />

                    </div>

                </div>
            </div>
        </>

    )
}

export default Item