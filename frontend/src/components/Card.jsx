import styles from './Card.module.css'
import { FaTrash, FaUserEdit } from 'react-icons/fa'
import PropTypes from 'prop-types'

Card.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  cpf: PropTypes.string,
  phone: PropTypes.string,
  onOpenEditModal: PropTypes.func,
  user: PropTypes.object,
  onDeleteUsers: PropTypes.func,
}

export function Card({
  name,
  email,
  cpf,
  phone,
  onOpenEditModal,
  user,
  onDeleteUsers,
}) {
  function handleOpenModalEdit() {
    onOpenEditModal(user)
  }

  function handleDeleteUsers() {
    onDeleteUsers(user.id)
  }
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{cpf}</td>
      <td>{phone}</td>
      <td>
        <button className={styles.buttonEdit} onClick={handleOpenModalEdit}>
          <FaUserEdit />
        </button>
      </td>
      <td>
        <button className={styles.buttonDelete} onClick={handleDeleteUsers}>
          <FaTrash />
        </button>
      </td>
    </tr>
  )
}
