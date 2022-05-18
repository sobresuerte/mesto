// Массив фото-карточек
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

// DOM элементы

const popup = document.querySelectorAll('.popup');

const popupEditProfile = document.querySelector('#popup-edit-profile');
const formEditProfile = popupEditProfile.querySelector('.popup__form');
const nameInput = popupEditProfile.querySelector('#name');
const jobInput = popupEditProfile.querySelector('#description');
const editCloseButton = popupEditProfile.querySelector('.popup__close-button');
const profileSubmitButton = popupEditProfile.querySelector('.popup__submit-button');

const popupAddPhoto = document.querySelector('#popup-add-photo');
const formAddPhoto = popupAddPhoto.querySelector('.popup__form');
const titleInput = popupAddPhoto.querySelector('#title');
const linkInput = popupAddPhoto.querySelector('#link');
const addCloseButton = popupAddPhoto.querySelector('.popup__close-button');
const addSubmitButton = popupAddPhoto.querySelector('.popup__submit-button');

const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__name');
const profileJob = profile.querySelector('.profile__subtitle');
const editButton = profile.querySelector('.profile__edit-button');
const addButton = profile.querySelector('.profile__add-button');

const popupShowPhoto = document.querySelector('#popup-show-photo');
const showCloseButton = popupShowPhoto.querySelector('.popup__close-button');
const bigPhoto = popupShowPhoto.querySelector('.popup__image');
const photoCaption = popupShowPhoto.querySelector('.popup__caption');

const cardsContainer = document.querySelector('.elements');

// Открытие и закрытие попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keyup', popupEscHandler);
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keyup', popupEscHandler);
};

function popupOverlayClickHandler(evt) {
  const popupOpened = document.querySelector('.popup_opened');
  if (evt.target === evt.currentTarget) {
    closePopup(popupOpened);
  }
}

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

editButton.addEventListener('click', () => {
  openEditProfile();
  enableSubmitButton(profileSubmitButton, 'popup__submit-button_disabled');
});
addButton.addEventListener('click', () => {
  openPopup(popupAddPhoto);
  disabledSubmitButton(addSubmitButton, 'popup__submit-button_disabled');
});
editCloseButton.addEventListener('click', () => closePopup(popupEditProfile));
addCloseButton.addEventListener('click', () => closePopup(popupAddPhoto));
showCloseButton.addEventListener('click', () => closePopup(popupShowPhoto));
popupEditProfile.addEventListener('click', popupOverlayClickHandler);
popupAddPhoto.addEventListener('click', popupOverlayClickHandler);
popupShowPhoto.addEventListener('click', popupOverlayClickHandler);

// Обработчик «отправки» формы
function handleProfileFormSubmit (evt) {
    evt.preventDefault(); 
    
    const name = nameInput.value;
    const description = jobInput.value;

    profileName.textContent = name;
    profileJob.textContent = description;

    closePopup(popupEditProfile);
}

function handleDeleteCard (evt) {
  evt.target.closest('.element').remove();
};

function handleLikeCard (evt) {
  evt.target.classList.toggle('element__like-button_active');
};

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
const generateCard = (cardsData) => {
  const newCard = cardTemplate.cloneNode(true);

  const elementTitle = newCard.querySelector('.element__title');
  elementTitle.textContent = cardsData.name;

  const elementPhoto = newCard.querySelector('.element__image');
  elementPhoto.src = cardsData.link;
  elementPhoto.alt = cardsData.name;
  
  const deleteButton = newCard.querySelector('.element__delete-button');
  deleteButton.addEventListener('click', handleDeleteCard);

  const likeButton = newCard.querySelector('.element__like-button');
  likeButton.addEventListener('click', handleLikeCard);

  bigPhoto.src = linkInput.value;
  photoCaption.textContent = titleInput.value;


  function openPopupShowPhoto() {
    bigPhoto.src = elementPhoto.src;
    bigPhoto.alt = elementTitle.textContent;
    photoCaption.textContent = elementTitle.textContent;
  
    openPopup(popupShowPhoto);
  };

  elementPhoto.addEventListener('click', openPopupShowPhoto);

  return newCard;
};

// Шаблон
const cardTemplate = document.querySelector('#card-template').content.querySelector('.element');

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