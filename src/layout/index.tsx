import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../sections";

export default function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
