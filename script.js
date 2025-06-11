// Carrusel de banners automático
document.addEventListener('DOMContentLoaded', function () {
  // Banner carousel logic
  const carousel = document.querySelector('.banner-carousel');
  if(carousel) {
    const images = carousel.querySelectorAll('img');
    let idx = 0;
    function showImage(n) {
      images.forEach((img, i) => img.classList.toggle('active', i === n));
    }
    showImage(idx);
    setInterval(() => {
      idx = (idx + 1) % images.length;
      showImage(idx);
    }, 3000);
  }

  // Validación de formulario de reserva
  const form = document.getElementById('form-reserva');
  if(form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      let valido = true;
      let mensaje = '';

      // Obtener valores
      const nombre = document.getElementById('nombre').value.trim();
      const fecha = document.getElementById('fecha').value;
      const comensales = parseInt(document.getElementById('comensales').value, 10);
      const terminos = document.getElementById('terminos').checked;

      // Validaciones
      if (nombre.length < 2) {
        valido = false;
        mensaje += 'Introduce un nombre válido. ';
      }
      if (!fecha) {
        valido = false;
        mensaje += 'Selecciona una fecha. ';
      }
      if (!comensales || comensales < 1 || comensales > 20) {
        valido = false;
        mensaje += 'Número de comensales entre 1 y 20. ';
      }
      if (!terminos) {
        valido = false;
        mensaje += 'Debes aceptar los términos y condiciones. ';
      }

      // Mostrar mensaje
      const mensajeDiv = document.getElementById('mensaje-formulario');
      if (valido) {
        mensajeDiv.style.color = 'green';
        mensajeDiv.textContent = '¡Reserva realizada con éxito!';
        form.reset();
      } else {
        mensajeDiv.style.color = '#b33333';
        mensajeDiv.textContent = mensaje;
      }
    });
  }
});

/* 
  Resumen funcional:
  - index.html: Página principal con menú, banner animado (carrusel), enlaces, imágenes, video y audio.
  - reserva.html: Formulario de reservas con validación en cliente, diseño accesible y responsivo.
  - style.css: Estilos adaptativos, uso de selectores y clases, colores accesibles, media queries.
  - script.js: Carrusel de imágenes, validación del formulario, comentarios, funciones y estructuras de control.
  - Efectos visuales: Carrusel animado y efectos hover en galería.
  - Accesibilidad: Uso de etiquetas semánticas, aria-labels y contraste adecuado.
  - Multimedia: Integración de imágenes, video y audio en formatos estándar.
*/