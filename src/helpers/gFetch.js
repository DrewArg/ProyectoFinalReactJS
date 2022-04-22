const cartas = [
    {
        "id": '1',
        "type": "Animal",
        "name": "Lobo Gris",
        "price": 3,
        "damage": 3,
        "img": 'https://i.ibb.co/mG6Ymhy/loboGris.jpg',
        "alt": "imagen de un lobo gris",
        "description": "Gana +1 de daño por cada Lobo Gris además de este en tu tablero.",
        "stock": 120
    },
    {
        "id": '2',
        "type": "Animal",
        "name": "Camaleón",
        "price": 3,
        "damage": 2,
        "img": 'https://i.ibb.co/RYfSMgd/camaleon.jpg',
        "alt": "imagen de un camaleón",
        "description": "Puede tomar el ataque de un enemigo en reposo y sumarlo al suyo hasta el final del turno.",
        "stock": 140
    },
    {
        "id": '3',
        "type": "Animal",
        "name": "Tortuga Marina",
        "price": 3,
        "damage": 2,
        "img": 'https://i.ibb.co/4T4MPg1/tortuga-Marina.jpg',
        "alt": "imagen de una tortuga marina",
        "description": "Puede sacrificarse para evitar que el enemigo siga atacando este turno.",
        "stock": 160
    },
    {
        "id": '4',
        "type": "Animal",
        "name": "Pez Payaso",
        "price": 1,
        "damage": 1,
        "img": 'https://i.ibb.co/XxVfgZN/pez-Payaso.jpg',
        "alt": "imagen de un pez payaso",
        "description": "",
        "stock": 180
    },
    {
        "id": '5',
        "type": "Habilidad",
        "name": "Coraza",
        "price": 2,
        "damage": 0,
        "img": 'https://i.ibb.co/f4bkgPD/coraza.png',
        "alt": "imagen de una coraza que se equipa a un animal",
        "description": "Un animal pasa a ser indestructible por este turno.",
        "stock": 200
    },
    {
        "id": '6',
        "type": "Habilidad",
        "name": "Captura",
        "price": 3,
        "damage": 0,
        "img": 'https://i.ibb.co/pwJffcv/captura.jpg',
        "alt": "imagen de redes capturando a un animal",
        "description": "Evita que un enemigo pueda pasar a la línea de batalla por 2 turnos.",
        "stock": 220
    },
    {
        "id": '7',
        "type": "Habilidad",
        "name": "Aullido",
        "price": 2,
        "damage": 0,
        "img": 'https://i.ibb.co/YysJ0xM/aullido.jpg',
        "alt": "imagen de un lobo gris aullando",
        "description": "Si tienes un Lobo Gris en juego, puedes jugar a otro desde tu mazo o tu cementerio sin pagar su coste.",
        "stock": 240
    },
    {
        "id": '8',
        "type": "Habitat",
        "name": "Alcantarilla",
        "price": 3,
        "damage": 0,
        "img": 'https://i.ibb.co/zVtnMRD/alcantarilla.jpg',
        "alt": "imagen de una alcantarilla",
        "description": "Puedes revivir una rata por turno pagando su coste y ponerla en tu línea de reposo.",
        "stock": 260
    },
    {
        "id": '9',
        "type": "Habitat",
        "name": "Costa",
        "price": 6,
        "damage": 0,
        "img": 'https://i.ibb.co/gzbhWHF/costa.jpg',
        "alt": "imagen de una costa",
        "description": "Si tienes un Tiburón Blanco en juego, puedes consumir 5 alimentos para activar su efecto una segunda vez este turno.",
        "stock": 280
    },
    {
        "id": '10',
        "type": "Alimento",
        "name": "Alimento",
        "price": 0,
        "damage": 0,
        "img": 'https://i.ibb.co/m5pJfM0/alimento.jpg',
        "alt": "imagen de latas de alimento",
        "description": "",
        "stock": 300
    }
]



export const getFetch = new Promise((resolve, reject) => {
    let condition = true;
    if (condition) {
        setTimeout(() => {
            resolve(cartas)
        }, 3000);
    } else {
        reject('400 - not found');
    }
})
