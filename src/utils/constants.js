// DOM элементы 

const popups = document.querySelectorAll('.popup');

export const popupEditProfile = document.querySelector('#popup-edit-profile');
export const formEditProfile = popupEditProfile.querySelector('.popup__form');
export const nameInput = popupEditProfile.querySelector('#name');
export const jobInput = popupEditProfile.querySelector('#description');

export const popupAddPhoto = document.querySelector('#popup-add-photo');
export const formAddPhoto = popupAddPhoto.querySelector('.popup__form');
export const titleInput = popupAddPhoto.querySelector('#title');
export const linkInput = popupAddPhoto.querySelector('#link');

export const profile = document.querySelector('.profile');
export const profileName = profile.querySelector('.profile__name');
export const profileJob = profile.querySelector('.profile__subtitle');
export const profileEditButton = profile.querySelector('.profile__edit-button');
export const profileAddButton = profile.querySelector('.profile__add-button');

export const popupShowPhoto = document.querySelector('#popup-show-photo'); 

export const cardsContainer = document.querySelector('.elements');

export const options = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_active"
}