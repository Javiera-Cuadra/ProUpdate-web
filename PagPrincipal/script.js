document.addEventListener("DOMContentLoaded", () => {
  // Animar todas las imágenes al cargar la página
  document.querySelectorAll('.imagen-animada, .imagen-izquierda').forEach(img => {
    // Añadir la clase para animar
    img.classList.add('animar');
  });

  // Seleccion de todos los enlaces del menú
  const menuLinks = document.querySelectorAll('nav a');

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      const targetId = link.getAttribute('href');
      const section = document.querySelector(targetId);

      if (section) {
        // Removemer y volver a añadir la clase para reiniciar la animación
        section.querySelectorAll('.imagen-animada, .imagen-izquierda').forEach(img => {
          img.classList.remove('animar');
          // Forzar reflow para reiniciar animación
          void img.offsetWidth;
          img.classList.add('animar');
        });
      }
    });
  });
});
