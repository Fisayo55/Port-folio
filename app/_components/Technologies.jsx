import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiStyledcomponents,
  SiTypescript,
  SiSupabase,
} from "react-icons/si";
import TechnologyCard from "./TechnologyCard";

const TechnologiesPreview = () => {
  const technologies = [
    { icon: FaHtml5, name: "HTML5", category: "Markup", color: "#E34F26" },
    { icon: FaCss3Alt, name: "CSS3", category: "Styling", color: "#1572B6" },
    {
      icon: FaJs,
      name: "JavaScript",
      category: "Language",
      color: "#F7DF1E",
    },
    {
      icon: FaReact,
      name: "React.js",
      category: "Framework",
      color: "#61DAFB",
    },
    {
      icon: SiNextdotjs,
      name: "Next.js",
      category: "Framework",
      color: "#FFFFFF",
    },
    {
      icon: SiTailwindcss,
      name: "Tailwind CSS",
      category: "Styling",
      color: "#06B6D4",
    },
    {
      icon: SiStyledcomponents,
      name: "Styled Components",
      category: "Styling",
      color: "#DB7093",
    },
    {
      icon: FaGitAlt,
      name: "Git & Version Control",
      category: "Tools",
      color: "#F05032",
    },
    {
      icon: SiSupabase,
      name: "Supabase",
      category: "Backend",
      color: "#3ECF8E",
    },
    {
      icon: SiTypescript,
      name: "TypeScript",
      category: "Language",
      color: "#3178C6",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Section Header */}
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technologies
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          <p className="text-gray-400 text-sm mt-4">
            Hover over each card to see the interactive effects!
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 pt-4">
          {technologies.map((tech, index) => (
            <TechnologyCard
              key={index}
              icon={tech.icon}
              name={tech.name}
              category={tech.category}
              color={tech.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologiesPreview;
