import React from 'react' 
import PopupWithForm from './PopupWithForm';

function DeleteConfirmationPopup(props) {
    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();

        props.onConfirm(props.cardToDelete);
    }

    return (
        <PopupWithForm name="image-delete" title="Вы уверены?" btnText="Да" isOpen={props.cardToDelete === undefined ? false : true} onClose={props.onClose} onSubmit={handleSubmit}/> 
    )
}

export default DeleteConfirmationPopup;