const About = () => {
  return (
    <div className="p-8 space-y-6">
      {/* Section Header */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          ABOUT ME
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
      </div>

      {/* Content */}
      <div className="space-y-4 text-gray-300 leading-relaxed">
        <p>
          Hi! I am{" "}
          <span className="text-white font-semibold">Adeyekun Oluwafisayo</span>
          , a passionate Frontend Developer with{" "}
          <span className="text-blue-400 font-semibold">
            4 years of experience
          </span>{" "}
          building modern, fully responsive web applications.
        </p>

        <p>
          I specialize in crafting clean, user-focused digital
          experiences—transforming designs and ideas into intuitive,
          high-performing interfaces. I work primarily with{" "}
          <span className="text-purple-400 font-medium">React</span>,{" "}
          <span className="text-purple-400 font-medium">Next.js</span>,{" "}
          <span className="text-purple-400 font-medium">TypeScript</span>, and
          modern CSS, focusing on accessibility, responsiveness, and
          performance.
        </p>

        <p>
          While my strength lies on the frontend, I collaborate seamlessly with
          back-end systems and APIs to deliver scalable, real-world solutions.
        </p>

        <p>
          I love turning ideas into functional products—web apps, dashboards,
          landing pages, and interactive user interfaces—that feel{" "}
          <span className="text-blue-400 italic">smooth</span>,{" "}
          <span className="text-purple-400 italic">purposeful</span>, and{" "}
          <span className="text-pink-400 italic">engaging</span>.
        </p>

        <div className="pt-4 border-l-4 border-blue-500 pl-4 bg-blue-500/5 rounded-r">
          <p className="text-gray-200 italic font-medium">
            If you are looking for clean code, thoughtful UI, and great user
            experiences, I am always open to exciting collaborations and
            impactful projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
