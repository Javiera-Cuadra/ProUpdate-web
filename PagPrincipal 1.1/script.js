document.addEventListener("DOMContentLoaded", () => {
  // Animar todas las imágenes al cargar la página
  document.querySelectorAll('.imagen-animada, .imagen-izquierda').forEach(img => {
    img.classList.add('animar');
  });

  // Movimiento del avión según el scroll
  const plane = document.getElementById("plane");

  if (plane) {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      const moveX = scrollY * 0.35; // hacia la izquierda
      const moveY = -scrollY * 0.075; // hacia arriba

      plane.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  }

  // Reiniciar animaciones al hacer clic en enlaces del menú
  const menuLinks = document.querySelectorAll('nav a');

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      const targetId = link.getAttribute('href');
      const section = document.querySelector(targetId);

      if (section) {
        section.querySelectorAll('.imagen-animada, .imagen-izquierda').forEach(img => {
          img.classList.remove('animar');
          void img.offsetWidth; // Forzar reflow
          img.classList.add('animar');
        });
      }
    });
  });
});