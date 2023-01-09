import React from 'react';
import Modal from 'react-modal';
import items from './data.json';
const Model = ({ showModal, name}) => {
    showModal = () => {
        this.setState({ show: true });
      };
    this.state = {
        show: false
      };
      this.showModal = this.showModal.bind(this);
      
    return (

            <div className="modal" > 
                    <div className='modal__content'>
                        <h1 className='modal__title'>BIll</h1>
                        <p1 className='modal__description'>Thanks for paying
                        <table>
                            <th><tr><td>Name</td><td>Price</td></tr></th>
                            <tr>
                                <td>{items.name}</td>
                                <td>{items.price}</td></tr></table></p1>
                                <button className="Bill" onClick={Model}>Pay now</button>
                    </div>
            </div>
    );
}

export default Modal;