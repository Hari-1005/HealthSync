import React, { useContext, useState } from "react";
import { AdminContext } from "../context/AdminContext";
import axios from 'axios'
import { toast } from "react-toastify";

const Login = () => {
  const {setAToken, backendUrl} = useContext(AdminContext);
  const [state, setState] = useState("Admin");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
        if(state === 'Admin'){
            const {data} = await axios.post(backendUrl + '/api/admin/login', {email,password});
            
            if(data.success){
                localStorage.setItem('aToken',data.token)
               setAToken(data.token)
            }else{
                toast.error(data.message)
            }
        }
    } catch (error) {
        console.log(error)
    }

    setEmail("")
    setPassword("")
  }

  return (
    <form onSubmit={handleSubmit} className="border border-gray-200 max-w-96 m-auto p-8 rounded-lg shadow-md text-sm mt-20 text-gray-600">
      <div className="flex flex-col gap-3">
        <p className="text-center text-2xl font-semibold text-gray-500">
          <span className="text-indigo-500">{state} </span>Login
        </p>

        <div className="text-gray-600">
          <p>Email</p>
          <input
          onChange={(e)=> setEmail(e.target.value)}
          value={email}
            className="border border-gray-300 w-full rounded p-2 mt-1"
            type="text"
            required
          />
        </div>

        <div className="text-gray-600">
          <p>Password</p>
          <input
          onChange={(e)=> setPassword(e.target.value)}
          value={password}
            className="border border-gray-300 w-full rounded p-2 mt-1"
            type="password"
            required
          />
        </div>

        <button className="bg-indigo-500 py-2 rounded text-white my-2 cursor-pointer">
          Login
        </button>

        {state === "Admin" ? (
          <p>
            Doctor Login?{" "}
            <span
              onClick={() => setState("Doctor")}
              className="text-indigo-500 underline cursor-pointer"
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Admin Login?{" "}
            <span
              onClick={() => setState("Admin")}
              className="text-indigo-500 underline cursor-pointer"
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
