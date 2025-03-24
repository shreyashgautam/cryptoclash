import ParticlesComponent from '../../components/main/particle';
import LockedCardDialog from '../../components/main/cards';
import { Toaster } from "../../components/ui/toaster";  // ✅ Import ShadCN Toaster

const Dashboard = () => {
  // Updated problems to match JSON structure
  const problems = [ 
    {
      ctf_id: 101,
      name: "Beginner Crypto Challenge",
      description: "A simple cryptography challenge to test your basic skills.",
      author: "CryptoMaster",
      type: 1,
      points: 100,
      solver: "player123",
      links: [
        "https://ctf.example.com/challenge/101",
        "https://hints.example.com/101"
      ]
    },
    {
      ctf_id: 102,
      name: "Advanced Cipher Crack",
      description: "Decrypt this complex cipher to find the flag.",
      author: "CodeBreaker",
      type: 2,
      points: 250,
      solver: "",
      links: [
        "https://ctf.example.com/challenge/102",
        "https://hints.example.com/102"
      ]
    },
    {
      ctf_id: 103,
      name: "Web Exploit Basics",
      description: "Find the security loophole in this web application.",
      author: "SecurityNinja",
      type: 3,
      points: 300,
      solver: "hacker007",
      links: [
        "https://ctf.example.com/challenge/103",
        "https://hints.example.com/103"
      ]
    }
  ];

  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      {/* 🟢 Toaster Component for Showing Toast Notifications */}
      <Toaster position="top-center" reverseOrder={false} />

      <ParticlesComponent id="particles" className="absolute inset-0 -z-10" />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {problems.map((problem) => (
          <LockedCardDialog key={problem.ctf_id} problem={problem} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
