import './test-modal.css';
import Modal from './modal';
import { useState } from 'react';

function TestModal() {
    const [showModal, setShowModal] = useState(false);
    console.log(showModal);
    function handleModalState() {
        alert('test')
        setShowModal(true)
        console.log(showModal);
    }
    const closeModal = () => {
        setShowModal(false)
      }

    return (
        <div id='test-page'>
            <button id='test-bouton' onClick={handleModalState}>Ouvrir Modal</button>
            {/* <button id='test-bouton'>Ouvrir Modal</button> */}
            {/* <Modal /> */}
            {showModal && <Modal onClose={closeModal}/>}
        </div>
    );
}

export default TestModal;
