const urlInfoPessoal = 'https://9741820f-3c62-4a50-8d2b-0a612d5b37a7-00-3n1vnmd5be1yn.picard.replit.dev/infoPessoal'

let data = "";
var imagemIdx = 1;
// Requisições AJAX para obter os dados do Servidor JSON

fetch(urlInfoPessoal)
    .then((response) => {
      return response.json()
    })
    .then((dados) => {
      data = dados;

      takeName();
      // fillCarrossel()
    })

// Requisições AJAX para obter dados da API do Github
const urlGitHub = 'https://api.github.com/users/gabrielaaraujodev'
let newData = "";

fetch(urlGitHub) 
    .then((response) => {
      return response.json()
    })
    .then((dados) => {
      newData = dados;
      changeThingsOnSite();
    })

// Requisições AJAX para obter dados da API do Github referente aos respositorios

const urlRep = 'https://api.github.com/users/gabrielaaraujodev/repos'
let repos = "";

fetch(urlRep) 
    .then((response) => {
      return response.json()
    })
    .then((dados) => {
      repos = dados;

      takeReps();
    })

// ----------------------------------------------- 

// Pegar as variáveis necessarias para manipular seu valor
let name = document.getElementsByTagName('h4');
let loc = document.getElementById('local');
let siteHTML = document.getElementsByTagName('a');
let partnerOne = document.getElementsByClassName('partnerOne');
let partnerTwo = document.getElementsByClassName('partnerTwo');
let partnerThree = document.getElementsByClassName('partnerThree');

function takeName() {
  name[0].innerHTML = data[0].nome;
  loc.innerHTML = data[0].cidade;
  siteHTML[0].href = data[0].site[0].linkedin;
  siteHTML[1].href = data[0].site[0].instagram;
  partnerOne[0].src = data[0].partners[0].partnerOne[0].foto;
  partnerOne[1].innerHTML = data[0].partners[0].partnerOne[0].nome;
  partnerOne[1].href = data[0].partners[0].partnerOne[0].gh;

  partnerTwo[0].src = data[0].partners[0].partnerTwo[0].foto;
  partnerTwo[1].innerHTML = data[0].partners[0].partnerTwo[0].nome;
  partnerTwo[1].href = data[0].partners[0].partnerTwo[0].gh;

  partnerThree[0].src = data[0].partners[0].partnerThree[0].foto;
  partnerThree[1].innerHTML = data[0].partners[0].partnerThree[0].nome;
  partnerThree[1].href = data[0].partners[0].partnerThree[0].gh;
  
}

// ----------------------------------------------- 

// Pegar as variáveis necessarias para manipular seu valor
let image = document.getElementById('pessoal')
let links = document.getElementsByTagName('a');
let genericInformation = document.getElementsByTagName('span')
let cardText = document.getElementsByClassName('card-text');
let drumkit = document.getElementsByClassName('drumkit');
let imc = document.getElementsByClassName('imc');
let toDo = document.getElementsByClassName('toDo');
let arq = document.getElementsByClassName('arq');
let txt = document.getElementsByClassName('txt');
let separarBio = "";



function changeThingsOnSite() {
  image.src = newData.avatar_url;  
  links[2].href = newData.html_url;
  
  separarBio = newData.bio.split(",");
  console.log("🚀 ~ changeThingsOnSite ~ separarBio:", separarBio)

  for(let i = 0; i < separarBio.length; i++) {
    genericInformation[3].innerHTML += `<strong>${separarBio[i]}</strong><br>`;
  }
  genericInformation[6].innerHTML = newData.followers;
  
}

function takeReps() {
  
  for(let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', (event) => {
      if(event.srcElement.innerHTML === "Venha Tocar.") {
        links[3].href = "repo.html?id=811844289";
      } else if (event.srcElement.innerHTML === "Venha Medir.") {
        links[4].href = "repo.html?id=795151812"; 
      } else if (event.srcElement.innerHTML === "Venha Preencher.") {
        links[5].href = "repo.html?id=800711550"; 
      } else if(event.srcElement.innerHTML === "Venha Fazer."){
        links[6].href = "repo.html?id=810864254"; 
      } else {
        links[7].href = "repo.html?id=809834136"; 
      }
    })
  }

  cardText[0].innerHTML = repos[12].description;
  drumkit[0].innerHTML = repos[12].forks;
  drumkit[1].innerHTML = repos[12].stargazers_count;


  cardText[1].innerHTML = repos[15].description;
  imc[0].innerHTML = repos[15].forks;
  imc[1].innerHTML = repos[15].stargazers_count;


  cardText[2].innerHTML = repos[27].description;
  toDo[0].innerHTML = repos[27].forks;
  toDo[1].innerHTML = repos[27].stargazers_count;


  cardText[3].innerHTML = repos[4].description;
  arq[0].innerHTML = repos[4].forks;
  arq[1].innerHTML = repos[4].stargazers_count;


  cardText[4].innerHTML = repos[26].description;
  txt[0].innerHTML = repos[26].forks;
  txt[1].innerHTML = repos[26].stargazers_count;

}

// ----------------------------------------------- 

// Carrossel
// let img1 = document.getElementById('img1');
// let img2 = document.getElementById('img2');
// let img3 = document.getElementById('img3');
// let img4 = document.getElementById('img4');
// let img5 = document.getElementById('img5');

// function fillCarrossel() {
//   img1.src = data[0].images[0].img1;
//   img2.src = data[0].images[0].img2;
//   img3.src = data[0].images[0].img3;
//   img4.src = data[0].images[0].img4;
//   img5.src = data[0].images[0].img5;
// }

function nextImage(number) {
  let control = (imagemIdx + number) > 5? 1: (imagemIdx + number) < 1? 5:imagemIdx + number;


  let chave = `img${control}`
  let chaveLink = `link${control}`
  document.getElementById('img1').src = data[0].images[0][chave]; 
  document.getElementById('posicaoLink').href = data[0].linksCarrossel[0][chaveLink]; 
  imagemIdx = control;
  
  console.log("🚀 ~ nextImage ~ chave:", chave)
  
}


