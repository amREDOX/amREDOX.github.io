import React from "react";
import pr1 from "../assets/portfolio/Screenshot (587).png";
import pr2 from "../assets/portfolio/Screenshot (588).png";
import pr3 from "../assets/portfolio/Screenshot (589).png";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: pr1,
      des:"ji",
     net:"https://skin-store-clone-three.vercel.app/",
      git:"https://github.com/stormyvikrant/permissible-jump-1162"
    },
     {
      id: 5,
       src: pr2,
       des:"hi",
      net:"https://incandescent-dusk-dc6fe6.netlify.app/home.html",
      git:"https://github.com/PriyanshuPatil/native-order-609"
    },
    {
      id: 2,
      src: pr3,
      des:"hi",
      net:"https://sweet-dodol-129dd9.netlify.app/",
      git:"https://github.com/amREDOX/mountainous-push-1678"
    },
    // {
    //   id: 3,
    //   src: navbar,
    // },
    // {
    //   id: 4,
    //   src: reactSmooth,
    // },
   
    // {
    //   id: 6,
    //   src: reactWeather,
    // },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,net,git }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={net}> Demo</a>
                 
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                   <a href={git}> Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
