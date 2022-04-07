import '../Item/Item.css'
import Item from '../Item/Item'

function ItemList({ products }) {
    return (
        <>
            <div className="tarjeta" >
                {products.map((product) => <Item prod={product} />)}
            </div>
        </>
    )
}

export default ItemList



