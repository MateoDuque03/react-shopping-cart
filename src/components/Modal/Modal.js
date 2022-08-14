import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { infoModal } from '../../store/reducers/shoppingCart';
import { modalSelector } from '../../store/selectors/shoppingCartSelectors';

const Modal = () => {
	const modal = useSelector(modalSelector)
	const dispatch = useDispatch();

	const closeModal = () => {
		dispatch(infoModal({show: false, description: ''}))
	}

  return (
    <div className={modal.show ? 'display' : 'hide'}>
        <div className='modal'>
            <div className='modal-header'>
                <h3>Information</h3>
            </div>
            <div className='modal-body'>
                <span>{modal.description}</span>
            </div>
            <div className='modal-footer'>
                <button className="btn btn-primary" onClick={ closeModal }>
                    Cerrar
                </button>
            </div>
        </div>
    </div>
  )
}

export default Modal