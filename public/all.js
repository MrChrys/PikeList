const bots = document.getElementById("bots")

function appendNewBot(bot) {
  const newListItem = document.createElement("div");
  newListItem.className = "bot"
  newListItem.innerHTML = `
  <img style="border-radius: 50%;" src="${bot[0].avatar}">
  <h1>${bot[0].tag.slice(0, bot[0].tag.length - 5)}</h1>
  <p style="font-size: 15px">${bot[0].votes} votos</p>
  <a href="/bot/${bot[0].id}"><button class="cu">Página</button></a>
  <a href="https://discord.com/api/oauth2/authorize?client_id=${bot[0].id}&permissions=0&scope=bot"><button class="cu">Adicionar</button></a>
  `;
  bots.appendChild(newListItem);
}

fetch("/api/all")
  .then(response => response.json()) // parse the JSON from the server
  .then(bote => {
    bote.forEach(appendNewBot);
})