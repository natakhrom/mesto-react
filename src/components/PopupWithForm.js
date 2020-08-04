import React from 'react';

function PopupWithForm(props) {
    return (
        <section className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}> 
            <form className="popup__container" name={`${props.name}`} method="POST" action="#" noValidate onSubmit={props.onSubmit}> 
                <h2 className="popup__heading">{props.title}</h2>
                {props.children}
                <button type="submit" className="popup__button">{props.btnText}</button> 
                <button type="button" aria-label="кнопка Закрыть" className="popup__close-icon" onClick={props.onClose}></button>
            </form>
        </section>
    );
}

export default PopupWithForm;