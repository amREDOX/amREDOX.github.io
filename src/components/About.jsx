import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
           A self-motivated, hard-working, and ambitious Web Developer with proficiency
in HTML, CSS, and Javascript. Problem-solving mindset and the ability to perform
well in collaboration. 1300+ hours of coding and hands-on experience in
developing 4 fully functional websites. Looking forward to working as an
accountable and competent employee in an exciting tech company.
        </p>

       
      </div>
    </div>
  );
};

export default About;
