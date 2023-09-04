
import { useEffect, useState } from 'react'
import './App.css'
import UserForms from './components/UserForms'
import axios from 'axios'
import { EMPTY_FORM_VALUES } from './shared/constants'
import UserList from './components/UserList'

const BASE_URL = "https://users-crud.academlo.tech/"

function App() {
  const [isShowUser, setIsShowUser] = useState(false)
  const [isUserUpdate, setIsUserUpdate] = useState(null)
  const [users, setUsers] = useState([])

  const getAllUser = () => {
    axios
      .get(BASE_URL + "users/")
      .then(({ data }) => setUsers(data))
      .catch((err) => console.log(err))
  }

  const createUser = (newUser, reset) =>{
    axios
      .post(BASE_URL + "users/", newUser)
      .then(() => {
        getAllUser()
        setIsShowUser(false)
        reset(EMPTY_FORM_VALUES)
      })
      .catch((err) => console.log(err))


  }

  const deleteUser = (iduser) =>{
    axios
    .delete(BASE_URL + `users/${iduser}/`)
    .then (()=>getAllUser())
    .catch ((err)=>console.log(err))

  }

  const updateUser = (userUpdated, reset) =>{
    axios
    .patch(BASE_URL + `users/${isUserUpdate.id}/`,userUpdated)
    .then (()=>{
      getAllUser()
      setIsShowUser(false)
      reset(EMPTY_FORM_VALUES)
      setIsUserUpdate(null)
    })
    .catch ((err)=>console.log(err))

  }

  const handleClickUpdate = (user) =>{
    setIsShowUser(true)
    setIsUserUpdate(user)
    

  }



  const hadleChangeShowUser = (user) => {
    setIsShowUser(!isShowUser)
    
  }


  useEffect(() => {
    getAllUser()
  }, [])

  return (
    <>

      <button onClick={hadleChangeShowUser} className='bg-black p-2 rounded-md text-white' > New User</button>
      <UserForms 
      isShowUser={isShowUser} 
      hadleChangeShowUser={hadleChangeShowUser} 
      createUser={createUser} 
      isUserUpdate={isUserUpdate}
      updateUser={updateUser} />
      
      
      
      <UserList 
      users={users} 
      deleteUser={deleteUser} 
      handleClickUpdate={handleClickUpdate}/>
    </>
  )
}

export default App
