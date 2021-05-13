const tag = document.getElementById("tag")
const avatar = document.getElementById("av")
const btI = document.getElementById("invite")
const vt = document.getElementById("votes")
const sd = document.getElementById("shortD")

function setTag(name) {
  tag.innerText = name
}

function setAvatar(URI) {
  avatar.src = URI
}

function setInvite(id) {
  btI.href = btI.href.replace(/{id}/g, id)
}

function reloadVotes(vv) {
  vt.innerText = vv+" votos"
}

function setSd(shortD) {
  sd.innerHTML = shortD
}

fetch("/api/bot/pp")
  .then(a => a.json())
  .then(function(be) {
     return fetch("/api/bot?id=" + be)
       .then((a) => {
       return a.json()
       }).then((a) => {
       setTag(a[0].tag)
       setAvatar(a[0].avatar)
       setInvite(a[0].id)
       reloadVotes(a[0].votes)
       setSd(a[0].shortDesc || "???")
       })
  })