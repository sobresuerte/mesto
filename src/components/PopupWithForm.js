import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;

    this._form = this._popup.querySelector('.popup__form');
    this._popupInputs = this._form.querySelectorAll('.popup__input');
  }

  _getInputValues() {
    this._popupValues = {};
    this._popupInputs.forEach((inputElement) => {
      this._popupValues[inputElement.name] = inputElement.value;
    });

    return this._popupValues;
  }


  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      console.log(this._submitForm);
      this._submitForm(this._getInputValues());

      this.close();
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}