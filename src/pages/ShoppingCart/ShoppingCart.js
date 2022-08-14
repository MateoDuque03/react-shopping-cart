import NumberFormat from "react-number-format";
import { useDispatch, useSelector } from "react-redux"
import { buyProducts, clearCart, deleteCartProductById } from "../../store/reducers/shoppingCart";
import { productsAddedToCart } from "../../store/selectors/shoppingCartSelectors"
import { TiDeleteOutline } from 'react-icons/ti'

const ShoppingCart = () => {
  const productsAdded = useSelector(productsAddedToCart);
  const dispatch = useDispatch();
  const total = productsAdded.reduce((acc, val) => acc + (val.price * val.amount), 0)
  const clearToCart = () => {
    dispatch(clearCart())
  }

  const buyCart =  () => {
    dispatch(buyProducts())
  }

  const deleteById = (id) => {
    dispatch(deleteCartProductById(id))
  }
  
  return (
    <>
      <div className='shopping-container'>
        <div className="shopping-div">
          { productsAdded.map(product => {
            return <div className='shopping-item' key={product.id}>
              <div>{product.name}</div>
              <div>{product.amount}</div>
              <div>{product.price}</div>
              <div onClick={() => {deleteById(product.id)}}><TiDeleteOutline/></div>
            </div>
            })
          }
          <div className='shopping-item'>
            <div>Total: <NumberFormat value={total} displayType={'text'} thousandSeparator={true} prefix={'$'} /></div>
          </div>
          <div className='shopping-button'>
              <button className='btn btn-primary' onClick={ buyCart }>
                Comprar
              </button>
              <button className='btn btn-primary' onClick={ clearToCart }>
                Limpiar
              </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShoppingCart