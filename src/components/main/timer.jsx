import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return { hours, minutes, seconds };
  };

  const { hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex justify-center items-center h-screen text-[#ADFF2F] font-['Playfair_Display']"
    >
      <div className="flex gap-6 p-6 bg-[#121212] rounded-xl shadow-2xl border border-[#ADFF2F]">
        {[{ label: "HOURS", value: hours }, { label: "MINUTES", value: minutes }, { label: "SECONDS", value: seconds }].map((item, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            className="flex flex-col items-center w-32 p-4 bg-[#9BE02C] text-black rounded-lg shadow-lg border border-[#ADFF2F]"
          >
            <span className="text-5xl font-extrabold">{String(item.value).padStart(2, "0")}</span>
            <span className="text-lg font-bold uppercase mt-2 animate-pulse">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CountdownTimer;
