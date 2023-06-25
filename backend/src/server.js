import express from 'express' // Framework web nodejs, nos auxilia na criação de servidores para web
import sqlite3 from 'sqlite3' // Biblioteca para interagir com banco de dados SQLite
import cors from 'cors' // É uma medida de segurança implementada pelos navegadores para proteger os usuários, limitando o acesso de scripts a recursos de origens diferentes.

const app = express() // Chamada para criar instância do aplicativo, será usada para criar as rotas da aplicação.
const port = 3001 // Indica onde servisor será executado, localhost:3001

app.use(cors()) // app.use() É usada para adicionar middlewares ao aplicativo Express. cors() é um middleware que habilita o CORS no aplicativo, permitindo que recursos sejam acessados por outros domínios.
app.use(express.json()) // express.json() é um middleware do Express que analisa o corpo das requisições com o tipo application/json. Ele analisa o conteúdo JSON enviado nas requisições e o torna acessível através do objeto req.body nas rotas do aplicativo

const db = new sqlite3.Database('./src/database.db') // Criação do banco de dados da aplicação

// O método serialize() é usado para garantir que as operações com o banco de dados sejam executadas em sequência
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT,
      cpf TEXT,
      phone TEXT
    )
  `)
})

// Inserindo dados no banco de dados
app.post('/usuarios', (req, res) => {
  const { name, email, cpf, phone } = req.body

  db.run(
    `INSERT INTO users (name, email, cpf, phone) VALUES (?, ?, ? ,?)`,
    [name, email, cpf, phone],
    (error) => {
      if (error) {
        console.error(error)
        res.sendStatus(500)
      } else {
        res.sendStatus(201)
      }
    },
  )
})

// Criando uma rota para buscar os usuários
app.get('/usuarios', (req, res) => {
  db.all(`SELECT * FROM users`, (error, rows) => {
    if (error) {
      console.error(error)
      res.sendStatus(500)
    } else {
      res.json(rows)
    }
  })
})

// Atualizando dos usuários
app.put('/usuarios/:id', (req, res) => {
  const { name, email, cpf, phone } = req.body
  const { id } = req.params

  db.run(
    `UPDATE users SET name = ?, email = ?, cpf = ?, phone = ? WHERE id = ?`,
    [name, email, cpf, phone, id],
    (error) => {
      if (error) {
        console.error(error)
        res.sendStatus(500)
      } else {
        res.sendStatus(200)
      }
    },
  )
})

// Deletando usuário
app.delete('/usuarios/:id', (req, res) => {
  const { id } = req.params

  db.run(`DELETE FROM users WHERE id = ?`, id, (error) => {
    if (error) {
      console.error(error)
      res.sendStatus(500)
    } else {
      res.sendStatus(200)
    }
  })
})

app.listen(port, () => {
  console.log(`servidor rodando na port ${port}`)
})
