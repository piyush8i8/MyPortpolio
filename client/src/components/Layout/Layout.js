import React, { useState } from "react";
import Home from "../../pages/Home/Home";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import Menus from "../Menus/Menus";

const Layout = () => {
  const [toggle, setToggle] = useState(true);

  //change toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="flex min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className={`${toggle ? 'w-64' : 'w-16'} transition-all duration-300 bg-white/10 backdrop-blur-xl border-r border-white/20`}>
          <div className="flex justify-end p-4">
            <button onClick={handleToggle} className="text-white hover:text-blue-400 transition-colors">
              {toggle ? (
                <AiOutlineDoubleLeft size={30} />
              ) : (
                <AiOutlineDoubleRight size={30} />
              )}
            </button>
          </div>
          <Menus toggle={toggle} />
        </div>
        <div className="flex-1 overflow-auto">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;
