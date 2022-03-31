import '../CartItem/CartItem.css'

function CartItem({ item }) {


    const onAdd = (cant) => {
        console.log(cant);
    }

    return (
        <>
            <li className="cartItemList">
                <div>
                    Nombre: {item.name}
                </div>
                <div>
                    Tipo: {item.type}
                </div>
                <div>
                    Cantidad: {item.quantity}
                </div>
                <div>
                    Precio: {item.price}
                </div>
                <button>+ 1</button>
                <button>- 1 </button>
                <button>Remover Item</button>

            </li>

        </>

    )
}

export default CartItem