import React from 'react'
import { useState } from 'react'
import axios from 'axios'
const Register = () => {
  const[password,setpassword]= useState("");
  const[email,setemail] =useState("")
  const[name,setname]= useState("");
  const[phone,setphone] =useState("")
  const[address,setaddress]= useState("");
  const[query,setquery] =useState("")
  const[data,setdata] = useState({})

  
    
  
  function handle(e){
    e.preventDefault()
    axios.post("http://localHost:3001/register",{password,email,name,query,phone,address }).then(res =>{setdata(res)})

console.log(data.status)

  }

  
  return (
    <div className='deko'> <div className='flexy'>
    <div className='new'>
    <div className="min-h-full  flex items-center justify-center 		 px-4 sm:px-6 lg:px-8">
<div className="max-w-md w-full 
 space-y-8">
  <div >
    <img className="mx-auto h-12 w-auto mt-5" src="download.jfif" alt="Workflow"/>
    <h2 className="mt-1 text-center text-3xl  font-extrabold text-gray-900">Create your account</h2>
   
  </div>
  <form className="mt-8 space-y-6">
    <input type="hidden" name="remember" />
    <div className="rounded-md shadow-sm -space-y-px">
      <div className="pb-3 ...">
        <input id="name"name="name" pattern="[a-z]*"type="text"  required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" onChange={ (e) => {setname(e.target.value)}} placeholder="Full Name"/>
      </div>
      
         <div className="pb-3 ...">
        <input id="email-address" name="email" type="email"  required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"onChange={ (e) => {setemail(e.target.value)}} placeholder="Email address"/>
      </div>
      
      <div className="pb-3 ...">
        <input id="Contact" name="Contact" type="number" a required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"onChange={ (e) => {setphone(e.target.value)}} placeholder="Contact"/>
      </div>
      <div className="pb-3 ...">
        <input id="Password" name="Password" type="Password"  required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" onChange={ (e) => {setpassword(e.target.value)}} placeholder="Password"/>
      </div>
      
      <div className="pb-3 ...">
        <input id="address" name="address" type="address"  required className="appearance-none  break-all	 rounded-none h-16	 relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"onChange={ (e) => {setaddress(e.target.value)}} placeholder=" Address"/>
      </div>
      
      <div className="pb-3 ...">
        <input id="query" name="query" type="query" required className="appearance-none rounded-none relative block h-20 w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"onChange={ (e) => {setquery(e.target.value)}} placeholder="Write about your Problem"/>
      </div>
    </div>

    <div className="flex items-center justify-between">
      <div className="flex items-center">
 <input id="remember-me" name="remember-me" type="checkbox" required className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
 <label  className="ml-2 block font-semibold subpixel-antialiased ... hover:text-blue-600 text-purple-900		"> Remember me </label>

      </div>

      <div className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
     Log In? 
      </div>
    </div>

    <div className='butt'>
     
      <button onClick={handle} className="bg-blue-500 hover:bg-blue-700 text-white font-bold Login-button rounded-full">
  Register
</button>
    </div>
  </form>
</div>

</div>
</div>
  </div></div>
  )
}

export default Register