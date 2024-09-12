const pesquisa_atleta = document.querySelector('#pesquisa_atleta');
const botao_pesquisa = document.querySelector('#botao_pesquisa');

// Criação da Função
function buscaInformacoes(event) {
  // Verificar se o evento é 'Enter' quando chamado pelo 'keyup'
  if (event && event.key !== 'Enter' && event.type === 'keyup') {
    return;
  }

  // Obtém a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  let pesquisaAtleta = document.getElementById("pesquisa_atleta").value.trim(); // Adiciona 'let' aqui

  section.innerHTML = "";

  if (pesquisaAtleta === "") { // Corrigido para verificar uma string vazia
    return section.innerHTML += `
      <p>Atleta não encontrado. Você precisa digitar o nome de um atleta ou esporte</p>
    `;
  }

  let resultado = "";
  let titulo = "";
  let descricao = "";
  let tags = "";
  pesquisaAtleta = pesquisaAtleta.toLowerCase();

  // Itera sobre cada dado da pesquisa
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();
    if (titulo.includes(pesquisaAtleta) || descricao.includes(pesquisaAtleta) || tags.includes(pesquisaAtleta)) {
      // Cria um novo elemento HTML com os dados do atleta selecionado no campo de pesquisa
      resultado += `
        <div class="item-resultado">
          <h2>
            <a href="${dado.link}" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}.</p>
          <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>`;
    }
  }

  if (resultado === "") { // Corrigido para verificar uma string vazia
    return section.innerHTML += `
      <p>Atleta não encontrado</p>
    `;
  }

  section.innerHTML = resultado;
}

// Adicionando evento
pesquisa_atleta.addEventListener('keyup', buscaInformacoes); // Corrigido para passar o evento
botao_pesquisa.addEventListener('click', buscaInformacoes);
