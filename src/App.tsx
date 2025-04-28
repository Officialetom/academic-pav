import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
import FaqPage from "./pages/FaqPage";
import UniversityPage from "./pages/UniversityPage";
import Professors from "./pages/ProfessorsPage";
import Programes from "./pages/ProgramesPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPage from "./pages/ForgotPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/universities" element={<UniversityPage />} />
        <Route path="/professors" element={<Professors />} />
        <Route path="/programs" element={<Programes />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot" element={<ForgotPage />} />
      </Routes>
    </Router>
  );
}

export default App;
