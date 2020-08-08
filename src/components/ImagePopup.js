import React from 'react';

function ImagePopup({ card, onClose }) {


    return (
        <section className={`popup popup_image-place ${card && 'popup_opened'}`}>
            <figure className="popup__form-image"> 
                <button type="button" aria-label="кнопка Закрыть" className="popup__close-icon popup__close-image" onClick={onClose}></button>
                <img className="popup__big-image" src={card && card.link} alt=""/>
                <figcaption className="popup__text-image">{card && card.name}</figcaption>
            </figure>
        </section>
    );
}

export default ImagePopup;