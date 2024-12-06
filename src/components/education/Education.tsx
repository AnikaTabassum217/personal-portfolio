"use client";
import EducationBackground from "./EducationBackground";
import EducationDetails from "./EducationDetails";


const Education = () => {
    return (
        <>
          
          {/* <EducationBackground/>
          <EducationDetails/> */}

<div className="flex flex-col gap-28">
      {/* Background Section */}
      <div className="relative w-full h-screen ">
        <EducationBackground />
      </div>

      {/* Details Section */}
      <div className="w-full">
        <EducationDetails />
      </div>
    </div>
          
        </>
    )
}
export default Education