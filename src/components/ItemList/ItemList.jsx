import '../Item/Item.css'
import Item from '../Item/Item'

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



