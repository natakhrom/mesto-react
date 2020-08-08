import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function Main({ onEditAvatar, onEditProfile, onAddPlace, cards, onCardClick, onCardLike, onCardDelete }) {
    const currentUser = React.useContext(CurrentUserContext);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__info">
                    <div className="profile__avatar" onClick={onEditAvatar} style={{ backgroundImage: `url(${currentUser.avatar})`}}></div>
                    <h1 className="profile__name">{currentUser.name}</h1>
                    <p className="profile__text">{currentUser.about}</p>
                    <button className="profile__edit-button" type="button" onClick={onEditProfile}></button> 
                </div>
                <button className="profile__add-button " type="button" onClick={onAddPlace}></button> 
            </section>

            <ul className="cards">
                {cards.map((card, i) => (
                    <Card 
                        key={card._id} 
                        card={card} 
                        onCardClick={onCardClick} 
                        onCardLike={onCardLike} 
                        onCardDelete={onCardDelete} />
                ))}
            </ul>
        </main>
    );
}

export default Main;