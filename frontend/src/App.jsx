import axios from 'axios'
import { useEffect, useState } from 'react'
import { Card } from './components/Card'
import { Modal } from './components/Modal'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'

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
    <div className="flex h-screen flex-col">
      <Header />

      <div className="flex flex-1 mobile:flex-col">
        <aside className="w-[400px] space-y-2 px-5 py-8 mobile:w-full">
          <h1 className="text-lg font-bold text-gray-600">
            Cadastro de usuários
          </h1>
          <Sidebar
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
        </aside>

        <main className="flex-1 space-y-2 px-5 py-8">
          <div>
            <h2 className="text-lg font-bold text-gray-600">
              Lista de usuários
            </h2>
            <div>
              <table className="w-full overflow-hidden rounded text-center">
                <thead className="border-b-2 border-gray-500 bg-blue-500">
                  <tr>
                    <th className="py-4 text-sm font-bold -tracking-wide text-white">
                      Nome
                    </th>
                    <th className="py-4 text-sm font-bold -tracking-wide text-white">
                      E-mail
                    </th>
                    <th className="py-4 text-sm font-bold -tracking-wide text-white">
                      CPF
                    </th>
                    <th className="py-4 text-sm font-bold -tracking-wide text-white">
                      Telefone
                    </th>
                    <th className="py-4 text-sm font-bold -tracking-wide"></th>
                    <th className="py-4 text-sm font-bold -tracking-wide"></th>
                  </tr>
                </thead>

                <tbody className="divide-y-2 divide-gray-300">
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
        </main>
      </div>

      {openModal && (
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
      )}
    </div>
  )
}
