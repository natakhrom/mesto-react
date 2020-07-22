import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer'
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState('');

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setSelectedCard('');
    }

    function handleCardClick(card) {
        setSelectedCard(card.link);
    }

    return (
        <div className="page">
            <Header />
            <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
            <PopupWithForm name="edit-form" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}> 
                <fieldset className="popup__input">
                    <input id="name-input" type="text" name="firstname" defaultValue="Жак-Ив Кусто" placeholder="Имя" className="popup__info popup__info_name" required pattern="[A-Za-zА-Яа-я -]{1,}" minLength="2" maxLength="40"/> 
                    <span id="name-input-error" className="popup__info-error"></span>
                    <input id="about-input" type="text" name="about" defaultValue="Исследователь океана" placeholder="О себе" className="popup__info popup__info_job" required minLength="2" maxLength="200"/>
                    <span id="about-input-error" className="popup__info-error"></span>
                    <button type="submit" className="popup__button">Сохранить</button> 
                </fieldset>
            </PopupWithForm>
            <PopupWithForm name="new-place" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}> 
                <fieldset className="popup__input">
                    <input id="title-input" type="text" name="title" defaultValue="" placeholder="Название" className="popup__info popup__info_title" required minLength="1" maxLength="30"/> 
                    <span id="title-input-error" className="popup__info-error"></span>
                    <input id="url-input" type="url" name="link" defaultValue="" placeholder="Ссылка на картинку" className="popup__info popup__info_link" required/>
                    <span id="url-input-error" className="popup__info-error"></span>
                    <button type="submit" className="popup__button">Создать</button> 
                </fieldset>
            </PopupWithForm>
            <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}> 
                <fieldset className="popup__input">
                    <input id="avatar-input" type="url" name="link" defaultValue="" placeholder="Ссылка на картинку" className="popup__info popup__info_link-avatar" required/>
                    <span id="avatar-input-error" className="popup__info-error popup__info-error-avatar"></span>
                    <button type="submit" className="popup__button">Сохранить</button>
                </fieldset>
            </PopupWithForm>
            <PopupWithForm name="image-delete" title="Вы уверены?"> 
                <button type="submit" className="popup__button popup__button-delete">Да</button>
            </PopupWithForm>
            <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
            <Footer /> 
        </div>
  );
}

export default App;
