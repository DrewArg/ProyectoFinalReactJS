import { useCartContext } from '../../context/CartContext/CartContext'
import FeedBackMessage from '../FeedBackMessage/FeedBackMessage'
import CartList from '../CartList/CartList';
import { useFeedbackMessageContext } from '../../context/FeedbackMessageContext/FeedbackMessageContext'
import FeedbackMessageQueueContainer from '../../container/FeedbackMessageContainer/FeedbackMessageQueueContainer'

function Cart() {
    const { removeMessage, messages } = useFeedbackMessageContext();
    const { noItems } = useCartContext();
    return (
        <>
            {
                noItems ?
                    <>
                        <FeedbackMessageQueueContainer messages={messages} removeMessage={removeMessage} />
                        <FeedBackMessage messageType='warning' messageString={message} buttonTitle='Ir de compras' buttonStyle='basic' buttonLinkTo='' /> </>
                    :

                    <>

                        <FeedbackMessageQueueContainer messages={messages} removeMessage={removeMessage} />
                        <CartList />
                    </>
            }
        </>
    )
}

export default Cart

let message = 'Lamentablemente tu carrito se encuentra vacio en estos momentos, pasa por la tienda para ver nuestros artículos disponibles.'