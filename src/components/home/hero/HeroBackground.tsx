'use client'
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import MotionBackground from "@/components/shared/motion-background/MotionBackground";

const img = '/images/hero/hero.jpg'

const HeroBackground = () => {
    return (
        <>
          
    <MotionBackground src={img} alt="Hero Image">
      <div className="absolute inset-0 flex items-center justify-center text-red-400 text-5xl font-bold font-serif">
        <TextGenerateEffect words="Web Developer" />
      </div>
    </MotionBackground>
        </>
    )
}
export default HeroBackground