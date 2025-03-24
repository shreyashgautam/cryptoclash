import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "../ui/dialog";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Lock, Unlock } from "lucide-react";
import { HyperText } from "../magicui/hyper-text";
import { useToast } from "../../hooks/use-toast";  // 🚀 Import useToast from ShadCN UI

const LockedCardDialog = ({ problem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [answer, setAnswer] = useState("");
  const { toast } = useToast();  // 🔥 Initialize the toast function

  // Correct Flag
  const correctFlag = "crypto{advanced_cipher_cracked}";

  // Handle Submission
  const handleSubmit = () => {
    if (answer.trim() === correctFlag) {
      toast({
        title: "Correct Flag!",
        description: "Well done! You solved the challenge 🎉",
        variant: "success",
      });
    } else {
      toast({
        title: "Incorrect Flag!",
        description: "Try again, keep hacking! 🚀",
        variant: "destructive",
      });
    }
    setAnswer(""); // Clear input field after submission
  };

  return (
    <div className="p-5 font-['Playfair_Display'] cursor-pointer">
      {/* Locked Card UI */}
      <motion.div
        className="relative w-[200px] h-[200px] sm:w-[300px] sm:h-[200px] bg-[#121212] rounded-2xl shadow-[0_0_25px_#00FF00] 
        border-4 border-[#ADFF2F] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_#00FF00] hover:-translate-y-1"
        whileHover={{ rotate: 1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowDialog(true)}
      >
        {/* Status Label */}
        <div className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 bg-[#ADFF2F] text-black px-6 py-2 text-lg font-bold rounded-md shadow-md">
          <h1>{problem.solver ? "Solved" : "Open"}</h1>
        </div>

        {/* Lock Icon */}
        <motion.div 
          className="absolute inset-0 flex justify-center items-center"
          animate={{ scale: isOpen ? 1.2 : 1 }}
          transition={{ duration: 0.5 }}
        >
          {problem.solver ? (
            <Unlock size={70} className="text-[#ADFF2F] transition-all duration-500" />
          ) : (
            <Lock size={70} className="text-[#ADFF2F] transition-all duration-500" />
          )}
        </motion.div>

        {/* Points Display */}
        <div className="absolute bottom-4 right-4 text-white px-5 py-2 rounded-lg text-lg font-bold shadow-md">
          {problem.points} Pts
        </div>
      
      </motion.div>

      {/* 🟢 Problem Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-[70vw] sm:max-w-[50vw] bg-[#121212] border-[#00FF00] border-2 shadow-lg text-white p-8 rounded-lg transition-all duration-300">
          
          {/* 🟢 Heading */}
          <h1 className="text-3xl font-bold text-[#ADFF2F]">  
            <HyperText>{problem.name}</HyperText>
          </h1>
          
          {/* 🟢 Author & Type */}
          <p className="text-gray-400 text-md mt-1">
            <HyperText>{problem.author}</HyperText> <span className="text-[#ADFF2F]">Type: {problem.type}</span>
          </p>
          
          <Separator className="my-5 border-[#00FF00]" />
        
          {/* 🟢 Problem Description */}
          <p className="text-lg text-[#ADFF2F]">{problem.description}</p>
        
          {/* 🟢 Points */}
          <div className="mt-6 text-[greenyellow] text-lg font-bold">
            Points: {problem.points}
          </div>
        
          <Separator className="my-5 border-[#00FF00]" />

          {/* 🟢 Challenge Links */}
          <div className="flex flex-col gap-3">
            {problem.links.map((link, index) => (
              <a key={index} href={link} target="_blank" rel="noopener noreferrer" className="text-[#00FF00] underline">
                {index === 0 ? "Challenge Link" : "Hint Link"}
              </a>
            ))}
          </div>
        
          <Separator className="my-5 border-[#00FF00]" />
        
          {/* 🟢 Answer Submission */}
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Enter your Flag"
              className="w-full p-4 text-lg bg-[#1A1A1A] border-2 border-[#00FF00] text-white rounded-md focus:ring-4 focus:ring-[#ADFF2F] transition-all duration-300"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
        
            <Button 
              className="w-full bg-[#00FF00] hover:bg-[#ADFF2F] text-black font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              onClick={handleSubmit}
            >
              Submit Answer
            </Button>
          </div>
        
        </DialogContent>
        
      </Dialog>
    </div>
  );
};

export default LockedCardDialog;
