import { useState } from "react";
import { NavLink } from "react-router-dom";

function Signin() {
  let [regInfo,setRegInfo] = useState({firstName:"",lastName:"",number:0,email:""})

  let evtHandle = (evt)=>{
   evt.preventDefault()
   let targetValue = evt.target.value
   setRegInfo((preVal)=>{
    preVal[evt.target.name] = targetValue
    return{ ...preVal}
   })
  }

  let handleInput =(et)=>{
    et.preventDefault()
    console.log("name")
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-120 p-6 bg-black text-white">
        <h1 className="text-2xl text-4xl font-bold ">Sign Up</h1>
        <p className="mb-6 text-gray-400 text-2xl">
          Already have a account?{" "}
          <NavLink to="/auth/login" className="text-orange-500  hover:underline">
            Log In
          </NavLink>
        </p>
        <form action="/login" method="post" onSubmit={evtHandle}>
          <section className="name md:flex gap-2 ">
            <div>
              <label htmlFor="firstName" className="block mb-2 font-medium">
                First name
              </label>
              <input
                type="name"
                id="firstName"
                onChange={evtHandle}
                name="firstName"
                placeholder="First Name"
                className="w-full px-4 py-2 mb-4  rounded focus:outline-none border border-[#232323] bg-[#000000] focus:border-[#A3A3A3] "
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block mb-2 font-medium">
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                onChange={evtHandle}
                placeholder="Last Name"
                className="w-full px-4 py-2 mb-4  rounded focus:outline-none border border-[#232323] bg-[#000000] focus:border-[#A3A3A3] "
              />
            </div>
          </section>
          <section className="contact">
            <div className="email">
              <label htmlFor="email" className="block mb-2 font-medium">
               Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={evtHandle}
                placeholder="Email"
                className="w-full px-4 py-2 mb-4  rounded focus:outline-none border border-[#232323] bg-[#000000] focus:border-[#A3A3A3] "
              />
            </div>
            <div className="number">
              <label htmlFor="phone" className="block mb-2 font-medium">
                Phone Number
              </label>
              <input
                type="number"
                onSubmit={handleInput}
                min="50"
                inputMode="numeric"
                pattern="[0-9]{10}"
                id="number"
                name="number"
                onChange={evtHandle}
                placeholder="Phone Number"
                className="w-full px-4 py-2 mb-4  rounded focus:outline-none border border-[#232323] bg-[#000000] focus:border-[#A3A3A3] "
              />
            </div>
          </section>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition">
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
