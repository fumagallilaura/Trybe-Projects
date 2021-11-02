const buttonLogin = document.querySelector('button');
const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');
const checkboxButton = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');
const textAreaCaract = document.getElementById('textarea');
const contador = document.getElementById('counter');

function verificaEmail() {
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
buttonLogin.addEventListener('click', verificaEmail);

function habilitButton() {
  if (checkboxButton.checked === true) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}
checkboxButton.addEventListener('click', habilitButton);

function counterTextarea() {
  // array = [0 a 500]; textareaCaract / contador
  // let contando = parseInt(contador.innerHTML) // number
  const arrayTextarea = textAreaCaract.value.split(''); // caracteres digitados - dar um split("")
  // pri silva - [p r i " " s i l v a]
  // prisilva.length = 9
  const contandoTextarea = arrayTextarea.length;
  const resultado = 500 - contandoTextarea; // valor couter - prisilva.length = 491
  contador.innerHTML = resultado;
}
textAreaCaract.addEventListener('input', counterTextarea);

// Requisito 21 : https://github.com/tryber/sd-016-a-project-trybewarts/pull/66/commits/c2320b11d09560be4f2257ad1ebe84cbc217babe

function getValues(elements) {
  const values = [];
  for (let index = 0; index < elements.length; index += 1) {
    if (elements[index].checked) {
      values.push(elements[index].value);
    }
  }
  return values.join(', ');
}

// function removeForm() {
//   while (formulario.firstChild) {
//     formulario.firstChild.remove();
//   }
// }

const nome = document.querySelector('#input-name');
const sobrenome = document.querySelector('#input-lastname');
const email = document.querySelector('#input-email');
const casa = document.querySelector('#house');
const familia = document.querySelectorAll('.radioInput');
const conteudos = document.querySelectorAll('.hab');
const notas = document.querySelectorAll('.rate');
const nomeCompleto = document.querySelector('#nome-completo');
const emailPrint = document.querySelector('#emailPrint');
const casaPrint = document.querySelector('#casaPrint');
const familiaPrint = document.querySelector('#familia-print');
const habilitys = document.querySelector('#habilidades');
const nota = document.querySelector('#nota');
const obs = document.querySelector('#obs');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  // removeForm();
  nomeCompleto.innerText = `Nome: ${nome.value} ${sobrenome.value}`;
  emailPrint.innerText = `Email: ${email.value}`;
  casaPrint.innerText = `Casa: ${casa.value}`;
  familiaPrint.innerText = `Família: ${getValues(familia)}`;
  habilitys.innerText = `Matérias: ${getValues(conteudos)}`;
  nota.innerText = `Avaliação: ${getValues(notas)}`;
  obs.innerText = `Observações: ${textAreaCaract.value}`;
});
