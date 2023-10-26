import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Signup = () => {
  const location=useLocation()
  const navigate=useNavigate()
  const from=location.state?.from?.pathname || "/";
    const handleSignUp = (event) =>{
        event.preventDefault();
        const form=event.target
        const firstName = form.firstName.value
        const lastName=form.lastName.value
        const userName=form.userName.value
        const email=form.email.value
        const roles=['User']
        const phoneNumber=form.phoneNumber.value
        const password=form.password.value

        const authenticationObj={
            firstName,
            lastName,
            userName,
            email,
            phoneNumber,
            password,
            roles,
        }
        console.log(authenticationObj)
        fetch("https://localhost:7052/api/authentication",{
            method:"POST",
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               },
            body:JSON.stringify(authenticationObj)
            }).then(resp => resp.text()).then(console.log).then(data=>{
                alert("Registration successfull!")
                navigate(from,{replace:true})
                form.reset();
             })
    }


  return (
    
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div
                className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
            </div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <div className="max-w-md mx-auto">
                    <div>
                        <h1 className="text-4xl text-center font-bold">SIGN UP</h1>
                    </div>
                    <div className="divide-y divide-gray-200">
                        <form onSubmit={handleSignUp} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                            <div className="relative">
                                <input id="firstName" name="firstName" type="text" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="First Name" />                              
                            </div>
                            <div className="relative">
                                <input id="lastName" name="lastName" type="text" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Last Name" />                              
                            </div>
                            <div className="relative">
                                <input id="userName" name="userName" type="text" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Username" />                              
                            </div>
                            <div className="relative">
                                <input id="email" name="email" type="text" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />                              
                            </div>
                            <div className="relative">
                                <input id="phoneNumber" name="phoneNumber" type="text" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Phone Number" />                              
                            </div>
                            <div className="relative">
                                <input id="password" name="password" type="password" className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />                              
                            </div>
                            <p className='font-bold'>If you have an account. Please <Link to="/login" className="text-blue-600 underline">Login</Link> Here</p>
                            <div className="relative">
                                <button className="bg-blue-500 text-white rounded-md px-6 py-2 ">Sign up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup