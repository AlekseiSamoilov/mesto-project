
export const elementsBox = document.querySelector('.elements__box');
export const newItemTitle = document.querySelector('#title');
export const newItemImg = document.querySelector('#link');
export const likeButton = document.querySelector('.grid-item__like-button');
export const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Саратов',
      link: 'https://images.unsplash.com/photo-1680295820898-91223dc2705f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8RnpvM3p1T0hONnd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Магадан',
      link: 'https://images.unsplash.com/photo-1680034200933-09075ddb0843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    }
  ];

import { closePopup } from "./modal";
import { newItemPopup } from "./modal";


// Добавление новой карточки
export function addNewItem(evt) {
    evt.preventDefault();
    const title = newItemTitle.value;
    const imgSrc = newItemImg.value;
    const imgAlt = newItemTitle.value;
    const card = createCard(title, imgSrc, imgAlt);
    elementsBox.prepend(card);
    evt.target.reset()
    closePopup(newItemPopup);
    // console.log('addNewItem called');
    
  }


// Создание новой карточки
export function createCard(title, imgSrc, imgAlt) {
  const newItems = document.querySelector('#add-new-item').content;
  const newCard = newItems.querySelector('.grid-item').cloneNode(true);
  const newTitle = newCard.querySelector('.grid-item__title');
  const newImg = newCard.querySelector('.grid-item__photo');
  newTitle.textContent = title;
  newImg.src = imgSrc;
  newImg.alt = imgAlt;
  // console.log('createCard called');
  return newCard;
  
}