  // Obtiene el enlace activo actual y agrega la clase "activo" al elemento <li> que contiene el dropdown
  function resaltarEnlaceActivo() {
    var enlaces = document.querySelectorAll("nav li a");
    var paginaActual = window.location.pathname;

    for (var i = 0; i < enlaces.length; i++) {
      var enlace = enlaces[i];
      var enlaceURL = enlace.getAttribute("href");
      var elementoLi = enlace.parentNode; // Obtiene el elemento <li>
      var dropdown = document.getElementById("dropdown");

      

      // Verifica si el enlace coincide con la página actual
      if (paginaActual === enlaceURL) {
        elementoLi.classList.add("active");

        // Si el elemento <li> tiene un dropdown, también se agrega la clase "activo" al dropdown
        if (enlaceURL === "/ingresar") {
          dropdown.classList.add("active");
        }
      } else {
        elementoLi.classList.remove("active");
        // Si el elemento <li> tiene un dropdown, también se quita la clase "activo" del dropdown
        if (enlaceURL === "/ingresar") {
          dropdown.classList.remove("active");
        }
      }
    }
  }

  // Ejecuta la función cuando la página esté lista
  document.addEventListener("DOMContentLoaded", resaltarEnlaceActivo);