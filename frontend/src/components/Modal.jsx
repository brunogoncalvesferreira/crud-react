import PropTypes from 'prop-types'

Modal.propTypes = {
  updateUsers: PropTypes.func,
  name: PropTypes.string,
  email: PropTypes.string,
  cpf: PropTypes.string,
  phone: PropTypes.string,
  setName: PropTypes.string,
  setEmail: PropTypes.string,
  setCpf: PropTypes.string,
  setPhone: PropTypes.string,
  onClosEditModal: PropTypes.func,
}

export function Modal({
  updateUsers,
  name,
  email,
  cpf,
  phone,
  setName,
  setEmail,
  setCpf,
  setPhone,
  onCloseEditModal,
}) {
  function handleCloseModalEdit() {
    onCloseEditModal()
  }

  return (
    <div className="fixed grid h-full w-full place-content-center bg-white">
      <div className="flex w-[40rem] flex-col rounded bg-blue-300 p-4">
        <h2 className="mb-2 text-xl font-bold text-gray-800">Editar usuário</h2>

        <form className="flex flex-col space-y-2" onSubmit={updateUsers}>
          <input
            className="rounded border-2 border-blue-500 p-2 outline-none"
            type="text"
            placeholder="Nome"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            className="rounded border-2 border-blue-500 p-2 outline-none"
            type="email"
            placeholder="E-mail"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            className="rounded border-2 border-blue-500 p-2 outline-none"
            type="text"
            placeholder="CPF"
            required
            onChange={(e) => setCpf(e.target.value)}
            value={cpf}
          />
          <input
            className="rounded border-2 border-blue-500 p-2 outline-none"
            type="tel"
            placeholder="Telefone"
            required
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />

          <div className="space-x-2">
            <button
              className="bg-yellow-500 p-2 text-sm text-white hover:bg-yellow-600"
              type="submit"
            >
              Atualizar
            </button>
            <button
              className="bg-red-400 p-2 text-sm text-white hover:bg-red-600"
              type="button"
              onClick={handleCloseModalEdit}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
