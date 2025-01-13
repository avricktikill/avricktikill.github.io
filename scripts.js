function tdnn() {

  const moon = document.querySelector(".moon");
  if (moon) moon.classList.toggle("sun");

  const tdnnElement = document.querySelector(".tdnn");
  if (tdnnElement) tdnnElement.classList.toggle("day");

  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
}

window.onload = function() {
  const savedTheme = localStorage.getItem("theme");
ё
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
