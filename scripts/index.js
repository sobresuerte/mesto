import initialCards from './inicialCards.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';

// DOM элементы

const popups = document.querySelectorAll('.popup');

const popupEditProfile = document.querySelector('#popup-edit-profile');
const formEditProfile = popupEditProfile.querySelector('.popup__form');
const nameInput = popupEditProfile.querySelector('#name');
const jobInput = popupEditProfile.querySelector('#description');

const popupAddPhoto = document.querySelector('#popup-add-photo');
const formAddPhoto = popupAddPhoto.querySelector('.popup__form');
const titleInput = popupAddPhoto.querySelector('#title');
const linkInput = popupAddPhoto.querySelector('#link');

const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileJob = profile.querySelector('.profile__subtitle');
const profileEditButton = profile.querySelector('.profile__edit-button');
const profileAddButton = profile.querySelector('.profile__add-button');

const cardsContainer = document.querySelector('.elements');

const options = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_active"
}

// Открытие и закрытие попапа
export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', popupEscHandler);
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', popupEscHandler);
};

function popupEscHandler(evt) {
  const popupOpened = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    closePopup(popupOpened);
  }
}

function openEditProfile() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;

  openPopup(popupEditProfile);
};

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-button')) {
      closePopup(evt.currentTarget);
    }
  });
})

profileEditButton.addEventListener('click', () => {
  openEditProfile();
  validateProfile.enableSubmitButton();
});
profileAddButton.addEventListener('click', () => {
  openPopup(popupAddPhoto);
  validatePhotoCard.disabledSubmitButton();
});

// Обработчик «отправки» формы
function handleProfileFormSubmit (evt) {
    evt.preventDefault(); 
    
    const name = nameInput.value;
    const description = jobInput.value;

    profileName.textContent = name;
    profileJob.textContent = description;

    closePopup(popupEditProfile);
}

function handleAddFormSubmit (evt) {
  evt.preventDefault();

  addNewCard();
  closePopup(popupAddPhoto);
};

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formEditProfile.addEventListener('submit', handleProfileFormSubmit);
formAddPhoto.addEventListener('submit', handleAddFormSubmit);

// Генерация карточки
const generateCard = (cardsData) => new Card(cardsData, '#card-template').generateCard();

// Рендер карточек

const renderCard = (cardsData) => {
  cardsContainer.prepend(generateCard(cardsData));
};

initialCards.forEach((cardsData) => {
  renderCard(cardsData);
});

// Добавление карточки
const addNewCard = () => {
  renderCard({
    name: titleInput.value,
    link: linkInput.value
  });

  formAddPhoto.reset();
};

// Включение валидации
const validateProfile = new FormValidator(options, formEditProfile);
const validatePhotoCard = new FormValidator(options, formAddPhoto);

validateProfile.enableValidation();
validatePhotoCard.enableValidation();