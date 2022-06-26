export default class Card {

  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    this._element = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
  }

  _handleDeleteCard() {
    this._element.remove();
  }

  _handleLikeCard() {
    this._likeButton.classList.toggle('element__like-button_active');
  }

  _setEventListeners() {
    this._deletButton = this._element.querySelector('.element__delete-button');
    this._likeButton = this._element.querySelector('.element__like-button');
    this._cardImage = this._element.querySelector('.element__image');

    this._deletButton.addEventListener('click', () => {
        this._handleDeleteCard();
    });

    this._likeButton.addEventListener('click', () => {
        this._handleLikeCard();
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    });
  }

  generateCard() {
    this._getTemplate();
    this._setEventListeners();

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name; 
    this._element.querySelector('.element__title').textContent = this._name;

    return this._element;
  }
}