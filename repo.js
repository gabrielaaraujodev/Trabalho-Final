// Função para obter parâmetros da URL por nome
function obterParametroUrl(id) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(id);
}



// Exemplo de uso: obter o valor do parâmetro 'id'
const repoId = obterParametroUrl('id');
console.log(repoId)

// --------------------------------------------------------------------
const apiUrl = `https://api.github.com/repositories/${repoId}`;
let dados = ""

fetch(apiUrl)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    dados = data;
    changeInformatios();
  })

// ---------------------------------------------------------------------

// const lenguagesAPI = `https://api.github.com/repositories/${repoId}`
// let lenguagesDados = ""

// fetch(lenguagesAPI)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     lenguagesDados = data;
//     changeInformatios();
//   })

// ----------------------------------------
let repoName = document.getElementsByTagName('span');
let repoDescription = document.getElementsByTagName('p');
let repoLink = document.getElementsByTagName('a');
let seguidores = document.getElementById('seguidores');
let favoritos = document.getElementById('favoritos');

function changeInformatios() {
  repoName[0].innerHTML = dados.name;
  repoDescription[0].innerHTML = dados.description;
  let data = new Date(dados.created_at);
  let dataFormatada = (data.getDate()) + "/" + (data.getMonth()) + "/" + (data.getFullYear());
  repoDescription[1].innerHTML = dataFormatada;
  repoLink[4].href = dados.html_url;
  seguidores.innerHTML = dados.stargazers_count;
  favoritos.innerHTML = dados.subscribers_count;  
  let languagesURL = dados.languages_url;
  let language ="";
  let maiorNumero = "";
  let topicosLinguagens = "";

  fetch(languagesURL)
    .then((response) => {
      return response.json();
    })
    .then((languageDados) => {
      maiorNumero =  Object.keys(languageDados).reduce(function(a, b){ return languageDados[a] > languageDados[b] ? a : b });

      let linguagens = document.getElementById('linguagens');
      linguagens.innerHTML = maiorNumero;
            

      language = Object.keys(languageDados);

      topicosLinguagens = document.getElementById("topicosLinguagens")
      
      for(let i = 0; i < language.length; i++) {
        const li  = document.createElement(`li`);
        // <li class="adjustTopics">Aqui vai um tópico</li>
        li.className = "adjustTopics";
        li.innerText = language[i];
        topicosLinguagens.appendChild(li);
      }
      
    })
      

}

