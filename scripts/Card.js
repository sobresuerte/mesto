import {openPopup} from './index.js';

export default class Card {
  _popupShowPhoto = document.querySelector('#popup-show-photo');
  _bigPhoto = this._popupShowPhoto.querySelector('.popup__image');
  _photoCaption = this._popupShowPhoto.querySelector('.popup__caption');

  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    this._element = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
  }

  _handleDeleteCard() {
    this._element.remove();
  }

  _handleLikeCard() {
    this._element.querySelector('.element__like-button').classList.toggle('element__like-button_active');
  }

  _handleCardOpen(data) {
    this._bigPhoto.src = this._link;
    this._bigPhoto.alt = this._name;
    this._photoCaption.textContent = this._name;

    openPopup(this._popupShowPhoto);
  }

  _setEventListeners() {
    this._element.querySelector('.element__delete-button').addEventListener('click', () => {
        this._handleDeleteCard();
    });

    this._element.querySelector('.element__like-button').addEventListener('click', () => {
        this._handleLikeCard();
    });

    this._element.querySelector('.element__image').addEventListener('click', () => {
        this._handleCardOpen();
    });
  }

  generateCard() {
    this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__image').alt = this._name; 
    this._element.querySelector('.element__title').textContent = this._name;

    return this._element;
  }
}