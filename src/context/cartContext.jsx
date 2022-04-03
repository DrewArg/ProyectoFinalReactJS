import { createContext, useState, useContext } from 'react'

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {

    const [cartList, setCartList] = useState([]);
    const [noItems, setNoItems] = useState(true);

    const addToCart = (cartItem) => {
        const foundItem = cartList.find((item) => item.id === cartItem.id);
        setNoItems(false);
        if (foundItem) {
            if (foundItem.quantity < cartItem.stock) {
                foundItem.quantity = foundItem.quantity + cartItem.quantity;
                setCartList([...cartList]);
            }
        } else {
            setCartList([...cartList, cartItem]);
        }
    }

    const addOneItem = (cartItem) => {
        const foundItem = cartList.find((item) => item.id === cartItem.id);
        if (foundItem) {
            setNoItems(false);
            if (cartItem.quantity < cartItem.stock) {
                cartItem.quantity = cartItem.quantity + 1;
                setCartList([...cartList]);
            }
        }
    };

    const removeOneItem = (cartItem) => {
        const foundItem = cartList.find((item) => item.id === cartItem.id);
        if (foundItem) {
            setNoItems(false);
            if (cartItem.quantity > 1) {
                cartItem.quantity = cartItem.quantity - 1;
                setCartList([...cartList]);
            }
        }
    };

    const removeItem = (id) => {
        const aux = cartList.filter((cartItem) => cartItem.id !== id);
        setCartList(aux);
        if (aux.length === 0) {
            setNoItems(true);
        }
    }

    const emptyCart = () => {
        setCartList([]);
        setNoItems(true);
    }

    const totalValue = () => {
        return cartList.reduce((acummulator, product) => acummulator + (product.price) * (product.quantity), 0);
    };

    const totalQuantity = () => {
        return cartList.reduce((acummulator, product) => acummulator += product.quantity, 0);
    };

    const itemsInCart = () => {
        let itemsQuantity = 0;
        cartList.forEach(item => {
            itemsQuantity += item.quantity;
        });
        return itemsQuantity;
    }

    return (
        <CartContext.Provider value={{ cartList, addToCart, emptyCart, removeItem, addOneItem, removeOneItem, totalValue, totalQuantity, noItems, itemsInCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
