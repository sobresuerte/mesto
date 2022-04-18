let closeButton = document.querySelector('.popup__close-button');
let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');

// Находим форму в DOM
let formElement = document.querySelector('.popup__form')
// Находим поля формы в DOM
let nameInput = formElement.querySelector('#name')
let jobInput = formElement.querySelector('#description')

// Открытие и закрытие попапа редактирования имени профиля
editButton.addEventListener('click', function () {
  popup.classList.add('popup_opened');
  nameInput.value = "Мария Семенова";
  jobInput.value = "В поисках прекрасного";
})

closeButton.addEventListener('click', function () {
  popup.classList.remove('popup_opened');
})



function editProfile () {
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    nameInput.textContent = nameInput.value;
    jobInput.textContent = jobInput.value;
    // Выберите элементы, куда должны быть вставлены значения полей
    nameInput.value;
    jobInput.value;
    // Вставьте новые значения с помощью textContent
    nameInput.textContent = 'Мария Семенова';
    jobInput.textContent = '';
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);