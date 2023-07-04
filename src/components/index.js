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
import { editAvatar } from './modal';
// import { Popup } from './UserInfo';
export let loadedUser;
export const avatarForm = document.forms["change-avatar-form"];
import { Popup } from './UserInfo';
// import { UserInfo, Api } from './UserInfo';

Promise.all([userInfo(), loadCards()])
    .then(([userData, cardsData]) => {

        // данные пользователя
        loadedUser = userData;
        profileName.textContent = loadedUser.name;
        profileWork.textContent = loadedUser.about;
        // nameInput.value = loadedUser.name;
        // jobInput.value = loadedUser.about;
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
            evt.preventDefault();
            closePopup(popup);
        };
    });
});


// // Открытие попапа редактирования аватара
avatarContainer.addEventListener('click', () => {
    popupAvatarEdit.open();
})
// // Открытие попапа добавления нового элемента
addButton.addEventListener('click', () => {
    popupNewCard.open();
});

// Открытие попапа редактирования профиля
editButton.addEventListener('click', () => {
    nameInput.value = profileName.textContent; 
    jobInput.value = profileWork.textContent; 
    popupProfile.open();
});

//   редактирвоание информации профиля
profileForm.addEventListener('submit', editProfile);

//  добавление новой карточки
newItemForm.addEventListener('submit', addNewItem);

//  Смена аватара
avatarForm.addEventListener('submit', editAvatar);

// const api = new Api({
//     baseUrl: 'https://nomoreparties.co/v1/plus-cohort-25',
//     headers: {
//       authorization: 'af2c4d49-40c6-44a3-a4f7-8cf5a2190518',
//       'Content-Type': 'application/json'
//     }
//   });

// const userInfo = new UserInfo({nameSelector: 'profileName', infoSelector: 'profileWork'}, api);


// userInfo.getUserInfo();
// userInfo.setUserInfo({name: 'newName', about: 'newAbout'});

const popupProfile = new Popup('.profile-popup');
const popupNewCard = new Popup('.new-item-popup');
const popupAvatarEdit = new Popup('.edit-avatar-popup');
