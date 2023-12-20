//Звонок
document.getElementById('main-but').addEventListener('click', function () {
  var phone = document.getElementById('main-input').value;
  if (phone.length == 12 && phone[0] == "+" && phone[1] == "7") {
    console.log('Отправка номера телефона: ' + phone);
    document.getElementById('main-input').value = '';
    alert('Номер телефона отправлен нашему менджеру. Он свяжется с Вами в самое ближайшее время!');
  } else {
    document.getElementById('main-input').value = '';
    alert('Пожалуйста, введите корректный номер телефона');
  }
});

//Слайды

let slideIndex = 0;
showSlides();
function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000);
}

//Сервисы, контакты

function scrollToFooter() {
  var footerElement = document.getElementById('footerid');
  var scrollToPosition = footerElement.offsetTop;
  window.scrollTo(0, scrollToPosition);
}