//Скрипт открытия закртытия профиля

let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
function editInfo() {
    popup.classList.add('popup_opened');
}
editButton.addEventListener('click', editInfo);
let closeButton = document.querySelector('.popup__close-button');
let popupOpened = document.querySelector('.popup_opened');
function closeInfo() {
    popup.classList.remove('popup_opened');
}
closeButton.addEventListener('click', closeInfo);


//Скрипт открытия закртытия окна добавления нового элемента-->


let newItem = document.querySelector('.new-item');
let addButton = document.querySelector('.profile__add-button');
function addItem() {
    newItem.classList.add('new-item_opened');
}
addButton.addEventListener('click', addItem);
let closeNewItemButton = document.querySelector('.new-item__close-button');
let newItemOpened = document.querySelector('.new-item_opened');
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
    let newItems = document.querySelector('#add-new-item').content;
    let newrow = newItems.querySelector('.grid-item').cloneNode(true);
    let oldElements = document.querySelector('.elements__box');
    oldElements.prepend(newrow);
    evt.preventDefault();
    newItemTitle.getAttribute('value');
    newItemImg.getAttribute('value');
    const newPara = document.querySelector('.grid-item__title');
    const newImg = document.querySelector('.grid-item__photo');
    newPara.textContent = newItemTitle.value;
    newImg.src = newItemImg.value;
    //лайк новых карточек
    let likeButton = document.querySelector('.grid-item__like-button');
    likeButton.addEventListener('click', (evt) => {
        evt.target.classList.toggle('grid-item__like-button_on');
    })
    closeAddForm()
}
newItemForm.addEventListener('submit', addNewItem);


// Шесть карточек
const initialCards = [
    {
        title: 'Ростов-на-Дону',
        link: 'https://images.unsplash.com/photo-1585244436445-0f11adaa8fbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fCVEMCVBMCVEMCVCRSVEMSU4MSVEMSU4MiVEMCVCRSVEMCVCMnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        title: 'Владикавказ',
        link: 'https://images.unsplash.com/photo-1665584928954-598441931504?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8JUQwJTkyJUQwJUJCJUQwJUIwJUQwJUI0JUQwJUI4JUQwJUJBJUQwJUIwJUQwJUIyJUQwJUJBJUQwJUIwJUQwJUI3fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        title: 'Владивосток',
        link: 'https://images.unsplash.com/photo-1645796382641-0287bfd3dcc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
        title: 'Псков',
        link: 'https://images.unsplash.com/photo-1662389090005-13c94f7249a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8JUQwJTlGJUQxJTgxJUQwJUJBJUQwJUJFJUQwJUIyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        title: 'Санкт-Петербург',
        link: 'https://images.unsplash.com/photo-1615023216764-bfd001b094fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
    },
    {
        title: 'Воронеж',
        link: 'https://images.unsplash.com/photo-1616398201291-56a3fa55457a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80g'
    }
];

const cardsContainer = document.querySelector('.elements__box');

initialCards.forEach(item => {
    let newItems = document.querySelector('#add-new-item').content;
    let newrow = newItems.querySelector('.grid-item').cloneNode(true);
    let oldElements = document.querySelector('.elements__box');
    oldElements.prepend(newrow);
    const newPara = document.querySelector('.grid-item__title');
    const newImg = document.querySelector('.grid-item__photo');
    newPara.textContent = item.title;
    newImg.src = item.link;
    let likeButton = document.querySelector('.grid-item__like-button');
    likeButton.addEventListener('click', (evt) => {
    evt.target.classList.toggle('grid-item__like-button_on');
})
});



