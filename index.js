// 1 - Capture, armazene e manipule todos os elementos de classe "card". Modifique
// os estilos necessários nesses elementos para que fique semelhante a imagem.

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.setAttribute("style", "background-color: #ff6600");
});

// 2 - Capture, armazene e manipule todos os elementos de classe "titulo-card".
// Modifique os estilos necessários nesses elementos para que fique semelhante a imagem.

const titulos = document.querySelectorAll(".titulo-card");
for (let i = 0; i < titulos.length; i++) {
  let titulo = titulos[i];
  titulo.setAttribute("style", "color: #2b385b; margin-top: 20px");
}

// 3 - Modifique o texto dos títulos nos cards para "Meu card".

titulos.forEach((titulo) => (titulo.innerHTML = "Meu Card"));

// 4 - Capture, armazene e manipule todos os elementos de classe "descricao-card".
// Modifique os estilos necessários nesses elementos para que fique semelhante a imagem.

const descricoes = document.querySelectorAll(".descricao-card");
for (const descricao of descricoes) {
  descricao.setAttribute("style", "color: white; margin: 30px 0");
}

// 5 - Modifique o texto das descrições nos cards para "Descrição modificada pelo JavaScript".

descricoes.forEach(
  (desc) => (desc.textContent = "Descrição modificada pelo JavaScript")
);

// 6 - Capture, armazene e manipule todos os elementos de classe "botao-editar".
// Modifique o estilo desses elementos para que fique semelhante a imagem.

const botaoEditar = document.querySelectorAll(".botao-editar");
botaoEditar.forEach((botao) => {
  botao.setAttribute(
    "style",
    "background-color: green; padding: 8px; border-radius: 6px; border: none; color: white; cursor: pointer"
  );
});

// 7 - Capture, armazene e manipule todos os elementos de classe "botao-apagar".
// Modifique o estilo desses elementos para que fique semelhante a imagem.

const botaoApagar = document.querySelectorAll(".botao-apagar");
botaoApagar.forEach((botao) => {
  botao.setAttribute(
    "style",
    "background-color: red; padding: 8px; border-radius: 6px; border: none; color: white; cursor: pointer"
  );
});

// 8 - Adicione o atributo 'onclick' nos elementos de classe “botão-editar”.
// Ao clicar nesses elementos, deve chamar a função 'editarCard()'. Essa função deve mostrar um alerta com a
// mensagem "Clicou em Editar!".

botaoEditar.forEach((botao) => {
  botao.onclick = editarCard;
});

function editarCard() {
  alert("Clicou no botão editar");
}

// 9 - Adicione o atributo 'onclick' nos elementos de classe “botão-apagar”.
// Ao clicar nesses elementos deve chamar a função 'apagarCard()'. Essa função deve perguntar ao usuário
// se ele tem certeza da exclusão do card. Se o usuário confirmar a exclusão deve mostrar um alerta com a
// mensagem "Confirmado!", se não deve mostrar a mensagem "Cancelou!".

botaoApagar.forEach((botao) => {
  botao.addEventListener("click", apagarCard);
});

function apagarCard() {
  console.log("Clicou em apagar");
  const confirmacao = confirm("Você tem certeza?");
  console.log(confirmacao);
  if (confirmacao) {
    alert("Confirmou");
  } else {
    alert("Cancelou");
  }
}
