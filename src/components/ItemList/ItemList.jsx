import Item from '../Item/Item'
import '../Item/Item.css'

function ItemList({ prods }) {
    return (
        <>
            <div className="tarjeta" >
                {prods.map((prod) => <Item prod={prod} />)}
            </div>
        </>
    )
}

export default ItemList



