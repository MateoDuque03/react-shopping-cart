import { useDispatch } from "react-redux";
import { addNewProduct, infoModal } from "../../store/reducers/shoppingCart";
import uuid from 'react-uuid'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const NewProduct = () => {
  const [infoProduct, setInfoProduct] = useState({ name: '', price: '', amount: ''})
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const inputChange = (event) => {
    event.preventDefault();
    setInfoProduct({
      ...infoProduct,
      [event.target.name]: event.target.value
    })
  }

  const addProduct = (e) => {
    e.preventDefault();
    if(infoProduct.name && infoProduct.amount && infoProduct.price) {
      const { name, price, amount } = infoProduct;
      dispatch(addNewProduct({
        name,
        price,
        amount,
        "id": uuid()
      }))
      setInfoProduct({ name: '', price: '', amount: ''})
      dispatch(infoModal({show: true, description: '¡Se creó el producto correctamente!'}))
      navigate('/')
    } else {
      dispatch(infoModal({show: true, description: '¡Ingrese la información correspondiente en los campos!'}))
    }
  }
  return (
    <>
      <div className="new-product-container">
        <div className="form-product">
          <form action="#" className="login-form">
            <input type="text" name="name" placeholder="Ingrese nombre..." className='input-product' onChange={inputChange} value={infoProduct.name} />
            <input type="text" name="price" placeholder="Ingrese precio..." className='input-product' onChange={inputChange} value={infoProduct.price}/>
            <input type="text" name="amount" placeholder="Ingrese cantidad.." className='input-product' onChange={inputChange} value={infoProduct.amount}/>
            <button type="submit" className="btn btn-primary" onClick={addProduct}>Crear producto</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default NewProduct