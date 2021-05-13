// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();
const f = require("node-fetch");

app.use(express.static("public"));
let a = undefined;
// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/all", (request, response) => {
  response.sendFile(__dirname + "/views/all.html");
});

app.get("/api", async (req, res) => {
  res.sendFile(__dirname + "/views/api.html");
});

app.get("/api/all", async (req, res) => {
  f("https://hannehbotlist.repl.co/abc")
    .then(response => response.json()) // parse the JSON from the server
    .then(bote => {
      res.json(bote);
    });
});

app.get("/api/bot", async (req, res) => {
  let abc = f("https://hannehbotlist.repl.co/?id=" + req.query.id, {
    method: "GET"
  }).then(a => a.json());
  if (abc instanceof Promise) {
    await abc.then(a => (abc = a)).catch(a => (abc = null));
  }
  res.json(
    req.query.id
      ? Number(req.query.id)
        ? abc
        : "usage: https://hannehapi.glitch.me?id=botid"
      : "usage: https://hannehapi.glitch.me?id=botid"
  );
});

app.get("/bot/:id", async (req, res) => {
  res.sendFile(__dirname + "/views/bot.html");
  a = req.params.id;
});
app.get("/api/bot/pp", async (req, res) => {
  res.json(a);
});
// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

app.use("/", (req, res) => {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(ip.split(',')[0])
})

app.use(function(req, res, next) {
res.status(404).send("404 Not Found")
})