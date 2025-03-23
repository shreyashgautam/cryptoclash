import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { motion } from "framer-motion";
import ParticlesComponent from '../../components/main/particle';

const leaderboardData = [
  { position: 1, teamName: "Alpha Hackers", score: 350 },
  { position: 2, teamName: "Beta Warriors", score: 300 },
  { position: 3, teamName: "Cyber Legends", score: 280 },
  { position: 4, teamName: "Dark Force", score: 260 },
  { position: 5, teamName: "Shadow Stars", score: 240 },
];

const Leaderboard = () => {
  const [data, setData] = useState(leaderboardData);

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex justify-center items-center min-h-screen bg-[] text-white font-['Courier_New']"
    >
      <div className="w-full max-w-5xl p-12 bg-[#121212] cursor-pointer rounded-3xl shadow-[0_0_20px_#00FF00] border-4 border-[#ADFF2F] transition-transform duration-500 hover:scale-105 hover:shadow-[0_0_30px_#ADFF2F]">
      <ParticlesComponent id="particles" className="absolute inset-0 -z-10" />
        <h2 className="text-5xl font-extrabold text-center mb-10 uppercase bg-[#ADFF2F] py-4 rounded-lg shadow-md text-black tracking-wide border-b-4 border-[#ADFF2F]">
          Leaderboard
        </h2>
        <Table className="text-xl w-full">
          <TableHeader>
            <TableRow className="bg-[#0F0F0F] text-[#ADFF2F] text-2xl transition-all duration-300 shadow-md hover:bg-[#111111] cursor-pointer hover:scale-105 border-b-10 border-[#ADFF2F]">
              <TableHead className="text-left p-6">Position</TableHead>
              <TableHead className="text-left p-6">Team Name</TableHead>
              <TableHead className="text-left p-6">Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((team, index) => (
              <TableRow 
                key={index} 
                className="border-b-4 border-[#ADFF2F] text-2xl transition-all duration-300 hover:bg-[#111111] cursor-pointer hover:scale-105 "
              >
                <TableCell className="p-6 text-[#00FF00] font-bold rounded-l-lg">{team.position}</TableCell>
                <TableCell className="p-6">{team.teamName}</TableCell>
                <TableCell className="p-6">{team.score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </motion.div>
  );
};

export default Leaderboard;
