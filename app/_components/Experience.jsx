// import ExperienceCard from "./ExperienceCard";

// const Experience = () => {
//   return (
//     <div>
//       <div className="p-8 space-y-6">
//         {/* Section Header */}
//         <div className="space-y-2">
//           <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//             Experience
//           </h1>
//           <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
//         </div>
//       </div>
//       <div className="space-y-4 text-gray-300 leading-relaxed">
//         <ExperienceCard
//           year="2022 - Present"
//           company="Freelance"
//           tag="Frontend Developer"
//           description="Architected and delivered high-performance, responsive web applications and e-commerce interfaces using Next.js, Tailwind CSS, and TypeScript. Led frontend development across the full project lifecycle—from client requirements gathering and UI planning to implementation, optimization, deployment support, and iteration. Specialized in building SEO-optimized, accessible, and visually modern user interfaces that prioritize performance and usability. Maintained consistent client satisfaction through clear communication, rapid iteration, and reliable delivery of polished frontend solutions."
//         />
//       </div>
//     </div>
//   );
// };

// export default Experience;

import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="p-8 space-y-6">
      {/* Section Header */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Experience
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
      </div>

      {/* Experience Cards */}
      <div className="space-y-6 pt-4">
        <ExperienceCard
          year="2025 - present"
          company="DJMC Events/Cosplayathon"
          tag="Frontend Developer"
          description="Architected and delivered high-performance, responsive web applications and e-commerce interfaces using Next.js, Tailwind CSS, and TypeScript. Led frontend development across the full project lifecycle—from client requirements gathering and UI planning to implementation, optimization, deployment support, and iteration. Specialized in building SEO-optimized, accessible, and visually modern user interfaces that prioritize performance and usability. Maintained consistent client satisfaction through clear communication, rapid iteration, and reliable delivery of polished frontend solutions."
        />
        <ExperienceCard
          year="2024 - 2025"
          company="Changee"
          tag="Frontend Developer"
          description="Architected and delivered high-performance, responsive web applications and e-commerce interfaces using Next.js, Tailwind CSS, and TypeScript. Led frontend development across the full project lifecycle—from client requirements gathering and UI planning to implementation, optimization, deployment support, and iteration. Specialized in building SEO-optimized, accessible, and visually modern user interfaces that prioritize performance and usability. Maintained consistent client satisfaction through clear communication, rapid iteration, and reliable delivery of polished frontend solutions."
        />
        <ExperienceCard
          year="2022 - Present"
          company="Freelance"
          tag="Frontend Developer"
          description="Architected and delivered high-performance, responsive web applications and e-commerce interfaces using Next.js, Tailwind CSS, and TypeScript. Led frontend development across the full project lifecycle—from client requirements gathering and UI planning to implementation, optimization, deployment support, and iteration. Specialized in building SEO-optimized, accessible, and visually modern user interfaces that prioritize performance and usability. Maintained consistent client satisfaction through clear communication, rapid iteration, and reliable delivery of polished frontend solutions."
        />
      </div>
    </div>
  );
};

export default Experience;
