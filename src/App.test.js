import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';
import { StoreProvider } from './store/store';

window.scrollTo = jest.fn();

test('renders component header Products', () => {
  render(<StoreProvider><App /></StoreProvider>);
  const headerProducts = screen.getByText('Productos');
  expect(headerProducts).toBeInTheDocument();;
});

test('renders component header Añadir Producto', () => {
  render(<StoreProvider><App /></StoreProvider>);
  const headerAddProduct = screen.getByText('Añadir Producto');
  expect(headerAddProduct).toBeInTheDocument();
});

test('renders component header Cart', () => {
  render(<StoreProvider><App /></StoreProvider>);
  const headerAddProduct = screen.getByTitle('cart');
  expect(headerAddProduct).toBeInTheDocument();
});
