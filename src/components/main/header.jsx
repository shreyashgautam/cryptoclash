import { Button } from "../ui/button";
import { AlignJustify, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ParticlesComponent from "./particle";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "../ui/dropdown-menu"; // Ensure correct import
import img from "../../assets/image.png";

function MainHeader({ setOpen }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logging out...");
    navigate("/login");
  };

  return (
    <header className="relative flex items-center px-4 py-3 bg-black text-[#00FF41] justify-between font-['Playfair_Display']">
      {/* Background Particles */}
      <ParticlesComponent id="particles" className="absolute inset-0 -z-10 pointer-events-none" />

      {/* Logo + SCOPE (Centered) */}
      <div className="flex items-center gap-4">
        <img src={img} alt="Logo" className="h-17 w-20 object-contain" /> {/* Increased Logo Size */}
        <div className="flex flex-col">
          <h4 className="text-lg font-extrabold tracking-wide">School of Computer Science and Engineering</h4> {/* Increased Font Size */}
        </div>
      </div>

      {/* Mobile Menu Toggle Button */}
      <Button
        onClick={() => setOpen(true)}
        className="lg:hidden bg-[#00FF41] text-black font-bold hover:bg-[#00CC33] transition-all duration-300"
        aria-label="Open Sidebar Menu"
      >
        <AlignJustify className="h-6 w-6" />
      </Button>

      {/* User Profile Dropdown */}
      <div className="flex flex-1 justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="w-12 h-12 bg-[#00FF41] rounded-full flex justify-center items-center 
                         text-black text-2xl font-bold cursor-pointer hover:scale-105 transition-all duration-300"
              aria-label="User Menu"
            >
              S
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            sideOffset={8}
            className="w-56 bg-[#1A1A1A] border border-[#00FF41] rounded-md shadow-lg"
          >
            <DropdownMenuLabel className="text-[#00FF41] font-['Playfair_Display'] px-4 py-2">
              Logged in as <span className="font-bold">S</span>
            </DropdownMenuLabel>

            <DropdownMenuItem
              onClick={() => navigate("/leaderboard")}
              className="text-[#00FF41] hover:bg-[#00CC33] px-4 py-2 cursor-pointer transition-all duration-300 rounded-md"
            >
              Score
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={handleLogout}
              className="text-red-500 flex items-center gap-2 hover:bg-[#FF3131] px-4 py-2 cursor-pointer 
                         transition-all duration-300 rounded-md"
            >
              <LogOut className="h-4 w-4" /> Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

export default MainHeader;
