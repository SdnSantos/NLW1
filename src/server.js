const express = require("express");
const server = express();

// importar o banco de dados
const db = require("./database/db")

// configurar pasta pública
server.use(express.static("public"));

// habilitar o uso do req.body na aplicação
server.use(express.urlencoded({
  extended: true
}))

// utilizando template engine
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

// rotas
server.get("/", (req, res) => {
  return res.render("index.html", {
    title: "Seu marketplace de coleta de resíduos",
  });
});

server.get("/create-point", (req, res) => {
  return res.render("create-point.html")
})

server.post("/create-point", (req, res) => {

  const {
    image,
    name,
    address,
    address2,
    city,
    state,
    items
  } = req.body

  // inserir dados na tabela
  const query = `
 INSERT INTO places (
 image,
 name,
 address,
 address2,
 state,
 city, 
 items
 ) 
 VALUES (?, ?, ?, ?, ?, ?, ?)
 `

  const values = [image, name, address, address2, state, city, items]

  function afterInsertData(err) {
    if (err) {
      console.log(`Error Insert - ${err}`)

      return res.send(`Error Insert`)
    }
    console.log("Cadastrado com sucesso")
    console.log(this)

    return res.render("create-point.html", {
      saved: true
    })
  }

  db.run(query, values, afterInsertData)

});

server.get("/search", (req, res) => {

  const {
    search
  } = req.query

  if (search == "") {
    // pesquisa vazia
    return res.render("search-results.html", {
      total: 0
    });
  }

  // pegar os dados do banco de dados
  db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows) {
    if (err) {
      return console.log(`Error Select - $ {err}`)
    }

    const total = rows.length

    // mostrar a página html com os dados do banco de dados
    return res.render("search-results.html", {
      places: rows,
      total
    });
  })
})

server.listen(3000)