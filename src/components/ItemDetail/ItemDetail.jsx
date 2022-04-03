import '../Item/Item.css';
import { useCartContext } from '../../context/CartContext'
import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import LinkButton from '../LinkButton/LinkButton';

function ItemDetail({ prod: product }) {

    const [cantidadItem, setCantidadItem] = useState(false);
    const { addToCart } = useCartContext();


    const onAdd = (cantidad) => {
        addToCart({ ...product, quantity: cantidad });
        setCantidadItem(true);
    }

    return (
        <div>
            <div className="tarjeta" key={product.id}>
                <div className={`tarjeta__contorno--${product.type}`}>
                    <div className="tarjeta__superior">
                        <div className="tarjeta__superior--tipo" id="tipoTarjeta">{product.type}</div>
                    </div>
                    <div className="tarjeta__tarjetaReal">
                        <div className="tarjeta__medio">
                            <div className="tarjeta__medio--nombre" id="nombreTarjeta">{product.name}</div>
                            <div className="tarjeta__medio--image">
                                <img src={product.img} alt={product.alt} />
                            </div>
                        </div>
                    </div>
                    <div className="tarjeta__inferior">
                        {cantidadItem ?
                            <>
                                <LinkButton title='Seguir comprando' style='basic' linkTo='' />
                                <LinkButton title='Ir al Carrito' style='basic' linkTo='cart' />
                            </>
                            : <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail