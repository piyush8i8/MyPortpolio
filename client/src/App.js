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
        color="#ffffff"
        style={{ 
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          borderRadius: "50%",
          backdropFilter: "blur(16px)",
          border: "2px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0 10px 30px rgba(102, 126, 234, 0.4), 0 0 20px rgba(118, 75, 162, 0.3)",
          width: "50px",
          height: "50px",
          right: "30px",
          bottom: "30px",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          cursor: "pointer"
        }}
        className="scroll-to-top-enhanced"
      />
    </>
  );
}

export default App;
