import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const UserForms = ({isShowUser, hadleChangeShowUser, createUser, isUserUpdate, updateUser}) => {

  const {handleSubmit, register, reset} = useForm()


  const submit = (data) =>{
    if(isUserUpdate){
      updateUser(data, reset)

    } else {
      createUser(data, reset)
    }

  }

  useEffect(() => {
    if(isUserUpdate){
      reset(isUserUpdate)
    }
  }, [isUserUpdate])
  





  return (
    <section className={`fixed  bg-black/60 top-0 bottom-0 left-0 right-0
    flex justify-center items-center transition-[opacity_transform] duration-1000 ${isShowUser ? "visible opacity-100" : "invisible opacity-0 scale-0"}`}>
      <form onSubmit={handleSubmit(submit)} className='bg-white grid gap-4 p-3 rounded-md relative'>
        <button type="button" onClick={hadleChangeShowUser} className='text-red-500 font-bold absolute top-1 right-2'>X</button>
        <h1 className='text-center'>{isUserUpdate ? "Editar Usuario":"isUserUpdate"}  </h1>
        <div className='grid '>
          <label htmlFor="email">Correo Electrónico:</label>
          <input className='outline-none border-[1px] border-black p-2' id='email' type="text" {... register("email")} />
        </div>
        <div className='grid '>
          <label htmlFor="password">Contraseña:</label>
          <input className='outline-none border-[1px] border-black p-2' id='password' type="text" {... register("password")} />
        </div>
        <div className='grid '>
          <label htmlFor="first_name">Nombre:</label>
          <input className='outline-none border-[1px] border-black p-2' id='first_name' type="text" {... register("first_name")} />
        </div>
        <div className='grid '>
          <label htmlFor="last_name">Apellido:</label>
          <input className='outline-none border-[1px] border-black p-2' id='last_name' type="text" {... register("last_name")} />
        </div>
        <div className='grid '>
          <label htmlFor="birthday">Fecha nacimiento:</label>
          <input className='outline-none border-[1px] border-black p-2' id='birthday' type="date" {... register("birthday")} />
        </div>
        <div className='grid '>
          <label htmlFor="image_url">Dirección imagen:</label>
          <input className='outline-none border-[1px] border-black p-2' id='image_url' type="text" {... register("image_url")} />
        </div>
        <button className='bg-black text-white'>{isUserUpdate ? "Guardar Cambios" : "Crear Usuario"}</button>
        
        
      </form>




    </section>
  )
}

export default UserForms