import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-pink-200 to-pink-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>

            <a
              href="https://github.com/Bethanydoescode"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-300 hover:text-pink-100 transition flex items-center gap-2 text-sm"
            >
              View More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303..."></path>
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-900/30 hover:shadow-[0_2px_8px_rgba(255, 182, 193, 0.4)] transition">
              <h3 className="text-xl font-bold mb-4">
                WebifyMediaMarketing.com
              </h3>
              <p className="text-gray-400 mb-4">
                Webify Media Marketing is a custom-built marketing website
                focused on performance, SEO, and conversion optimization,
                featuring a modern design, responsive layout, and content
                structure built to support business growth and client
                acquisition.
              </p>
              <div className="flex flex-wrap gap-2 mb-4 w-full max-w-md">
                {["Wordpress", "PHP", "APIs", "SEOs", "Hosting"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-pink-400/10 text-pink-400 py-1 px-3 rounded-full text-sm hover:bg-pink-600/20 hover:shadow-[0_2px_8px_rgba(170, 51, 106, 0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://webifymediamarketing.com"
                  className="text-pink-200 hover:text-pink-50 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-900/30 hover:shadow-[0_2px_8px_rgba(255, 182, 193, 0.4)] transition">
              <h3 className="text-xl font-bold mb-4">GolfVillaDiamante.com</h3>
              <p className="text-gray-400 mb-4">
                GolfVillaDiamante.com is a custom WordPress website featuring
                AI-powered calendar scheduling and secure Stripe payments,
                designed to streamline bookings, improve user experience, and
                support business growth through automation and performance
                optimization.
              </p>
              <div className="flex flex-wrap gap-2 mb-4 w-full max-w-md">
                {["WP", "PHP", "Shortcodes", "APIs", "Stripe"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-pink-400/10 text-pink-400 py-1 px-3 rounded-full text-sm hover:bg-pink-600/20 hover:shadow-[0_2px_8px_rgba(170, 51, 106, 0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://golfvilladiamante.com"
                  className="text-pink-200 hover:text-pink-50 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-900/30 hover:shadow-[0_2px_8px_rgba(255, 182, 193, 0.4)] transition">
              <h3 className="text-xl font-bold mb-4">VegasTreehouse.com</h3>
              <p className="text-gray-400 mb-4">
                Vegas Treehouse is a custom WordPress website built for a
                cannabis dispensary, featuring Dutchie integration for online
                ordering, menu synchronization, and seamless checkout. The site
                is optimized for performance, SEO, and local discovery,
                delivering a fast, compliant, and user-friendly shopping
                experience that supports both customer engagement and business
                operations.
              </p>
              <div className="flex flex-wrap gap-2 mb-4 w-full max-w-md">
                {["WP", "PHP", "Ecommerce", "APIs", "Dutchie", "SEOs"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-pink-400/10 text-pink-400 py-1 px-3 rounded-full text-sm hover:bg-pink-600/20 hover:shadow-[0_2px_8px_rgba(170, 51, 106, 0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://vegastreehouse.com"
                  className="text-pink-200 hover:text-pink-50 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-900/30 hover:shadow-[0_2px_8px_rgba(255, 182, 193, 0.4)] transition">
              <h3 className="text-xl font-bold mb-4">Monefi</h3>
              <p className="text-gray-400 mb-4">
                Monefi is an AI-driven lending platform that connects borrowers
                and lenders through an intuitive loan request and application
                process. I contributed to the full-stack development, building
                MS SQL tables, stored procedures, and C# backend services, as
                well as API controllers to support seamless data flow. The
                project also involved integrating the front-end with back-end
                services via RESTful APIs, ensuring responsive and reliable
                functionality. Agile methodologies, Git version control, and
                code reviews were applied throughout to maintain code quality
                and streamline collaboration.
              </p>
              <div className="flex flex-wrap gap-2 mb-4 w-full max-w-md">
                {[
                  "React.js",
                  "C#",
                  ".NET",
                  "MS SQL",
                  "Javascript",
                  "Full Stack Engineering",
                  "Git",
                  "Azure",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-pink-400/10 text-pink-400 py-1 px-3 rounded-full text-sm hover:bg-pink-600/20 hover:shadow-[0_2px_8px_rgba(170, 51, 106, 0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Bethanydoescode/ArticlesBackup"
                  className="text-pink-200 hover:text-pink-50 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
