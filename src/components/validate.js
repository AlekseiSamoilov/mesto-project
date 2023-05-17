
export const formElement = document.querySelector('.form'); // Мне нужна эта переменная для поиска любой/всех формы
export const formInput = formElement.querySelector('.form__text');
export const newItemForm = document.forms["new-form"]
export const submitButton = formElement.querySelector('#submitButton');
// export const allowableSymbols = /^[A-Za-zА-Яа-яЁё\s-]+$/;
// export const errorMessages = {
//     invalidCharacters: 'Разрешены только латинские, кириллические буквы, знаки дефиса и пробелы',
// };


// функция добавление красного поля и ошибки
export const showError = (formElement, inputElement, errorMessage, { inputErrorClass, errorClass }) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    // inputElement.classList.add('form__input_type_error');
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    // errorElement.classList.add('form__input-error_active');
    errorElement.classList.add(errorClass);
};

// функция удаления красного поля и ошибки
export const hideError = (formElement, inputElement, { inputErrorClass, errorClass }) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    // inputElement.classList.remove('form__input_type_error');
    // errorElement.classList.remove('form__input-error_active');
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
};

// функция проверки валидации пустого поля, количества символов и допустимости символов
export const checkInputValidity = (formElement, inputElement, other) => {
    if (!inputElement.validity.valid) {
        let errorMessage = '';
        if (inputElement.id !== 'link' && inputElement.validity.patternMismatch) {
            errorMessage = inputElement.dataset.errorWarning;
        } else {
            errorMessage = inputElement.validationMessage;
        } 
        showError(formElement, inputElement, errorMessage, other);
    } else {
        hideError(formElement, inputElement, other);
    };
};


//   функция проверки невалидного ввода
export const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        // return !inputElement.validity.valid || inputElement.id !== 'link' && !allowableSymbols.test(inputElement.value);
        return !inputElement.validity.valid || inputElement.id !== 'link' && inputElement.validity.patternMismatch;
    });
};
// функция отключения кнопки в случаи невалидного ввода
export const toggleButtonState = (inputList, buttonElement) => {
    const validInput = inputList.every((inputElement) => inputElement.validity.valid);
    if (validInput) {
        buttonElement.disabled = false;
    } else {
        buttonElement.disabled = true;
    };
};

//   функция установки слушателей на ввод
export const setEventListeners = (formElement, { inputSelector, submitButtonSelector, ...other }) => {
    // const inputList = Array.from(formElement.querySelectorAll('.form__text'));
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    // const buttonElement = formElement.querySelector('.form__submit');
    const buttonElement = formElement.querySelector(submitButtonSelector);
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement, other);
            toggleButtonState(inputList, buttonElement);
        });
    });
};
  

export const enableValidation = ({ formSelector, ...other }) => {
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formElement, other);
    });
};

// export const disableButton = (buttonElement, settings) => { не очень понял как должна работать функция
//     buttonElement.disabled = true;
//   };
  


