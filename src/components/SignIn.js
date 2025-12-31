import Login from "./Login";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
    const navigate= useNavigate()
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-md rounded bg-black/75 p-8">
        <h1 className="mb-6 text-3xl font-bold">Sign In</h1>

        <form className="space-y-4">
             <input
            type="name"
            placeholder="Full Name"
            className="w-full rounded bg-gray-800 px-4 py-3 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email or phone number"
            className="w-full rounded bg-gray-800 px-4 py-3 focus:outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded bg-gray-800 px-4 py-3 focus:outline-none"
          />

          <button className="w-full rounded bg-red-600 py-3 font-semibold hover:bg-red-700">
            Sign In
          </button>
          <div className="mt-6 text-gray-400 text-sm">
          New to Netflix?{" "}
          <button onClick={()=>navigate("/")}      >
            Sign up now
          </button>

     
        </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
