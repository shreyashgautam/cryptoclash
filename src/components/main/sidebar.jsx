import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "../ui/dropdown-menu";
import { UserCog, LogOut } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet.jsx";
import { HyperText } from "../magicui/hyper-text";
import ParticlesComponent from "./particle";

// Sidebar Menu Items
const SidebarMenu = [
  { id: "dashboard", label: "Dashboard", path: "/dashboard" },
  { id: "leaderboard", label: "Ranklist", path: "/leaderboard" },
  { id: "team", label: "Add Team", path: "/team" },
  { id: "rules", label: "Rules", path: "/rules" },
];

function MenuItems({ setOpen }) {
  const navigate = useNavigate();

  return (
    <nav className="mt-6 flex flex-col gap-3">
      {SidebarMenu.map((menuItem) => (
        <div
          key={menuItem.id}
          onClick={() => {
            navigate(menuItem.path);
            if (setOpen) setOpen(false);
          }}
          className="flex cursor-pointer items-center gap-4 rounded-md px-3 py-2 text-[#ADFF2F] 
                     hover:bg-[#9BE02C] hover:text-black transition-all duration-300 
                     transform hover:scale-105 ease-in-out font-['Playfair_Display']"
        >
          <span className="text-md font-semibold">
            <HyperText>{menuItem.label}</HyperText>
          </span>
        </div>
      ))}
    </nav>
  );
}

function MainSideBar({ open, setOpen }) {
  const navigate = useNavigate();

  return (
    <Fragment>
      {/* Mobile Sidebar */}
      <Sheet open={open} onOpenChange={setOpen}>
        <ParticlesComponent id="particles" className="absolute inset-0 z-[-1] pointer-events-none" />

        <SheetContent side="left" className="w-60 bg-black text-[#ADFF2F] font-['Playfair_Display']">
          <div className="flex flex-col h-full">
            {/* Sidebar Title (Removed Logo & SCOPE) */}
            <SheetHeader className="border-b border-gray-700 py-3">
              <SheetTitle className="text-lg font-extrabold tracking-wide text-[#ADFF2F] px-3 py-2">
                CRYPTOCLASH
              </SheetTitle>
            </SheetHeader>

            <MenuItems setOpen={setOpen} />
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <aside className="hidden w-60 flex-col border-r bg-black p-5 lg:flex text-[#ADFF2F] font-['Playfair_Display']">
        <div onClick={() => navigate("/main/dashboard")} className="px-3 py-2 cursor-pointer text-[#ADFF2F]">
          <h4 className="text-lg font-extrabold tracking-wide">CRYPTOCLASH</h4>
        </div>

        <MenuItems />
      </aside>
    </Fragment>
  );
}

export default MainSideBar;
