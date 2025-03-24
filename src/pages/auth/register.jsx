import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ParticlesComponent from '../../components/main/particle';

const RegisterPage = () => {
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // 🚀 Navigation hook

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration Number:", registrationNumber);
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    alert("Registration Successful!");
  };

  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflow = "hidden"; // Prevents scrolling on the background
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-screen h-screen flex justify-center items-center bg-black text-white font-['Courier_New'] relative overflow-hidden"
    >
      {/* Particle Background */}
      <ParticlesComponent id="particles" className="absolute inset-0 z-[-1] pointer-events-none" />

      {/* Register Form (Smaller & Scrollable) */}
      <div className="relative z-10 w-[90%] max-w-md p-6 sm:p-8 bg-[#121212] rounded-2xl shadow-[0_0_15px_#00FF00] border-2 border-[#ADFF2F] hover:shadow-[0_0_25px_#ADFF2F] transition-transform duration-500 hover:scale-105">
        <h2 className="text-3xl font-extrabold text-center mb-4 uppercase bg-[#ADFF2F] py-3 rounded-lg shadow-md text-black tracking-wide">
          Register
        </h2>

        <div className="max-h-[60vh] overflow-y-auto px-2 py-1">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label className="mb-1 text-md text-[#ADFF2F]">Registration Number</label>
              <input 
                type="text"
                value={registrationNumber}
                onChange={(e) => setRegistrationNumber(e.target.value)}
                className="p-3 rounded-lg bg-[#0F0F0F] text-white border border-[#ADFF2F] focus:outline-none focus:ring-1 focus:ring-[#ADFF2F] placeholder-gray-400"
                placeholder="Enter Registration Number"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-md text-[#ADFF2F]">Username</label>
              <input 
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="p-3 rounded-lg bg-[#0F0F0F] text-white border border-[#ADFF2F] focus:outline-none focus:ring-1 focus:ring-[#ADFF2F] placeholder-gray-400"
                placeholder="Enter Username"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-md text-[#ADFF2F]">Email</label>
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 rounded-lg bg-[#0F0F0F] text-white border border-[#ADFF2F] focus:outline-none focus:ring-1 focus:ring-[#ADFF2F] placeholder-gray-400"
                placeholder="Enter Email"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-md text-[#ADFF2F]">Password</label>
              <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 rounded-lg bg-[#0F0F0F] text-white border border-[#ADFF2F] focus:outline-none focus:ring-1 focus:ring-[#ADFF2F] placeholder-gray-400"
                placeholder="Enter Password"
                required
              />
            </div>

            <button 
              type="submit"
              className="mt-3 bg-[#ADFF2F] text-black text-lg font-bold py-3 rounded-lg border border-[#ADFF2F] shadow-[0_0_10px_#00FF00] transition-all duration-300 
              hover:bg-[#bfff00] hover:shadow-[0_0_25px_#ADFF2F] hover:scale-105 
              active:scale-95 active:shadow-[0_0_10px_#ADFF2F] focus:outline-none"
            >
              Register
            </button>
          </form>
        </div>

        {/* Login Navigation */}
        <p className="text-center text-md mt-2">
          Already have an account? 
          <button 
            onClick={() => navigate("/login")}
            className="ml-1 text-[#ADFF2F] font-bold hover:underline transition-all duration-300 hover:text-[#bfff00]"
          >
            Login Here
          </button>
        </p>
      </div>
    </motion.div>
  );
};

export default RegisterPage;
