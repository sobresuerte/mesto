import './index.css';

import initialCards from '../utils/inicialCards.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';

// DOM элементы 
import {
  popupEditProfile,
  formEditProfile,
  nameInput,
  jobInput,
  popupAddPhoto,
  formAddPhoto,
  titleInput,
  linkInput,
  profile,
  profileName,
  profileJob,
  profileEditButton,
  profileAddButton,
  popupShowPhoto,
  cardsContainer,
  options
} from '../utils/constants.js'

// class PopupWithImage
const popupWithImage = new PopupWithImage(popupShowPhoto);

function handleCardClick(name, link) {
  popupWithImage.open(name, link);
}

popupWithImage.setEventListeners();

// данные пользователя

const userInfo = new UserInfo({
  nameSelector: profileName,
  jobSelector: profileJob,
});

// class PopupWithForm - edit profile

const popupEdit = new PopupWithForm(popupEditProfile, () => {
    userInfo.setUserInfo(nameInput, jobInput);
});

popupEdit.setEventListeners();

profileEditButton.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.job;

  popupEdit.open();
  validateProfile.resetValidation();
});


// Открытие и закрытие попапа
/*function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', handleEscClose);
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', handleEscClose);
};

function handleEscClose(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

function openEditProfile() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;

  openPopup(popupEditProfile);
};*/

/*const handleCardClick = (name, link) => {
  bigPhoto.src = link;
  bigPhoto.alt = name;
  photoCaption.textContent = name;

  openPopup(popupShowPhoto);
}

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-button')) {
      closePopup(evt.currentTarget);
    }
  });
})*/

/*profileAddButton.addEventListener('click', () => {
  openPopup(popupAddPhoto);
  validatePhotoCard.resetValidation();
});*/

// Обработчик «отправки» формы
/*function handleProfileFormSubmit (evt) {
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
};*/

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
//formEditProfile.addEventListener('submit', handleProfileFormSubmit);
//formAddPhoto.addEventListener('submit', handleAddFormSubmit);

// Генерация карточки
const newCard = (cardsData) => new Card(cardsData, '#card-template', handleCardClick).generateCard();

// Section, Рендер карточек

const cardList = new Section({
  items: initialCards,
  renderer: (cardsData) => {
    const card = newCard(cardsData);
    cardList.addItem(card);
  }
}, cardsContainer);

cardList.renderItems();

// class PopupWithForm - add new card 

const popupAdd = new PopupWithForm(popupAddPhoto,
  (cardsData) => {
  const card = newCard(cardsData);
  
  cardList.addItem(card);
}
);

popupAdd.setEventListeners();

profileAddButton.addEventListener('click', () => {
popupAdd.open();
validatePhotoCard.resetValidation();
})

// Рендер карточек
/*const renderCard = (cardsData) => {
  cardsContainer.prepend(newCard(cardsData));
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
};*/

// Включение валидации
const validateProfile = new FormValidator(options, formEditProfile);
const validatePhotoCard = new FormValidator(options, formAddPhoto);

validateProfile.enableValidation();
validatePhotoCard.enableValidation();