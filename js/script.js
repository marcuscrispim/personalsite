// script.js

// Seleciona o botão de toggle e o elemento de navbar
const navToggle = document.getElementById('navToggle');
const headerContainer = document.querySelector('.header-container');
const navbar = document.querySelector('.navbar');

// Evento de clique para mostrar/ocultar menu em mobile
navToggle.addEventListener('click', function() {
  // Adiciona ou remove a classe que ativa o menu mobile
  navbar.classList.toggle('mobile-active');
});
