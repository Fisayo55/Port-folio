"use client";
import Badge from "./Badge";

const Introduction = () => {
  return (
    <div className="flex justify-center items-start flex-col gap-6 p-8 max-w-lg">
      {/* Greeting */}
      <div className="space-y-2">
        <h1 className="text-xl md:text-2xl text-gray-300 font-light">
          <span className="font-mono text-blue-400 font-bold">&lt;/&gt;</span>{" "}
          Hey there, I&apos;m{" "}
          <span className="text-white font-semibold">Oluwafisayo!</span>{" "}
          <span className="inline-block animate-wave">👋</span>
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
          Bringing your ideas to reality.
        </h2>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-3">
        <Badge>Front-End Developer</Badge>
        <Badge>Web Developer</Badge>
        <Badge>React Developer</Badge>
      </div>

      {/* Divider */}
      <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>

      {/* Tagline/Description */}
      <div className="text-gray-400 text-sm md:text-base leading-relaxed border-l-2 border-gray-700 pl-4 italic">
        Turning ideas into reality means converting concepts and designs into
        functional, user-friendly applications through thoughtful planning,
        problem-solving, and clean, efficient code.
      </div>
      <button
        onClick={() => {
          const link = document.createElement("a");
          link.href = "/portfolio.pdf";
          link.download = "Oluwafisayo_Portfolio.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        Download Resume
      </button>
    </div>
  );
};

export default Introduction;
