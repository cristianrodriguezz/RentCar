import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './popUp.css'

const Popups = ({children,navigate, type}) => {
  const [open, setOpen] = useState(true);
  const closeModal = () => setOpen(false);

  return (
    <div>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal">
          <div className="close" onClick={closeModal} >
            &times;
          </div>
          {
            type === 'wrong'
            ?
            <FontAwesomeIcon className='wrongIcon' icon={faCircleXmark} />
            :
            <FontAwesomeIcon className='acceptIcon' icon={faCircleCheck}  />
          }
          <p className='messageModal'>{children}</p>
        </div>
      </Popup>
    </div>
  );
}

export default Popups