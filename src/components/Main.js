import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function Main(props) {
    const currentUser = React.useContext(CurrentUserContext);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__info">
                    <div className="profile__avatar" onClick={props.onEditAvatar} style={{ backgroundImage: `url(${currentUser.avatar})`}}></div>
                    <h1 className="profile__name">{currentUser.name}</h1>
                    <p className="profile__text">{currentUser.about}</p>
                    <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button> 
                </div>
                <button className="profile__add-button " type="button" onClick={props.onAddPlace}></button> 
            </section>

            <ul className="cards">
                {props.cards.map((card, i) => (
                    <Card 
                        key={card._id} 
                        card={card} 
                        onCardClick={props.onCardClick} 
                        onCardLike={props.onCardLike} 
                        onCardDelete={props.onCardDelete} />
                ))}
            </ul>
        </main>
    );
}

export default Main;