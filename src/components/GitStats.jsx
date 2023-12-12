import React from "react";

const GitStats = () => {
  return (
    <div className="my-6 md:my-20">
      <div>
        <h1 className="text-center text-2xl md:text-4xl">GitHub Activity</h1>
        <p className="text-center text-sm md:text-xl md:w-[90%] m-auto mt-2 md:mt-4">
          Showcasing Proactive Engagement: A Dynamic Snapshot of My GitHub
          Journey
        </p>
      </div>
      <div className="border-t border-b flex flex-col gap-3 justify-center items-center border-blue-900 hover:border-gray-500 md:p-8 p-3 rounded-md transition-all duration-1000 ease-in-out shadow-sm shadow-blue-900 group mt-5">
        <div className="grid grid-cols-2 justify-center border-b border-blue-900">
          <div>
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Mohd-Salman-0119&layout=compact&theme=transparent&hide_border=true"
              alt=""
              id="github-top-langs"
            />
          </div>
          <div>
            <img
              src="https://github-readme-stats.vercel.app/api?username=Mohd-Salman-0119&show_icons=true&theme=transparent&hide_border=true"
              id="github-stats-card"
              alt=""
              
            />
          </div>
        </div>

        <div>
          <a href="https://git.io/streak-stats">
            <img
              id="github-streak-stats"
              src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Mohd-Salman-0119&theme=transparent"
              alt="GitHub Streak"
              className=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GitStats;
