// DOM элементы 

//const popups = document.querySelectorAll('.popup');

export const formEditProfile = document.querySelector('#form-edit-profile');
export const nameInput = document.querySelector('#name');
export const jobInput = document.querySelector('#description');


export const formAddPhoto = document.querySelector('#form-add-photo');
export const titleInput = document.querySelector('#title');
export const linkInput = document.querySelector('#link');

export const profile = document.querySelector('.profile');
export const profileEditButton = profile.querySelector('.profile__edit-button');
export const profileAddButton = profile.querySelector('.profile__add-button');


// selectors
export const popupEditProfile = '#popup-edit-profile';
export const popupAddPhoto = '#popup-add-photo';
export const popupShowPhoto = '#popup-show-photo'; 
export const profileName = '.profile__name';
export const profileJob = '.profile__subtitle';
export const cardsContainer = '.elements';

// Объекты

export const options = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_active"
}