import '../ItemDetailContainer/ItemDetailContainer.css'
import { getFetch } from '../../helpers/gFetch'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailDescription from '../../components/DetailDescription/DetailDescription'
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { collection, doc, getDoc, getDocs, getFirestore, limit, query, where } from 'firebase/firestore'

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
                //mostrar componente de error 404
                console.log(error);
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
                    loading ? <></> : <DetailDescription carta={product} />
                }


            </div>
        </>
    )
}

export default ItemDetailContainer