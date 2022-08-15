import NumberFormat from "react-number-format";
import { useDispatch, useSelector } from "react-redux"
import { addProductToCart, buyProducts, clearCart, deleteCartProductById, infoModal } from "../../store/reducers/shoppingCart";
import { productsAddedToCart } from "../../store/selectors/shoppingCartSelectors"
import { TiDeleteOutline } from 'react-icons/ti'

const ShoppingCart = () => {
  const productsAdded = useSelector(productsAddedToCart);
  const dispatch = useDispatch();
  const totalReduce = (acc, val) => acc + (val.price * val.amount);
  const total = productsAdded.reduce(totalReduce, 0)
  const localStoreProducts = JSON.parse(localStorage.getItem('cartProducts'));
  if (localStoreProducts && productsAdded.length === 0 ) {
    localStoreProducts.forEach(element => {
      dispatch(addProductToCart(element))
    });
  }

  const clearToCart = () => {
    dispatch(clearCart())
    localStorage.clear();
  }

  const buyCart =  () => {
    dispatch(buyProducts())
    localStorage.clear();
    dispatch(infoModal({show: true, description: '¡Felicidades por su compra!'}))
  }

  const deleteById = (id) => {
    dispatch(deleteCartProductById(id))
    const localStoreProducts = JSON.parse(localStorage.getItem('cartProducts'))
    if(localStoreProducts) {
      const product = localStoreProducts.filter(product => product.idProduct !== id)
      localStorage.setItem('cartProducts', JSON.stringify(product));
    }
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
              <div title="Eliminar" className='icon-delete' onClick={() => {deleteById(product.id)}}><TiDeleteOutline/></div>
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