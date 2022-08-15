import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ShoppingCart from './ShoppingCart';
import { StoreProvider } from '../../store/store';
import { BrowserRouter as Router} from 'react-router-dom'

window.scrollTo = jest.fn();

test('renders component shoppingCart with word Total', () => {
  render(<StoreProvider><Router><ShoppingCart /></Router></StoreProvider>);
  const headerProducts = screen.getByText('Total:');
  expect(headerProducts).toBeInTheDocument();;
});

test('renders component shoppingCart button with word Comprar', () => {
	render(<StoreProvider><Router><ShoppingCart /></Router></StoreProvider>);
  const headerAddProduct = screen.getByText('Comprar');
  expect(headerAddProduct).toBeInTheDocument();
});

test('renders component shoppingCart button with word Limpiar', () => {
	render(<StoreProvider><Router><ShoppingCart /></Router></StoreProvider>);
  const headerAddProduct = screen.getByText('Limpiar');
  expect(headerAddProduct).toBeInTheDocument();
});
