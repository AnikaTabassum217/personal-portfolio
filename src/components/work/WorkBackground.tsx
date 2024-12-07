"use client";
import React from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import MotionBackground from "../shared/motion-background/MotionBackground";
const img='/images/work/work.png'

const WorkBackground = () => {
    return (
        <>
       
           <MotionBackground src={img} alt="Education Image">
           <div className="absolute inset-0 flex items-center justify-center text-red-400 text-5xl font-bold font-serif whitespace-nowrap">
             <TextGenerateEffect words="Work Expirence" />
           </div>
         </MotionBackground>
        </>
    )
}
export default WorkBackground


