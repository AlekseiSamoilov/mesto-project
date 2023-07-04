


export class UserInfo { 
    constructor({nameSelector, infoSelector}, api) { 
        this.nameElement = document.querySelector(nameSelector);
        this.infoElement = document.querySelector(infoSelector);
        this.api = api;
    }

    getUserInfo() {
        return this.api.UserInfo()
        .then((user) => {
            this.nameElement.textContent = user.name;
            this.infoElement.textContent = user.about;
            return user;
        })
        .catch((error) => {
            console.log(error);
        });
    }

    sendUserInfo({name, about}) {
        return this.api.sendUserInfo(name, about)
        .then((user) => {
            this.nameElement.textContent = user.name;
            this.infoElement.textContent = user.about;
            return user;
        })
        .catch((error) => {
            console.log(error);
        });
    }
}

export class Api {
    constructor(config) {
        this.baseUrl = config.baseUrl;
        this.headers = config.headers;
    }
    UserInfo() {
        return fetch(`${this.baseUrl}/users/me`, {
            headers: this.headers
        })
        .then(this._getResponseData);
    }

    sendUserInfo(name, about) {
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                name: name,
                about: about,
            })
        })
        .then(this._getResponseData);
    }
    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json()
    }
}

export class Popup {
    constructor(popupSelector) {
        this.popupElement = document.querySelector(popupSelector);
    }
    open() {
        this.popupElement.classList.add('popup_opened');
        // document.addEventListener('keydown', closePopupOnEsc);
    }
    close() {
        this.popupElement.classList.remove('popup_opened');
        // document.addEventListener('keydown', closePopupOnEsc);
    }
    // _handleEscClose(evt) {
    //     if (evt.key === 'Escape') {
    //     this.popupElement
    //     }
    // }
    setEventListeners() {
    this.popupElement.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
        this.close(this.popupElement);
    };
    if (evt.target.classList.contains('popup__close-button')) {
        evt.preventDefault();
        this.close(this.popupElement);
    };
})
    }
}
//   закрытие попапа нажатием ESC
// export const closePopupOnEsc = (evt) => {
//     if (evt.key === 'Escape') {
//       const openedPopup = document.querySelector('.popup_opened');
//       openedPopup && closePopup(openedPopup);
//     }
//   };

//   // закрытие любого попапа по клику на оверлей и клику по крестику
// popups.forEach((popup) => {
//     popup.addEventListener('mousedown', (evt) => {
//         if (evt.target.classList.contains('popup_opened')) {
//             closePopup(popup);
//         };
//         if (evt.target.classList.contains('popup__close-button')) {
//             evt.preventDefault();
//             closePopup(popup);
//         };
//     });
// });

// editButton.addEventListener('click', () => {
//     nameInput.value = profileName.textContent; 
//     jobInput.value = profileWork.textContent; 
//     openPopup(profilePopup);
// });