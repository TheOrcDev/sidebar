import MobileNav from "@/components/ui/mobile-nav";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Sidebar from "@/components/ui/sidebar";

export default function Dashboard() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="p-5">
        <MobileNav />
      </div>
    </div>
  );
}
