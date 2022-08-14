import { useSelector } from 'react-redux';
import Product from '../../components/Product/Product';
import { cartProductsSelector } from '../../store/selectors/shoppingCartSelectors';

const Products = () => {
  const products = useSelector(cartProductsSelector)

  return (
    <>
      <div className="product-container">
        {
          products.map(data => {
            return <Product key={data.id} product={data} />
          })
        }
      </div>
    </>
  )
}

export default Products