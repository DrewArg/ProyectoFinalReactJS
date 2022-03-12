import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFetch } from '../../helpers/gFetch';
import ItemList from '../../components/ItemList/ItemList';
import styles from '../ItemListContainer/ItemListContainer.css'

const ItemListContainer = ({ saludo }) => {

    const [loading, setLoading] = useState(true);
    const [prods, setProds] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getFetch
                .then(resp => setProds(resp.filter(prod => prod.categoria === id)))
                .catch(err => console.log(err))
                .finally(() => setLoading(false));
        } else {
            getFetch
                .then(resp => setProds(resp))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
    }, [id])

    return (
        <>
            <div className="saludo">{saludo}</div>
            {
                loading ? <h2 className="cargando"> Cargando...</h2> : <ItemList prods={prods} />
            }
        </>
    )
}

export default ItemListContainer
