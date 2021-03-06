export default class FormValidator {
    constructor(options, formElement) {
      this._formSelector = options.formSelector;
      this._inputSelector = options.inputSelector;
      this._submitButtonSelector = options.submitButtonSelector;
      this._inactiveButtonClass = options.inactiveButtonClass;
      this._inputErrorClass = options.inputErrorClass;
      this._errorClass = options.errorClass;

      this._formElement = formElement; 
      this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
      this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    }

    _showInputError = (inputElement, errorMessage) => {
      const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
      inputElement.classList.add(this._inputErrorClass);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(this._errorClass);
    }

    _hideInputError = (inputElement) => {
      const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
      inputElement.classList.remove(this._inputErrorClass);
      errorElement.classList.remove(this._errorClass);
      errorElement.textContent = '';  
    }

    _checkInputValidity = (inputElement) => {
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError(inputElement);
      }
    }

    _setEventListeners() {
      this._toggleButtonState();
      this._inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
          this._checkInputValidity(inputElement);
          this._toggleButtonState();
        });
      });
    }

    _hasInvalidInput () {
      return this._inputList.some((inputElement) => {
        return !inputElement.validity.valid;
      });
    }

    _disabledSubmitButton () {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.disabled = true;
    }

    _enableSubmitButton () {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.disabled = false;
    }

    _toggleButtonState () {
      if (this._hasInvalidInput(this._inputList)) {
        this._disabledSubmitButton();
      } else {
        this._enableSubmitButton();
      }
    }

    resetValidation() {
      this._toggleButtonState();
  
      this._inputList.forEach((inputElement) => {
        this._hideInputError(inputElement);
      });
  
    }

    enableValidation () {
        this._setEventListeners();
    }
}