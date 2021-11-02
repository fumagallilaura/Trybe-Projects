function boxPixel(n) {
  let parent = document.querySelector("#pixel-board")
  for (let indexColunm = 0; indexColunm < n ** 2; indexColunm += 1) {
    // let sectionBox = document.createElement("div");
    // parent.appendChild(sectionBox);
    // for (let i = 0; i < n; i = i + 1) {
    let boxColor = document.createElement("div");
    boxColor.className = "pixel";
    parent.appendChild(boxColor);
  }
  // }
}
boxPixel(5);

function removeColor() {
  document.querySelector(".selected").classList.remove('selected');
}

function clickColor() {
  let colorPalette = document.getElementById("color-palette");
  colorPalette.addEventListener('click', function (event) {
    removeColor();
    event.target.classList.add("selected")
  })
}
clickColor();

// Clicar em um pixel dentro do quadro após selecionar uma cor na paleta faz com que o pixel seja preenchido com a cor selecionada.
// O que será verificado:

// Verifica se ao carregar a página deve ser possível pintar os pixels de preto

// Verifica se após selecionar uma outra cor na paleta, é possível pintar os pixels com essa cor

// Verifica se somente o pixel que foi clicado foi preenchido com a cor selecionada, sem influenciar na cor dos demais pixels.
function pintarQuadrado(event) {
  let caminhoParaCorQueQuero = document.querySelector(".selected");
  let corQueQuero = getComputedStyle(caminhoParaCorQueQuero).backgroundColor;
  let elemento = event.target;
  event.target.style.backgroundColor = corQueQuero;
}

document.querySelector("#pixel-board")

// let caminhoDeOndeCliquei = document.querySelectorAll('.pixel');
// for (let i = 0; i < caminhoDeOndeCliquei.length; i += 1){
// caminhoDeOndeCliquei[i].addEventListener('click', pintarQuadrado);
// }

let caminhoDeOndeCliquei = document.getElementById('pixel-board');
caminhoDeOndeCliquei.addEventListener('click', (evnt) => {
  if (evnt.target.localName === "div") {
    pintarQuadrado(evnt);
  }
}
);

// 9 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.
// O que será verificado:

// Verifica se o botão tem o id denominado clear-board

// Verifica se o botão está posicionado entre a paleta de cores e o quadro de pixels

// Verifica se o texto do botão é 'Limpar'

// Verifica se ao clicar no botão, o quadro de pixels é totalmente preenchido de branco
let criaBotao = document.createElement('button');
criaBotao.innerHTML = "Limpar"
criaBotao.id = "clear-board";
let colorPalet = document.querySelector('#botao');
colorPalet.appendChild(criaBotao);

function clearBoard() {
  let ondePercorrer = document.querySelectorAll('.pixel')
  for (let index = 0; index < ondePercorrer.length; index += 1) {
    ondePercorrer[index].style.backgroundColor = "white"
  }
}

document.querySelector('#clear-board').addEventListener('click', clearBoard)

// Faça o quadro de pixels ter seu tamanho definido pela pessoa usuária.
// Crie um input e um botão que permitam definir um quadro de pixels com tamanho entre 5 e 50. Ao clicar no botão, deve ser gerado um quadro de N pixels de largura e N pixels de altura, onde N é o número inserido no input;
let addInput = document.createElement('input');
addInput.id = 'board-size'
addInput.type = 'number';
addInput.min = '1'
// addInput.max = '50'
document.getElementById('botao').appendChild(addInput);
let buttonInput = document.createElement('button');
buttonInput.id = 'generate-board'
buttonInput.innerText = 'VQV'
document.getElementById('botao').appendChild(buttonInput);


document.getElementById('generate-board').addEventListener('click', function (event) {
  if (document.querySelector("#board-size").value.length === 0) {
    //Eduardo Miyazaki que me deu a luz
    alert('Board inválido!')
  }
  // Codigo corrigido pelo Joaozao (João Victor Veinz)
  let tamanho = document.getElementById('board-size').value;
  let elemento = document.querySelectorAll('.pixel');
  if (tamanho > 50) {
    boxPixel(50);
    for (let i = 0; i < elemento.length; i += 1) {
      elemento[i].remove();
    }
  } else if (tamanho < 5) {
    boxPixel(5);
    for (let i = 0; i < elemento.length; i += 1) {
      elemento[i].remove();
    }
  } else {
    boxPixel(tamanho);
    for (let i = 0; i < elemento.length; i += 1) {
      elemento[i].remove();
    }
  }
});


function generateCollors() {
  const cores = document.getElementsByClassName('color')
  for (let index = 1; index < cores.length; index += 1) {
    //Há apenas 16777216 variações de cores RGB (256 * 256 * 256)
    // rgb tem no max 256
    // Escolher um número aleatório entre 0 e 16777216.
    // https://www.ti-enxame.com/pt/javascript/gerador-de-cores-aleatorias/967183954/
    let cor = '#' + Math.floor(Math.random() * 1000000).toString(16).padStart(6, '0');
    //A função Math.floor arredonda o número para baixo, de modo a remover a parte decimal do número gerado pela função Math.random.
    // O método Number.prototype.toString(16) converte o número em string em sua representação hexadecimal.
    // // O método String.prototype.padStart(6, '0') garante que a string hexadecimal tenha sempre seis dígitos.
    // https://pt.stackoverflow.com/questions/493278/como-gerar-cores-hexadecimais-aleat%C3%B3rias-com-javascript
    cores[index].style.backgroundColor = cor
  }
}


window.onload = generateCollors()
