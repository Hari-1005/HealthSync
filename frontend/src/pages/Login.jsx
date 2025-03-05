import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {
  const {backendUrl,token,setToken} = useContext(AppContext);
  const navigate = useNavigate();

  const [state, setState] = useState('Sign Up');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async(event) => {
    event.preventDefault();
    if(state === 'Sign Up'){
      try {
        const {data} = await axios.post(backendUrl + '/api/user/register', {name,email,password});
        
        if(data.success){
          toast.success(data.message);
          setState("Login");
        }else{
          toast.error(data.message)
        }
      } catch (error) {
        toast.error(error.message)
      }
    }else{
      try {
        const {data} = await axios.post(backendUrl + '/api/user/login', {email,password});
        console.log(data);
        if(data.success){
          toast.success(data.message);
          localStorage.setItem('token', data.token);
          setToken(data.token);
          navigate('/');
        }else{
          toast.error(data.message)
        }
      } catch (error) {
        toast.error(error.message)
      }
    }
    setName("");
    setEmail("");
    setPassword("");
  }

  useEffect(() => {
    if(token){
      navigate('/')
    }
  },[token])
  return (
    <form className='h-[80vh] flex items-center' onSubmit={onSubmitHandler}>
      <div className='flex flex-col gap-3 border items-start border-zinc-300 min-w-96 m-auto rounded-xl p-8 text-sm text-gray-600 shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</p>
        <p>Please {state === 'Sign Up' ? 'sign up' : 'login'} to book appointment</p>
          {state === 'Sign Up' && <div className='w-full'>
            <p>Full Name</p>
            <input className='border border-zinc-300 w-full p-2 mt-1 rounded' value={name} onChange={(e)=>setName(e.target.value)} type="text" required/>
          </div>}
          <div className='w-full'>
            <p>Email</p>
            <input className='border border-zinc-300 w-full p-2 mt-1 rounded-md' value={email} onChange={(e)=>setEmail(e.target.value)} type="email" required/>
          </div>
          <div className='w-full'>
            <p>Password</p>
            <input className='border border-zinc-300 w-full p-2 mt-1 rounded-md' value={password} onChange={(e)=>setPassword(e.target.value)} type="password" required/>
          </div>
          <button className='bg-primary rounded-md w-full text-white py-2 my-2 text-base' type='submit'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</button>
          {
            state === 'Sign Up'
            ? <p>Already have an account? <span onClick={()=>setState('Login')} className='text-primary underline cursor-pointer'>Login here</span></p>
            : <p>Create an new account? <span onClick={()=>setState('Sign Up')} className='text-primary underline cursor-pointer'>Click here</span></p>
          }
      </div>
    </form>
  )
}

export default Login