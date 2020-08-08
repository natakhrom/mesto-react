import React from 'react' 
import PopupWithForm from './PopupWithForm';

function DeleteConfirmationPopup({ onConfirm, cardToDelete, onClose }) {
    function handleSubmit(e) {
        /** Запрещаем браузеру переходить по адресу формы */ 
        e.preventDefault();

        onConfirm(cardToDelete);
    }

    return (
        <PopupWithForm name="image-delete" title="Вы уверены?" btnText="Да" isOpen={cardToDelete === undefined ? false : true} onClose={onClose} onSubmit={handleSubmit}/> 
    )
}

export default DeleteConfirmationPopup;