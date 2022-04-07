import CartItem from '../CartItem/CartItem';
import { addDoc, collection, doc, documentId, getDocs, getFirestore, query, updateDoc, where, writeBatch } from 'firebase/firestore'
import { useCartContext } from '../../context/CartContext'
import '../CartList/CartList.css'

function CartList() {
    const { cartList, emptyCart, totalValue } = useCartContext();

    async function sendOrder (){


        let order = {};

        order.buyer = { name: 'Andrés', phone: 123123123, email: 'andresfabbiano5@gmail.com' };

        order.products = cartList.map(cartItem => {
            const id = cartItem.id;
            const name = cartItem.name;
            const price = cartItem.price * cartItem.quantity;
            return { id, name, price };
        })

        order.total = totalValue();

        const database = getFirestore();
        const queryCollection = collection(database, 'orders');
        await addDoc(queryCollection, order)
            .then(response => console.log(response))
            .then(({ id }) => console.log(id));

        const queryUpdate = doc(database, 'products', '26ljuOnVLp7BaGhlU0qd')

        updateDoc(queryUpdate, { stock: 99 })

        const queryProducts = collection(database, 'products')

        const queryUpdateStock = await query(queryCollection, where(documentId(), 'in', cartList.map(it = it.id)));

        const batch = writeBatch(queryUpdateStock);

        await getDocs(queryUpdateStock)
            .then(response => response.docs.forEach(res => batch.update(res.ref, { stock: res.data().stock = cartList.find(item => item.id === res.id).quantity })))

        batch.commmit();

    }

    const updateStock = () => {
        const database = getFirestore();
        const queryUpdate = doc(database, 'products', '26ljuOnVLp7BaGhlU0qd')

        updateDoc(queryUpdate, { stock: 99 })
    }

    return (
        <>
            <div className="detailBackground">
                <div className="cartBackground" >
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
                </div>
            </div>
        </>

    )
}

export default CartList