'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const pathName=usePathname();

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

   const getRoute=( path:string)=>{
     return(
      pathName===path?'text-white font-bold underline':''
     )
   }


  return (
    <>
        <div>
            <div className={`flex justify-between items-center px-8 py-2 fixed top-0 z-20 font-serif 
              w-full  ${
                scroll ? "backdrop-blur-lg bg-white/20 border-b border-white/20":"bg-gray-400"
              }`}>
              <div>Anika Tabassum</div>
              <div className="flex justify-center items-center gap-4">
                            
               <Link href={'/'}>
               <p className={`font-medium text-base cursor-pointer hover:underline ${getRoute('/')}`}>Home</p>
               </Link>
                <Link href={'/education'}>
                <p className={`font-medium text-base cursor-pointer hover:underline ${getRoute('/education')}`}>Education</p>
                </Link>
                <Link href={'/work'}>
                <p className={`font-medium text-base cursor-pointer hover:underline ${getRoute('/work')}`}>Work Experience</p>
                </Link>
                <Link href={'/research'}>
                <p className={`font-medium text-base cursor-pointer hover:underline ${getRoute('/research')}`}>Research & Project</p>
                </Link>
                
                <p>Blog</p></div>

            </div>
        </div>     
    </>
  )
}
export default Navbar