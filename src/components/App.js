import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer'
import ImagePopup from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/api';
import avatar from '../images/avatar.jpg';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import DeleteConfirmationPopup from './DeleteConfirmationPopup';


function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [cardToDelete, setCardToDelete] = React.useState(undefined);
    const [selectedCard, setSelectedCard] = React.useState(undefined);
    const [currentUser, setCurrentUser] = React.useState({name: 'Жак-Ив Кусто', about: 'Исследователь океана', avatar: avatar});
    const [cards, setCards] = React.useState([]);

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
        setCardToDelete(undefined);
        setSelectedCard(undefined);
    }

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    function handleUpdateUser({name, about}) {
        api.patchEditProfile(name, about)
        .then (userInfoResponse => {
            setCurrentUser(userInfoResponse);
            closeAllPopups();
        })
        .catch(error => console.log(error));
    }

    function handleUpdateAvatar({avatar}) {
        api.patchNewAvatar(avatar)
        .then(res => {
            setCurrentUser(res);
            closeAllPopups();
        })
        .catch(error => console.log(error));
    }

    function handleCardLike(card) {
        /** Снова проверяем, есть ли уже лайк на этой карточке */
        const isLiked = card.likes.some(i => i._id === currentUser._id);
            
        /** Отправляем запрос в API и получаем обновлённые данные карточки */
        api.changeLikeCardStatus(card._id, !isLiked)
        .then(newCard => {
            /** Формируем новый массив на основе имеющегося, подставляя в него новую карточку */
            const newCards = cards.map(c => c._id === card._id ? newCard : c);
            /** Обновляем стейт */
            setCards(newCards);
        })
        .catch(error => console.log(error));
    };

    function handleCardDeleteRequest(card) {
        setCardToDelete(card);
    }

    function handleCardDelete(card) {
        api.deleteCard(card._id)
        .then(() => {
            const newCards = cards.filter(c => c._id !== card._id);
            setCards(newCards);
            closeAllPopups();
        })
        .catch(error => console.log(error));
    }

    function handleAddPlaceSubmit({name, link}) {
        api.postAddNewCard(name, link)
        .then((newCard) => {
            setCards([...cards, newCard]);
            closeAllPopups();
        })
        .catch(error => console.log(error));
    }

    React.useEffect(() => {
        Promise
            .all([api.getUserInfo(), api.getInitialCards()])
            .then(([userInfoResponse, cardsResponse]) => {
                    setCurrentUser(userInfoResponse);
                    setCards(cardsResponse);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="page">
            <CurrentUserContext.Provider value={currentUser}>
                <Header />
                <Main 
                    onEditProfile={handleEditProfileClick} 
                    onAddPlace={handleAddPlaceClick} 
                    onEditAvatar={handleEditAvatarClick} 
                    onCardClick={handleCardClick} 
                    onCardLike={handleCardLike} 
                    onCardDelete={handleCardDeleteRequest} 
                    cards={cards} />
                <EditProfilePopup 
                    isOpen={isEditProfilePopupOpen} 
                    onClose={closeAllPopups} 
                    onUpdateUser={handleUpdateUser} />
                <AddPlacePopup 
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups} 
                    onAddPlace={handleAddPlaceSubmit} />
                <EditAvatarPopup 
                    isOpen={isEditAvatarPopupOpen} 
                    onClose={closeAllPopups} 
                    onUpdateAvatar={handleUpdateAvatar} />
                <DeleteConfirmationPopup 
                    cardToDelete={cardToDelete} 
                    onConfirm={handleCardDelete} 
                    onClose={closeAllPopups} />
                <ImagePopup 
                    card={selectedCard} 
                    onClose={closeAllPopups} />
                <Footer />
            </CurrentUserContext.Provider> 
        </div>
  );
}

export default App;