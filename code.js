const $ = document;
const url = "https://www.breakingbadapi.com/api/characters/";
const list = $.querySelector(".listaPersonagens");

//Função assíncrona que é chamada para dar Fetch no JSON
async function getCharacters() {
  try {
    let resp = await fetch(url);
    return resp.json();
  } catch (error) {
    console.log(error);
  }
}

/*
Função assíncrona para printar os dados direto no HTML. Ele chama a função getCharacters()
para consumir a API que retorna um objeto e então faz um forEach para cada elemento dele.
O resultado é inserido direto na página já com as classes necessárias para aplicar o estilo.
*/

async function renderCharacters() {
  let characters = await getCharacters();
  let html = "";

  characters.forEach((character) => {
    let htmlSegment = `
      <article class="card">
        <img style="width: 50%;" src="${character.img}">
        <div class="container">
          <h3>${character.name}</h3>
          <p><b>Birthday: </b> ${character.birthday}</p>
          <p><b>Occupation: </b>${character.occupation}</p>
          <p><b>Status: </b>${character.status}</p>
          <p><b>Nickname: </b>${character.nickname}</p>
          <p><b>Appearance: </b>${character.appearance}</p>
          <p><b>Category: </b>${character.category}</p>
        </div>
      </article>
    `;
    html += htmlSegment;
  });

  list.innerHTML = html;
}

//Chama a função de renderizar
renderCharacters();
