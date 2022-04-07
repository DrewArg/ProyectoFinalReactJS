import '../ItemDetailContainer/ItemDetailContainer.css'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailDescription from '../../components/DetailDescription/DetailDescription'
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import FeedBackMessage from '../../components/FeedBackMessage/FeedBackMessage';

function ItemDetailContainer() {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({})

    const { detailId } = useParams()

    useEffect(() => {

        async function getItemById() {
            try {
                const database = getFirestore();
                const queryProduct = doc(database, 'products', detailId);
                const response = await getDoc(queryProduct);

                setProduct({ id: response.id, ...response.data() })
                setLoading(false);
            } catch (error) {
                <FeedBackMessage messageType="error" messageString="Ha ocurrido un error al cargar la información del producto seleccionado, por favor regresa a la página principal." buttonTitle='Página principal' buttonStyle='basic' buttonLinkTo='' />
            }
        }
        getItemById();
    })


    return (
        <>
            <div className="detailBackground">

                {
                    loading ? <h2 className="cargando"> Cargando...</h2> : <ItemDetail prod={product} />
                }

                {
                    loading ? <></> : <DetailDescription product={product} />
                }


            </div>
        </>
    )
}

export default ItemDetailContainer