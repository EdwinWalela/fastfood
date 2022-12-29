import { useState, useEffect } from "react"
import { useDispatch } from 'react-redux'
import { registerUser } from './registerSlice'

const RegisterPage = () => {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [termsAndCondition,setTermsAndConditions] = useState(false)
  const [passwordValid, setPasswordValid] = useState(false)
  const [passwordError, setPasswordError] = useState('')
  const [emailValid, setEmailError] = useState(false)

  const dispatch = useDispatch();

  useEffect(()=>{
    if(password.length<5){
      setPasswordValid(false);
      setPasswordError('Password should be at least 5 characters long')
    }else{
      setPasswordError('')
      setPasswordValid(true)
    }
  },[password])

  useEffect(()=>{
    if(password != confirmPassword){
      setPasswordValid(false)
      setPasswordError('Passwords do not match')
    }else{
      setPasswordValid(true)
      setPasswordError('')
    }
  },[confirmPassword])

  useEffect(()=>{
    if(email.includes('@') && email.includes('.')){
      setEmailError(true)
    }else{
      setEmailError(false)
    }
  },[email])

  function updatePassword(e){
    setPassword(e.target.value);
  }

  function updateEmail(e){
    setEmail(e.target.value);
  }

  function updateConfirmPassword(e){
    setConfirmPassword(e.target.value);
  }

  function updateTermsAndConditions(){
    setTermsAndConditions(isChecked=>isChecked ? false:true)
  }

  function submitForm(e){
    e.preventDefault();
    dispatch(registerUser({
      email,
      password
    }));
  }

  return (
    <>
      <section className="">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Create an account
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#" onSubmit={submitForm}>
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" id="email" value={email} onChange={updateEmail} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                            {!emailValid && 
                              <pre className="text-xs my-2 text-red-700">Please enter a valid email address</pre>
                            }
                        </div>
                        <div>
                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" value={password} onChange={updatePassword}  placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            {!passwordValid && 
                              <pre className="text-xs my-2 text-red-700">{passwordError}</pre>
                            }
                        </div>
                        <div>
                            <label for="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                            <input type="password" name="confirm-password" id="confirm-password" value={confirmPassword} onChange={updateConfirmPassword} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                           
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input id="terms" aria-describedby="terms" type="checkbox" onClick={updateTermsAndConditions} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                            </div>
                            <div className="ml-3 text-sm">
                              <label for="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                            </div>
                        </div>
                        <button type="submit" className="w-full bg-black text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default RegisterPage