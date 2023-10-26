import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const location=useLocation()
    const navigate=useNavigate()
    const from=location.state?.from?.pathname || "/";
    
      const handleLogin = async (event) =>{
        event.preventDefault();
        const form=event.target
          const userName=form.userName.value
          const password=form.password.value
  
          const authenticationObj={
              userName,
              password
          }
          console.log(authenticationObj)
          try {
            const response = await fetch("https://localhost:7052/api/authentication/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(authenticationObj)
            });
    
            if (response.ok) {
                alert("Login successful!");
                navigate(from, { replace: true });
                form.reset();
            } else {
                alert("Login failed. Please check your credentials.");
            }
        } catch (error) {
            console.error('Error:', error);
            alert("An error occurred during login. Please try again later.");
        }
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
                <h1 className="text-2xl text-center font-bold">LOGIN</h1>
				</div>
				<div className="divide-y divide-gray-200">
					<form onSubmit={handleLogin} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                        <div className="relative">
                            <input id="userName" name="userName" type="text" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Username" />                              
                        </div>
						<div className="relative">
							<input  id="password" name="password" type="password" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />							
						</div>
						<div className="relative">
							<button className="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button>
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