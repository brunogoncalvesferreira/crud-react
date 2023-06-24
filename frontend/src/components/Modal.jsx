import styles from './Modal.module.css'
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
    onCloseEditModal
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>Editar usuário</h2>

        <form onSubmit={updateUsers}>
          <input
            type="text"
            placeholder="Nome"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="email"
            placeholder="E-mail"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="text"
            placeholder="CPF"
            required
            onChange={(e) => setCpf(e.target.value)}
            value={cpf}
          />
          <input
            type="tel"
            placeholder="Telefone"
            required
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />

          <div className={styles.buttons}>
            <button type="submit">Atualizar</button>
            <button type="button" onClick={handleCloseModalEdit}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
