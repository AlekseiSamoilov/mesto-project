export const profilePopup = document.querySelector('.profile-popup');
export const newItemPopup = document.querySelector('.new-item-popup');
export const avatarPopup = document.querySelector('.edit-avatar-popup')
export const imagePopup = document.querySelector('.popup__image-popup');
export const editButton = document.querySelector('.profile__edit-button');
export const openButtons = document.querySelectorAll('.open-button');
export const addButton = document.querySelector('.profile__add-button');
export const popupImage = document.querySelector('.popup__image-pic');
export const caption = document.querySelector('.popup__image-caption');
export const closeButtons = document.querySelectorAll('.popup__close-button');
export const nameInput = document.querySelector('#name');
export const jobInput = document.querySelector('#work');
export const profileName = document.querySelector('.profile__name');
export const profileWork = document.querySelector('.profile__work');
export const popups = document.querySelectorAll('.popup');
export const formInput = document.querySelector('.form__text');
export const profileForm = document.forms["edit-form"];
export const newItemForm = document.forms["new-form"];
export const avatarForm = document.forms["change-avatar-form"];
export const submitButton = document.querySelector('#submitButton');
export const profileAvatar = document.querySelector('.profile__avatar');
export const avatarInput = document.querySelector('#avatar')
export const avatarContainer = document.querySelector('.profile__avatar-container');

import { sendUserInfo } from "./api";
import { sendUserAvatar } from "./api";

//Функция закрытия любого попапа
export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupOnEsc);
}

// функция открытия любого попапа
export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupOnEsc);
}

//   закрытие попапа нажатием ESC
export const closePopupOnEsc = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    openedPopup && closePopup(openedPopup);
  }
};

// Функция редактирования информации в профиле
export function editProfile(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileWork.textContent = jobInput.value;
  closePopup(profilePopup);
  sendUserInfo();
}
// Функция редактирования аватара
export function editAvatar(evt) {
evt.preventDefault();
profileAvatar.src = avatar.value;
closePopup(avatarPopup);
sendUserAvatar();
}






