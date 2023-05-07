const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const moon = document.getElementById("moon");
const body = document.body;

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  hamburger.classList.toggle("bg-white");
});

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.body.classList.add("dark");
} else {
  document.body.classList.remove("dark");
}

moon.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    // Si la clase "dark" está presente, establecer el valor de la cookie a "dark"
    document.cookie = "mode=dark";
  } else {
    // Si la clase "dark" no está presente, establecer el valor de la cookie a "light"
    document.cookie = "mode=light";
  }
});

// Comprobar si hay una cookie de modo guardada y aplicarla si existe
if (document.cookie.includes("mode=dark")) {
  body.classList.add("dark");
} else {
  body.classList.remove("dark");
}
