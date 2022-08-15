import '@testing-library/jest-dom';
import { render, screen, fireEvent, queryByAttribute } from '@testing-library/react';
import Header from './Header';
import { StoreProvider } from '../../store/store';
import { BrowserRouter as Router} from 'react-router-dom'

window.scrollTo = jest.fn()

test('renders component header Products', () => {
  render(<StoreProvider><Router><Header /></Router></StoreProvider>);
  const headerProducts = screen.getByText('Productos');
  expect(headerProducts).toBeInTheDocument();;
});

test('renders component header Añadir Producto', () => {
	render(<StoreProvider><Router><Header /></Router></StoreProvider>);
  const headerAddProduct = screen.getByText('Añadir Producto');
  expect(headerAddProduct).toBeInTheDocument();
});

test('renders component header Cart', () => {
  render(<StoreProvider><Router><Header /></Router></StoreProvider>);
  const headerAddProduct = screen.getByTitle('cart');
  expect(headerAddProduct).toBeInTheDocument();
});

test('Should call handleCheckbox', () => {
	const getById = queryByAttribute.bind(null, 'id');
  const view = render(<StoreProvider><Router><Header /></Router></StoreProvider>);
	const table = getById(view.container, 'checkbox');
});
