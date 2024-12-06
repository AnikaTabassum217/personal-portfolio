import React from "react";
import MotionBackground from "../shared/motion-background/MotionBackground";
import { TextGenerateEffect } from "../ui/text-generate-effect";
const img = '/images/research/research.jpg'
const ResearchBackground=()=>{
    return(
        <>
           <MotionBackground src={img} alt=" Image">
      <div className="absolute inset-0 flex items-center justify-center text-red-400 text-5xl font-bold">
        <TextGenerateEffect words="Research & Project" />
      </div>
    </MotionBackground>
        </>
    )
}
export default ResearchBackground