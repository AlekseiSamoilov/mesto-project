//Скрипт открытия закртытия профиля

// получили ссылку на элемент popup и записали его в переменную popup
const popup = document.querySelector('.popup'); 
// получили ссылку на кнопку редактирования профиля и записали ее в переменную editButton
const editButton = document.querySelector('.profile__edit-button'); 
// создаем фуркнцию
function editInfo() {
    popup.classList.add('popup_opened');
}
editButton.addEventListener('click', editInfo);
const closeButton = document.querySelector('.popup__close-button');
const popupOpened = document.querySelector('.popup_opened');
function closeInfo() {
    popup.classList.remove('popup_opened');
}
closeButton.addEventListener('click', closeInfo);


//Скрипт открытия закртытия окна добавления нового элемента-->


const newItem = document.querySelector('.new-item');
const addButton = document.querySelector('.profile__add-button');
function addItem() {
    newItem.classList.add('new-item_opened');
}
addButton.addEventListener('click', addItem);
const closeNewItemButton = document.querySelector('.new-item__close-button');
const newItemOpened = document.querySelector('.new-item_opened');
function closeAddForm() {
    newItem.classList.remove('new-item_opened');
}
closeNewItemButton.addEventListener('click', closeAddForm);


// <!----Скрипт редактирования информации в профиле-->
const formElement = document.querySelector('.form');
const nameInput = formElement.querySelector('#name');
const jobInput = formElement.querySelector('#work');
function formSubmitHandler(evt) {
    evt.preventDefault();
    nameInput.getAttribute('value');
    jobInput.getAttribute('value');
    const profileName = document.querySelector('.profile__name');
    const profileWork = document.querySelector('.profile__work');
    profileName.textContent = nameInput.value;
    profileWork.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler);

const saveButton = document.querySelector('.popup__save-button');
saveButton.addEventListener('click', closeInfo);




// Скрипт добавления нового элемента-->

const newItemForm = document.querySelector('.new-item-form');
const newItemTitle = newItemForm.querySelector('#title');
const newItemImg = newItemForm.querySelector('#link')
const createButton = document.querySelector('.new-item__save-button');


function addNewItem(evt) {
    const newItems = document.querySelector('#add-new-item').content;
    const newrow = newItems.querySelector('.grid-item').cloneNode(true);
    const oldElements = document.querySelector('.elements__box');
    oldElements.prepend(newrow);
    evt.preventDefault();
    newItemTitle.getAttribute('value');
    newItemImg.getAttribute('value');
    const newPara = document.querySelector('.grid-item__title');
    const newImg = document.querySelector('.grid-item__photo');
    newPara.textContent = newItemTitle.value;
    newImg.src = newItemImg.value;
    newImg.alt = newItemTitle.value;
    //лайк новых карточек
    const likeButton = document.querySelector('.grid-item__like-button');
    likeButton.addEventListener('click', (evt) => {
        evt.target.classList.toggle('grid-item__like-button_on');
    })
    closeAddForm()
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

initialCards.forEach(item => {
    const newItems = document.querySelector('#add-new-item').content;
    const newrow = newItems.querySelector('.grid-item').cloneNode(true);
    const oldElements = document.querySelector('.elements__box');
    oldElements.prepend(newrow);
    const newPara = document.querySelector('.grid-item__title');
    const newImg = document.querySelector('.grid-item__photo');
    newPara.textContent = item.name;
    newImg.src = item.link;
    const likeButton = document.querySelector('.grid-item__like-button');
    likeButton.addEventListener('click', (evt) => {
    evt.target.classList.toggle('grid-item__like-button_on');
})
});


// удаление карточки
const elementsBox = document.querySelector('.elements__box')

elementsBox.addEventListener('click', (evt) => {
    const target = evt.target;
    if (target.classList.contains('grid-item__trash')) {
      const gridItem = target.closest('.grid-item');
      gridItem.remove();
    }
  });


// Открытие попапа с картинкой
const photos = document.querySelectorAll('.grid-item__photo');
const popupImage = document.querySelector('.image-popup__pic');
const imgCloseButton = document.querySelector('.image-popup__close-button');
const openImg = document.querySelector('.image-popup');
const caption = document.querySelector('.image-popup__caption');

elementsBox.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('grid-item__photo')) {
      evt.preventDefault();
      const imageLink = evt.target.src;
      popupImage.src = imageLink;
      const gridTitle = evt.target.parentNode.querySelector('.grid-item__title').textContent;
      caption.textContent = gridTitle;
    const popupOn = document.querySelector('.image-popup');
    popupOn.classList.add('image-popup_opened');
    }
  });


// Закрытие попапа с картинкой 
  imgCloseButton.addEventListener('click', () => {
    openImg.classList.remove('image-popup_opened');
})

