import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ParticlesComponent from '../../components/main/particle';

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [teamCode, setTeamCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username", username);
    console.log("Team Code:", teamCode);
    alert("Login Successful!");
  };

  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-screen h-screen flex justify-center items-center bg-black text-white font-['Courier_New'] relative"
    >
      {/* Particle Background (Now properly layered) */}
      <ParticlesComponent id="particles" className="absolute inset-0 z-[-1] pointer-events-none" />

      {/* Login Form (Ensured it's above the background) */}
      <div className="relative z-10 w-[90%] max-w-xl p-8 sm:p-12 bg-[#121212] rounded-3xl shadow-[0_0_25px_#00FF00] border-4 border-[#ADFF2F] hover:shadow-[0_0_35px_#ADFF2F] transition-transform duration-500 hover:scale-105">
        <h2 className="text-5xl font-extrabold text-center mb-10 uppercase bg-[#ADFF2F] py-4 rounded-lg shadow-md text-black tracking-wide">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label className="mb-2 text-lg text-[#ADFF2F]">Username</label>
            <input 
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-4 rounded-lg bg-[#0F0F0F] text-white border-2 border-[#ADFF2F] focus:outline-none focus:ring-2 focus:ring-[#ADFF2F] placeholder-gray-400"
              placeholder="Enter Username"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-lg text-[#ADFF2F]">Team Code</label>
            <input 
              type="text"
              value={teamCode}
              onChange={(e) => setTeamCode(e.target.value)}
              className="p-4 rounded-lg bg-[#0F0F0F] text-white border-2 border-[#ADFF2F] focus:outline-none focus:ring-2 focus:ring-[#ADFF2F] placeholder-gray-400"
              placeholder="Enter Team Code"
              required
            />
          </div>

          <button 
            type="submit"
            className="mt-6 bg-[#ADFF2F] text-black text-xl font-bold py-4 rounded-lg border-2 border-[#ADFF2F] shadow-[0_0_15px_#00FF00] transition-all duration-300 
            hover:bg-[#bfff00] hover:shadow-[0_0_35px_#ADFF2F] hover:scale-105 
            active:scale-95 active:shadow-[0_0_15px_#ADFF2F] focus:outline-none"
          >
            Login
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default LoginPage;
