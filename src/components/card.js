
export const elementsBox = document.querySelector('.elements__box');
export const newItemTitle = document.querySelector('#title');
export const newItemImg = document.querySelector('#link');
export const submitNewItem = newItemForm.querySelector('.form__submit');
// export const initialCards = [
//   {
//     name: 'Архыз',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
//   },
//   {
//     name: 'Саратов',
//     link: 'https://images.unsplash.com/photo-1680295820898-91223dc2705f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8RnpvM3p1T0hONnd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
//   },
//   {
//     name: 'Иваново',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
//   },
//   {
//     name: 'Камчатка',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
//   },
//   {
//     name: 'Холмогорский район',
//     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
//   },
//   {
//     name: 'Магадан',
//     link: 'https://images.unsplash.com/photo-1680034200933-09075ddb0843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
//   }
// ]; 

import { closePopup } from "./modal";
import { newItemPopup } from "./modal";
import { popupImage } from "./modal";
import { caption } from "./modal";
import { openPopup } from "./modal";
import { imagePopup } from "./modal";
import { newItemForm } from "./modal";

// Добавление новой карточки
export function addNewItem(evt) {
  evt.preventDefault();
  const title = newItemTitle.value;
  const imgSrc = newItemImg.value;
  const imgAlt = newItemTitle.value;
  const card = createCard(title, imgSrc, imgAlt);
  elementsBox.prepend(card);
  sendNewCard();
  evt.target.reset()
  submitNewItem.disabled = true;
  console.log(title);
  console.log(imgSrc)
  closePopup(newItemPopup);    
}


// Создание новой карточки
export function createCard(title, imgSrc, imgAlt, likes) {
  const newItems = document.querySelector('#add-new-item').content;
  const newCard = newItems.querySelector('.grid-item').cloneNode(true);
  const newTitle = newCard.querySelector('.grid-item__title');
  const newImg = newCard.querySelector('.grid-item__photo');
  const likeNumber = newCard.querySelector('.grid-item__likes-number');
  newTitle.textContent = title;
  newImg.src = imgSrc;
  newImg.alt = imgAlt;
  likeNumber.textContent = likes
  // лайк карточки 
  const likeButton = newCard.querySelector('.grid-item__like-button');
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('grid-item__like-button_on');
  });
  // удаление карточки
  const trashButton = newCard.querySelector('.grid-item__trash');
  trashButton.addEventListener('click', () => {
    newCard.remove();
  });
  // Открытие попапа с картинкой
  newImg.addEventListener('click', (evt) => {
    evt.preventDefault();
    const imageLink = newImg.src;
    popupImage.src = imageLink;
    const gridTitle = newCard.querySelector('.grid-item__title').textContent;
    caption.textContent = gridTitle;
    popupImage.alt = gridTitle;
    openPopup(imagePopup);
  });
  // console.log('createCard called');
  return newCard;

}

export function loadCards () {
  fetch('https://nomoreparties.co/v1/plus-cohort-24/cards', {
  headers: {
    authorization: 'db4d1547-9568-4148-b7c3-464a940a5c5b'
  }
})
.then(res => res.json())
.then(cards => {
  cards.forEach(card => {
    const newCard = createCard(card.name, card.link, card.name, card.likes.length);
    elementsBox.prepend(newCard);
  });
})
.catch(error => {
  console.log('Ошибка загрузки', error);
});
};

export function sendNewCard () {

  fetch('https://nomoreparties.co/v1/plus-cohort-24/cards', {
    method: 'POST',
    headers: {
    authorization: 'db4d1547-9568-4148-b7c3-464a940a5c5b',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: newItemTitle.value,
    link: newItemImg.value,
  })
})
.then(res => res.json())
.then(newCard => {
  console.log(newCard);
})
.catch(error => {
  console.log('Ошибка обновления данных', error);
});
};