import About from "./_components/About";
import ContactForm from "./_components/Contact";
import Experience from "./_components/Experience";
import Introduction from "./_components/Introduction";
import Project from "./_components/Project";
import Technologies from "./_components/Technologies";

const page = () => {
  return (
    <div className="text-white flex flex-col lg:flex-row lg:justify-between items-start mt-4 gap-4 px-4 lg:px-8">
      <div className="w-full lg:w-1/2 lg:sticky lg:top-4 lg:self-start">
        <Introduction />
      </div>
      <div className=" w-full lg:w-1/2">
        <About />
        <Experience />
        <Project />
        <Technologies />
        <ContactForm />
      </div>
    </div>
  );
};

export default page;
