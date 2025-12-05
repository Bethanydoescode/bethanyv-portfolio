import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            {" "}
            Bethany<span className="text-pink-300">.doescode</span>{" "}
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-grey-300 hover:text-pink-300 transition-colors"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-grey-300 hover:text-pink-300 transition-colors"
            >
              About
            </a>

            <a
              href="#projects"
              className="text-grey-300 hover:text-pink-300 transition-colors"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-grey-300 hover:text-pink-300 transition-colors"
            >
              Contact
            </a>
            <div className="flex gap-4">
              {/* GitHub */}
              <a
                href="https://github.com/Bethanydoescode"
                target="_blank"
                rel="noreferrer"
                className="text-gray-800 hover:text-pink-500 transition duration-200 text-2xl"
                title="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/bethanyvmills/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-800 hover:text-pink-500 transition duration-200 text-2xl"
                title="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
