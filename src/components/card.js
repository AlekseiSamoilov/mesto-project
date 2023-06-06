
export const elementsBox = document.querySelector('.elements__box');
export const newItemTitle = document.querySelector('#title');
export const newItemImg = document.querySelector('#link');
export const submitNewItem = newItemForm.querySelector('.form__submit');
export const deletePopup = document.querySelector('.confirm-delete-item');
export const yesDelete = deletePopup.querySelector('.form-delete');

import { closePopup } from "./modal";
import { newItemPopup } from "./modal";
import { popupImage } from "./modal";
import { caption } from "./modal";
import { openPopup } from "./modal";
import { imagePopup } from "./modal";
import { newItemForm } from "./modal";
import { sendNewCard } from "./api";
import { userInfo } from "./api";
import { deleteCardFromServer } from "./api";
import { addLikeToServer } from "./api";
import { deleteLikeFromServer } from "./api";
import { loadCards } from "./api";
import { loadedUser } from "./index";

// сохранение загруженных данных о пользователе
// let loadedUser;

// userInfo()
//   .then((data) => {
//     loadedUser = data;
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// загрузка карточек при загрузке? страницы
loadCards()
    .then(cards => {
      userInfo()
        .then(user => {
          cards.forEach(card => {
            const newCard = createCard(card.name, card.link, card.name, card.likes.length, card.owner._id, user, card._id);
            elementsBox.prepend(newCard);
          });
        })
        .catch(error => {
          console.log(error);
        });
    })
    .catch(error => {
      console.log(error);
    });



// Добавление новой карточки
export function addNewItem(evt) {
  evt.preventDefault(); // отменили стандартное действие формы
  const firstButtonText = submitNewItem.textContent; // сохранили в этой переменной первоначальный текст на кнопке, что бы потом возвратить как было
  submitNewItem.textContent = 'Сохранение...'; // присвоили тексту на кнопке новое значение

      const title = newItemTitle.value;
      const imgSrc = newItemImg.value;

      sendNewCard(title, imgSrc)
        .then(card => {
          const newCard = createCard(card.name, card.link, card.name, card.likes.length, card.owner._id, loadedUser, card._id);
          elementsBox.prepend(newCard);
          evt.target.reset();
          submitNewItem.disabled = true;
          closePopup(newItemPopup);
        })
        .catch(error => {
          console.log( error);
        })
        .finally(() => {
          submitNewItem.textContent = firstButtonText;
        });
};

// пустая переменная, в ней будет сохранена функция удаления до момента подтверждения
let deleteCallback = null;

// слушатель на кнопке "Да" в попапе подтверждения удаления
yesDelete.addEventListener('click', () => {
  deleteCallback();
  closePopup(deletePopup);
});

// функция удаления карточки
export function confirmDelete (callback) {
  deleteCallback = callback
  openPopup(deletePopup);
}

// Создание новой карточки
export function createCard(title, imgSrc, imgAlt, likes, owner, user, cardId) {
  const newItems = document.querySelector('#add-new-item').content;
  const newCard = newItems.querySelector('.grid-item').cloneNode(true);
  const newTitle = newCard.querySelector('.grid-item__title');
  const newImg = newCard.querySelector('.grid-item__photo');
  const likeNumber = newCard.querySelector('.grid-item__likes-number');
  
  newTitle.textContent = title;
  newImg.src = imgSrc;
  newImg.alt = imgAlt;
  likeNumber.textContent = likes;
// постанвока лайков на карточках
  const likeButton = newCard.querySelector('.grid-item__like-button');
  likeButton.addEventListener('click', () => {
    const wasLiked = likeButton.classList.contains('grid-item__like-button_on');
    if (wasLiked) {
      deleteLikeFromServer(cardId)
      .then(cardData => {
        likeButton.classList.toggle('grid-item__like-button_on');
        likeNumber.textContent = cardData.likes.length;
      })
      .catch(error => console.error(error));
    } else {
      addLikeToServer(cardId)
      .then(cardData => {
        likeButton.classList.toggle('grid-item__like-button_on');
        likeNumber.textContent = cardData.likes.length;
      })
      .catch(error => console.error(error));
    } 
  });
// удаления карточки
  const trashButton = newCard.querySelector('.grid-item__trash');
  if (owner === user._id) { 
    trashButton.style.display = 'block';
  } else {
    trashButton.style.display = 'none';
  }
  trashButton.addEventListener('click', () => {
    confirmDelete(() => {
    deleteCardFromServer(cardId)
    .then(() => {
      newCard.remove();
    })
    .catch(error => {
      console.log(error);
    });
    closePopup(deletePopup)
  });
  });
// открытие попапа с картинкой
  newImg.addEventListener('click', (evt) => {
    evt.preventDefault();
    const imageLink = newImg.src;
    popupImage.src = imageLink;
    const gridTitle = newCard.querySelector('.grid-item__title').textContent;
    caption.textContent = gridTitle;
    popupImage.alt = gridTitle;
    openPopup(imagePopup);
  });

  return newCard;
}


