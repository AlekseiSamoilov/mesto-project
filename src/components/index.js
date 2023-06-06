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
import { editAvatar } from './modal';
import { avatarForm } from './modal';
import { loadCards, user } from './api';
import { userInfo } from './api';
import { profileName } from './modal';
import { profileWork } from './modal';
import { nameInput } from './modal';
import { jobInput } from './modal';
import { profileAvatar } from './modal';
import { avatarInput } from './modal';
export let loadedUser;

Promise.all([
    userInfo(),
    loadCards()
])
    .then(([userInfoData, cardsData]) => {
    })
    .catch((err) => {
        console.log(err);
    })

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
// document.addEventListener('DOMContentLoaded', userInfo);

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

// вызов функций связаных с пользователем

userInfo()
  .then((data) => {
    loadedUser = data;
  })
  .catch((err) => {
    console.log(err);
  });

  userInfo () 
  .then(user => {
    profileName.textContent = user.name;
    profileWork.textContent = user.about;
    nameInput.value = profileName.textContent;
    jobInput.value = profileWork.textContent;
    profileAvatar.src = user.avatar;
    avatarInput.value = user.avatar;

    return user;
  })
  .catch(error => {
    console.log(error); 
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