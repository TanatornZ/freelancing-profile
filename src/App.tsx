import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import HamburgerLanding from "./pages/HamburgerLanding";
import LaptopStore from "./pages/LaptopStore";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/hamburger" element={<HamburgerLanding />} />
        <Route path="/laptops" element={<LaptopStore />} />
      </Routes>
    </BrowserRouter>
  );
}
