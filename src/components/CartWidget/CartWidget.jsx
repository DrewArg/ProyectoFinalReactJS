import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';


const Widget = () => {
    return (
        <>
            <Link to="/cart">
                < FontAwesomeIcon icon={faCartShopping} />
            </Link>
        </>
    )
}

export default Widget