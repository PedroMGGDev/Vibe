// Carousel de Banners
let currentSlide = 0;
const slides = document.querySelectorAll('.banner-img');
const totalSlides = slides.length;

function showSlide(index) {
  const carousel = document.querySelector('.banner-carousel');
  const slideWidth = slides[0].clientWidth;
  carousel.style.transform = `translateX(-${index * slideWidth}px)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

// Mudar o slide a cada 5 segundos
setInterval(nextSlide, 5000);

// Botões de navegação do carousel
document.querySelector('.btn-next').addEventListener('click', nextSlide);
document.querySelector('.btn-prev').addEventListener('click', prevSlide);

// Funcionalidade da barra de pesquisa
const searchButton = document.querySelector('.btn-pesquisa');
const searchInput = document.querySelector('.input-pesquisa');

searchButton.addEventListener('click', function() {
  const query = searchInput.value.trim();
  if (query !== '') {
    alert(`Você está buscando por: ${query}`);
    // Aqui você poderia integrar com um sistema de busca real, por exemplo.
  } else {
    alert('Por favor, insira um termo de busca!');
  }
});

// Mostrar/Esconder Menu no Mobile
const menuToggleButton = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.menu-topo ul');

menuToggleButton.addEventListener('click', function() {
  mobileMenu.classList.toggle('show');
});

// Animações de hover nos produtos
const produtoItems = document.querySelectorAll('.produto-item');

produtoItems.forEach(item => {
  item.addEventListener('mouseenter', function() {
    item.style.transform = 'translateY(-10px)';
  });

  item.addEventListener('mouseleave', function() {
    item.style.transform = 'translateY(0)';
  });
});

// Scroll suave para as seções
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop - 50,
      behavior: 'smooth'
    });
  });
});
