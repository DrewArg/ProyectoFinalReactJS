import '../Item/Item.css'
import Item from '../Item/Item'

function ItemList({ products }) {
    return (
        <>
            <div className="tarjeta" >
                {products.map((product) =>
                 <Item key={product.id} 
                prod={product} />)}
            </div>

        </>
    )
}

export default ItemList


