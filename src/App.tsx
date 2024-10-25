import { Route, Routes } from "react-router-dom";
import SplashScreen from "./views/SplashScreen";
import Onboarding from "./views/Onboarding";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import VerificationCode from "./views/VerificationCode";
import Home from "./views/Home";
import Quizzes from "./views/Quizzes";
import Layout from "./components/Layout";
import Statistics from "./views/Statistics";
import Profile from "./views/Profile";
import CurrentBalance from "./views/CurrentBalance";
import CourseDetail from "./views/CourseDetail";
import QuizDetail from "./views/QuizDetail";
import TopicDetail from "./views/TopicDetail";

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
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/current-balance" element={<CurrentBalance />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/course/:courseId/topic/:id" element={<TopicDetail />} />
        <Route path="/quiz/:id" element={<QuizDetail />} />
      </Route>
    </Routes>
  );
}
