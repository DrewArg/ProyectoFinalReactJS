import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFetch } from '../../helpers/gFetch';
import ItemList from '../../components/ItemList/ItemList';
import '../ItemListContainer/ItemListContainer.css'
import Titulo from '../../components/Titulo/Titulo'

const ItemListContainer = () => {

    const [loading, setLoading] = useState(true);
    const [prods, setProds] = useState([]);
    const { typeId } = useParams();

    useEffect(() => {
        if (typeId) {
            getFetch
                .then(resp => setProds(resp.filter(prod => prod.type === typeId)))
                .catch(err => console.log(err))
                .finally(() => setLoading(false));
        } else {
            getFetch
                .then(resp => setProds(resp))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
    }, [typeId])

    return (
        <>
            <Titulo />
            {
                loading ? <h2 className="cargando"> Cargando...</h2> : <ItemList prods={prods} />
            }
        </>
    )
}

export default ItemListContainer
