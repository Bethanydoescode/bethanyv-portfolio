import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React", "Javascript", "Tailwind", "Vue", "Git"];
  const backendSkills = [
    ".NET/C#",
    "Node.js",
    "Python",
    "SQL",
    "RESTful API",
    "AWS",
  ];
  const aiSkills = ["ClaudeAI", "Workato", "n8n", "Zapier", "Boomi", "Bolt"];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        {/* about */}
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-pink-500 to-pink-900 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-grey-300 mb-6">
              I'm a full-stack software engineer skilled in .NET, C#, SQL, and
              modern JavaScript frameworks. Experienced in integrating AI to
              streamline workflows and enhance software functionality, with a
              focus on clean, efficient, and maintainable solutions.
            </p>
            {/* Skills */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-pink-600/10 text-pink-600 py-1 px-3 rounded-full text-sm hover:bg-pink-600/20 hover:shadow-[0_2px_8px_rgba(170, 51, 106, 0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-pink-600/10 text-pink-600 py-1 px-3 rounded-full text-sm hover:bg-pink-600/20 hover:shadow-[0_2px_8px_rgba(170, 51, 106, 0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Automation and AI</h3>
                <div className="flex flex-wrap gap-2">
                  {aiSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-pink-600/10 text-pink-600 py-1 px-3 rounded-full text-sm hover:bg-pink-600/20 hover:shadow-[0_2px_8px_rgba(170, 51, 106, 0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Education and experience */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                  Education and Certifications
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    <strong>B.S. in Biology</strong> - University of Tennessee
                    (2015-2019)
                  </li>
                  <li>
                    <strong>Full Stack Development Certificate</strong> - Sabio
                    (2023)
                  </li>
                  <li>
                    <strong>
                      Associates and Professional Integration Developer
                    </strong>
                    - Boomi (2025)
                  </li>
                  <li>
                    <strong>Automation Pro I, II, III</strong> - Workato (2025)
                  </li>
                  <li>
                    <strong>n8n Automation Developer</strong> - n8n (2025)
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="font-semibold">
                      Fullstack Engineer at Webify Media Marketing
                      (2024-Present)
                    </h4>
                    <p>
                      I build and maintain custom websites and web applications,
                      integrating front-end and back-end technologies to deliver
                      scalable, high-performance solutions focused on usability,
                      SEO, and business growth.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      Fullstack Engineer at Monefi (2023)
                    </h4>
                    <p>
                      Contributed to the development of Monefi, an AI-powered
                      lending platform, by building full-stack features
                      including database design, APIs, front-end interfaces,
                      form validation, and version-controlled workflows while
                      following agile development practices to deliver scalable,
                      user-focused solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
