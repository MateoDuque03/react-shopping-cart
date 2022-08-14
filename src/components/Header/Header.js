import { BsCart3 } from 'react-icons/bs'
import n5 from '../../assets/n5.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
      <header>
          <nav className='nav'>
              <ul className='nav-list'>
                <li className='nav-item'><img src={n5} alt='Kiwi standing on oval'/></li>
                  <li className='nav-item'><Link to='/product'>Productos</Link></li>
                  <li className='nav-item'><Link to='/new-product'>Añadir Producto</Link></li>
                  <li className='nav-item'><Link to='/shopping-cart'><BsCart3/></Link></li>
              </ul>
          </nav>
      </header>
  )
}

export default Header