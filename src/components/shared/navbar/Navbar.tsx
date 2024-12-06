'use client'
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    setScroll(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  //  const handleMenuClose = () => setMenuOpen(false);

  return (
    <>
        <div>
            <div className={`flex justify-between items-center px-8 py-2 fixed top-0 z-20 font-serif 
              w-full  ${
                scroll ? "backdrop-blur-lg bg-white/20 border-b border-white/20":"bg-gray-200"
              }`}>
              <div>Anika Tabassum</div>
              <div className="flex justify-center items-center gap-4"> <p>Home</p>
              
                <p>Education</p>
                <p>Work Experience</p>
                <p>Research & Project</p>
               
                <p>Blog</p></div>
            </div>
        </div>     
    </>
  )
}
export default Navbar