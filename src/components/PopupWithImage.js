import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._bigPhoto = this._popup.querySelector('.popup__image');
    this._photoCaption = this._popup.querySelector('.popup__caption');
  }

  open(name, link) {
    super.open();
    this._bigPhoto.src = link;
    this._bigPhoto.alt = name;
    this._photoCaption.textContent = name;
  }
}