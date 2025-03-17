// nav Sideber
const navbar = document.querySelector('.navbar'); // Container
const toggle = document.querySelector('.toggle'); // Button

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  navbar.classList.toggle('active');
});
// Dropdown
function toggleDropUser() {
  document.getElementById('dropdownContUser').classList.toggle('show');
}
function toggleDropNotif() {
  document.getElementById('dropdownContNotif').classList.toggle('show');
}
function toggleDropGames() {
  document.getElementById('dropdownContGames').classList.toggle('show');
}
/* Slides */
var slideshows = document.querySelectorAll('[data-component="slideshow"]');
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {
  var slides = document.querySelectorAll(
    `#${slideshow.id} [role="list"] .slide`
  ); // Obter um array de slides

  var index = 0,
    time = 5000;
  slides[index].classList.add('active');

  setInterval(() => {
    slides[index].classList.remove('active');

    //Passar por cada slide, incrementando o índice
    index++;

    // Ao passar por todos os slides, reiniciar o índice para exibir o primeiro slide e iniciar novamente
    if (index === slides.length) index = 0;

    slides[index].classList.add('active');
  }, time);
}
/* Forms */
let form = document.getElementById('form-contato');

if (form.addEventListener) {
  form.addEventListener('submit', validaCadastro);
} else if (form.attachEvent) {
  form.attachEvent('onsubmit', validaCadastro);
}
function validaCadastro(evt) {
  let email = document.getElementById('email');
  let senha = document.getElementById('senha');
  let filtro =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  let contErro = 0;
}
/* Validação do campo email */
caixa_email = document.querySelector('.msg-email');
if (email.value == '') {
  caixa_email.innerHTML = 'Favor preencher o E-mail';
  caixa_email.style.display = 'block';
  contErro += 1;
} else if (filtro.test(email.value)) {
  caixa_email.style.display = 'none';
} else {
  caixa_email.innerHTML = 'Formato do E-mail inválido';
  caixa_email.style.display = 'block';
  contErro += 1;
}
/* Validação do campo senha */
caixa_senha = document.querySelector('.msg-senha');
if (senha.value == '') {
  caixa_senha.innerHTML = 'Favor preencher a Senha';
  caixa_senha.style.display = 'block';
  contErro += 1;
} else if (senha.value.length < 6) {
  caixa_senha.innerHTML =
    'Favor preencher a Senha com o mínimo de 6 caracteres';
  caixa_senha.style.display = 'block';
  contErro += 1;
} else {
  caixa_senha.style.display = 'none';
}
if (contErro > 0) {
  evt.preventDefault();
}
function enviardados() {
  if (
    document.dados.tx_nome.value == '' ||
    document.dados.tx_nome.value.length < 8
  ) {
    alert('Preencha campo NOME corretamente!');
    document.dados.tx_nome.focus();
    return false;
  }

  if (
    document.dados.tx_email.value == '' ||
    document.dados.tx_email.value.indexOf('@') == -1 ||
    document.dados.tx_email.value.indexOf('.') == -1
  ) {
    alert('Preencha campo E-MAIL corretamente!');
    document.dados.tx_email.focus();
    return false;
  }

  return true;
}
/* let campo1 = document.getElementById('email');
campo1.setCustomValidity(
  'Preencha este campo corretamente. (exemplo@gmail.com)'
); */
/* let campo2 = document.getElementById('senha');
campo2.setCustomValidity('Insira uma senha forte! (123@5-789)');
 */
