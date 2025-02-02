// Задача 3. Ширина елемента

// Оголоси функцію getElementWidth, яка очікує три параметри, значення яких будуть задаватися під час її виклику: • content— перший параметр, ширина контенту • padding — другий параметр, значення горизонтального падінгу для кожної зі сторін • border — третій параметр, значення товщини бордера для кожної зі сторін Значення всіх параметрів будуть рядками формату Npx де N — це довільне число, ціле або дробове.
// Доповни код функції так, щоб вона повертала число —загальну ширину елемента. При розрахунку загальної ширини орієнтуйся на те, що значення box-sizing дорівнює border-box.

function getElementWidth(content, padding, border) {
  // Переводимо всі вхідні значення у числа, щоб уникнути помилок
  const contentWidth = parseFloat(content);
  const paddingWidth = parseFloat(padding);
  const borderWidth = parseFloat(border);

  // Розраховуємо загальну ширину з урахуванням box-sizing: border-box
  const totalWidth = contentWidth + paddingWidth * 2 + borderWidth * 2;

  // Повертаємо результат
  return totalWidth;
}

// Перевірка роботи функції
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
