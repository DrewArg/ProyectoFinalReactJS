import CartItem from '../CartItem/CartItem';
import { addDoc, collection, doc, documentId, getDocs, getFirestore, query, updateDoc, where, writeBatch } from 'firebase/firestore'
import FeedBackMessage from '../FeedBackMessage/FeedBackMessage'
import { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import '../CartList/CartList.css'

function CartList() {
    const { cartList, emptyCart, totalValue } = useCartContext();
    const [sentOrder, setSentOrder] = useState(false);
    const [orderId, setOrderId] = useState();
    const [productId, setProductId] = useState();

    let message = '¡Muchas gracias por tu compra! Tu ID de seguimiento es: "' + orderId + '". Cualquier cosa no dudes en contactarnos al mail comprasbpra@info.com';

    async function sendOrder() {
        let order = {};

        order.buyer = { name: 'Andrés', phone: 123123123, email: 'andresfabbiano5@gmail.com' };

        order.products = cartList.map(cartItem => {
            const id = cartItem.id;
            const name = cartItem.name;
            const price = cartItem.price * cartItem.quantity;
            setProductId(id);
            return { id, name, price };
        })

        order.date = new Date();

        order.total = totalValue();

        const database = getFirestore();
        const queryOrders = collection(database, 'orders');
        await addDoc(queryOrders, order)
            .then(response => setOrderId(response.id))
           

        setSentOrder(true);

    }

    // async function updateStock() {
    //     const database = getFirestore();
    //     const queryUpdate = doc(database, 'products', '26ljuOnVLp7BaGhlU0qd')

    //     updateDoc(queryUpdate, { stock: 99 })

    //     const queryProducts = collection(database, 'products')

    //     const queryUpdateStock = query(queryProducts, where(documentId(), 'in', cartList.map(it = it.id)));

    //     const batch = writeBatch(queryUpdateStock);

    //     await getDocs(queryUpdateStock)
    //         .then(response => response.docs.forEach(res => batch.update(res.ref, { stock: res.data().stock = cartList.find(item => item.id === res.id).quantity })))

    //     batch.commmit();

    // }

    return (
        <>
            <div className="detailBackground">
                <div className="cartBackground" >

                    {
                        sentOrder ? <FeedBackMessage messageType='warning' messageString={message} buttonTitle='Volver al menú' buttonStyle='basic' buttonLinkTo='' /> :
                            <>
                                <ul>
                                    {cartList.map((cartItem) => <CartItem item={cartItem} />)}
                                </ul>
                                <div className="cartButtons">
                                    <button onClick={() => { emptyCart() }}>Vaciar Carrito</button>
                                    <button onClick={() => { sendOrder() }}>Finalizar Compra</button>
                                </div>
                                <div className="cartPrice">
                                    <div>Total compra: ${totalValue()}</div>
                                </div>
                            </>
                    }

                </div>
            </div>
        </>

    )


}

export default CartList

