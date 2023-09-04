import React from 'react'

const UserCard = ({user, deleteUser, handleClickUpdate}) => {
  return (
    <article className=' bg-white grid grid-cols-2 flex flex-col space-y-4'>
        <ul>
            <li className='font-bold capitalize'>{user.first_name} {user.last_name}</li>
            
            <li> 📪 {user.email}</li>
            <li>🥧 {user.birthday}</li>
        </ul>
        <section>

        <button onClick={()=> deleteUser(user.id)} className='bg-white p-2  rounded-md ' >❌</button>
        <button onClick={()=> handleClickUpdate(user)} className='bg-white p-2 text-white rounded-md ml-3' >✔</button>

        </section>
    </article>
  )
}   

export default UserCard