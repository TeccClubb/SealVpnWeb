"use client"


 import Footer from '@/components/footer/footer';
import { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-gray-800">
      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-grow py-10">
        <img src="/loginicon.png" alt="Logo" className="w-16 h-16 mb-4" />
        


        
        <h1 className="text-xl font-bold mb-6">Log in to SeelVpn</h1>
        <form onSubmit={handleLogin} className="w-full max-w-sm mx-auto">
  {/* Email */}
  <input
    type="email"
    placeholder="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
    className="w-[70%] mx-auto block px-4 py-2 mb-3 border border-gray-300 rounded-md"
  />

  {/* Password */}
  <input
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
    className="w-[70%] mx-auto block px-4 py-2 mb-4 border border-gray-300 rounded-md"
  />

  {/* Login Button */}
  <button
    type="submit"
    className="w-[70%] mx-auto block bg-teal-400 hover:bg-teal-500 text-white py-2 rounded-full"
  >
    Log In
  </button>

  {/* Forgot Password */}
  <div className="text-center mt-2 text-sm">
    <a href="#" className="text-gray-500 gg underline">I forgot my password</a>
  </div>

  {/* Sign Up */}
  <div className="text-center mt-2 text-sm">
    Don’t have a SeelVpn account? <a href="#" className="text-teal-600 underline">Sign up</a>
  </div>
</form>

      </main>

    
      {/* Footer */}
   {/* <Footer></Footer> */}


    </div>
  );
}
