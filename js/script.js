document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  // Evento de clique para mostrar/ocultar o menu em mobile
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
  // Fecha o menu ao clicar em um link (apenas para mobile)
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
    });
  });
});
