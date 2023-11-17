import { FaTrash, FaUserEdit } from 'react-icons/fa'

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
    <tr className="hover:cursor-pointer hover:bg-blue-50">
      <td className="py-4 font-bold text-gray-500 group-hover:text-blue-500">
        {name}
      </td>
      <td className="py-4 text-gray-800">{email}</td>
      <td className="py-4 text-gray-800">{cpf}</td>
      <td className="py-4 text-gray-800">{phone}</td>
      <td className="p-4">
        <button className="text-green-700" onClick={handleOpenModalEdit}>
          <FaUserEdit size={20} />
        </button>
      </td>
      <td className="p-4">
        <button className="text-red-500" onClick={handleDeleteUsers}>
          <FaTrash size={20} />
        </button>
      </td>
    </tr>
  )
}
