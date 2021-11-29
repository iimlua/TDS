/* validação cadastro */

const button = document.getElementById('enviar')

button.addEventListener('click', (event) => {
  event.preventDefault()

  const nome = document.getElementById('nome')
  const sobrenome = document.getElementById('sobrenome')
  const email = document.getElementById('email')
  const senha = document.getElementById('senha')

  /* verificar se está vazio */
  if (nome.value == '') {
    nome.classList.add("errorInput")
  }
  else {
    nome.classList.remove("errorInput")
  }

  if (sobrenome.value == '') {
    sobrenome.classList.add("errorInput")
  }
  else {
    sobrenome.classList.remove("errorInput")
  }

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

function verSenha(){
  let inputsenha =  botaosenha.type == "password"

  if(inputsenha){
    mostrarsenha();
  }

  else{
    escondersenha();
  }
}

function mostrarsenha(){
  botaosenha.setAttribute("type", "text")
  icon.src = "./assets/eye.png";
}

function escondersenha(){
  botaosenha.setAttribute("type", "password")
  icon.src = "./assets/eyeview.png";
}

