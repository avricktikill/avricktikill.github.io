function tdnn() {
  // Переключаем класс для элемента с классом "moon" (например, иконка луны/солнца)
  const moon = document.querySelector(".moon");
  if (moon) moon.classList.toggle("sun");

  // Переключаем класс для элемента с классом "tdnn" (например, кнопка или иконка для дня/ночи)
  const tdnnElement = document.querySelector(".tdnn");
  if (tdnnElement) tdnnElement.classList.toggle("day");

  // Переключаем класс для тега body, чтобы менять тему
  document.body.classList.toggle("light");

  // Сохраняем текущее состояние в localStorage
  if (document.body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
}

// Применяем тему при загрузке страницы
window.onload = function() {
  // Проверяем, есть ли сохраненная тема в localStorage
  const savedTheme = localStorage.getItem("theme");

  // Если тема сохранена, применяем её
  if (savedTheme === "light") {
    document.body.classList.add("light");
    const moon = document.querySelector(".moon");
    if (moon) moon.classList.add("sun");
    const tdnnElement = document.querySelector(".tdnn");
    if (tdnnElement) tdnnElement.classList.add("day");
  } else if (savedTheme === "dark") {
    document.body.classList.remove("light");
  }
};
