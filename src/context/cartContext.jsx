import { createContext, useState, useContext } from 'react'

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {

    const [cartList, setCartList] = useState([]);

    const addToCart = (item) => {
        setCartList([...cartList, item]);
    }

    const addOneItem = (cartItem) => {
        const foundItem = cartList.find((item) => item.id === cartItem.id);
        if (foundItem) {
            if (cartItem.quantity < 10) {
                cartItem.quantity = cartItem.quantity + 1;
                setCartList([...cartList]);
            }
        }
    };

    const removeOneItem = (cartItem) => {
        const foundItem = cartList.find((item) => item.id === cartItem.id);
        if (foundItem) {
            if (cartItem.quantity > 1) {
                cartItem.quantity = cartItem.quantity - 1;
                setCartList([...cartList]);
            }
        }
    };



    const removeItem = (id) => {
        const aux = cartList.filter((cartItem) => cartItem.id !== id);
        setCartList(aux);
    }

    const emptyCart = () => {
        setCartList([]);
    }

    const totalValue = () => {
        return cartList.reduce((a, b) => a + (b.price) * (b.quantity), 0);
    };

    return (
        <CartContext.Provider value={{ cartList, addToCart, emptyCart, removeItem, addOneItem, removeOneItem, totalValue }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider