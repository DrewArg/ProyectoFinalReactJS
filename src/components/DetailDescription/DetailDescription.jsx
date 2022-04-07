import '../../components/DetailDescription/DetailDescription.css'

function DetailDescription({ product }) {
    return (
        <>
            <div className="detailContainer">
                <div className="productTitle">{product.name}</div>
                <div className="generalDescription">{seleccionarDescripcionPorTipo(product.type)}</div>
                <ul>
                    <li>Coste: {product.price}</li>
                    <li>Efecto: {devolverEfecto(product.description)}</li>
                </ul>
            </div>
        </>
    )
}

export default DetailDescription

function seleccionarDescripcionPorTipo(type) {

    switch (type) {
        case "Animal":
            return "Los animales son las cartas que se utilizan en la batalla. Todos los animales poseen un coste y un daño. Algunos de ellos tienen un efecto.";

        case "Alimento":
            return "Los alimentos sirven como 'moneda' en el juego, se utilizan para 'pagar' el coste de los demás tipos decartas y de esta manera ponerlos en juego.";

        case "Habilidad":
            return "Las habilidades son cartas que se juegan desde la mano del jugador pagando su coste en alimentos. Estas habilidades sirven como modificadores de los animales aliados o enemigos. Las habilidades son cartas que luego de utilizadas, se destruyen.";

        case "Habitat":
            return "Los habitats son cartas similares a las habilidades pero que se mantienen en juego indefinidamente.";
    }
}

function devolverEfecto(description) {
    if (description === '') {
        description = 'Esta carta no contiene ningún efecto.'
    }
    return description;
}


