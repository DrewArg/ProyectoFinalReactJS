import { Link } from 'react-router-dom';
import '../LinkButton/LinkButton.css'

function LinkButton({ title, style, linkTo }) {
    return (
        <Link to={`/${linkTo}`} >
            <button className={`${style}`}>{title}</button>
        </Link >
    )
}

export default LinkButton