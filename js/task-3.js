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
