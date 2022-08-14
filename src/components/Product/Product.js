import { useState, useEffect } from 'react'
import NumberFormat from 'react-number-format';
import { useDispatch } from "react-redux";
import { addProductToCart, infoModal } from '../../store/reducers/shoppingCart';

const Product = ({product}) => {
    const [counter, setCounter] = useState(1);
    const dispatch = useDispatch();

    const increase = () => {
      if(product.amount >= counter + 1) {
        setCounter(count => count + 1);
      }
    };
   
    const decrease = () => {
      if(counter > 1) {
        setCounter(count => count - 1);
      }
    };

    const addProduct = () => {
      if(product.amount > 0) {
        dispatch(addProductToCart({idProduct: product.id, amount: counter}))
        dispatch(infoModal({show: true, description: 'El producto se agrego correctamente'}))
      }else {
        dispatch(infoModal({show: true, description: 'No hay stock para este producto'}))
      }
    }

  return (
    <div className="product-item">
          <div className="product-header">
            <h2 className="product-title">{ product.name }</h2>
          </div>
          <div className="product-body">
            <p className="product-text">Precio: <NumberFormat value={product.price} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
            <p className="product-text">Disponible: {product.amount}</p>
          </div>
          <div className="product-footer">
            <div className='div-product-footer'>
              <button className="btn btn-primary" onClick={ increase }>
                +
              </button>
              <button className="btn btn-primary">
                {counter}
              </button>
              <button className="btn btn-primary" onClick={ decrease }>
                -
              </button>
            </div>
            <button className="btn btn-primary" onClick={ addProduct }>
              Agregar
            </button>
          </div>
    </div>
  )
}

export default Product