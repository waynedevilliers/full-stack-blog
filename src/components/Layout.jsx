import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="layout-container">
      <Navbar />
      <main className="flex flex-col items-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
