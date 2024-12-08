import PdfViewer from "./PdfViewer";
import EducationBackground from "./EducationBackground";
import EducationDetails from "./EducationDetails";

const Education = () => {
  return (
    <div className="flex flex-col">
      <div className="relative w-full h-screen ">
        <EducationBackground />
      </div>
      <div className="w-full">
        <EducationDetails />
      </div>
      <div>
        <PdfViewer url={"/images/education/cv.pdf"} />
      </div>
    </div>
  );
};

export default Education;
