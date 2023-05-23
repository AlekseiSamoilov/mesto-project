import { createCard } from './card';
import { elementsBox } from './card';
import { newItemTitle } from './card';
import { newItemImg } from './card';
import { profileName } from './modal';
import { profileWork } from './modal';
import { nameInput } from './modal';
import { jobInput } from './modal';
import { profileAvatar } from './modal';
import { avatarInput } from './modal';

const config = {
    baseUrl: 'https://nomoreparties.co/v1/plus-cohort-24',
    headers: {
      authorization: 'db4d1547-9568-4148-b7c3-464a940a5c5b',
      'Content-Type': 'application/json'
    }
  }
export const user = {
    _id: 'f78fde13bb4fac52ab6254c4'
};

//   загрузка карточек при загрузки страницы
export const loadCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
  .then(res => { 
    if (res.ok) { 
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
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
};


  // отправка новой карточки на сервер
export function sendNewCard (title, imgSrc) {
    return fetch(`${config.baseUrl}/cards`, {
      method: 'POST',
      headers: config.headers,
        body: JSON.stringify({
      name: title,
      link: imgSrc,
    })
  })
  .then(res => { if (res.ok) {
    return res.json(); 
  }
  return Promise.reject(`Ошибка: ${res.status}`);
})
.then(data => {
  console.log(data);
  return data;
})
  .catch(error => {
    console.log(error);
  });
  };

  // Загрузка информации о пользователе с сервера
  export function userInfo () {
    return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
  .then(res => { 
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
  .then(user => {
    profileName.textContent = user.name;
    profileWork.textContent = user.about;
    nameInput.value = user.name;
    jobInput.value = user.about;
    profileAvatar.src = user.avatar;
    avatarInput.value = user.avatar;
    return user;
  })
  .catch(error => {
    console.log(error); 
  });
};


  // Сохранение на сервере информации о поьзователе
export function sendUserInfo () {
    return fetch(`${config.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: config.headers,
    body: JSON.stringify({
      name: nameInput.value,
      about: jobInput.value,
    })
  })
  .then(res => { 
    if (res.ok) 
    {
    return res.json()
  }
  return Promise.reject(`Ошбика: ${res.status}`);
  })
  .catch(error => {
    console.log(error);
  });
  };

  // Сохранение на сервере изменения аватара
export function sendUserAvatar () {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: config.headers,
    body: JSON.stringify({
      avatar: avatarInput.value,
    })
  })
  .then(res => {
     if (res.ok)
      {
    return res.json()
  }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
  .catch(error => {
    console.log(error);
  });
  };

  // удаление карточки с сервера 
export const deleteCardFromServer = (cardId) => {
return fetch (`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
  .catch(error => {
    console.log(error);
  });
}

// поставили лайк на сервере
export const addLikeToServer = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers
  })
  .then(res => {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
  .catch(error => {
    console.log(error);
  })
}
// Удаление лайка с сервера
export const deleteLikeFromServer = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
  })
  .then(res => {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
  .catch(error => {
    console.log(error);
  })
}