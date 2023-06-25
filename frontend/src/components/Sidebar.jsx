import PropTypes from 'prop-types'

Sidebar.propTypes = {
  addUsers: PropTypes.func,
  name: PropTypes.string,
  email: PropTypes.string,
  cpf: PropTypes.string,
  phone: PropTypes.string,
  setName: PropTypes.string,
  setEmail: PropTypes.string,
  setCpf: PropTypes.string,
  setPhone: PropTypes.string,
}

export function Sidebar({
  addUsers,
  name,
  email,
  cpf,
  phone,
  setName,
  setEmail,
  setCpf,
  setPhone,
}) {
  return (
    <form onSubmit={addUsers} className="flex flex-col space-y-1">
      <input
        className="border-2 font-semibold text-blue-950 outline-none border-blue-500 rounded p-2"
        type="text"
        placeholder="Digite seu nome"
        required
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        className="border-2 font-semibold text-blue-950 outline-none border-blue-500 rounded p-2"
        type="email"
        placeholder="Digite seu e-mail"
        required
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        className="border-2 font-semibold text-blue-950 outline-none border-blue-500 rounded p-2"
        type="text"
        placeholder="Digite seu cpf"
        required
        onChange={(e) => setCpf(e.target.value)}
        value={cpf}
      />
      <input
        className="border-2 font-semibold text-blue-950 outline-none border-blue-500 rounded p-2"
        type="tel"
        placeholder="Digite seu telefone"
        required
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
      />

      <button
        className="bg-blue-500 text-white rounded p-2 font-bold hover:bg-blue-700"
        type="submit"
      >
        Adicionar
      </button>
    </form>
  )
}
