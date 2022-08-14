import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import shoppingCartReducer from './reducers/shoppingCart';

const store = configureStore({
    reducer: { shoppingCart: shoppingCartReducer }
});

export const StoreProvider = ({ children }) => (
    <Provider store={store}>{children}</Provider>
);