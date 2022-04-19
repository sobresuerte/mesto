let closeButton = document.querySelector('.popup__close-button');
let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');

// Находим форму в DOM
let formElement = document.querySelector('.popup__form')
// Находим поля формы в DOM
let nameInput = formElement.querySelector('#name')
let jobInput = formElement.querySelector('#description')

let profile = document.querySelector('.profile');
let profileName = profile.querySelector('.profile__name');
let profileJob = profile.querySelector('.profile__subtitle');

// Открытие и закрытие попапа редактирования имени профиля
function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = "Мария Семенова";
  jobInput.value = "В поисках прекрасного";
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click',closePopup);

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    let name = nameInput.value;
    let description = jobInput.value;
    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent
    profileName.textContent = name;
    profileJob.textContent = description;

    closePopup();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);