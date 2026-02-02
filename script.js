/* Плавный скролл по якорям */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const id = this.getAttribute('href');
    const target = document.querySelector(id);

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// +7 к номеру
const phoneInput = document.getElementById('phone');

if(phoneInput){
  phoneInput.addEventListener('input', function(e){
    let x = this.value.replace(/\D/g, '').slice(0,11);

    let formatted = '+7 ';
    if(x.length > 1) formatted += '(' + x.slice(1,4);
    if(x.length >= 4) formatted += ') ' + x.slice(4,7);
    if(x.length >= 7) formatted += '-' + x.slice(7,9);
    if(x.length >= 9) formatted += '-' + x.slice(9,11);

    this.value = formatted;
  });
}

// сообщение об успехе
const params = new URLSearchParams(window.location.search);
if(params.get("success")){
  alert("Заявка отправлена! Мы скоро с вами свяжемся.");
}

