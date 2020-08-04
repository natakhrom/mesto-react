import React from 'react';
import PopupWithForm from './PopupWithForm'

function AddPlacePopup(props) {
    const nameRef = React.useRef();
    const linkRef = React.useRef();

    function closeForm() {
        nameRef.current.value = ''
        linkRef.current.value = ''
        props.onClose();
    };

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
      
        // Передаём значения управляемых компонентов во внешний обработчик
        props.onAddPlace({
            name: nameRef.current.value,
            link: linkRef.current.value
        });

        nameRef.current.value = ''
        linkRef.current.value = ''
      }

    return (
        <PopupWithForm name="new-place" title="Новое место" btnText="Создать" isOpen={props.isOpen} onClose={closeForm} onSubmit={handleSubmit} > 
            <fieldset className="popup__input">
                <input id="title-input" type="text" name="title" ref={nameRef} placeholder="Название" className="popup__info popup__info_title" required minLength="1" maxLength="30"/> 
                <span id="title-input-error" className="popup__info-error"></span>
                <input id="url-input" type="url" name="link" ref={linkRef} placeholder="Ссылка на картинку" className="popup__info popup__info_link" required/>
                <span id="url-input-error" className="popup__info-error"></span> 
            </fieldset>
        </PopupWithForm>
    );
}

export default AddPlacePopup;