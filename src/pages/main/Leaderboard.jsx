import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { motion } from "framer-motion";
import ParticlesComponent from '../../components/main/particle';

// Leaderboard Data (Sorted in Descending Order by Points)
const leaderboardData = [
  { teamId: 1, team_name: "Alpha Hackers", points: 350 },
  { teamId: 2, team_name: "Beta Warriors", points: 100 },
  { teamId: 3, team_name: "Cyber Legends", points: 280 },
  { teamId: 4, team_name: "Dark Force", points: 260 },
  { teamId: 5, team_name: "Shadow Stars", points: 240 },
].sort((a, b) => b.points - a.points); // Sorting in descending order

const Leaderboard = () => {
  const [data] = useState(leaderboardData);

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex justify-center items-center min-h-screen bg-[#121212] text-white font-['Courier_New'] p-4 relative"
    >
      {/* Background Particles */}
      <ParticlesComponent id="particles" className="absolute inset-0 -z-10" />

      {/* Leaderboard Container */}
      <div className="w-full max-w-5xl p-6 sm:p-12 bg-[#121212] rounded-3xl shadow-[0_0_20px_#00FF00] border-4 border-[#ADFF2F] 
                      transition-transform duration-500 hover:scale-105 hover:shadow-[0_0_30px_#ADFF2F]">
        
        {/* Leaderboard Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-6 sm:mb-10 uppercase 
                       bg-[#ADFF2F] py-3 sm:py-4 rounded-lg shadow-md text-black tracking-wide border-b-4 border-[#ADFF2F]">
          Leaderboard
        </h2>

        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto">
          <Table className="w-full text-sm sm:text-lg">
            <TableHeader>
              <TableRow className="bg-[#0F0F0F] text-[#ADFF2F] text-lg sm:text-2xl transition-all duration-300 
                                   shadow-md hover:bg-[#111111] cursor-pointer hover:scale-105 border-b-4 border-[#ADFF2F]">
                <TableHead className="text-left p-3 sm:p-6">Position</TableHead>
                <TableHead className="text-left p-3 sm:p-6">Team Name</TableHead>
                <TableHead className="text-left p-3 sm:p-6">Points</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((team, index) => (
                <TableRow 
                  key={team.teamId} 
                  className="border-b-4 border-[#ADFF2F] text-lg sm:text-2xl transition-all duration-300 
                             hover:bg-[#111111] cursor-pointer hover:scale-105"
                >
                  <TableCell className="p-3 sm:p-6 text-[#00FF00] font-bold rounded-l-lg">{index + 1}</TableCell>
                  <TableCell className="p-3 sm:p-6">{team.team_name}</TableCell>
                  <TableCell className="p-3 sm:p-6">{team.points}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </motion.div>
  );
};

export default Leaderboard;
