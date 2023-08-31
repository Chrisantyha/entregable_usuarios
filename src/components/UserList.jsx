import React from 'react'
import UserCard from './UserCard'

const UserList = ({users, deleteUser, handleClickUpdate}) => {
  console.log(users)
  return (
    <section className='grid gap-8'>
      {
        users.map((user)=> <UserCard
                           key={user.id}
                           user={user} 
                           deleteUser={deleteUser}
                           handleClickUpdate = {handleClickUpdate} />)
      }



    </section>
  )
}

export default UserList