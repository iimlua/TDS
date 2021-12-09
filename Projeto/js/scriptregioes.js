const iconnavigation = document.getElementById('iconnav');
let nav = document.getElementById('navigation');


/* abrir menu */

iconnavigation.addEventListener('click', () => {
  if (nav.style.left === '0rem') {
    nav.style.left = '-21rem';
  }
  else {
    nav.style.left = '0rem';
  }
})

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
