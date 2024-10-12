import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Onboarding from "./views/Onboarding";
import SignUp from "./views/SignUp";

export default function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/" element={<Onboarding />} />
    </Routes>
  );
}
