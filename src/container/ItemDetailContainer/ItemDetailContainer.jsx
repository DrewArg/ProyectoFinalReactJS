import '../ItemDetailContainer/ItemDetailContainer.css'
import { getFetch } from '../../helpers/gFetch'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailDescription from '../../components/DetailDescription/DetailDescription'
import ItemDetail from '../../components/ItemDetail/ItemDetail';

function ItemDetailContainer() {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({})

    const { detailId } = useParams()

    useEffect(() => {
        if (detailId) {
            getFetch
                .then(prod => prod.find(carta => carta.id === detailId))
                .then(prod => setProduct(prod))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        } else {
            getFetch
                .then(resp => setProduct(resp))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
    }, [detailId])

    return (
        <>
            <div className="detailBackground">

                {
                    loading ? <h2 className="cargando"> Cargando...</h2> : <ItemDetail prod={product} />
                }

                {
                    loading ? <></> : <DetailDescription carta={product} />
                }


            </div>
        </>
    )
}

export default ItemDetailContainer