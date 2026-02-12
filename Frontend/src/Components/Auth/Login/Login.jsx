import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"


function Login() {
  let [logInfo,setLogInfo] = useState({email:"",password:""})

  let evtHandler = (evt)=>{
    let targetValue = evt.target.value
    let targetName = evt.target.name

    setLogInfo(preVal =>{
      preVal[targetName] = targetValue
      return {...preVal}
    })
  }

  return (
  <div className="flex flex-col items-center justify-center min-h-screen bg-black">
  <div className="w-full max-w-sm p-6 bg-black text-white">
    <h1 className="text-2xl text-4xl font-bold ">Sign In</h1>
    <p className="mb-6 text-gray-400">
      New user? <NavLink to="/auth/signup" className="text-orange-500 hover:underline">Create an account</NavLink>
    </p>
    <form>
      <label htmlFor="phone" className="block mb-2 font-medium">Email</label>
      <input 
        type="email" 
        id="email" 
        name="email"
        onChange={evtHandler}
        placeholder="Enter your email here"
        className="w-full px-4 py-2 mb-4  rounded focus:outline-none border border-[#232323] bg-[#000000] focus:border-[#A3A3A3] "
      />
      <label htmlFor="phone" className="block mb-2 font-medium">Password</label>
      <input 
        type="text" 
        id="password" 
        name="password"
        onChange={evtHandler}
        placeholder="Enter your password here"
        className="w-full px-4 py-2 mb-4  rounded focus:outline-none border border-[#232323] bg-[#000000] focus:border-[#A3A3A3] "
      />
      <button 
        type="submit" 
        className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
      >
        Sign In
      </button>
    </form>
  </div>
</div>
  )
}

export default Login