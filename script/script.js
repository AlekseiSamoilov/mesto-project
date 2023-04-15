//Скрипт открытия закртытия профиля

const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const popupOpened = document.querySelector('.popup_opened');
const openButtons = document.querySelectorAll('.open-button');
const addButton = document.querySelector('.profile__add-button');
const elementsBox = document.querySelector('.elements__box');

const popupImage = document.querySelector('.popup__image-pic');

const caption = document.querySelector('.popup__image-caption');
// переменные редактирования формы
const formElement = document.querySelector('.form');
const nameInput = formElement.querySelector('#name');
const jobInput = formElement.querySelector('#work');
const profileName = document.querySelector('.profile__name');
const profileWork = document.querySelector('.profile__work');
// переменные создания нового элемента
const newItemForm = document.querySelector('form[name="new-form"]');
const newItemTitle = newItemForm.querySelector('#title');
const newItemImg = newItemForm.querySelector('#link')
const oldElements = document.querySelector('.elements__box');

const likeButton = document.querySelector('.grid-item__like-button');

const popupOn = document.querySelector('.popup__image-popup');



const saveButton = document.querySelectorAll('.popup__save-button');
saveButton.forEach((button) => {
  const subform = button.closest('.popup');
  button.addEventListener('click', () => saveAndCloseForm(subform));
});

//Функция закрытия любого попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}
// находим все крестики проекта по универсальному селектору
const closeButtons = document.querySelectorAll('.popup__close-button');
closeButtons.forEach((button) => {
  // находим 1 раз ближайший к крестику попап 
  const popup = button.closest('.popup');
  // устанавливаем обработчик закрытия на крестик
  button.addEventListener('click', () => closePopup(popup));
});
// функция закрытия попапа создания нового элемента по кнопки создать
function saveAndCloseForm(subform) {
  subform.classList.remove('popup_opened');
}
// функция открытия любого попапа

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

// Открытие попапа добавления нового элемента
addButton.addEventListener('click', () => {
  const popup = document.querySelector('.new-item-popup');
  openPopup(popup);
});
// Открытие попапа редактирования профиля
editButton.addEventListener('click', () => {
  const popup = document.querySelector('.popup');
  openPopup(popup);
});

// удаление карточки
elementsBox.addEventListener('click', (evt) => {
  const target = evt.target;
  if (target.classList.contains('grid-item__trash')) {
    const gridItem = target.closest('.grid-item');
    gridItem.remove();
  }
});

// лайк карточки 
elementsBox.addEventListener('click', (evt) => {
  const target = evt.target;
  if (target.classList.contains('grid-item__like-button')) {
    evt.target.classList.toggle('grid-item__like-button_on');
  }
});

// Открытие попапа с картинкой
elementsBox.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('grid-item__photo')) {
    evt.preventDefault();
    const imageLink = evt.target.src;
    popupImage.src = imageLink;
    const gridTitle = evt.target.parentNode.querySelector('.grid-item__title').textContent;
    caption.textContent = gridTitle;
    popupImage.alt = gridTitle;
    popupOn.classList.add('popup_opened');
  }
});

// Функция редактирования информации в профиле-->
function editProfile(evt) {
  evt.preventDefault();
  nameInput.getAttribute('value');
  jobInput.getAttribute('value');
  profileName.textContent = nameInput.value;
  profileWork.textContent = jobInput.value;
  closePopup(popup)
}
formElement.addEventListener('submit', editProfile);

// const saveButton = document.querySelector('.popup__save-button');
// saveButton.addEventListener('click', closePopup);


// const likeButton = document.querySelector('.grid-item__like-button');
// likeButton.addEventListener('click', (evt) => {
//   evt.target.classList.toggle('grid-item__like-button_on');
// })


// Создание новой карточки
function createCard(title, imgSrc, imgAlt) {
  const newItems = document.querySelector('#add-new-item').content;
  const newCard = newItems.querySelector('.grid-item').cloneNode(true);
  const newTitle = newCard.querySelector('.grid-item__title');
  const newImg = newCard.querySelector('.grid-item__photo');
  newTitle.textContent = title;
  newImg.src = imgSrc;
  newImg.alt = imgAlt;
  return newCard;
}

// Добавление новой карточки
function addNewItem(evt) {
  evt.preventDefault();
  newItemTitle.getAttribute('value');
  newItemImg.getAttribute('value');
  const title = newItemTitle.value;
  const imgSrc = newItemImg.value;
  const imgAlt = newItemTitle.value;
  const card = createCard(title, imgSrc, imgAlt);
  oldElements.prepend(card);
  saveAndCloseForm(subform)
}
newItemForm.addEventListener('submit', addNewItem);



// Шесть карточек
const initialCards = [
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

document.addEventListener('DOMContentLoaded', () => {
  initialCards.forEach((card) => {
    const newCard = createCard(card.name, card.link, card.name);
    elementsBox.prepend(newCard);
  });
});







// initialCards.forEach(item => {
//   const newItems = document.querySelector('#add-new-item').content;
//   const newrow = newItems.querySelector('.grid-item').cloneNode(true);
//   // const oldElements = document.querySelector('.elements__box');
//   elementsBox.prepend(newrow);
//   const newPara = document.querySelector('.grid-item__title');
//   const newImg = document.querySelector('.grid-item__photo');
//   newPara.textContent = item.name;
//   newImg.src = item.link;
// });

// function addNewItem(evt) {
//   evt.preventDefault();
//   newItemTitle.getAttribute('value');
//   newItemImg.getAttribute('value');
//   const newItems = document.querySelector('#add-new-item').content;
//   const newrow = newItems.querySelector('.grid-item').cloneNode(true);
//   const oldElements = document.querySelector('.elements__box');
//   oldElements.prepend(newrow);

//   const newPara = document.querySelector('.grid-item__title');
//   const newImg = document.querySelector('.grid-item__photo');

//   newPara.textContent = newItemTitle.value;
//   newImg.src = newItemImg.value;
//   newImg.alt = newItemTitle.value;
//   const likeButton = document.querySelector('.grid-item__like-button');
//   likeButton.addEventListener('click', (evt) => {
//     evt.target.classList.toggle('grid-item__like-button_on');
//   })
//   closePopup(popup)
// }
// newItemForm.addEventListener('submit', addNewItem);
