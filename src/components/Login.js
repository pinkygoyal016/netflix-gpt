import { useNavigate } from 'react-router-dom'
import Header from './Header'
const Login = () => {
  const navigate =useNavigate()
  return (
   
            <div className=" min-h-screen flex items-center justify-center text-white relative ">
       <Header/>
       <div className="absolute top-0 left-0 right-0 z-20 ">
   <div className='mx-auto flex flex-wrap max-w-7xl items-center justify-between px-6 py-5'>
     <img className='w-48  inset-0 bg-cover bg-center h-8 md:h-10 ' src=" https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt='logo'/>
 <button
      className="rounded bg-red-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-red-700 transition cursor-pointer" onClick={()=>navigate("/signin")}> Sign In
    </button>
   </div>
   </div>
  <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black" />
   <div className="relative z-10 max-w-4xl px-4 text-center ">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
      Unlimited movies, TV shows, and more
    </h1>

    <p className="mt-4 text-lg md:text-xl font-medium">
      Starts at $7.99. Cancel anytime.
    </p>

    <p className="mt-6 text-base md:text-lg">
      Ready to watch? Enter your email to create or restart your membership.
    </p>

    
    <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
      <input
        type="email"
        placeholder="Email address"
        className="w-full sm:w-auto flex-1 rounded bg-black/60 border border-gray-500 px-4 py-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
      />
       <input
        type="password"
        placeholder="Password"
        className="w-full sm:w-auto flex-1 rounded bg-black/60 border border-gray-500 px-4 py-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
      />

      <button
        className="w-full sm:w-auto flex items-center justify-center gap-2 rounded bg-red-600 px-6 py-4 text-lg font-semibold hover:bg-red-700 transition"
      >
        Get Started
        
      </button>
    </div>
  </div>
</div>
  )
}

export default Login
