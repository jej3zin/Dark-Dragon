let p = setInterval(function () {
  clearInterval(p);

  document.getElementById('loading').style.display = 'none';
  document.getElementById('conteudo').style.display = 'inline';
}, 6000);
// Dropdowns
function toggleNotif() {
  const dropNotif = document.getElementById('dropNotif');
  dropNotif.classList.toggle('show');

  document.addEventListener('click', function handleClickOutside(event) {
    if (
      !dropNotif.contains(event.target) &&
      !event.target.closest('#btnNotif')
    ) {
      dropNotif.classList.remove('show');
      document.removeEventListener('click', handleClickOutside);
    }
  });
}
function toggleUser() {
  const dropUser = document.getElementById('dropUser');
  dropUser.classList.toggle('show');

  document.addEventListener('click', function handleClickOutside(event) {
    if (!dropUser.contains(event.target) && !event.target.closest('#btnUser')) {
      dropUser.classList.remove('show');
      document.removeEventListener('click', handleClickOutside);
    }
  });
}

/* Error Msg */
function btnLogin() {
  document.getElementById('boxMsg').classList.toggle('show');
}
function closeWindow() {
  document.getElementById('boxMsg').classList.remove('show');
}
/* Menu */
function toggleMenu() {}
const navbar = document.querySelector('.menu'); // Container
const toggle = document.querySelector('#toggleMenu'); // Button

toggle.addEventListener('click', () => {
  toggle.classList.toggle('activeMenu');
  navbar.classList.toggle('activeMenu');
});
/* Slide */
var slideshows = document.querySelectorAll('[data-component="slideshow"]');
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {
  let slides = document.querySelectorAll(
    `#${slideshow.id} [role="list"] .slide`
  );

  let index = 0,
    time = 6000000; // 1 secound = 1000 | 1 minute = 10000 | 1 day= 6000000
  slides[index].classList.add('active');

  setInterval(() => {
    slides[index].classList.remove('active');
    index++;

    if (index === slides.length) index = 0;

    slides[index].classList.add('active');
  }, time);
}
/* Slide 2 */
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('nav-dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' dot-active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' dot-active';
}
