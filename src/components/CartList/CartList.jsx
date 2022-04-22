import CartItem from '../CartItem/CartItem';
import { addDoc, collection, getFirestore, } from 'firebase/firestore'
import FeedBackMessage from '../FeedBackMessage/FeedBackMessage'
import { useState } from 'react'
import { useCartContext } from '../../context/CartContext/CartContext'
import '../CartList/CartList.css'

function CartList() {
    const { cartList, emptyCart, totalValue } = useCartContext();
    const [orderId, setOrderId] = useState(null);
    const [sentOrder, setSentOrder] = useState(false);
    const [lastPart, setLastPart] = useState(false);
    const [formData, setFormData] = useState({ email: '', name: '', phone: '' })
    const [verifiedEmail, setVerifiedEmail] = useState({ email: '' });

    let message = '¡Muchas gracias por tu compra! Tu ID de seguimiento es: "' + orderId + '". Cualquier cosa no dudes en contactarnos al mail comprasbpra@info.com';

    async function sendOrder() {
        let order = {};

        order.buyer = formData;

        order.products = cartList.map(cartItem => {
            const id = cartItem.id;
            const name = cartItem.name;
            const price = cartItem.price * cartItem.quantity;
            return { id, name, price };
        })

        order.date = new Date();

        order.total = totalValue();

        const database = getFirestore();
        const queryOrders = collection(database, 'orders');
        await addDoc(queryOrders, order)
            .then(response => setOrderId(response.id))
            .then(setSentOrder(true))
            .then(handleEmtpyCart())
            .catch(error => console.log(error))
            ;
    }
    const handleEmtpyCart = () => {
        setTimeout(() => {
            emptyCart()
        }, 10000);

    }

    const handleFormDataChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleVerifiedEmailChange = (e) => {
        setVerifiedEmail({
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <div className="detailBackground">
                <div className="cartBackground" >

                    {
                        sentOrder
                            ?

                            orderId !== null ?
                                <>

                                    <FeedBackMessage messageType='warning' messageString={message} buttonTitle='Volver al menú' buttonStyle='basic' buttonLinkTo='' />

                                </>
                                : <>
                                    <h3 className="cargandoId">Cargando tu ID de operación...</h3>
                                </>
                            :
                            lastPart ?
                                formData.email === '' || formData.name === '' || formData.phone === '' || verifiedEmail === '' ?
                                    <>
                                        <div className="formulario">
                                            <h3>Formulario de Compra</h3>
                                            <div className="formulario__div">Total de la compra: ${totalValue()}</div>
                                            <div className="errorFormulario">Debes completar todos los campos obligatorios(*)</div>

                                            <form className="form">

                                                <label>Nombre: (*)</label>
                                                <input type="text" name="name" placeholder="Ingrese su nombre" value={formData.name} onChange={handleFormDataChange} />
                                                <label>Número telefónico: (*)</label>
                                                <input type="number" name="phone" placeholder="Ingrese su número telefónico" value={formData.phone} onChange={handleFormDataChange} />
                                                <label>Email: (*)</label>
                                                <input type="email" name="email" placeholder="Ingrese su correo electrónico" value={formData.email} onChange={handleFormDataChange} />
                                                <label>Confirme su email: (*)</label>
                                                <input type="email" name="email" placeholder="Reingrese su correo electrónico" value={verifiedEmail.email} onChange={handleVerifiedEmailChange} />
                                                <br />
                                            </form>
                                        </div>
                                    </>
                                    :
                                    verifiedEmail.email === formData.email ?
                                        <>
                                            <div className="formulario">
                                                <h3>Formulario de Compra</h3>
                                                <div className="formulario__div">Total de la compra: ${totalValue()}</div>

                                                <form className="form">

                                                    <label>Nombre: (*)</label>
                                                    <input type="text" name="name" placeholder="Ingrese su nombre" value={formData.name} onChange={handleFormDataChange} />
                                                    <label>Número telefónico: (*)</label>
                                                    <input type="number" name="phone" placeholder="Ingrese su número telefónico" value={formData.phone} onChange={handleFormDataChange} />
                                                    <label>Email: (*)</label>
                                                    <input type="email" name="email" placeholder="Ingrese su correo electrónico" value={formData.email} onChange={handleFormDataChange} />
                                                    <label>Confirme su email: (*)</label>
                                                    <input type="email" name="email" placeholder="Reingrese su correo electrónico" value={verifiedEmail.email} onChange={handleVerifiedEmailChange} />
                                                    <br />
                                                    <button onClick={() => { sendOrder() }}>Finalizar Compra</button>
                                                </form>
                                            </div>
                                        </>
                                        : <>
                                            <div className="formulario">
                                                <h3>Formulario de Compra</h3>
                                                <div className="formulario__div">Total de la compra: ${totalValue()}</div>
                                                <div className="errorFormulario">Los emails ingresados no coinciden.</div>

                                                <form className="form">

                                                    <label>Nombre: (*)</label>
                                                    <input type="text" name="name" placeholder="Ingrese su nombre" value={formData.name} onChange={handleFormDataChange} />
                                                    <label>Número telefónico: (*)</label>
                                                    <input type="number" name="phone" placeholder="Ingrese su número telefónico" value={formData.phone} onChange={handleFormDataChange} />
                                                    <label>Email: (*)</label>
                                                    <input type="email" name="email" placeholder="Ingrese su correo electrónico" value={formData.email} onChange={handleFormDataChange} />
                                                    <label>Confirme su email: (*)</label>
                                                    <input type="email" name="email" placeholder="Reingrese su correo electrónico" value={verifiedEmail.email} onChange={handleVerifiedEmailChange} />
                                                    <br />
                                                </form>
                                            </div>
                                        </>

                                : <>
                                    <ul>
                                        {cartList.map((cartItem) => <CartItem item={cartItem} />)}
                                    </ul>
                                    <div className="cartButtons">
                                        <button onClick={() => { emptyCart() }}>Vaciar Carrito</button>
                                        <button onClick={() => { setLastPart(true) }}>Finalizar Compra</button>
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