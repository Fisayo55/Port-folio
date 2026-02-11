const TechnologyCard = ({ icon: Icon, name, category, color }) => {
  return (
    <div className="group relative flex flex-col items-center justify-between p-8 rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900/50 to-gray-900/30 hover:from-gray-800/60 hover:to-gray-800/40 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1 min-h-[200px]">
      <div className="flex items-center justify-center w-20 h-20 mb-6 transition-all duration-300 group-hover:scale-110">
        <div
          className="text-6xl flex items-center justify-center"
          style={{ color: color }}
        >
          <Icon />
        </div>
      </div>
      <div className="text-center space-y-1">
        <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
          {name}
        </h3>

        {category && (
          <span className="text-xs text-gray-500 font-medium">{category}</span>
        )}
      </div>

      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-transparent rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default TechnologyCard;
