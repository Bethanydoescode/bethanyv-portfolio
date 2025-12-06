import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-pink-200 to-pink-500 bg-clip-text text-transparent leading-right">
            Hi, I'm Bethany
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            Full Stack Engineer, Automation, AI
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-pink-300 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255, 182, 193, 0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-pink-300/50 text-pink-300 py-3 px-6 rounded font-medium transition-all duration-200 overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255, 182, 193, 0.2)] hover:bg-pink-300/20"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
