import { Route, Routes } from "react-router-dom";
import SplashScreen from "./views/SplashScreen";
import Onboarding from "./views/Onboarding";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import VerificationCode from "./views/VerificationCode";
import Home from "./views/Home";
import Courses from "./views/Courses";
import Layout from "./components/Layout";
import Progress from "./views/Progress";
import Profile from "./views/Profile";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/verification-code" element={<VerificationCode />} />

      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}
