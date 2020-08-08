import React from 'react';

function PopupWithForm({ name, isOpen, onClose, onSubmit, title, children, btnText }) {
    return (
        <section className={`popup popup_${name} ${isOpen && 'popup_opened'}`}> 
            <form className="popup__container" name={`${name}`} method="POST" action="#" noValidate onSubmit={onSubmit}> 
                <h2 className="popup__heading">{title}</h2>
                {children}
                <button type="submit" className="popup__button">{btnText}</button> 
                <button type="button" aria-label="кнопка Закрыть" className="popup__close-icon" onClick={onClose}></button>
            </form>
        </section>
    );
}

export default PopupWithForm;