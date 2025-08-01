import React, { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMenuFold } from "react-icons/ai";
import { Link } from "react-scroll";
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Handle open
  const handleOpen = () => {
    setOpen(!open);
  };

  // Handle menu clicks
  const handleMenuClick = () => {
    setOpen(false);
  };

  // Close menu on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 glass text-white shadow-lg">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Piyush Kumar
          </h1>
          {open ? (
            <AiOutlineMenuFold
              size={30}
              className="cursor-pointer hover:text-blue-300 transition-colors"
              onClick={handleOpen}
            />
          ) : (
            <GiHamburgerMenu
              size={30}
              className="cursor-pointer hover:text-blue-300 transition-colors"
              onClick={handleOpen}
            />
          )}
        </div>
        {open && (
          <div ref={menuRef} className="glass text-white px-4 py-8 shadow-xl rounded-b-2xl">
            <div className="space-y-4">
              <Link to="home" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick} className="flex items-center space-x-3 py-3 px-2 hover:bg-white/10 rounded-lg transition-colors duration-200">
                <FcHome size={24} />
                <span>Home</span>
              </Link>
              <Link to="about" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick} className="flex items-center space-x-3 py-3 px-2 hover:bg-white/10 rounded-lg transition-colors duration-200">
                <FcAbout size={24} />
                <span>About</span>
              </Link>
              <Link to="education" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick} className="flex items-center space-x-3 py-3 px-2 hover:bg-white/10 rounded-lg transition-colors duration-200">
                <FcReadingEbook size={24} />
                <span>Education</span>
              </Link>
              <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick} className="flex items-center space-x-3 py-3 px-2 hover:bg-white/10 rounded-lg transition-colors duration-200">
                <FcBiotech size={24} />
                <span>Tech Stack</span>
              </Link>
              <Link to="projects" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick} className="flex items-center space-x-3 py-3 px-2 hover:bg-white/10 rounded-lg transition-colors duration-200">
                <FcVideoProjector size={24} />
                <span>Projects</span>
              </Link>
              <Link to="work" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick} className="flex items-center space-x-3 py-3 px-2 hover:bg-white/10 rounded-lg transition-colors duration-200">
                <FcPortraitMode size={24} />
                <span>Work Experience</span>
              </Link>
              <Link to="contact" spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick} className="flex items-center space-x-3 py-3 px-2 hover:bg-white/10 rounded-lg transition-colors duration-200">
                <FcBusinessContact size={24} />
                <span>Contact</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileNav;
