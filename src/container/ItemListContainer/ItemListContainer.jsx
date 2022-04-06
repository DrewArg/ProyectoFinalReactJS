import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/ItemList/ItemList';
import '../ItemListContainer/ItemListContainer.css'
import Titulo from '../../components/Titulo/Titulo'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'


const ItemListContainer = () => {

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const { typeId } = useParams();

    useEffect(() => {

        async function getEverything() {
            try {
                const database = getFirestore();
                const queryCollection = collection(database, 'products')

                if (typeId) {
                    const filterType = query(queryCollection, where('type', '==', typeId));
                    const response = await getDocs(filterType);
                    setProducts(response.docs.map(p => ({ id: p.id, ...p.data() })));
                    setLoading(false);
                } else {
                    const response = await getDocs(queryCollection);
                    setProducts(response.docs.map(p => ({ id: p.id, ...p.data() })));
                    setLoading(false);
                }
            } catch (error) {
                //mostrar componente de error 404
                console.log(error);
            }

        }

        getEverything();

    }, [typeId])


    return (
        <>
            <Titulo />
            {
                loading ? <h2 className="cargando"> Cargando...</h2> : <ItemList prods={products} />
            }
        </>
    )
}

export default ItemListContainer
