import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
    const avatarRef = React.useRef();

    function closeForm() {
        avatarRef.current.value = '';
        props.onClose();
    };

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
      
        // Передаём значения управляемых компонентов во внешний обработчик
        props.onUpdateAvatar({
            avatar: avatarRef.current.value,
        });
        
        avatarRef.current.value = '';
      }

    return (
        <PopupWithForm name="avatar" title="Обновить аватар" btnText="Сохранить" isOpen={props.isOpen} onClose={closeForm} onSubmit={handleSubmit}> 
            <fieldset className="popup__input">
                <input id="avatar-input" type="url" name="link" ref={avatarRef} placeholder="Ссылка на картинку" className="popup__info popup__info_link-avatar" required />
                <span id="avatar-input-error" className="popup__info-error popup__info-error-avatar"></span>
            </fieldset>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;