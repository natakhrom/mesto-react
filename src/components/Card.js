import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function Card({card, onCardClick, onCardLike, onCardDelete}) {
    const currentUser = React.useContext(CurrentUserContext); 
    
    /** Определяем, являемся ли мы владельцем текущей карточки */
    const isOwn = card.owner._id === currentUser._id;
    /** Создаём переменную, которую после зададим в `className` для кнопки удаления */
    const cardDeleteButtonClassName = (
    `card__button-trash ${isOwn ? 'card__button-trash_visible' : 'card__button-trash_hidden'}`
  );

    /** Определяем, есть ли у карточки лайк, поставленный текущим пользователем */
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    /** Создаём переменную, которую после зададим в `className` для кнопки лайка */
    const cardLikeButtonClassName = `card__button-like ${isLiked ? 'card__button-like_active' : 'card__button-like'}`;

    function handleClick() {
        onCardClick(card);
    }

    function handleLikeClick() {
        onCardLike(card);
    }

    function handleDeleteClick() {
        onCardDelete(card);
    }

    return (
        <li className="card">
            <div className="card__image" style={{ backgroundImage: `url(${card.link})`}} onClick={handleClick}></div>
            <h2 className="card__text">{card.name}</h2>
            <button className={cardLikeButtonClassName} onClick={handleLikeClick} type="button" aria-label="кнопка Нравится"></button>
            <div className="card__counter-likes">{card.likes.length}</div>
            <button className={cardDeleteButtonClassName} onClick={handleDeleteClick}  type="button" aria-label="кнопка Удалить"></button>
        </li>
    );
}

export default Card;