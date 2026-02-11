// const ExperienceCard = ({ year, company, tag, description }) => {
//   return (
//     <div>
//       <div>{year}</div>
//       <div>
//         <h1>{company}</h1>
//         <h2>{tag}</h2>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// };

// export default ExperienceCard;

const ExperienceCard = ({ year, company, tag, description }) => {
  return (
    <div className="group relative flex flex-col md:flex-row gap-4 md:gap-6 p-6 rounded-lg border border-gray-800 bg-gray-900/30 hover:bg-gray-800/50 hover:border-gray-700 transition-all duration-300">
      {/* Year */}
      <div className="md:w-32 flex-shrink-0">
        <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full">
          {year}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 space-y-3">
        {/* Company Name */}
        <h1 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
          {company}
        </h1>

        {/* Tag/Position */}
        <h2 className="text-base md:text-lg font-medium text-purple-400">
          {tag}
        </h2>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed text-sm md:text-base">
          {description}
        </p>
      </div>

      {/* Decorative accent line */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-l-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default ExperienceCard;
