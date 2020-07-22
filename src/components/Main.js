import React from 'react';
import api from '../utils/api';
import avatar from '../images/avatar.jpg';
import Card from './Card';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
    const [userName, setUserName] = React.useState('Жак-Ив Кусто');
    const [userDescription, setUserDescription] = React.useState('Исследователь океана');
    const [userAvatar, setUserAvatar] = React.useState(avatar);
    const [cards, setCards] = React.useState([]);

    React.useEffect(()=> {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
        .then(([userInfoResponse, cardsResponse]) => {
            setUserName(userInfoResponse.name);
            setUserDescription(userInfoResponse.about);
            setUserAvatar(userInfoResponse.avatar);
            setCards(cardsResponse);
        })
        .catch(error => console.log(error));
    }, []);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__info">
                    <div className="profile__avatar" onClick={onEditAvatar} style={{ backgroundImage: `url(${userAvatar})`}}></div>
                    <h1 className="profile__name">{userName}</h1>
                    <p className="profile__text">{userDescription}</p>
                    <button className="profile__edit-button" type="button" onClick={onEditProfile}></button> 
                </div>
                <button className="profile__add-button " type="button" onClick={onAddPlace}></button> 
            </section>

            <ul className="cards">
                {cards.map((card, i) => (
                    <Card key={card._id} card={card} onCardClick={onCardClick}/>
                ))}
            </ul>
        </main>
    );
}

export default Main;