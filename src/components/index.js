//  импорт стилей
import '../pages/index.css';
//  импорт карточек
import { elementsBox } from './card'
import { initialCards } from './card';
import { createCard } from './card';
import { addNewItem, newItemTitle, newItemImg, } from './card';

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
} from './modal';
import { closePopup } from './modal';
import { openPopup } from './modal';
import { editProfile } from './modal';
import { closePopupOnEsc } from './modal';
import { enableValidation } from './validate';
import { formElement, newItemForm, formInput } from './validate';

// валидация формы редактирования
enableValidation({
    formSelector: '.edit-form', 
    inputSelector: '.form__text',
    submitButtonSelector: '.form__submit',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_active'
  }); 
//  валидация формы добавления нового эдемента
  enableValidation({
    formSelector: '.new-form', 
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
// лайк карточки 
elementsBox.addEventListener('click', (evt) => {
    const target = evt.target;
    if (target.classList.contains('grid-item__like-button')) {
        evt.target.classList.toggle('grid-item__like-button_on');
    }
});
// удаление карточки
elementsBox.addEventListener('click', (evt) => {
    const target = evt.target;
    if (target.classList.contains('grid-item__trash')) {
        const gridItem = target.closest('.grid-item');
        gridItem.remove();
    }
});



//   закрытие всех любого модального окна кликом по крестику
closeButtons.forEach((button) => {
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup));
});

// функция закрытия попаап по клику на оверлей 
document.addEventListener('click', (evt) => {
    const openedPopup = document.querySelector('.popup_opened');
    if (openedPopup && evt.target.classList.contains('popup_opened')) {
        closePopup(openedPopup);
    }
});


// Открытие попапа добавления нового элемента
addButton.addEventListener('click', () => {
    openPopup(newItemPopup);
});

// Открытие попапа редактирования профиля
editButton.addEventListener('click', () => {
    openPopup(profilePopup);
});


// Открытие попапа с картинкой
elementsBox.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('grid-item__photo')) {
        evt.preventDefault();
        const imageLink = evt.target.src;
        popupImage.src = imageLink;
        const gridTitle = evt.target.closest('.grid-item').querySelector('.grid-item__title').textContent;
        caption.textContent = gridTitle;
        popupImage.alt = gridTitle;
        openPopup(imagePopup);
    }
});

//   редактирвоание информации профиля
formElement.addEventListener('submit', editProfile);

//  добавление новой карточки
newItemForm.addEventListener('submit', addNewItem);

closePopupOnEsc;

