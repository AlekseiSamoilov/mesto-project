

// конфиг из 24 когорты
// const config = {
//     baseUrl: 'https://nomoreparties.co/v1/plus-cohort-24',
//     headers: {
//       authorization: 'db4d1547-9568-4148-b7c3-464a940a5c5b',
//       'Content-Type': 'application/json'
//     }
//   }

// конфиг из 25 когорты
  const config = {
    baseUrl: 'https://nomoreparties.co/v1/plus-cohort-25',
    headers: {
      authorization: 'af2c4d49-40c6-44a3-a4f7-8cf5a2190518',
      'Content-Type': 'application/json'
    }
  }


function getResponseData(res) {
  if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`); 
  }
  return res.json();
}

  // загрузка карточек при загрузки страницы
export const loadCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
  .then(getResponseData);
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
  .then(getResponseData)
  };

  // Загрузка информации о пользователе с сервера
  export function userInfo () {
    return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
  .then(getResponseData)
};


  // Сохранение на сервере информации о поьзователе
export function sendUserInfo (name, about) {
    return fetch(`${config.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: about,
    })
  })
  .then(getResponseData)
  };

  // Сохранение на сервере изменения аватара
export function sendUserAvatar (avatar) {
    return fetch(`${config.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: config.headers,
    body: JSON.stringify({
      // avatar: avatarInput.value,
      avatar: avatar,
    })
  })
  .then(getResponseData)
  };

  // удаление карточки с сервера 
export const deleteCardFromServer = (cardId) => {
return fetch (`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
  })
  .then(getResponseData)
}

// поставили лайк на сервере
export const addLikeToServer = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers
  })
  .then(getResponseData)
}

// Удаление лайка с сервера
export const deleteLikeFromServer = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
  })
  .then(getResponseData)
}