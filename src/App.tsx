import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Onboarding from "./views/Onboarding";
import SignUp from "./views/SignUp";
import SignIn from "./views/SignIn";

export default function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/" element={<Onboarding />} />
    </Routes>
  );
}
