// ***Задача со звездочкой
//Добавляем обработчик события DOMContentLoaded к объекту document
document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submit-button");
  const resultDiv = document.getElementById("result");

  // Получаем введенное пользователем число из поля ввода.
  function displayDigits() {
    const numberInput = document.getElementById("number-input").value;

    // Разбивает число на цифры и выводит их на экран.
    const digits = numberInput.toString().split("");
    resultDiv.innerHTML = `Цифры: ${digits.join(", ")}`;

    // Подсчитывает количество цифр в числе.
    const numberOfDigits = digits.length;
    resultDiv.innerHTML += `<br>Цифр в числе: ${numberOfDigits}`;

    // Находит сумму цифр числа.
    const sumOfDigits = digits.reduce((sum, digit) => sum + parseInt(digit), 0);
    resultDiv.innerHTML += `<br>Сумма: ${sumOfDigits}`;

    // Меняет порядок цифр числа на обратный.
    const reversedNumber = parseInt(digits.reverse().join(""));
    resultDiv.innerHTML += `<br>Обратный порядок: ${reversedNumber}`;
  }

  submitButton.addEventListener("click", displayDigits);
});
