import React from "react";
import { useTheme } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PersonalDetails from "./components/PersonalDetails";
import ProfessionalSummary from "./components/ProfessionalSummary";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Internships from "./components/Internships";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Activities from "./components/Activities";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "react-scroll-to-top";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [theme] = useTheme();

return (
    <>
      <div id={theme} className="bg-gradient-main">
        <ToastContainer 
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme={theme}
        />
        <Navbar />
        <Hero />
        <Education />
        <PersonalDetails />
        {/* <ProfessionalSummary /> */}
        <Skills />
         <Projects />
        <Certifications />
       
        <Internships />
        <Achievements />
        
        <Activities />
        <Contact />
        <Footer />
      </div>
      <ScrollToTop
        smooth
        color="#3b82f6"
        style={{ 
          backgroundColor: "rgba(59, 130, 246, 0.2)", 
          borderRadius: "50%",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)"
        }}
      />
    </>
  );
}

export default App;
