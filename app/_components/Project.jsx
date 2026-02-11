import ProjectCard from "./ProjectCard";
import pizzaapp from "../../assets/pizza-app.png";
import recipeapp from "../../assets/recipe-app.png";
import trackerapp from "../../assets/tracker-app.png";

const Project = () => {
  return (
    <div className="p-8 space-y-6">
      {/* Section Header */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Projects
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
      </div>
      <ProjectCard
        image={pizzaapp}
        title="Fast React Pizza co."
        description="A pizza ordering web app that allows users to place orders, track their delivery in real time, and view their previous orders for quick reordering and order history management."
        stack={["Next.js", "React", "Tailwind CSS", "Data Fetching"]}
        sourceUrl="https://github.com/Fisayo55/Fast-React-pizza/tree/master"
        demoUrl="https://fast-react-app-aof.netlify.app/"
      />

      <ProjectCard
        image={recipeapp}
        title="Forkify:The Recipe app."
        description="A recipe app that lets users browse and search recipes, view detailed cooking instructions, and save their favorite recipes for easy access later."
        stack={["HTML", "Vanilla CSS", "JavaScript"]}
        sourceUrl="https://github.com/Fisayo55/forkify-course-video"
        demoUrl="https://forkify-recipe-fisayo.netlify.app/"
      />

      <ProjectCard
        image={trackerapp}
        title="Expense Tracker"
        description="An expense tracking application designed to help users manage finances by logging transactions, organizing expenses, and analyzing spending patterns."
        stack={["React", "Vanilla CSS"]}
        sourceUrl="https://github.com/Fisayo55/React-Tracking-Expenses/tree/master"
        demoUrl="https://aof-expense-tracker.netlify.app/"
      />
    </div>
  );
};

export default Project;
