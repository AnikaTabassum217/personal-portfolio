"use client";
import EducationBackground from "./EducationBackground";
import EducationDetails from "./EducationDetails";
import PdfViewer from "./PdfViewer"


const Education = () => {
    return (
        <>
          

<div className="flex flex-col gap-28">
      {/* Background Section */}
      <div className="relative w-full h-screen ">
        <EducationBackground />
      </div>

      {/* Details Section */}
      <div className="w-full">
        <EducationDetails />
      </div>

      <div>
      <PdfViewer url={"/images/education/cv.pdf"} />    
        </div>
    </div>
          
        </>
    )
}
export default Education