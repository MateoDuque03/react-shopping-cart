import { BsCart3 } from 'react-icons/bs'
import n5 from '../../assets/n5.svg'
import { Link } from 'react-router-dom'
import dark  from '../../assets/dark.png'
import light from '../../assets/light.png'
import { useEffect, useState } from 'react'

const Header = () => {
  const handleCheckbox = (event) => {
    if (event.target.checked) {
      document.body.classList.remove('isLight');
      document.body.classList.add('isDark');
    } else {
      document.body.classList.remove('isDark');
      document.body.classList.add('isLight');
    }
  }

  useEffect( ()=> {
    document.body.classList.add('isLight');
  }, [])

  return (
      <header>
          <nav className='nav'>
              <ul className='nav-list'>
                <li className='nav-item'><img className='image' src={n5} alt='Kiwi standing on oval'/></li>
                <li className='nav-item'><Link to='/product'>Productos</Link></li>
                <li className='nav-item'><Link to='/new-product'>Añadir Producto</Link></li>
                <li className='nav-item'><Link to='/shopping-cart'><BsCart3 title='cart'/></Link></li>
                <li className='nav-item'>
                <div className="dark-mode">
                  <input type="checkbox" id="checkbox" className="dark-mode-checkbox" onChange={handleCheckbox}></input>
                  <label className="switch" htmlFor="checkbox" >
                    <div className="content-dark">
                      <img src={dark} alt="dark" ></img>
                    </div>
                    <div className="content-light">
                      <img src={light} alt="light" ></img>
                    </div>
                  </label>
                </div>
                </li>
              </ul>
          </nav>
      </header>
  )
}

export default Header