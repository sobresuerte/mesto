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

const popupEdit = new PopupWithForm(popupEditProfile, (data) => {
    const { name, description } = data;
    userInfo.setUserInfo(name, description);
});

popupEdit.setEventListeners();

profileEditButton.addEventListener('click', () => {
  const { name, job } = userInfo.getUserInfo();
  nameInput.value = name;
  jobInput.value = job;

  popupEdit.open();
  validateProfile.resetValidation();
});

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
  const card = newCard({
    name: cardsData.title,
    link: cardsData.link
  });
  
  cardList.addItem(card);
}
);

popupAdd.setEventListeners();

profileAddButton.addEventListener('click', () => {
popupAdd.open();
validatePhotoCard.resetValidation();
});

// Включение валидации
const validateProfile = new FormValidator(options, formEditProfile);
const validatePhotoCard = new FormValidator(options, formAddPhoto);

validateProfile.enableValidation();
validatePhotoCard.enableValidation();