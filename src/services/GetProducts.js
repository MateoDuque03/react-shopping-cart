import products from '../products.json'

const listProducts = new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
});

export default function getProducts() {
    return listProducts
    .then(myJson => myJson);
}
