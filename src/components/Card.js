import React from 'react';

function Card({card, onCardClick}) {
    function handleClick() {
        onCardClick(card);
    }

    return (
        <li className="card">
            <div className="card__image" style={{ backgroundImage: `url(${card.link})` }} onClick={handleClick}></div>
            <h2 className="card__text">{card.name}</h2>
            <button className="card__button-like" type="button" aria-label="кнопка Нравится"></button>
            <div className="card__counter-likes">{card.likes.length}</div>
            <button className="card__button-trash"  type="button" aria-label="кнопка Удалить"></button>
        </li>
    );
}

export default Card;