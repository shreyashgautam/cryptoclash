import ParticlesComponent from "../../components/main/particle";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const rules = [
  {
    title: "No Bruteforcing",
    description:
      "Automated attacks, excessive requests, and dictionary-based guessing are prohibited. Play fair!",
  },
  {
    title: "No Flag Sharing",
    description:
      "Sharing flags with others is strictly forbidden. Solve challenges on your own.",
  },
  {
    title: "Flag Format",
    description:
      "All flags follow the format: crypto{follow_the_rules_of_the_ctf}. Stick to it!",
  },
  {
    title: "No Automated Scanning",
    description:
      "Avoid using tools like nmap, dirbuster, or sqlmap unless explicitly allowed.",
  },
  {
    title: "Respect the Infrastructure",
    description:
      "Do not attack the CTF servers, other teams, or the event organizers. Keep it ethical!",
  },
];

const Rules = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#121212] text-white p-6 font-['Playfair_Display']">
      {/* Background Particles */}
      <ParticlesComponent id="particles" className="absolute inset-0 -z-10" />

      {/* Header */}
      <motion.h1
        className="relative text-4xl sm:text-5xl font-bold text-[#ADFF2F] mb-8 tracking-wider drop-shadow-[0_0_10px_#00FF00] z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        ⚡ Capture The Flag Rules ⚡
      </motion.h1>

      {/* Rules Container */}
      <motion.div
        className="relative w-full max-w-3xl flex flex-col gap-6 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {rules.map((rule, index) => (
          <motion.div
            key={index}
            className="p-6 border-4 border-[#00FF00] rounded-xl shadow-lg transition-all duration-300 
                      hover:scale-105 hover:shadow-[0_0_30px_#00FF00] bg-[#1A1A1A] flex gap-4 items-center"
            whileHover={{ rotate: 1 }}
          >
            <CheckCircle size={36} className="text-[#ADFF2F]" />
            <div>
              <h2 className="text-2xl font-semibold text-[#ADFF2F] tracking-wide">{rule.title}</h2>
              <p className="text-gray-300 text-lg">{rule.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer */}
      <motion.p
        className="relative mt-10 text-gray-400 text-md italic z-10 tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        🏴 Play fair, have fun, and may the best hacker win! 🏴
      </motion.p>
    </div>
  );
};

export default Rules;
