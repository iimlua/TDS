var btn = document.getElementById('esconder');
var container = document.querySelector('.cards');
var text = document.querySelector('.texto')
btn.addEventListener('click', function () {

  if (container.style.display === 'flex') {
    container.style.display = 'none'
    btn.src = "./assets/setafechado.png";
  } else {
    container.style.display = 'flex';
    btn.src = "./assets/seta.png";
  }

  if (text.style.display === 'block') {
    text.style.display = 'none';
  } else {
    text.style.display = 'block';
  }
});

/* voltar ao topo */

let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
