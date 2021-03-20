
***
# Boas-vindas á pikelist :D


***

## API

Para usar a api da botlist é necessario usar este url:
https://www.pikelist.tk/api/bot?id=botid

```
$ npm i node-fetch
```

```js
const f = require("node-fetch")

f("https://www.pikelist.tk/api/bot?id=id-do-bot", {
method: "GET",
}).then(a => a.json()).then(a => api = a[0])

if (api instanceof Promise) {
await api.then(a => api = a).catch(x => api = null)
}
```

Irá retornar uma [Array](https://www.google.com/url?sa=t&source=web&rct=j&url=https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array&ved=2ahUKEwjMl63lgL_vAhUyILkGHUbnA6QQFjAAegQIBxAC&usg=AOvVaw2uPfR2B4Q1jh7VMw6WoDS4) do bot igual á aseguir

```js
{
  avatar: 'url',
  votes: 14,
  aproved: true/false,
  tag: 'Tode#1915',
  lang: 'js',
  ownerId: '334740922891894795'
}

```
