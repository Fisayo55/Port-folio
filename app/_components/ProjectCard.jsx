// const ProjectCard = ({ image, title, description, stack }) => {
//   return (
//     <div>
//       <div>{image}</div>
//       <div>{title}</div>
//       <div>{description}</div>
//       <div>{stack}</div>
//       <div>
//         <button>Source</button>
//         <button>Demo</button>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;

import Image from "next/image";

const ProjectCard = ({
  image,
  title,
  description,
  stack,
  sourceUrl,
  demoUrl,
}) => {
  return (
    <div className="group relative flex flex-col rounded-lg border border-gray-800 bg-gray-900/30 overflow-hidden hover:border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
      {/* Project Image */}
      <div className="relative w-full h-48 md:h-56 bg-gray-800 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-300"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 space-y-4">
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed flex-1">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {stack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-2">
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 text-center text-sm font-medium text-white bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 hover:border-gray-600 transition-all duration-300"
          >
            Source Code
          </a>
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 text-center text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-500/20"
          >
            Live Demo
          </a>
        </div>
      </div>

      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default ProjectCard;
