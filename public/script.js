const bots = document.getElementById("mvBots")
const cD = document.getElementById("a")

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
  bote = bote.filter(a => a[0].votes > 0)
  bote = bote.sort(function(a, b) { return b[0].votes - a[0].votes }).slice(0, 5)
    bote.forEach(appendNewBot);
})

let month = new Date().getMonth()+1
let day = new Date().getDate()

if (month === 4 && day === 4) {
  cD.innerText = "Feliz Páscoa!"
}
if (month === 12 && day === 31) {
  cD.innerText = "Feliz Natal!"
}
if (month === 10 && day === 31) {
  cD.innerText = "Feliz Halloween!"
}