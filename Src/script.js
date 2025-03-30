/* Loading */
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      if (!$('.main_header').hasClass('fixed')) {
        $('.main_header').stop().addClass('fixed').css('top', '-100px').animate(
          {
            top: '0px',
          },
          500
        );
      }
    } else {
      $('.main_header').removeClass('fixed');
    }
  });
});
$(window).load(function () {
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
  $('body').delay(350).css({ overflow: 'visible' });
});
/* Tab Login */
const tabs = document.querySelectorAll('[data-tab-value]');
const tabInfos = document.querySelectorAll('[data-tab-info]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabValue);
    tabInfos.forEach((tabInfo) => {
      tabInfo.classList.remove('active');
    });
    target.classList.add('active');
  });
});
/* Data Age */
function submitBday() {
  var Bdate = document.getElementById('bday').value;
  var Bday = new Date(Bdate);
  var today = new Date();
  var age = today.getFullYear() - Bday.getFullYear();
  if (
    today.getMonth() < Bday.getMonth() ||
    (today.getMonth() === Bday.getMonth() && today.getDate() < Bday.getDate())
  ) {
    age--;
  }
  document.getElementById('resultBday').innerHTML =
    'You are ' + age + ' years old.';
}
