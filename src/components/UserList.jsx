import React from 'react'
import UserCard from './UserCard'

const UserList = ({users, deleteUser, handleClickUpdate}) => {
  console.log(users)
  return (

    
       <section className=' bg-gradient-to-r from-fuchsia-400 to-fuchsia-200 grid grid-cols-3 gap-10 px-40 p-12 pad-4 rounded-5'>
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