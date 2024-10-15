import { Route, Routes } from "react-router-dom";
import SplashScreen from "./views/SplashScreen";
import Onboarding from "./views/Onboarding";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import VerificationCode from "./views/VerificationCode";
import Home from "./views/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/verification-code" element={<VerificationCode />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
