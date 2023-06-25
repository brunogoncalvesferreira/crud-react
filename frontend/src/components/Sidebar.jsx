import PropTypes from 'prop-types'

Sidebar.propTypes = {
  addUsers: PropTypes.func,
  name: PropTypes.string,
  email: PropTypes.string,
  cpf: PropTypes.string,
  phone: PropTypes.string,
  setName: PropTypes.func,
  setEmail: PropTypes.func,
  setCpf: PropTypes.func,
  setPhone: PropTypes.func,
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
        className="rounded border-2 border-blue-500 p-2 font-semibold text-blue-950 outline-none"
        type="text"
        placeholder="Digite seu nome"
        required
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        className="rounded border-2 border-blue-500 p-2 font-semibold text-blue-950 outline-none"
        type="email"
        placeholder="Digite seu e-mail"
        required
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        className="rounded border-2 border-blue-500 p-2 font-semibold text-blue-950 outline-none"
        type="text"
        placeholder="Digite seu cpf"
        required
        onChange={(e) => setCpf(e.target.value)}
        value={cpf}
      />
      <input
        className="rounded border-2 border-blue-500 p-2 font-semibold text-blue-950 outline-none"
        type="tel"
        placeholder="Digite seu telefone"
        required
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
      />

      <button
        className="rounded bg-blue-500 p-2 font-bold text-white hover:bg-blue-700"
        type="submit"
      >
        Adicionar
      </button>
    </form>
  )
}
