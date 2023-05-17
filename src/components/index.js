//  импорт стилей
import '../pages/index.css';
//  импорт карточек
import { elementsBox } from './card'
import { initialCards } from './card';
import { createCard } from './card';
import { addNewItem, newItemTitle, newItemImg, } from './card';
import { likeButton } from './card';

import {
    profilePopup,
    newItemPopup,
    imagePopup,
    editButton,
    popupOpened,
    openButtons,
    addButton,
    popupImage,
    caption,
    closeButtons,
    nameInput,
    jobInput,
    profileName, 
    profileWork, 
    popups
} from './modal';
import { closePopup } from './modal';
import { openPopup } from './modal';
import { editProfile } from './modal';
import { enableValidation } from './validate';
import { formElement, newItemForm, formInput } from './validate';
// import { toggleButtonState } from './validate';

// валидация формы редактирования
enableValidation({
    formSelector: '.form', 
    inputSelector: '.form__text',
    submitButtonSelector: '.form__submit',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_active'
  }); 

// Добавление первых шести карточек при загрузки страницы
document.addEventListener('DOMContentLoaded', () => {
    initialCards.forEach((card) => {
        const newCard = createCard(card.name, card.link, card.name);
        elementsBox.prepend(newCard);
    });
});

// закрытие любого попапа по клику на оверлей и клику по крестику и вправду клево 

popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup);
        };
        if (evt.target.classList.contains('popup__close-button')) {
            closePopup(popup);
        };
    });
});

// Открытие попапа добавления нового элемента
addButton.addEventListener('click', () => {
    openPopup(newItemPopup);
});

// Открытие попапа редактирования профиля
editButton.addEventListener('click', () => {
    openPopup(profilePopup);
});

//   редактирвоание информации профиля
formElement.addEventListener('submit', editProfile);

//  добавление новой карточки
newItemForm.addEventListener('submit', addNewItem);

  // деактивируем кнопку при 1й загрузке сайта
//   toggleButtonState(inputList, submitButton, settings);

//   formElement.addEventListener('reset', () => {
//     disableButton(submitButton, settings)
//   });
