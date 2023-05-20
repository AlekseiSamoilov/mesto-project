//  импорт стилей
import '../pages/index.css';
//  импорт карточек
import { addNewItem } from './card';
import { profilePopup, newItemPopup, editButton, addButton, popups, userInfo, avatarContainer } from './modal';
import { closePopup } from './modal';
import { openPopup } from './modal';
import { editProfile } from './modal';
import { enableValidation } from './validate';
import { profileForm, newItemForm } from './modal';
import { loadCards } from './card';
import { avatarPopup } from './modal';
import { editAvatar } from './modal';
import { avatarForm } from './modal';


// валидация формы редактирования
enableValidation({
    formSelector: '.form',
    inputSelector: '.form__text',
    submitButtonSelector: '.form__submit',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_active'
});

// Загрузка карточек
document.addEventListener('DOMContentLoaded', loadCards);

// Загрузка информации о пользователе
document.addEventListener('DOMContentLoaded', userInfo);

// закрытие любого попапа по клику на оверлей и клику по крестику
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
// Открытие попапа редактирования аватара
avatarContainer.addEventListener('click', () => {
    openPopup(avatarPopup);
})
// Открытие попапа добавления нового элемента
addButton.addEventListener('click', () => {
    openPopup(newItemPopup);
});

// Открытие попапа редактирования профиля
editButton.addEventListener('click', () => {
    openPopup(profilePopup);
});

//   редактирвоание информации профиля
profileForm.addEventListener('submit', editProfile);

//  добавление новой карточки
newItemForm.addEventListener('submit', addNewItem);

//  Смена аватара
avatarForm.addEventListener('submit', editAvatar);