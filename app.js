function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let pesquisaAtleta = document.getElementById("pesquisa_atleta").value

    section.innerHTML = "";

    if(pesquisaAtleta == ""){
         return section.innerHTML += `
            <p>Atleta não encontrado. Você precisa digitar o nome de um atleta ou esporte</p>
         `
    }

    let resultado ="";
    let titulo = "";
    let descricao = "";
    let tags = "";
    pesquisaAtleta = pesquisaAtleta.toLowerCase()
  
    // Itera sobre cada dado da pesquisa
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        titulo = dado.descricao.toLowerCase()
        tags = dado.tags.toLocaleLowerCase()
      if(titulo.includes(pesquisaAtleta) || descricao.includes(pesquisaAtleta) || tags.includes(pesquisaAtleta)){
        //cria um novo elemento HTML com os dados do atleta selecionado no campo de pesquisa
        resultado += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}.</p>
          <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>`;
      } 
    }
    if(!resultado){
      return section.innerHTML += `
          <p>Atleta não encontrado</p>
       `
    } 
    section.innerHTML = resultado
  }

  