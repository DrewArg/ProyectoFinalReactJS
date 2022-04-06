import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import CartItemCount from "../CartItemCount/CartItemCount";

const Widget = () => {

    return (
        <>
            <div className="cartWidget">

                <div className="cartWidget__icon">
                    <div className="cartWidget__count">
                        <CartItemCount />
                    </div>

                    <Link to="/cart">
                        < FontAwesomeIcon icon={faCartShopping} />
                    </Link>
                </div>

            </div>
        </>
    )
}

export default Widget