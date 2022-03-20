import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFetch } from '../../helpers/gFetch'
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import DetailDescription from '../../components/DetailDescription/DetailDescription'
import styles from '../ItemDetailContainer/ItemDetailContainer.css'

function ItemDetailContainer() {
    const [loading, setLoading] = useState(true);
    const [producto, setProducto] = useState({})

    const { detailId } = useParams()

    useEffect(() => {
        if (detailId) {
            getFetch
                .then(prod => prod.find(carta => carta.id === detailId))
                .then(prod => setProducto(prod))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        } else {
            getFetch
                .then(resp => setProducto(resp))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
    }, [detailId])

    return (
        <>
            <div className="detailBackground">

                {
                    loading ? <h2 className="cargando"> Cargando...</h2> : <ItemDetail prod={producto} />
                }

                {
                    loading ? <></> : <DetailDescription carta={producto} />
                }


            </div>
        </>
    )
}

export default ItemDetailContainer