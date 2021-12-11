/* validação cadastro */

const button = document.getElementById('entrar')

button.addEventListener('click', (event) => {
  event.preventDefault()
  const email = document.getElementById('email')
  const senha = document.getElementById('senha')

  /* verificar se está vazio */

  if (email.value == '') {
    email.classList.add("errorInput")
  }
  else {
    email.classList.remove("errorInput")
  }

  if (senha.value == '') {
    senha.classList.add("errorInput")
  }
  else {
    senha.classList.remove("errorInput")
  }

  /* verificar se e-mail é válido */
  if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") - email.value.indexOf("@") == 1)) {
    email.classList.add("errorInput")
  } else {
    email.classList.remove("errorInput")
  }
})

/* visibilidade da senha */
const botaosenha = document.getElementById('senha')
const icon = document.getElementById('icon')

function verSenha() {
  let inputsenha = botaosenha.type == "password"

  if (inputsenha) {
    mostrarsenha();
  }

  else {
    escondersenha();
  }
}

function verSenhaNova() {
  let inputVernovasenha = novasenha.type == "password"

  if (inputVernovasenha) {
    mostrarsenha();
  }

  else {
    escondersenha();
  }
}

function mostrarsenha() {
  botaosenha.setAttribute("type", "text")
  icon.src = "./assets/eye.png";

  novasenha.setAttribute("type", "text")
  iconNovasenha.src = "./assets/eye.png";
}

function escondersenha() {
  botaosenha.setAttribute("type", "password")
  icon.src = "./assets/eyeview.png";
  
  novasenha.setAttribute("type", "password")
  iconNovasenha.src = "./assets/eyeview.png";
}

/*esconder itens recuperaçao de senha*/

const login = document.getElementById('titlelogin')
const esqueceu = document.getElementById('esqueceusenha')
const entrar = document.getElementById('entrar')
const recuperar = document.getElementById('recuperar')
const recuperartext = document.getElementById('recuperartext')
const recuperaremail = document.getElementById('emailrecuperar')
const prosseguir = document.getElementById('prosseguir')


function escondercampos(){

  /*esconder campos do form*/
  email.style.visibility = 'hidden';
  email.style.display = 'none';
  senha.style.visibility = 'hidden';
  senha.style.display = 'none';
  login.style.visibility = 'hidden';
  login.style.display = 'none';
  entrar.style.visibility = 'hidden';
  entrar.style.display = 'none';
  icon.style.visibility = 'hidden';
  esqueceu.style.visibility = 'hidden';

  /*mostrar campos de recupeçao*/
  recuperar.style.visibility = 'visible';
  recuperar.style.display = 'block'
  recuperartext.style.visibility = 'visible';
  recuperartext.style.display = 'block'
  recuperaremail.style.visibility = 'visible';
  recuperaremail.style.display = 'block';
  prosseguir.style.visibility = 'visible';
  prosseguir.style.display = 'block';
}

const codtext = document.getElementById('codigotext')
const recuperarcod = document.getElementById('codigorecuperar')

function codigo(){
  /*esconder campos do form*/
  recuperartext.style.visibility = 'hidden';
  recuperartext.style.display = 'none'
  recuperaremail.style.visibility = 'hidden';
  recuperaremail.style.display = 'none';
  prosseguir.style.visibility = 'hidden';
  prosseguir.style.display = 'none';

  /*mostrar campos de codigo*/
  codtext.style.visibility = 'visible';
  codtext.style.display = 'block'
  recuperarcod.style.visibility = 'visible';
  recuperarcod.style.display = 'block';
  prosseguircodigo.style.visibility = 'visible';
  prosseguircodigo.style.display = 'block';
}

const senhatext = document.getElementById('novasenhatext')
const novasenha = document.getElementById('novasenha')
const salvarnovasenha = document.getElementById('salvarnovasenha')
const iconsenha = document.getElementById('iconNovasenha')

function novasenhafun(){
  /*esconder campos do form*/
  codtext.style.visibility = 'hidden';
  codtext.style.display = 'none'
  recuperarcod.style.visibility = 'hidden';
  recuperarcod.style.display = 'none';
  prosseguircodigo.style.visibility = 'hidden';
  prosseguircodigo.style.display = 'none'; 
 

  /*mostrar campos de codigo*/
  senhatext.style.visibility = 'visible';
  senhatext.style.display = 'block'
  novasenha.style.visibility = 'visible';
  novasenha.style.display = 'block';
  salvarnovasenha.style.visibility = 'visible';
  salvarnovasenha.style.display = 'block';
  iconsenha.style.visibility = 'visible';
  iconsenha.style.display = 'block';
}