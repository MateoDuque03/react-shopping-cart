import { createSlice } from '@reduxjs/toolkit';

const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState: { products: [], cart: [], modal: {show: false, description: ''} },
    reducers: {
        setAllProducts: (state, action) => {
            return {...state, products: action.payload};
        },
        addNewProduct: (state, action) => {
            state.products.push(action.payload);
        },
        addProductToCart: (state, action) => {
            const indexCartProduct = state.cart.findIndex(cart => cart.idProduct === action.payload.idProduct);
            if(indexCartProduct > -1) {
                const currentProduct = state.cart[indexCartProduct]
                state.cart[indexCartProduct] = {...currentProduct, amount: currentProduct.amount + action.payload.amount}
            } else {
                state.cart.push(action.payload);
            }
        },
        infoModal: (state, action) => {
            state.modal = action.payload;
        },
        clearCart: (state, _action) => {
            state.cart = [];
        }, 
        buyProducts: (state, action) => {
            state.products = state.products.map(prod => {
                const product = state.cart.find(product => product.idProduct === prod.id);
                return {...prod, amount: prod.amount - (product?.amount ?? 0)}
            })
            state.cart = [];
        },
        deleteCartProductById: (state, action) => {
            state.cart = state.cart.filter(cart => cart.idProduct !== action.payload);
        }
    }
});

export const { 
    setAllProducts,
    addNewProduct, 
    addProductToCart, 
    infoModal, 
    clearCart, 
    buyProducts, 
    deleteCartProductById } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;