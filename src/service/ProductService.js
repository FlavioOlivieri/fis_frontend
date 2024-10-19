import lasagna from '../assets/lasagna.png';
import cotoletta from '../assets/cotoletta.jpg';
import pepite from '../assets/pepite.jpg';
import tiramisu from '../assets/tiramisu.jpg';
import pizza from '../assets/pizza.jpg';

const ProductService = {
    getProductsSmall() {
        return Promise.resolve([
            {
                id: 1,
                name: 'Lasagna',
                price: 20 + " euro",
                image: lasagna,
                inventoryStatus: 'Disponibilità ottima',
            },
            {
                id: 2,
                name: 'Cotoletta',
                price: 10 + " euro",
                image: cotoletta,
                inventoryStatus: 'Disponibilità ottima',
            },
            {
                id: 3,
                name: 'Pepite di pollo',
                price: 5 + " euro",
                image: pepite,
                inventoryStatus: 'Disponibilità scarsa',
            },
            {
                id: 4,
                name: 'Tiramisù',
                price: 8 + " euro",
                image: tiramisu,
                inventoryStatus: 'Esaurito',
            },
            {
                id: 5,
                name: 'Pizza Margherita',
                price: 7 + " euro",
                image: pizza,
                inventoryStatus: 'Disponibilità scarsa',
            },
        ]);
    },
};

export { ProductService };