export const profilePopup = document.querySelector('.profile-popup');
export const newItemPopup = document.querySelector('.new-item-popup');
export const imagePopup = document.querySelector('.popup__image-popup');
export const editButton = document.querySelector('.profile__edit-button');
// export const popupOpened = document.querySelector('.popup_opened');
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
import { newItemForm } from "./validate";

//Функция закрытия любого попапа
export function closePopup(popup) {
    popup.classList.remove('popup_opened');
  }

// функция открытия любого попапа
export function openPopup(popup) {
    const submitNewItem = newItemForm.querySelector('.form__submit');
    submitNewItem.disabled = true;
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
  }

  