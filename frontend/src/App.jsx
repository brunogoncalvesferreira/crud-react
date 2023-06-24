import { useEffect, useState } from 'react'
import { Card } from './components/Card'
import styles from './App.module.css'
import axios from 'axios'
import { Modal } from './components/Modal'
import { Form } from './components/Form'

export function App() {
  const [users, setUsers] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [phone, setPhone] = useState('')
  const [editUsers, setEditUsers] = useState(null)
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    getUsers()
  }, [])

  async function getUsers() {
    try {
      const response = await axios.get('http://localhost:3001/usuarios')
      setUsers(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  async function addUsers(e) {
    e.preventDefault()

    try {
      axios.post('http://localhost:3001/usuarios', {
        name,
        email,
        cpf,
        phone,
      })
      getUsers()
      setName('')
      setEmail('')
      setCpf('')
      setPhone('')
    } catch (error) {
      console.error(error)
    }
  }

  async function openEditModal(user) {
    setEditUsers(user)
    console.log(setName(user.name))
    setName(user.name)
    setEmail(user.email)
    setCpf(user.cpf)
    setPhone(user.phone)
    setOpenModal(true)
  }

  async function closeEditModal() {
    setEditUsers(null)
    setName('')
    setEmail('')
    setCpf('')
    setPhone('')
    setOpenModal(false)
  }

  async function updateUsers(e) {
    e.preventDefault()
    try {
      await axios.put(`http://localhost:3001/usuarios/${editUsers.id}`, {
        name,
        email,
        cpf,
        phone,
      })
      getUsers()
      closeEditModal()
    } catch (error) {
      console.error(error)
    }
  }

  async function deleteUsers(id) {
    try {
      await axios.delete(`http://localhost:3001/usuarios/${id}`)
      getUsers()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className={styles.wrapper}>
      <h1>Cadastro de usuários</h1>
      <Form
        addUsers={addUsers}
        name={name}
        email={email}
        cpf={cpf}
        phone={phone}
        setName={setName}
        setEmail={setEmail}
        setCpf={setCpf}
        setPhone={setPhone}
      />
      <div className={styles.containerUser}>
        <h2>Lista de usuários</h2>
        <div className={styles.user}>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Cpf</th>
                <th>Telefone</th>
                <th className={styles.borderNome}></th>
                <th className={styles.borderNome}></th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <Card
                  key={user.id}
                  user={user}
                  name={user.name}
                  email={user.email}
                  cpf={user.cpf}
                  phone={user.phone}
                  onOpenEditModal={openEditModal}
                  onDeleteUsers={deleteUsers}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* {openModal && (
        <Modal
          updateUsers={updateUsers}
          name={name}
          email={email}
          cpf={cpf}
          phone={phone}
          setName={setName}
          setEmail={setEmail}
          setCpf={setCpf}
          setPhone={setPhone}
          onCloseEditModal={closeEditModal}
        />
      )} */}
    </div>
  )
}
