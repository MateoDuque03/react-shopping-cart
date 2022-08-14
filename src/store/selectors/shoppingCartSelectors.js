import { createSelector } from '@reduxjs/toolkit';

export const productsSelector = state => state.shoppingCart.products;

export const cartSelector = state => state.shoppingCart.cart;

export const modalSelector = state => state.shoppingCart.modal;

export const cartProductsSelector = createSelector(
    productsSelector,
    cartSelector,
    (products, cartProducts) => {
        return products.map(product => {
            const cartAmount = cartProducts.find(cartProduct => cartProduct.idProduct === product.id);
            const amount = product.amount - (cartAmount?.amount ?? 0)
            return {...product, amount}
        })
    }
)

export const productsAddedToCart = createSelector(
    productsSelector,
    cartSelector,
    (products, cartProducts) => {
        return cartProducts.map(cart => {
            const product = products.find(product => product.id === cart.idProduct);
            return {...product, amount: cart.amount}
        })
    }
)