import React from 'react';
import PopupWithForm from './PopupWithForm'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const currentUser = React.useContext(CurrentUserContext);

    function handleNameChange(e) {
        setName(e.target.value);
    };

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    };

    function closeForm() {
        setName(currentUser.name);
        setDescription(currentUser.about);
        onClose();
    };

    function handleSubmit(e) {
        /** Запрещаем браузеру переходить по адресу формы */
        e.preventDefault();
      
        /** Передаём значения управляемых компонентов во внешний обработчик */
        onUpdateUser({
          name,
          about: description,
        });
      }

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
      }, [currentUser]);

    return (
        <PopupWithForm name="edit-form" title="Редактировать профиль" btnText="Сохранить" isOpen={isOpen} onClose={closeForm} onSubmit={handleSubmit}> 
            <fieldset className="popup__input">
                <input id="name-input" type="text" name="firstname" value={name} placeholder="Имя" className="popup__info popup__info_name" required pattern="[A-Za-zА-Яа-я -]{1,}" minLength="2" maxLength="40" onChange={handleNameChange} /> 
                <span id="name-input-error" className="popup__info-error"></span>
                <input id="about-input" type="text" name="about" value={description} placeholder="О себе" className="popup__info popup__info_job" required minLength="2" maxLength="200" onChange={handleDescriptionChange} />
                <span id="about-input-error" className="popup__info-error"></span>
            </fieldset>
        </PopupWithForm>
    )
}

export default EditProfilePopup;