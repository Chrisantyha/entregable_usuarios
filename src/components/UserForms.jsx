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

        <div className='grid grid-cols-4 relative mt-2 rounded shadow-sm  '>
          <label htmlFor="first_name">😚 </label>
         <input className=' outline-none border-[1px] border-black p-2 py-2 pr-3 pl-10 w-full shadow-md' placeholder='Name' id='first_name' type="text" {... register("first_name")} />
          <label  htmlFor="last_name">😚</label>
          <input className='outline-none border-[1px] border-black p-2' placeholder='Last Name' id='last_name' type="text" {... register("last_name")} />
        </div>


        <div className='grid grid-cols-2 '>
        </div>

        <div className='grid '>
          <label htmlFor="email"></label>
          <input className='outline-none border-[1px] border-black p-2' id='email' placeholder='Email' type="text" {... register("email")} />
        </div>


        <div className='grid '>
          <label htmlFor="password"></label>
          <input className='outline-none border-[1px] border-black p-2' placeholder='Password' id='password' type="text" {... register("password")} />
        </div>




        <div className='grid '>
          <label htmlFor="birthday"></label>
          <input className='outline-none border-[1px] border-black p-2' id='birthday' type="date" {... register("birthday")} />
        </div>


        <div className='grid '>
          <label htmlFor="image_url"></label>
          <input className='outline-none border-[1px] border-black p-2' placeholder='Direction Image' id='image_url' type="text" {... register("image_url")} />
        </div>


        <button className='bg-green-400 text-white'>{isUserUpdate ? "Save change" : "Upload"}</button>
        
        
      </form>




    </section>
  )
}

export default UserForms