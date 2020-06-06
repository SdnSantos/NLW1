// verbose() Ã© para aparecer no terminal informaÃ§Ãµes das querys
const sqlite3 = require("sqlite3").verbose()

// criar o objeto que irÃ¡ fazer operaÃ§Ãµes no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

// quer dizer que irÃ¡ executar uma sequÃªncia de cÃ³digos
// db.serialize(() => {
// criar tabela
// db.run(`
//   CREATE TABLE IF NOT EXISTS places (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     name TEXT,
//     image TEXT,
//     address TEXT,
//     address2 TEXT,
//     state TEXT,
//     city TEXT,
//     items TEXT
//   )
// `)

// inserir dados na tabela
// const query = `
// INSERT INTO places (
// image,
// name,
// address,
// address2,
// state,
// city, 
// items
// ) 
// VALUES (?, ?, ?, ?, ?, ?, ?)
// `

// const values = [
// "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
// "Papelete",
// "Av.: George Eastman, 31 de Março",
// "Nº 530 ",
// "São Paulo",
// "São José dos Campos",
// "Papelão e Papéis"
// ]

// function afterInsertData(err) {
// if (err) {
// return console.log(`Error Insert - ${err}`)
// }
// console.log("Cadastrado com sucesso")
// console.log(this)
// }
// db.run(query, values, afterInsertData)

// consultar os dados da tabela
// db.all(`
//   SELECT *
//   FROM places
// `, function (err, rows) {
//   if (err) {
//     return console.log(`Error Select - ${err}`)
//   }

//   console.log("List Places")
//   console.log(rows)

// })

// deletar um dado da tabela
//   db.run(`
//    DELETE FROM places 
//    WHERE id = ?`,
//     [3],
//     function (err) {
//       if (err) {
//         return console.log(`Error Delete - ${err}`)
//       }
//       console.log("Success Delete")
//     })
// })

module.exports = db