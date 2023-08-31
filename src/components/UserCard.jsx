import React from 'react'

const UserCard = ({user, deleteUser, handleClickUpdate}) => {
  return (
    <article>
        <ul>
            <li>Nombre: {user.first_name}</li>
            <li>Apellido: {user.last_name}</li>
            <li>Email: {user.email}</li>
            <li>Fecha de nacimiento: {user.birthday}</li>
        </ul>
        <button onClick={()=> deleteUser(user.id)} className='bg-black p-2 text-white rounded-md ' >Eliminar</button>
        <button onClick={()=> handleClickUpdate(user)} className='bg-black p-2 text-white rounded-md ml-3' >Actualizar</button>
    </article>
  )
}   

export default UserCard