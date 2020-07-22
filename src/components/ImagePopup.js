import React from 'react';

function ImagePopup(props) {
    return (
        <section className={`popup popup_image-place ${props.card !== '' ? 'popup_opened' : ''}`}>
            <figure className="popup__form-image"> 
                <button type="button" aria-label="кнопка Закрыть" className="popup__close-icon popup__close-image" onClick={props.onClose}></button>
                <img className="popup__big-image" src={props.card} alt=""/>
                <figcaption className="popup__text-image"></figcaption>
            </figure>
        </section>
    );
}

export default ImagePopup;