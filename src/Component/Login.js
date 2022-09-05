import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
    const[password,setpassword]= useState("");
  const[email,setemail] =useState("")
  const[data,setdata] = useState({})
  function handle(e){
    e.preventDefault()
    axios.post("https://thapa-api.herokuapp.com/login",{email,password}).then(res =>{setdata(res.data)
  console.log(res)})
 if(data.status===200){
  return navigate('/Patientinfo')
 }
}
  
  
  
  return (
    <div>
        <div className='flexs'>
    <div className='new'>
    <div className="min-h-full  flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
<div className="max-w-md w-full 
 space-y-8">
  <div>
    
    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-2800">Log in to your account</h2>
   
  </div>
  <form className="mt-8 space-y-6" >
    <input type="hidden" name="remember" value="true"/>
    <div className="rounded-md shadow-sm -space-y-px">
      <div className="pb-4 ...">
        <input id="email-address" name="email"    type="email" autocomplete="email" onChange={ (e) => {setemail(e.target.value)}} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"/>
      </div>
      <div className ="pb-4...">
        <label for="password" className="sr-only">Password</label>
        <input id="password" name="password" onChange={ (e) => {setpassword(e.target.value)}}  type="password" autocomplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"/>
      </div>
    </div>

    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
        <label for="remember-me" className="ml-2 block text-sm text-gray-2500"> Remember me </label>
      </div>

      <div className="text-sm font-medium text-indigo-1800 hover:text-indigo-500">
        Forgot your password?
      </div>
    </div>

    <div className='butt'>
     
     <button onClick={handle} className="bg-purple-800 hover:bg-blue-700 text-white font-bold Login-button rounded-full">
 Login
</button>
   </div>
  </form>
</div>

</div>
</div>
  </div>
    </div>
  )
}

export default Login