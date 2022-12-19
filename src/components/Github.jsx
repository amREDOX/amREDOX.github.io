
import React from "react";

const Github = () => {
  return (
    <div
      name="gitub"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
      ><div>
               <p className="text-4xl font-bold text-center mt-10">
            GitHub <span className="text-violet-600">Calendar</span>
              </p>
               <div className="w-full mt-5">
          <GitHubCalendar
            username="amREDOX"
            blockSize={20}
            blockMargin={5}
            fontSize={18}
          />
              </div>
               <div>
          <p className="text-4xl font-bold text-center mt-10">
            GitHub <span className="text-violet-600">Stats</span>
          </p>
              </div>
              <div className="w-full md:grid md:grid-cols-2 md:auto-rows-auto gap-x-5 gap-y-5 mt-5">
          
              </div>
              <div>
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=avinashpatel15&theme=radical"
              alt="Github Streak"
            />
              </div>
               <div>
            <img
              src="https://github-readme-stats.vercel.app/api?username=avinashpatel15&theme=radical&count_private=true&show_icons=true"
              alt="github stats"
            />
              </div>
                <div>
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=avinashpatel15&theme=radical"
              alt=""
            />
              </div>
              </div>
          
             
          
              
      
    </div>
  );
};

          export default Github;
          
         

   


          
     
        
        
        
         
        

