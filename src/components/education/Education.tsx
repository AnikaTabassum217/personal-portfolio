import EducationBackground from "./EducationBackground";
import EducationDetails from "./EducationDetails";

const Education = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="relative w-full h-screen ">
        <EducationBackground />
      </div>
      <div className="w-full">
        <EducationDetails />
      </div>

      <div className="container mx-auto">
        <iframe
          src="/images/education/cv.pdf"
          width={1000}
          height={1000}
          className="h-screen "
        />
      </div>
    </div>
  );
};

export default Education;
