import React, { useState } from "react"
import { useAppDispatch } from "../../store/hooks"
import { Link } from 'react-router-dom'
import { login } from "./loginSlice"

const LoginPage = () =>{
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useAppDispatch()

  function submitForm(e:React.FormEvent){
    e.preventDefault();
    dispatch(login({email,password}))
  }

  function updateEmail(e:React.FormEvent<HTMLInputElement>){
    setEmail(e.currentTarget.value);
  }

  function updatePassword(e:React.FormEvent<HTMLInputElement>){
    setPassword(e.currentTarget.value);
  }

  return (
    <>
      <section className="">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto my-8 lg:py-0">
            <div className="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Welcome back
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#" onSubmit={submitForm}>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" name="email" id="email" value={email} onChange={updateEmail} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required={true} />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" value={password} onChange={updatePassword} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
                        </div>
                        <button type="submit" className="w-full bg-black text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don't have an account? <Link to="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Register here</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default LoginPage