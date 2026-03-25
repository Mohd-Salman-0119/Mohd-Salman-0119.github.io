import React from "react";

const GitStats = () => {
  return (
    <div className="my-12 md:my-24">
      <div className="mb-12">
        <h1 className="text-center text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-accent mb-4">GitHub Activity</h1>
        <p className="text-center text-lg md:text-xl md:w-[90%] m-auto text-slate-300 leading-relaxed">
          My GitHub journey showcasing consistent contributions and development growth
        </p>
      </div>
      <div className="glass border border-glass flex flex-col gap-6 justify-center items-center md:p-8 p-6 rounded-glass transition-all duration-300 hover:shadow-glow mt-8 react-activity-calendar">
        <div className="grid grid-cols-2 justify-center border-b border-glass w-full">
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
          <img
            id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com?user=Mohd-Salman-0119&theme=transparent&hide_border=true"
            alt="GitHub Streak"
          />
        </div>
      </div>
    </div>
  );
};

export default GitStats;
