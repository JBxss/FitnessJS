
var isDarkMode = localStorage.getItem("isDarkMode") === "true"; // Obtiene el valor guardado en localStorage

function setDarkMode() {
  var body = document.querySelector("body");
  var icon = document.getElementById("icon");

  if (isDarkMode) {
    // Cambiar fondo a negro
    body.style.backgroundColor = "#212529";
    title.style.color = "white";
    icon.classList.remove("fa-toggle-on");
    icon.classList.add("fa-toggle-off");
  } else {
    // Cambiar fondo a blanco
    body.style.backgroundColor = "white";
    title.style.color = "black";
    icon.classList.remove("fa-toggle-off");
    icon.classList.add("fa-toggle-on");
  }
}

// Llama a la función para establecer el color del fondo al cargar la página
setDarkMode();

document.getElementById("toggleButton").addEventListener("click", function() {
  isDarkMode = !isDarkMode; // Invertir el estado en cada clic
  localStorage.setItem("isDarkMode", isDarkMode); // Guardar el valor en localStorage

  setDarkMode(); // Llama a la función para actualizar el color del fondo y el ícono
});
