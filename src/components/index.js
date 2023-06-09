//  импорт стилей
import '../pages/index.css';
//  импорт карточек
import { addNewItem } from './card';
import { profilePopup, newItemPopup, editButton, addButton, popups, avatarContainer } from './modal';
import { closePopup } from './modal';
import { openPopup } from './modal';
import { editProfile } from './modal';
import { enableValidation } from './validate';
import { profileForm, newItemForm } from './modal';
import { avatarPopup } from './modal';
import { loadCards } from './api';
import { userInfo } from './api';
import { profileName } from './modal';
import { profileWork } from './modal';
import { nameInput } from './modal';
import { jobInput } from './modal';
import { profileAvatar } from './modal';
import { avatarInput } from './modal';
import { createCard } from './card';
import { elementsBox } from './card';
// import { avatarForm } from './modal';
import { editAvatar } from './modal';
export let loadedUser;
export const avatarForm = document.forms["change-avatar-form"];
Promise.all([userInfo(), loadCards()])
    .then(([userData, cardsData]) => {

        // данные пользователя
        loadedUser = userData;
        profileName.textContent = loadedUser.name;
        profileWork.textContent = loadedUser.about;
        nameInput.value = loadedUser.name;
        jobInput.value = loadedUser.about;
        profileAvatar.src = loadedUser.avatar;
        avatarInput.value = loadedUser.avatar;

        // данные карточек
        cardsData.forEach(card => {
            const newCard = createCard(card.name, card.link, card.name, card.likes.length, card.owner._id, loadedUser, card._id);
            elementsBox.prepend(newCard);
        });
    })
    .catch((err) => {
        console.log(err);
    });


// валидация формы редактирования
enableValidation({
    formSelector: '.form',
    inputSelector: '.form__text',
    submitButtonSelector: '.form__submit',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_active'
});


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