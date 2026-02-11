const Badge = ({ children }) => {
  return (
    <div className="flex flex-row items-center gap-2 px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-full backdrop-blur-sm hover:border-gray-700 hover:bg-gray-800/50 transition-all duration-300 group">
      <div className="bg-green-500 rounded-full w-2 h-2 animate-pulse group-hover:bg-green-400"></div>
      <span className="text-sm text-gray-300 font-medium">{children}</span>
    </div>
  );
};

export default Badge;
