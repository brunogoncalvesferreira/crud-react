import PropTypes from "prop-types"

Form.propTypes = {
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

export function Form({
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
    <form onSubmit={addUsers}>
      <input
        type="text"
        placeholder="Digite seu nome"
        required
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type="email"
        placeholder="Digite seu e-mail"
        required
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="text"
        placeholder="Digite seu cpf"
        required
        onChange={(e) => setCpf(e.target.value)}
        value={cpf}
      />
      <input
        type="tel"
        placeholder="Digite seu telefone"
        required
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
      />

      <button type="submit">Adicionar</button>
    </form>
  )
}
