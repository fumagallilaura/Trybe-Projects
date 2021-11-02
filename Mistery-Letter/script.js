const caminhoParaBotao = document.querySelector('#criar-carta');
const caminhoParaInput = document.querySelector('#carta-texto');
const caminhoParaParagrafo = document.querySelector('#carta-gerada');

function adicionaCarta() {
  caminhoParaParagrafo.innerHTML = '';
  const textoDigitado = caminhoParaInput.value.split(' ');
  for (let index = 0; index < textoDigitado.length; index += 1) {
    const newSpan = document.createElement('span')
    newSpan.innerHTML = textoDigitado[index];
    caminhoParaParagrafo.appendChild(newSpan)
  }
}

caminhoParaBotao.addEventListener('click', () => {
  const splitText = caminhoParaInput.value.split();
  const joinText = splitText.join('');
  if (joinText.trim() !== '') { //  retorna o texto sem espaços em branco no início e/ou fim da string. https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/trim
    adicionaCarta()
  } else {
    caminhoParaParagrafo.innerHTML = 'Por favor, digite o conteúdo da carta.'
  }
})

// Se a pessoa usuária não preencher o campo ou preencher com apenas espaços vazios adicionar a mensagem 'Por favor, digite o conteúdo da carta.'
// O que será verificado:

// Será validado que irá exibir a mensagem "Por favor, digite o conteúdo da carta." no elemento p com o `id="carta-gerada"

const style = ['newspaper', 'magazine1', 'magazine2'];

const size = ['medium', 'big', 'reallybig'];

const rotation = ['rotateleft', 'rotateright'];

const inclination = ['skewleft', 'skewright'];

const stylesDiff = [style, size, rotation, inclination];

  const addSpan = document.getElementsByTagName('span') // tem q ser html colection, por isso querySelectorAll nao funciona
  console.log(addSpan);
  caminhoParaBotao.addEventListener('click', () => {
    for (let index = 0; index < addSpan.length; index += 1) {
      const randomStyle = style[Math.floor(Math.random() * style.length)];
      const randomHeight = size[Math.floor(Math.random() * size.length)];
      const randomRotation = rotation[Math.floor(Math.random() * rotation.length)];
      const randomInclination = inclination[Math.floor(Math.random() * inclination.length)];
      addSpan[index].classList.add(randomStyle);
      addSpan[index].classList.add(randomHeight);
      addSpan[index].classList.add(randomRotation);
      addSpan[index].classList.add(randomInclination);
    }
    counterWords();
  });

  const counter = document.getElementById('carta-contador');
  function counterWords () {
    const text =  caminhoParaInput.value;
    const textSplit = text.split(' ');
    counter.innerHTML = textSplit.length;
  }