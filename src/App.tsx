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
import Payment from "./views/Payment";
import NewPaymentCard from "./views/NewPaymentCard";
import TransitionHistory from "./views/TransitionHistory";
import TermsOfUse from "./views/TermsOfUse";
import Support from "./views/Support";
import PersonalInformation from "./views/PersonalInformation";
import Buy from "./views/Buy";
import PromoCode from "./views/PromoCode";
import AdditionalIncome from "./views/AdditionalIncome";
import SocialMedia from "./views/SocialMedia";

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
        <Route path="/personal-information" element={<PersonalInformation />} />
        <Route path="/transaction-history" element={<TransitionHistory />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/new-card" element={<NewPaymentCard />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/support" element={<Support />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/course/:courseId/topic/:id" element={<TopicDetail />} />
        <Route path="/quiz/:id" element={<QuizDetail />} />
        <Route path="/current-balance" element={<CurrentBalance />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/promo-code" element={<PromoCode />} />
        <Route path="/additional-income" element={<AdditionalIncome />} />
        <Route path="/social-media" element={<SocialMedia />} />
      </Route>
    </Routes>
  );
}
